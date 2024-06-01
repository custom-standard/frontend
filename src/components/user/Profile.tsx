import { Avatar, Flex, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  size: string;
  username: string;
  profileImg?: string;
}

export default function Profile({ size, username, profileImg }: Props) {
  return (
    <Flex alignItems="center" gap={2}>
      <Avatar size={size} name={username} src={profileImg} />
      <Flex gap={1} fontSize={size}>
        <Text as="b">{username}</Text>님
      </Flex>
    </Flex>
  );
}
