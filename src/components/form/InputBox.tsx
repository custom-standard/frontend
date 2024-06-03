import { Input } from "@chakra-ui/react";
import React from "react";

interface Props {
  message: string;
}

export default function InputBox({ message }: Props) {
  return <Input placeholder={message}></Input>;
}
