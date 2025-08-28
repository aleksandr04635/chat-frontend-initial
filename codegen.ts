import { CodegenConfig } from "@graphql-codegen/cli";
import * as dotenv from "dotenv";
// Load environment variables from .env file
dotenv.config();

//const FRONTEND_URL = import.meta.env.VITE_GRAPHQL_ENDPOINT;
const FRONTEND_URL = process.env.VITE_GRAPHQL_ENDPOINT;
console.log("FRONTEND_URL from codegen.ts: ", FRONTEND_URL);

const config: CodegenConfig = {
  schema: FRONTEND_URL, //"http://localhost:3000/graphql",
  documents: ["src/graphql/**/*.ts"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./src/gql/": {
      preset: "client",
      plugins: ["typescript"],
    },
  },
};

export default config;
