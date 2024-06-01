import { Flex, Link, Text } from "@chakra-ui/react";
import React from "react";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <Flex
      backgroundColor="tertiary.200"
      w="100%"
      minHeight="200px"
      py={10}
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        textColor="tertiary.900"
        fontSize="20px"
        alignItems="center"
        gap={2}
      >
        <FaGithub />
        <Text>Github :: </Text>
        <Link
          href="https://github.com/rnignon"
          isExternal
          textColor="tertiary.800"
        >
          rnignon
        </Link>
      </Flex>
    </Flex>
  );
}
