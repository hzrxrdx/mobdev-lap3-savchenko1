import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import OMDBApi from "../../shared/api/api";
import { IMovie } from "../../entity/movie/movie_rdo";
import Feed from "../../components/Feed";
import "./Search.css";

const Search = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState<IMovie[]>([]);
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMovies((await OMDBApi.searchMovie(search)).Search);
    if (search) reloadPageWithHash();
  };

  const reloadPageWithHash = () => {
    const hashvalue = search;
    location.assign(`${location.origin}/#` + encodeURI(hashvalue));
  };
  
  useEffect(() => {
    const reloadMovie = async () => {
      if (location.hash) {
        setMovies(
          (await OMDBApi.searchMovie(decodeURI(location.hash.slice(1)))).Search
        );
        setSearch(decodeURI(location.hash.slice(1)));
      }
    };
    reloadMovie();
  }, []);

  return (
    <div className="search">
      <h1>Search</h1>
      <form onSubmit={onSubmit}>
        <Input value={search} setValue={setSearch} />
        <Button>Search</Button>
      </form>
      <Feed movies={movies} />
    </div>
  );
};

export default Search;
