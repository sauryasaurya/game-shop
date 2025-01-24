import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { ColorModeButton, useColorMode } from "@/components/ui/color-mode";
import { Button, Grid, GridItem, Show } from "@chakra-ui/react";
import { Demo } from "./demo";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

function App() {
  const [count, setCount] = useState(0);
  const { toggleColorMode } = useColorMode();

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        md: `"nav nav" "aside main"`,
      }}
      height="20vh"
      margin={2}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="aside" display={{ base: "none", md: "block" }}>
        Aside
      </GridItem>
      <GridItem area="main">
        <GameGrid />
        <ColorModeButton />
      </GridItem>
    </Grid>
  );
}

export default App;
