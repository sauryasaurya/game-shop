import { Card, Skeleton } from "@chakra-ui/react";
import React from "react";
import { SkeletonText } from "./ui/skeleton";
import GameCardContainer from "./GameCardContainer";

const GameCardSkeleton = () => {
  return (
    <GameCardContainer>
      <Card.Root width={350}>
        <Skeleton height={200} />
        <Card.Body>
          <SkeletonText />
        </Card.Body>
      </Card.Root>
    </GameCardContainer>
  );
};

export default GameCardSkeleton;
