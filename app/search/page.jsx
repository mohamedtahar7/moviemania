"use client";
import React from "react";
import axios from "axios";
import Navbar from "@/components/Navbar";
import MovieCard from "@/components/MovieCard";
import { BsSearch } from "react-icons/bs";
import { useState, useEffect } from "react";
const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const search = async (searchTerm) => {
    await axios
      .get(
        `https://api.themoviedb.org/3/search/multi?api_key=3d9cf7d751473d780990124c9d60e416&query=${searchTerm}&include_adult=false&language=en-US&page=1`
      )
      .then((res) => {
        setSearchResults(res.data.results);
      });
  };
  useEffect(() => {
    search("Spiderman");
  }, []);
  return (
    <div>
      <Navbar />
      <div className="py-16 px-8">
        <h1 className="text-3xl font-semibold text-center pt-8 px-8 text-[#023047]">
          Find Your Show
        </h1>
        <div className="relative flex py-12 flex-row items-center justify-center gap-4">
          <input
            onSubmit={() => search(searchTerm)}
            className="
            rounded-full py-1 text-xl px-6 text-[#023047] border-[#023047] border-[3px] w-[50%] placeholder-gray-500 font-medium"
            type="text"
            value={searchTerm}
            placeholder="Search ..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <BsSearch
            className="absolute right-[25%] hover:cursor-pointer  text-[#023047] active:cursor-pointer mr-3 my-2"
            size={30}
            onClick={() => search(searchTerm)}
          />
        </div>
        <div className="py-10 px-8 grid-cols-2 grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 lg:gap-3">
          {searchResults?.length > 0 ? (
            searchResults.map((movie, id) => (
              <MovieCard
                key={id}
                id={movie.id}
                img={`https://www.themoviedb.org/t/p/w300_and_h450_face/${movie.poster_path}`}
                title={movie.title ? movie.title : movie.name}
              />
            ))
          ) : (
            <h2 className="text-center w-full text-2xl font-semibold text-[#023047]">
              No Results Found
            </h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
