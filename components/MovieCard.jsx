"use client";
import axios from "axios";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { BsFillPlusCircleFill } from "react-icons/bs";
// const getPoster = (posterPath) => {
//   return "https://www.themoviedb.org/t/p/w220_and_h330_face${posterPath}";
// };
const MovieCard = ({ img, title, id }) => {
  const [movieTrailer, setMovieTrailer] = useState([]);
  const getTrailer = (id) => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=3d9cf7d751473d780990124c9d60e416&language=en-US`
      )
      .then((res) => setMovieTrailer(res.data.results));
  };
  return (
    <div className="group py-4 px-2 transition-all delay-200 w-full mb-4 rounded-lg">
      <div className="group-hover:cursor-pointer transition group-hover:z-20 top-0 left-0 h-auto w-full">
        <div className="relative rounded-lg">
          <img src={img} className="rounded-lg w-full h-full" />
          <div className="bg-black absolute top-0 w-full h-full opacity-0 group-hover:opacity-50 rounded-lg"></div>
          <div className="absolute font-semibold px-4 py-4 md:px-2 md:py-2 bottom-0 transition hidden group-hover:flex flex-col gap-2">
            <div>
              <h4 className="text-white text-lg">{title}</h4>
            </div>
            {/* <div className="">
              <Link
                href={`https://www.themoviedb.org/video/play?key=FiL1_5DWV7Y`}
                onClick={() => getTrailer(id)}
                className="text-[#023047] flex items-center gap-1 hover:opacity-80 transition text-md md:text-sm md:text-md md:gap-3 md:py-1 md:px-2 text-sm sm:py-1 sm:px-2 bg-white py-2 px-4 rounded-lg "
              >
                <BsFillPlayCircleFill
                  size={20}
                  className="transition w-4 h-4 md:w-auto md:h-auto text-[#023047] hover:opacity-80"
                />
                Play Trailer
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
