import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Trailer = () => {
  const naviagte = useNavigate();
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const ytvideo = useSelector((state) => state[category].info.videos);
  console.log(ytvideo);
  
  
  console.log(ytvideo);

  return (
    <div className="absolute z-[100] bg-[rgba(0,0,0,.9)] top-0 left-0 w-screen h-screen flex items-center justify-center">
      <Link onClick={() => naviagte(-1)}>
        <i class="ri-close-large-fill absolute text-3xl text-white top-[5%] right-[5%]"></i>
      </Link>
      <ReactPlayer
        height={800}
        width={1500}
        url={`https://www.youtube.com/watch?v=${ytvideo.key}`}
      />
    </div>
  );
};

export default Trailer;
