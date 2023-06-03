"use client";
import React from "react";
import axios from "axios";
import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";
import Shows from "@/components/Shows";
const Movies = () => {
  const [playing, setPlaying] = useState([]);
  const [popular, setPopular] = useState([]);
  const [rated, setRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=3d9cf7d751473d780990124c9d60e416&language=en-US&page=1%27"
      )
      .then((res) => {
        setPlaying(res.data.results);
      });
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=3d9cf7d751473d780990124c9d60e416&language=en-US&page=1%27"
      )
      .then((res) => {
        setPopular(res.data.results);
      });
    axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=3d9cf7d751473d780990124c9d60e416&language=en-US&page=1%27"
      )
      .then((res) => {
        setRated(res.data.results);
      });
    axios
      .get(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=3d9cf7d751473d780990124c9d60e416&language=en-US&page=1%27"
      )
      .then((res) => {
        setUpcoming(res.data.results);
      });
  }, []);
  return (
    <div>
      <Navbar />
      <div className="py-16 px-8">
        <Shows kind="Movies" category="Now Playing" movies={playing} />
        <Shows kind="Movies" category="Popular" movies={popular} />
        <Shows kind="Movies" category="Top Rated" movies={rated} />
        <Shows kind="Movies" category="Upcoming" movies={upcoming} />
      </div>
    </div>
  );
};

export default Movies;
