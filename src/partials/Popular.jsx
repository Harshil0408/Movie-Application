import axios from '../utils/axios';
import { useState ,useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate } from 'react-router-dom';
import TopNav from '../components/TopNav';
import Dropdown from './Dropdown';
import Cards from './Cards';

const Popular = () => {
    document.title = "HARSHIT | Poular page";
    const navigate = useNavigate();
    const [category, setcategory] = useState("movie");
    const [popular, setpopular] = useState([]);
    const [page, setpage] = useState(1);
    const [hasmore, sethasmore] = useState(true);

    const GetPopular = async () => {
    try {
          const { data } = await axios.get(`${category}/popular?page=${page}`);
          console.log(data);
          if(data.results.length > 0){
    
            setpopular((prevstate=>[...prevstate, ...data.results]));
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
        if(popular.length === 0 ){
          GetPopular();
        }
        else{
          setpage(1);
          setpopular([]);
          GetPopular();
        }
      }
    
      // console.log(trending);
    
      useEffect(() => {
        refreshHandler();
      }, [category]);
    
  return popular.length > 0 ? (
    <div className=" w-screen h-screen bg-[#1F1E24]">
      <div className="px-[2%] w-full flex items-center">
        <h1 className="text-2xl font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[$6556CD] cursor-pointer mr-2 ri-arrow-left-line"
          ></i>
          Popular({category})
        </h1>
        <TopNav />
        <Dropdown
          title="Category"
          options={["movie", "tv"]}
          func={(e) => setcategory(e.target.value)}
        />
        <div className="w-[2%]"></div>
        
      </div>


      <InfiniteScroll 
        dataLength={popular.length}
        next={GetPopular}
        hasMore={hasmore}

      >
        <Cards data={popular} title={category} />
      </InfiniteScroll>
      
  
    </div>
  ) : (
    <h1>Loading</h1>
  );
}

export default Popular
