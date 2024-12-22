import React from "react";
import { Link } from "react-router-dom";

const Header = ({ data }) => {
  console.log(data);

  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.7 )), url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.profile_path
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        objectFit: "cover",
      }}
      className="w-full h-[50vh] flex flex-col justify-end items-start p-[5%] object-cover"
    >
      <h1 className="w-[70%] text-5xl font-black text-white">
        {data.name || data.title || data.original_name || data.original_title}
      </h1>
      <p className="w-[70%] mt-3 text-white">
        {data.overview}
        <Link to={`/${data.media_type}/details/${data.id}`} className="text-blue-400 ml-2">...more</Link>
      </p>

      <p className="text-white flex gap-2 mt-3">
        <i class="ri-star-line">{data.popularity}</i>
        <i class="ri-album-line">{data.media_type}</i>
      </p>

      <Link className="p-3 rounded mt-5 font-semibold text-zinc-300 hover:text-zinc-200 bg-[#6556CD] ">
        Watch Trailor
      </Link>
    </div>
  );
};

export default Header;
