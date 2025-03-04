import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" borderRadius={5} />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
