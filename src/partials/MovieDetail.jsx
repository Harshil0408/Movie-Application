import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadmovie, removemovie } from "../store/actions/movieActions";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import Horizontalcards from "./Horizontalcards";
import Trailer from "./Trailer";


const MovieDetail = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  console.log(info);

  useEffect(() => {
    dispatch(asyncloadmovie(id));
    return () => {
      dispatch(removemovie());
    };
  }, []);
  return info ? (
    <div
      className="w-screen relative h-[150vh] px-[7%]  bg-[#1F1E24] "
      style={
        {
          // background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.7 )), url(https://image.tmdb.org/t/p/original/${
          //   info.detail.backdrop_path
          // })`,
          // backgroundPosition: "center",
          // backgroundSize: "cover",
          // objectFit: "cover",
        }
      }
    >
      <nav className="w-full flex h-[10vh] items-center text-zinc-100 flex gap-10 text-2xl">
        <i
          onClick={() => navigate(-1)}
          className="hover:text-[$6556CD] cursor-pointer mr-2 ri-arrow-left-line"
        ></i>
        <a target="_blank" href={info.detail.homepage}>
          <i className="ri-external-link-line"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
        >
          <i className="ri-earth-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}
        >
          IMDB
        </a>
      </nav>

      <div className="w-full flex">
        <img
          className="shadow-[9px_17px_38px_2px_rgba(0,0,0,0.5)] w-[50vh] h-[56vh] object-cover rounded cursor-pointer"
          src={`https://image.tmdb.org/t/p/original/${
            info.detail.backdrop_path || info.detail.poster_path
          }`}
          alt="Loading"
        />

        <div className="content ml-[5%]">
          <h1 className="text-white text-5xl font-black  ">
            {info.detail.name ||
              info.detail.title ||
              info.detail.original_name ||
              info.detail.original_title}
            <small
              className="text-2xl font-bold text-zinc-400 ml-1"
              title="release date"
            >
              ({info.detail.release_date.split("-")[0]})
            </small>
          </h1>

          <div className="flex text-zinc-100 items-center gap-x-5 mt-4">
            <span className=" text-white text-xl font-semibold opacity-[0.8] hover:opacity-[1] bg-yellow-500 w-[6vh] rounded-full h-[6vh] flex justify-center items-center">
              {(info.detail.vote_average * 10).toFixed()}
              <sup>%</sup>
            </span>
            <h1>User Score</h1>
            <h1 title="release date">({info.detail.release_date})</h1>
            <h1 title="type">
              {info.detail.genres.map((g) => g.name).join(",")}
            </h1>
            <h1 title="total minutes">{info.detail.runtime}min</h1>
          </div>

          <h1 className="text-3xl font-semibold italic  mt-4 text-zinc-200 ">
            {info.detail.tagline}
          </h1>

          <h1 className="text-xl font-semibold mt-5 flex flex-col gap-y-3  text-zinc-200 border-b-2  items-center pb-2 ">
            Overview
          </h1>
          <h1 className="text-xl font-semibold mt-5 flex flex-col gap-y-3  text-zinc-200">
            <p>{info.detail.overview}</p>
          </h1>

          <h1 className="text-xl w-[50%] font-semibold mt-5 flex flex-col gap-y-3  text-zinc-200  ">
            Movie Translated
          </h1>
          <h1 className="text-sm  font-semibold mt-2 flex flex-col gap-y-3  text-zinc-200">
            <p>{info.translations.join(" ")}</p>
          </h1>

          <Link
            to={`${pathname}/trailer`}
            className="text-xl text-white inline-block mt-4 rounded bg-[#6556CD] px-7 py-3 "
          >
            <i className="ri-play-large-fill mr-1"></i>
            Play Trailor
          </Link>
        </div>
      </div>

      <div className="w-[80%] flex flex-col gap-y-6 mt-5  ">
        {info.watchproviders && info.watchproviders.flatrate && (
          <div className="flex gap-2 text-white overflow-hidden  items-center cursor-pointer object-cover">
            <h1>Availabel on flatrate</h1>
            {info.watchproviders.flatrate.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                className="w-[7vh] rounded overflow-hidden"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}

        {info.watchproviders && info.watchproviders.rent && (
          <div className="flex gap-2 text-white overflow-hidden  items-center cursor-pointer">
            <h1>Availabel on Rent</h1>
            {info.watchproviders.rent.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                className="w-[7vh] rounded overflow-hidden"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}

        {info.watchproviders && info.watchproviders.buy && (
          <div className="flex gap-2 text-white overflow-hidden  items-center">
            <h1>Availabel To buy</h1>
            {info.watchproviders.buy.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                className="w-[7vh] rounded overflow-hidden cursor-pointer"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}
      </div>

      <div className="mt-12">
        <h1 className="text-4xl text-white font-black ml-6 mb-6 border-b-4 py-3 ">Recommandations & Similar Stuffs</h1>
      <Horizontalcards 
        data={
          info.recommendations.length > 0 ? info.recommendations : info.similar
        }
      /></div>

      {/* <Trailer/> */}
       <Outlet/>

    </div>
  ) : (
    <h1>loading...</h1>
  );
};

export default MovieDetail;
