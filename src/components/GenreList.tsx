import useGenres, { Genre } from "@/hooks/useGenres";
import { getCroppedImageUrl } from "@/services/image-url";
import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import React from "react";

const GenreList = () => {
  const { data: genres, isLoading, error } = useGenres();

  if (isLoading) return <Spinner />;
  if (error) return null;

  return (
    <List.Root listStyleType={"none"}>
      {genres.map((genre) => (
        // <li key={genre.id}>{genre.name}</li>
        <List.Item key={genre.id}>
          <HStack marginY={2}>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              boxSize="40px"
              borderRadius={4}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
