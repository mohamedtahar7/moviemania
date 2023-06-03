"use client";
import React from "react";
import axios from "axios";
import Billboard from "./Billboard";
import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import MovieCarousel from "./MovieCarousel";
const Hero = () => {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  useEffect(() => {
    // fetching data
    axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=3d9cf7d751473d780990124c9d60e416&language=en-US&page=1%27"
      )
      .then((res) => {
        setMovies(res.data.results);
      });
    axios
      .get(
        "https://api.themoviedb.org/3/tv/top_rated?api_key=3d9cf7d751473d780990124c9d60e416&language=en-US&page=1"
      )
      .then((res) => {
        setSeries(res.data.results);
      });
  }, []);
  return (
    <div>
      <Billboard />
      {/* {movies.map((movie, id) => (
            <MovieCard
              title={movie.title}
              key={id}
              img={`https://www.themoviedb.org/t/p/w1280_and_h720_face/${movie.backdrop_path}`}
            />
          ))} */}
      <div className="py-4 px-8">
        <h1 className="text-[#023047] text-2xl font-medium py-4">
          Top Rated Movies
        </h1>
        <MovieCarousel className="mb-10" movies={movies} type="movies" />
        <h1 className="text-[#023047] text-2xl font-medium py-4">
          Top Rated Series
        </h1>
        <MovieCarousel movies={series} type="series" />
      </div>
    </div>
  );
};

export default Hero;
