export { removemovie } from "../reducers/movieSlice";
import axios from "..//../utils/axios";
import { loademovie } from "../reducers/movieSlice";

export const asyncloadmovie = (id) => async (dispatch, getstate) => {
  try {
    const detail = await axios.get(`/movie/${id}`);
    const externalid = await axios.get(`/movie/${id}/external_ids`);

    const translations  = await axios.get(`/movie/${id}/translations`);


    const recommendations = await axios.get(`/movie/${id}/recommendations`);

    const similar = await axios.get(`/movie/${id}/similar`);

    const videos = await axios.get(`/movie/${id}/videos`);
    const watchproviders = await axios.get(`/movie/${id}/watch/providers`);
    let theultimatedetails = {
      detail: detail.data,
      externalid: externalid.data,
      translations: translations.data.translations.map((t)=>t.name),


      recommendations: recommendations.data.results,
      similar: similar.data.results,
      videos: videos.data.results.find(m=> m.type === "Trailer"),
      watchproviders: watchproviders.data.results.IN,
    };
    dispatch(loademovie(theultimatedetails));
    console.log(theultimatedetails);
  } catch (error) {
    console.log(error);
  }
};
