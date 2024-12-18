import { Link } from "react-router-dom";
import { IMovie } from "../entity/movie/movie_rdo";
import "./MovieCard.css";

const MovieCard = ({ Title, Year, imdbID, Type, Poster }: IMovie) => {
  return (
    <div className="moviecard" id={imdbID}>
      <Link to={"/movie/" + imdbID}>
        <img className="movie_image" src={Poster} />
      </Link>
      <h3 className="movie_name">{Title}</h3>
      <h2 className="movie_year">{Year}</h2>
      <h2 className="movie_type">{Type}</h2>
    </div>
  );
};
export default MovieCard;
