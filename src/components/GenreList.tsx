import useGenres, { Genre } from "@/hooks/useGenres";
import React from "react";

const GenreList = () => {
  const { data: genres } = useGenres();

  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
