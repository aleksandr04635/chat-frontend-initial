/* import { Flex } from "@mantine/core";

const MainLayout = ({ children }: { children: React.ReactElement }) => {
  return (
    <Flex>
      <Flex>{children}</Flex>
    </Flex>
  );
};

export default MainLayout; */

/* import { Flex } from "@mantine/core";
import Header from "../components/Header";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex direction="column" style={{ height: "100vh" }}>
      <Header />
      <Flex>{children}</Flex>
    </Flex>
  );
};

export default MainLayout; */
import { Flex } from "@mantine/core";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex
      direction="column"
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <Header />
      <Flex
        style={
          {
            /* flex: 1, */
            /*  position: "relative"  */
          }
        }
      >
        {/*   <Outlet /> */}
        {children}
      </Flex>
    </Flex>
  );
};

export default MainLayout;
