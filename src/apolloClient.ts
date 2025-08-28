import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  gql,
  Observable,
  ApolloLink,
  split,
} from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { createUploadLink } from "apollo-upload-client";
import { getMainDefinition } from "@apollo/client/utilities";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import { useUserStore } from "./stores/userStore";
import { onError } from "@apollo/client/link/error";

/* console.log(
  " import.meta.env.VITE_GRAPHQL_ENDPOINT: ",
  import.meta.env.VITE_GRAPHQL_ENDPOINT
); */
const FRONTEND_URL = import.meta.env.VITE_GRAPHQL_ENDPOINT; // || "http://localhost:3000/graphql";
const WS_URL = import.meta.env.VITE_WS_ENDPOINT;
console.log("WS_URL: ", WS_URL);

loadErrorMessages();
loadDevMessages();

async function refreshToken(client: ApolloClient<NormalizedCacheObject>) {
  try {
    const { data } = await client.mutate({
      //in fact it returns not refreshToken but new AccessToken
      mutation: gql`
        mutation RefreshToken {
          refreshToken
        }
      `,
    });
    console.log("data from refreshToken: ", data);
    const newAccessToken = data?.refreshToken;
    if (!newAccessToken) {
      throw new Error("New access token not received.");
    }
    return `Bearer ${newAccessToken}`;
  } catch (err) {
    throw new Error("Error getting new access token.");
  }
}

let retryCount = 0;
const maxRetry = 3;

const errorLink = onError(({ graphQLErrors, operation, forward }) => {
  for (const err of graphQLErrors!) {
    console.log("err from errorLink: ", err);
    if (err.extensions.code === "UNAUTHENTICATED" && retryCount < maxRetry) {
      console.log("refreshing in errorLink: ");
      retryCount++;
      return new Observable((observer) => {
        refreshToken(client)
          .then((token) => {
            console.log("token from refreshToken: ", token);
            operation.setContext((previousContext: any) => ({
              headers: {
                ...previousContext.headers,
                authorization: token,
              },
            }));
            const forward$ = forward(operation);
            forward$.subscribe(observer);
          })
          .catch((error) => observer.error(error));
      });
    }

    if (err.message === "Refresh token not found in cookie by server") {
      console.log("refresh token not found in cookie by server!");
      useUserStore.setState({
        id: undefined,
        fullname: "",
        email: "",
      });
    }
  }
});

const uploadLink = createUploadLink({
  uri: FRONTEND_URL,
  credentials: "include",
  headers: {
    "apollo-require-preflight": "true",
  },
});

const wsLink = new WebSocketLink({
  uri: WS_URL,
  options: {
    reconnect: true,
    connectionParams: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  },
});

const link = split(
  // Split based on operation type
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  ApolloLink.from([errorLink, uploadLink])
);

export const client = new ApolloClient({
  uri: FRONTEND_URL,
  cache: new InMemoryCache({}),
  credentials: "include",
  headers: {
    "Content-Type": "application/json",
  },
  link: link,
});
