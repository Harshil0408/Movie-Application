import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "../components/TopNav";
import Dropdown from "./Dropdown";
import { useState } from "react";
import axios from "../utils/axios";
import Cards from "./Cards";
import InfiniteScroll from "react-infinite-scroll-component";
import { data } from "autoprefixer";

const Trending = () => {
  document.title = "HARSHIT | Trending page";
  const navigate = useNavigate();
  const [category, setcategory] = useState("all");
  const [duration, setduration] = useState("week");
  const [trending, settrending] = useState([]);
  const [page, setpage] = useState(1);
  const [hasmore, sethasmore] = useState(true);

  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}?page=${page}`);
      if(data.results.length > 0){

        settrending((prevstate=>[...prevstate, ...data.results]));
        setpage(page+1);
      }
      else{
        sethasmore(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const refreshHandler = ()=>{
    if(trending.length === 0 ){
      GetTrending();
    }
    else{
      setpage(1);
      settrending([]);
      GetTrending();
    }
  }

  // console.log(trending);

  useEffect(() => {
    refreshHandler();
  }, [category, duration]);

  return trending.length > 0 ? (
    <div className=" w-screen h-screen bg-[#1F1E24]">
      <div className="px-[2%] w-full flex items-center">
        <h1 className="text-2xl font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[$6556CD] cursor-pointer mr-2 ri-arrow-left-line"
          ></i>
          Trending({category})
        </h1>
        <TopNav />
        <Dropdown
          title="Category"
          options={["movie", "tv", "all"]}
          func={(e) => setcategory(e.target.value)}
        />
        <div className="w-[2%]"></div>
        <Dropdown
          title="Duration"
          options={["week", "day"]}
          func={(e) => setduration(e.target.value)}
        />
      </div>


      <InfiniteScroll 
        dataLength={trending.length}
        next={GetTrending}
        hasMore={hasmore}

      >
        <Cards data={trending} title={category} />
      </InfiniteScroll>
      
  
    </div>
  ) : (
    <h1>Loading</h1>
  );
};

export default Trending;
