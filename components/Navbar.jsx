"use client";
import React from "react";
import { useState } from "react";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { MdClose, MdMenu } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import Link from "next/link";
import SearchResults from "./SearchResults";
import axios from "axios";
const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedFor, setSearchedFor] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <nav className="bg-[#023047] z-10 flex w-full py-4 px-8 flex-row items-center justify-between fixed">
        <Link href="/" className="flex flex-row gap-1 items-center">
          <AiOutlinePlayCircle size={28} className="text-white" />
          <h3 className="text-white text-2xl font-semibold">MovieMania</h3>
        </Link>
        <div className="lg:flex hidden flex-row items-center">
          <div className="flex flex-row items-center justify-center gap-8">
            <Link
              href="/"
              className="text-white hover:text-neutral-200 hover:border-b-2 border-neutral-200 font-semibold transition"
            >
              Home
            </Link>
            <Link
              href="/movies"
              className="text-white transition hover:text-neutral-200 hover:border-b-2 border-neutral-200 font-semibold"
            >
              Movies
            </Link>
            <Link
              href="/tvshows"
              className="text-white transition hover:text-neutral-200 hover:border-b-2 border-neutral-200 font-semibold"
            >
              TV Shows
            </Link>
            <Link
              href="/search"
              className="text-white transition hover:text-neutral-200 hover:border-b-2 border-neutral-200 font-semibold"
            >
              Search
            </Link>
          </div>
        </div>
        {!isOpen ? (
          <MdMenu
            size={30}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="text-white transition lg:hidden md:block"
          />
        ) : (
          <MdClose
            size={30}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="text-white transition lg:hidden md:block"
          />
        )}
      </nav>
      <div
        className={`absolute top-0 left-0 -translate-x-[0%] flex flex-col items-center justify-center gap-10 h-[100vh] w-[100%] backdrop-blur-sm transition-all bg-[#ffffff83] z-[5] ${
          !isOpen ? "hidden" : "flex"
        } text-3xl`}
      >
        <Link
          href="/"
          className="text-[#023047] hover:text-neutral-200 hover:border-b-2 border-neutral-200 font-semibold transition"
        >
          Home
        </Link>
        <Link
          href="/movies"
          className="text-[#023047] transition hover:text-neutral-200 hover:border-b-2 border-neutral-200 font-semibold"
        >
          Movies
        </Link>
        <Link
          href="/tvshows"
          className="text-[#023047] transition hover:text-neutral-200 hover:border-b-2 border-neutral-200 font-semibold"
        >
          TV Shows
        </Link>
        <Link
          href="/search"
          className="text-[#023047] transition hover:text-neutral-200 hover:border-b-2 border-neutral-200 font-semibold"
        >
          Search
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
