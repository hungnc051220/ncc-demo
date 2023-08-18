import Container from "@/components/container";
import MovieList from "@/components/movie-list";
import React from "react";

const Movies = () => {
  return (
    <div className="pt-24 pb-10">
      <Container>
        <MovieList />
      </Container>
    </div>
  );
};

export default Movies;
