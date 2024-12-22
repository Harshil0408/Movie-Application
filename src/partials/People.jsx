import axios from "../utils/axios";
import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import TopNav from "../components/TopNav";
import Dropdown from "./Dropdown";
import Cards from "./Cards";

const People = () => {
  document.title = "HARSHIT | people page";
  const navigate = useNavigate();
  const [category, setcategory] = useState("popular");
  const [people, setpeople] = useState([]);
  const [page, setpage] = useState(1);
  const [hasmore, sethasmore] = useState(true);

  const GetPeople = async () => {
    try {
      const { data } = await axios.get(`/person/${category}?page=${page}`);
      console.log(data);
      if (data.results.length > 0) {
        setpeople((prevstate) => [...prevstate, ...data.results]);
        setpage(page + 1);
      } else {
        sethasmore(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const refreshHandler = () => {
    if (people.length === 0) {
      GetPeople();
    } else {
      setpage(1);
      setpeople([]);
      GetPeople();
    }
  };

  // console.log(trending);

  useEffect(() => {
    refreshHandler();
  }, [category]);
  return people.length > 0 ? (
    <div className=" w-screen h-screen bg-[#1F1E24]">
      <div className="px-[2%] w-full flex items-center">
        <h1 className="text-2xl font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[$6556CD] cursor-pointer mr-2 ri-arrow-left-line"
          ></i>
          People
        </h1>
        <TopNav />
       
        <div className="w-[2%]"></div>
      </div>

      <InfiniteScroll dataLength={people.length} next={GetPeople} hasMore={hasmore}>
        <Cards data={people} title="person" />
      </InfiniteScroll>
    </div>
  ) : (
    <h1>Loading</h1>
  );
};

export default People;
