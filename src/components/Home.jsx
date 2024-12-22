import React, { useEffect, useState } from "react";
import SideNav from "../partials/SideNav";
import TopNav from "./TopNav";
import axios from "../utils/axios";
import Header from "../partials/Header";
import Horizontalcards from "../partials/Horizontalcards";
import Dropdown from "../partials/Dropdown";

const Home = () => {
  document.title = "HARSHIT | Home page";
  const [wallpaper, setwallpaper] = useState(null);
  const [trending, settrending] = useState([]);

  const [category, setcategory] = useState("movie");

  const GetHeaderWallPaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randomdata =
        data.results[(Math.random() * data.results.length).toFixed()];
      setwallpaper(randomdata);
    } catch (error) {
      console.log(error);
    }
  };

  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      settrending(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetTrending();
    !wallpaper && GetHeaderWallPaper();
  }, [category]);

  console.log(trending);

  return wallpaper && trending ? (
    <>
      <SideNav />
      <div className="w-[80%]  h-full overflow-hidden overflow-y-auto">
        <TopNav />
        <Header data={wallpaper} />
        <div className=" p-7 flex justify-between">
          <h1 className="text-3xl font-bold text-zinc-400">Trending</h1>
          <Dropdown
            title="filter"
            options={["tv", "movie", "all"]}
            func={(e) => setcategory(e.target.value)}
          />
        </div>
        <Horizontalcards data={trending} />
      </div>
    </>
  ) : (
    <h1>Loading....</h1>
  );
};

export default Home;
