import React from "react";
import MovieCarousel from "./MovieCarousel";
const Shows = ({ category, type, movies, kind }) => {
  return (
    <div>
      <h1 className="text-[#023047] text-2xl font-medium py-4">
        {category} {kind}
      </h1>
      <MovieCarousel movies={movies} type={type} />
    </div>
  );
};

export default Shows;
