import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  BrowserRouter,
  Routes,
} from "react-router-dom";

import { ApolloProvider } from "@apollo/client";
import { client } from "./apolloClient";
import Home from "./pages/Home.tsx";

import MainLayout from "./layouts/MainLayout.tsx";
import Header from "./components/Header.tsx";
import { Flex } from "@mantine/core";
import ProfileSettings from "./components/ProfileSettings.tsx";
import Sidebar from "./components/Sidebar.tsx";
import AuthOverlay from "./components/AuthOverlay.tsx";
import About from "./pages/About.tsx";
//old
/* const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/chatrooms/:id",
      },
    ],
  },
  {
    path: "about",
    element: <About />,
  },
]); */

/* const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="chatrooms/:id" element={<Home />} />
    </Route>
  )
);
 */
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      {/*  <RouterProvider router={router} /> */}
      <BrowserRouter>
        {/*  <div
          style={{   position: "absolute", left: "0px"  width: "100vw" }}
        > */}
        <Header />
        <Flex
          direction="column"
          style={{ flex: 1, position: "absolute" /*  width: "80vw" */ }}
        >
          <Flex
            direction="row"
            style={{ flex: 1, position: "relative", width: "100vw" }}
          >
            <ProfileSettings />
            <AuthOverlay />
            {/* <Sidebar /> */}
            {/*  <div style={{ position: "absolute", left: "0px" }}> */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="chatrooms/:id" element={<Home />} />
            </Routes>
            {/*  </div> */}
          </Flex>
        </Flex>
        {/*    </div> */}
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);
