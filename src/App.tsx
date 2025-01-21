import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { ColorModeButton, useColorMode } from "@/components/ui/color-mode";
import { Button, Grid, GridItem, Show } from "@chakra-ui/react";
import { Demo } from "./demo";

function App() {
  const [count, setCount] = useState(0);
  const { toggleColorMode } = useColorMode();

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        md: `"nav nav" "aside main"`,
      }}
      height="50vh"
    >
      <GridItem area="nav" bg="coral">
        Nav
      </GridItem>
      <GridItem area="aside" bg="gold" display={{ base: "none", md: "block" }}>
        Aside
      </GridItem>
      <GridItem area="main" bg="dodgerblue">
        Main
        <ColorModeButton />
      </GridItem>
    </Grid>
  );
}

export default App;
