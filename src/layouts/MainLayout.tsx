import { Flex } from "@mantine/core";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import ProfileSettings from "../components/ProfileSettings";
import AuthOverlay from "../components/AuthOverlay";

const MainLayout = () => {
  return (
    <Flex
      direction="column"
      style={
        {
          /* minHeight: "100vh", width: "100vw" */
          /* backgroundColor: "red", */
          /*  marginLeft: -10, */
        }
      }
      className="main-layout"
    >
      <Header />
      <Flex
        direction="column"
        style={{
          flex: 1,
          position: "absolute" /*  width: "80vw" */,
          /*  backgroundColor: "#555", */
        }}
      >
        <Flex
          direction="row"
          style={{
            flex: 1,
            position: "relative",
            /*  width: "100vw", */
            paddingTop: 70,
          }}
        >
          {/* keep global overlays here so they are available on /about too */}
          <ProfileSettings />
          <AuthOverlay />
          {/* content area — give space for header and allow overlays to position relative to viewport */}
          {/*   <Flex style={{ flex: 1, position: "relative", paddingTop: 70 }}> */}
          <Outlet />
          {/*  </Flex> */}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default MainLayout;
