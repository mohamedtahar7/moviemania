import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "./MovieCard";
const MovieCarousel = ({ movies, type }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1024, min: 640 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 640, min: 480 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 480, min: 0 },
      items: 2,
    },
  };

  return (
    <Carousel className="rounded-lg" responsive={responsive}>
      {movies.map((movie, id) => (
        <MovieCard
          title={movie.title ? movie.title : movie.name}
          key={id}
          id={movie.id}
          img={`https://www.themoviedb.org/t/p/w300_and_h450_face/${movie.poster_path}`}
        />
      ))}
    </Carousel>
  );
};

export default MovieCarousel;
