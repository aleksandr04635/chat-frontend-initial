import { Flex } from "@mantine/core";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const MainLayout = () => {
  return (
    <Flex direction="column" style={{ minHeight: "100vh", width: "100%" }}>
      <Header />
      <Flex style={{ flex: 1, position: "relative" }}>
        <Outlet />
      </Flex>
    </Flex>
  );
};

export default MainLayout;
