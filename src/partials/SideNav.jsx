// import axios from "../utils/axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const SideNav = () => {

 

  return (
    <>
      <div className=" w-[20%] h-full border-r-2 border-zinc-200 p-10">
        <h1 className="text-2xl text-zinc-100 font-bold ">
          <i className="text-[#6556CD] ri-tv-fill mr-2"></i>
          <span>Harshit</span>
        </h1>
        <nav className="flex flex-col text-zinc-400 text-xl gap-1">
          <h1 className="text-white font-semibold text-xl mt-6 mb-3 ml-5 ">
            New Feeds
          </h1>

          <Link to="/trending" className="hover:text-[white] hover:bg-[#6556CD] rounded-lg p-5 duration-300 ">
            <i className="ri-fire-fill mr-1"></i>
            Trending
          </Link>
          <Link to="/popular" className="hover:text-[white] hover:bg-[#6556CD] rounded-lg p-5 duration-300">
            <i className="ri-bard-fill mt-1 mr-1"></i>
            Popular
          </Link>
          <Link to="/movie" className="hover:text-[white] hover:bg-[#6556CD] rounded-lg p-5 duration-300">
            <i className="ri-film-fill mt-[1%] mr-1"></i>
            Movies
          </Link>
          <Link to="/tv" className="hover:text-[white] hover:bg-[#6556CD] rounded-lg p-5 duration-300 ">
            <i className="ri-tv-2-fill mr-1"></i>
            TV Shows
          </Link>
          <Link to="/people" className="hover:text-[white] hover:bg-[#6556CD] rounded-lg p-5 duration-300 mb-2 ">
            <i className="ri-team-fill mr-1"></i>
            People
          </Link>
        </nav>

    <hr className="border-none h-[1px] bg-zinc-100"/>

        <nav className="flex flex-col text-zinc-400 text-xl gap-1">
          <h1 className="text-white font-semibold text-xl mt-6 mb-2 ml-5 ">
            Website Information
          </h1>

          <Link className="hover:text-[white] hover:bg-[#6556CD] rounded-lg p-5 duration-300 ">
          <i className="ri-information-line mr-1"></i>
            About
          </Link>
          <Link className="hover:text-[white] hover:bg-[#6556CD] rounded-lg p-5 duration-300">
          <i className="ri-contacts-line mr-1"></i>
            Contact
          </Link>
          
        </nav>
      </div>
    </>
  );
};

export default SideNav;
