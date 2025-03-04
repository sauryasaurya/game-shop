import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score >= 90 ? "green" : score > 80 ? "yellow" : "";
  return (
    <Badge fontSize="14px" paddingX={2} colorPalette={color}>
      {score}
    </Badge>
  );
};

export default CriticScore;
