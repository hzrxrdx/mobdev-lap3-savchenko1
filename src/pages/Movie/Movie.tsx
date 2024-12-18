import { useEffect, useState } from "react";
import { IGetMovieRDO } from "../../entity/movie/movie_rdo";
import { useParams } from "react-router-dom";
import OMDBApi from "../../shared/api/api";
import "./Movie.css";

const Movie = () => {
  const [moviesDescription, setMoviesDescription] = useState<IGetMovieRDO>();
  const { id } = useParams();
  useEffect(() => {
    const getMovie = async () => {
      if (id) setMoviesDescription(await OMDBApi.getMovie(id));
    };
    getMovie();
  }, [id]);
  return (
    <>
      {moviesDescription && (
        <div className="description">
          <img className="description__poster" src={moviesDescription.Poster} />
          <div className="description__info">
            <h1>{moviesDescription.Title}</h1>
            <h3>Year: {moviesDescription.Year}</h3>
            <h3>Language: {moviesDescription.Language}</h3>
            <h3>Actors: {moviesDescription.Actors}</h3>
            <h3>Runtime: {moviesDescription.Runtime}</h3>
            <h3>Genre: {moviesDescription.Genre}</h3>
            <h3>Released: {moviesDescription.Released}</h3>
            <h3>Country: {moviesDescription.Country}</h3>
          </div>
        </div>
      )}
    </>
  );
};

export default Movie;
