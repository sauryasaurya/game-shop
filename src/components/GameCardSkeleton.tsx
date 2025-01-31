import { Card, Skeleton } from "@chakra-ui/react";
import React from "react";
import { SkeletonText } from "./ui/skeleton";

const GameCardSkeleton = () => {
  return (
    <Card.Root width={350}>
      <Skeleton height={200} />
      <Card.Body>
        <SkeletonText />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCardSkeleton;
