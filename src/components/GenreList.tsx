import useGenres, { Genre } from "@/hooks/useGenres";
import { getCroppedImageUrl } from "@/services/image-url";
import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
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
            <Button
              fontSize="lg"
              variant="plain"
              onClick={() => onSelectGenre(genre)}
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
            >
              {genre.name}
            </Button>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
