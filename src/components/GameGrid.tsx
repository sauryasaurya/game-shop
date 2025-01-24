import apiClient from "@/services/api-client";
import { Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

interface FetchGamesResult {
  count: number;
  results: Game[];
}

interface Game {
  id: number;
  name: string;
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGamesResult>("/gamesx")
      .then((res) => {
        setGames(res.data.results);
        console.log("Games", games);
      })
      .catch((err) => {
        setError(err.message);
        console.log(error);
      });
  }, []);
  return (
    <div>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GameGrid;
