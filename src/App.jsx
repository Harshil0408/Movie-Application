import React from "react";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Trending from "./partials/Trending";
import Popular from "./partials/Popular";
import Movie from "./partials/Movie";
import Tvshows from "./partials/Tvshows";
import People from "./partials/People";
import MovieDetail from "./partials/MovieDetail";
import Tvdetail from "./partials/Tvdetail";
import Persondetail from "./partials/Persondetail";
import Trailer from "./partials/Trailer";

const App = () => {
  return (
    <div className="bg-[#1F1E24] h-screen w-screen flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movie" element={<Movie />}></Route>
        <Route path="/movie/details/:id" element={<MovieDetail />}>
        <Route
            path="/movie/details/:id/trailer"
            element={<Trailer />}
          ></Route> 
        </Route> 

        <Route path="/tv" element={<Tvshows />}></Route>
        <Route path="/tv/details/:id" element={<Tvdetail />} />

        <Route path="/people" element={<People />}></Route>
        <Route path="/person/details/:id" element={<Persondetail />} />
      </Routes>
    </div>
  );
};

export default App;
