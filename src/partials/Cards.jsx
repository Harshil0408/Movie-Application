import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ data, title }) => {
  console.log(title);
  
  return (
    <div className="flex  mt-8 flex-wrap w-full px-[2%] bg-[#1F1E24]">
      {data.map((c, i) => (
        <Link to={`/${c.media_type || title}/details/${c.id}`} className="relative w-[30vh] mr-[5%] mb-[5%]" key={i}>
          <img
            className="shadow-[9px_17px_38px_2px_rgba(0,0,0,0.5)] h-[40vh] object-cover"
            src={`https://image.tmdb.org/t/p/original/${
                c.backdrop_path || c.poster_path ||c.profile_path
        }`}
            alt="Loading"
          />
          <h1 className="text-2xl text-zinc-200 mt-3 font-seminold">

          {c.name || c.title || c.original_name || c.original_title}
          </h1>

          {c.vote_average && <div className="absolute right-[-11%] bottom-[30%] text-white text-xl font-semibold opacity-[0.8] hover:opacity-[1] bg-yellow-500 w-[6vh] rounded-full h-[6vh] flex justify-center items-center">
            {(c.vote_average*10).toFixed()}<sup>%</sup>
            </div>}
          
        </Link>
      ))}
    </div>
  );
};

export default Cards;
