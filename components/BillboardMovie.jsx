import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import Link from "next/link";
const BillboardMovie = ({ movie }) => {
  return (
    <div className="absolute top-0 left-0 py-8">
      <div className="flex py-10 sm:py-12 items-center gap-3 px-10">
        <div className="">
          <img
            className="rounded-xl transition hover:-translate-y-4 w-[50%] sm:w-[65%] md:w-[75%]"
            src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`}
            alt=""
          />
        </div>
        <div className="py-4 px-[-1rem] flex flex-col">
          <h1 className="text-white lg:text-5xl md:text-3xl sm:text-2xl font-semibold mb-3">{`${movie.original_title}`}</h1>
          <p className="mt-2 text-md text-white font-medium">{`Release Date : ${movie.release_date}`}</p>
          {/* <Link
            href="/"
            className="flex gap-1 transition bg-white  items-center px-4 py-3 w-44 text-[#023047] mt-4 hover:bg-neutral-200 rounded-xl"
          >
            <BsFillPlayFill size={25} />
            <p className="font-medium">Play Trailer</p>
          </Link> */}
          {/* <h2 className="text-xl text-white my-3">Overview : </h2>
          <p className="text-lg text-white">{movie.overview}</p> */}
        </div>
      </div>
    </div>
  );
};

export default BillboardMovie;
