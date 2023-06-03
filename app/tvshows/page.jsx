"use client";
import React from "react";
import axios from "axios";
import Navbar from "@/components/Navbar";
import Shows from "@/components/Shows";
import { useState, useEffect } from "react";
const Tv = () => {
  const [airing, setAiring] = useState([]);
  const [onair, setOnAir] = useState([]);
  const [popular, setPopular] = useState([]);
  const [rated, setRated] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/tv/airing_today?api_key=3d9cf7d751473d780990124c9d60e416&language=en-US&page=1"
      )
      .then((res) => {
        setAiring(res.data.results);
      });
    axios
      .get(
        "https://api.themoviedb.org/3/tv/on_the_air?api_key=3d9cf7d751473d780990124c9d60e416&language=en-US&page=1"
      )
      .then((res) => {
        setOnAir(res.data.results);
      });
    axios
      .get(
        "https://api.themoviedb.org/3/tv/popular?api_key=3d9cf7d751473d780990124c9d60e416&language=en-US&page=1"
      )
      .then((res) => {
        setPopular(res.data.results);
      });
    axios
      .get(
        "https://api.themoviedb.org/3/tv/top_rated?api_key=3d9cf7d751473d780990124c9d60e416&language=en-US&page=1"
      )
      .then((res) => {
        setRated(res.data.results);
      });
  }, []);
  return (
    <div>
      <Navbar />
      <div className="py-16 px-8">
        <Shows
          kind="Series"
          category="Top Rated"
          movies={rated}
        />
        <Shows
          kind="Series"
          category="Now Airing"
          movies={airing}
        />
        <Shows
          kind="Series"
          category="On The Air"
          movies={onair}
        />
        <Shows
          kind="Series"
          category="Popular"
          movies={popular}
        />
      </div>
    </div>
  );
};

export default Tv;
