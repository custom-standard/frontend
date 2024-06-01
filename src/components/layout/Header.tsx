import React from "react";
import CustomButton from "../button/CustomButton";
import {
  AlertIcon,
  Avatar,
  Box,
  Flex,
  Icon,
  Image,
  List,
  Text,
} from "@chakra-ui/react";
import logo from "../../assets/image/logo.png";
import { useNavigate } from "react-router-dom";
import { BellIcon, ChatIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import Profile from "../user/Profile";

export default function Header() {
  const navigate = useNavigate();

  return (
    <Flex
      top="0"
      width="100%"
      position="sticky"
      boxShadow="0px 0px 20px 0px rgba(0, 0, 0, 0.2)"
      backgroundColor="white"
      py={4}
      justifyContent="center"
    >
      <Flex
        width="100%"
        maxWidth="1200px"
        justifyContent="space-between"
        alignItems="center"
      >
        <Flex alignItems="center" gap={10}>
          <Image
            src={logo}
            alt="logo"
            h="54px"
            onClick={() => navigate("/")}
            _hover={{
              cursor: "pointer",
            }}
          />
          <Flex gap={6}>
            <Link to={"/"}>작품</Link>
            <Link to={"/"}>리퀘스트</Link>
            <Link to={"/"}>아티스트</Link>
          </Flex>
        </Flex>
        <Flex alignItems="center" gap={2}>
          <Profile size="sm" username="김민형" />
          <Flex alignItems="center">
            <BellIcon boxSize={8} color="primary.600" />
            {/* TODO: 새로운 알람 표시 */}
            <Box
              boxSize="10px"
              position="relative"
              right="14px"
              top="-4px"
              borderRadius="50%"
              backgroundColor="red.500"
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
