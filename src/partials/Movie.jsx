import axios from "../utils/axios";
import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import TopNav from "../components/TopNav";
import Dropdown from "./Dropdown";
import Cards from "./Cards";

const Movie = () => {
  document.title = "HARSHIT | Movies page";
  const navigate = useNavigate();
  const [category, setcategory] = useState("popular");
  const [movie, setmovie] = useState([]);
  const [page, setpage] = useState(1);
  const [hasmore, sethasmore] = useState(true);

  const GetMovie = async () => {
    try {
      const { data } = await axios.get(`/movie/${category}?page=${page}`);
      console.log(data);
      if (data.results.length > 0) {
        setmovie((prevstate) => [...prevstate, ...data.results]);
        setpage(page + 1);
      } else {
        sethasmore(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const refreshHandler = () => {
    if (movie.length === 0) {
      GetMovie();
    } else {
      setpage(1);
      setmovie([]);
      GetMovie();
    }
  };

  // console.log(trending);

  useEffect(() => {
    refreshHandler();
  }, [category]);
  return movie.length > 0 ? (
    <div className=" w-screen h-screen bg-[#1F1E24]">
      <div className="px-[2%] w-full flex items-center">
        <h1 className="text-2xl font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[$6556CD] cursor-pointer mr-2 ri-arrow-left-line"
          ></i>
          Movie({category})
        </h1>
        <TopNav />
        <Dropdown
          title="Category"
          options={["popular", "top_rated", "upcoming", "now_playing"]}
          func={(e) => setcategory(e.target.value)}
        />
        <div className="w-[2%]"></div>
      </div>

      <InfiniteScroll
        dataLength={movie.length}
        next={GetMovie}
        hasMore={hasmore}
      >
        <Cards data={movie} title="movie" />
      </InfiniteScroll>
    </div>
  ) : (
    <h1>Loading</h1>
  );
};

export default Movie;
