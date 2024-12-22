import axios from '../utils/axios';
import { useState ,useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate } from 'react-router-dom';
import TopNav from '../components/TopNav';
import Dropdown from './Dropdown';
import Cards from './Cards';

const Tvshows = () => {
    document.title = "HARSHIT | TV page";
    const navigate = useNavigate();
    const [category, setcategory] = useState("airing_today");
    const [tv, settv] = useState([]);
    const [page, setpage] = useState(1);
    const [hasmore, sethasmore] = useState(true);

    const GetTv = async () => {
    try {
          const { data } = await axios.get(`/tv/${category}?page=${page}`);
          console.log(data);
          if(data.results.length > 0){
    
            settv((prevstate=>[...prevstate, ...data.results]));
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
        if(tv.length === 0 ){
          GetTv();
        }
        else{
          setpage(1);
          settv([]);
          GetTv();
        }
      }
    
      // console.log(trending);
    
      useEffect(() => {
        refreshHandler();
      }, [category]);
  return  tv.length > 0 ? (
    <div className=" w-screen h-screen bg-[#1F1E24]">
      <div className="px-[2%] w-full flex items-center">
        <h1 className="text-2xl font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[$6556CD] cursor-pointer mr-2 ri-arrow-left-line"
          ></i>
          TV({category})
        </h1>
        <TopNav />
        <Dropdown
          title="Category"
          options={["airing_today","on_the_air","popular","top_rated"]}
          func={(e) => setcategory(e.target.value)}
        />
        <div className="w-[2%]"></div>
        
      </div>


      <InfiniteScroll 
        dataLength={tv.length}
        next={GetTv}
        hasMore={hasmore}

      >
        <Cards data={tv} title="tv" />
      </InfiniteScroll>
      
  
    </div>
  ) : (
    <h1>Loading</h1>
  );
}

export default Tvshows
