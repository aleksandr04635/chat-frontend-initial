import React from "react";
import MainLayout from "../layouts/MainLayout";
import Sidebar from "../components/Sidebar";
import ProtectedRoutes from "../components/ProtectedRoutes";
import AuthOverlay from "../components/AuthOverlay";
import ProfileSettings from "../components/ProfileSettings";
import RoomList from "../components/RoomList";
import { Flex } from "@mantine/core";
import AddChatroom from "../components/AddChatroom";
import JoinRoomOrChatwindow from "../components/JoinRoomOrChatwindow";
import MainLayoutHome from "../layouts/MainLayoutHome";

function Home() {
  return (
    <MainLayoutHome>
      <div
        style={{
          position: "absolute",
          /*top: "50px",
          left: 0,
          zIndex: 100,
          width: "100vw", */
        }}
      >
        {/* <AuthOverlay /> */}
        {/*  <ProfileSettings /> */}
        {/*  <Sidebar /> */}
        <ProtectedRoutes>
          <AddChatroom />
          <Flex
            direction={{ base: "column", md: "row" }}
            style={{ marginTop: "80px" }}
          >
            <RoomList />
            <JoinRoomOrChatwindow />
          </Flex>
        </ProtectedRoutes>
      </div>
    </MainLayoutHome>
  );
}

export default Home;

/* import React from "react";
import MainLayout from "../layouts/MainLayout";
import Sidebar from "../components/Sidebar";
import ProtectedRoutes from "../components/ProtectedRoutes";
import AuthOverlay from "../components/AuthOverlay";
import ProfileSettings from "../components/ProfileSettings";
import RoomList from "../components/RoomList";
import { Flex } from "@mantine/core";
import AddChatroom from "../components/AddChatroom";
import JoinRoomOrChatwindow from "../components/JoinRoomOrChatwindow";

function Home() {
  return (
      <MainLayout> 
    <div
      style={{
        position: "absolute",
         width: "100%", 
         height: "100%", 
           backgroundColor: "#a1f2e2",
      }}
    >
      <AuthOverlay />
      <ProfileSettings />
      <Sidebar />
      <ProtectedRoutes>
        <AddChatroom />
        <Flex direction={{ base: "column", md: "row" }}>
          <RoomList />
          <JoinRoomOrChatwindow />
        </Flex>
      </ProtectedRoutes>
    </div>
        </MainLayout> 
  );
}

export default Home;
 */
