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
}

const GenreList = ({ onSelectGenre }: Props) => {
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
