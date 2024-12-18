import { IMovie } from "../entity/movie/movie_rdo";
import MovieCard from "./MovieCard";
import "./Feed.css";

const Feed = ({ movies }: { movies: IMovie[] }) => {
  return (
    <div className="moviesFeed">
      {movies &&
        movies.map((moviecard: IMovie) => (
          <MovieCard key={moviecard.imdbID} {...moviecard} />
        ))}
    </div>
  );
};

export default Feed;
