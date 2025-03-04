import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import { ColorModeButton } from "./ui/color-mode";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" borderRadius={5} />
      <SearchInput />
      <ColorModeButton />
    </HStack>
  );
};

export default NavBar;
