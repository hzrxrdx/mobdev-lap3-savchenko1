import axios from "axios";
import { IGetMovieRDO, ISearchMoviesRDO } from "../../entity/movie/movie_rdo";

const KEY = import.meta.env.VITE_OMDB_KEY;

const OMDBApiInstance = axios.create({
  baseURL: "http://www.omdbapi.com",
});

const OMDBApi = {
  searchMovie: async (movieTitle: string) => {
    const res = await OMDBApiInstance.get<ISearchMoviesRDO>("", {
      params: {
        apikey: KEY,
        s: movieTitle,
      },
    });
    return res.data;
  },
  getMovie: async (movieID: string) => {
    const res = await OMDBApiInstance.get<IGetMovieRDO>("", {
      params: {
        apikey: KEY,
        i: movieID,
      },
    });
    return res.data;
  },
};

export default OMDBApi;
