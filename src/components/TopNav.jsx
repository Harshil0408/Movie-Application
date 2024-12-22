import React from "react";
import axios from "../utils/axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import noimage from "/noimage.png";

const TopNav = () => {
  const [query, setquery] = useState("");
  const [searches, setsearches] = useState([]);

  const GetSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setsearches(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetSearches();
  }, [query]);

  return (
    <div className="w-full h-[10vh] relative flex justify-start pl-[15%] items-center">
      <i className="ri-search-line text-3xl text-zinc-400"></i>
      <input
        onChange={(e) => setquery(e.target.value)}
        value={query}
        className="w-[50%] mx-10 p-3 text-lg  rounded-md outline-none border-none bg-transparent text-white"
        type="text"
        placeholder="Search movies"
      />
      {query.length > 0 && (
        <i
          onClick={() => setquery("")}
          className="ri-close-line text-3xl text-zinc-400 cursor-pointer"
        ></i>
      )}

      <div className="w-[48%] border-[1px] border-zinc-200 ml-[4%] max-h-[42vh] bg-[#1F1E24] z-[100] absolute top-[80%] rounded overflow-auto">
        {searches.map((s, i) => (
          <Link
          to={`/${s.media_type}/details/${s.id}`}
            key={i}
            className=" duration-200 flex justify-start font-semibold items-center text-zinc-100 w-[100%] border-b-2 border-zinc-100 p-10"
          >
            <img
              className="w-[10vh] h-[10vh] object-cover rounded mr-5 shadow-lg"
              src={
                s.backdrop_path || s.profile_path
                  ? `https://image.tmdb.org/t/p/original/${
                      s.backdrop_path || s.profile_path
                    }`
                  : noimage
              }
              alt=""
            />
            <span>
              {s.name || s.title || s.original_name || s.original_title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopNav;
