import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ChatWindow from "./Chatwindow";
import { Flex, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

function JoinRoomOrChatwindow() {
  const { id } = useParams<{ id: string }>();

  const [content, setContent] = React.useState<string | React.ReactNode>("");

  useEffect(() => {
    if (!id) {
      setContent("Please choose a room");
    } else {
      setContent(<ChatWindow />);
    }
  }, [setContent, id]);

  return (
    <Flex
      /*  h="100vh" */ className="JoinRoomOrChatwindow"
      align={"stretch"}
      justify={"center"}
      h={"100%"}
    >
      <Text
        ml={!id ? "xl" : "none"}
        h={"100%"}
        /* size={!id ? "xl" : ""}  */ className="TextContent"
      >
        {content}
      </Text>
    </Flex>
  );
}

export default JoinRoomOrChatwindow;
