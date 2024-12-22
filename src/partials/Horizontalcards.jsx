import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

const Horizontalcards = ({ data }) => {
  return (
    <div className="w-[100%] h-[38vh] flex overflow-y-hidden mb-5">
      {data.map((d, i) => (
        <Link to={`/${d.media_type}/details/${d.id}`}
          key={i}
          className="text-white bg-zinc-900 min-w-[18%] h-[35vh] overflow-auto mr-5 mb-5 rounded ml-7"
        >
          <img
            className="w-full h-[55%] object-cover cursor-pointer"
            src={`https://image.tmdb.org/t/p/original/${
              d.backdrop_path || d.poster_path
            })`}
            alt="Loading..."
          />
          <div className="text-white p-3 h-[45%]">
            <h1 className="mt-6 text-xl font-semibold flex flex-col jutsify-between  h-[30px] overflow-hidden ">
              {data.name || d.title || d.original_name || d.original_title}
            </h1>
              {/* <Link className="text-blue-400 ml-2 inline-block mt-5">...more</Link> */}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Horizontalcards;
