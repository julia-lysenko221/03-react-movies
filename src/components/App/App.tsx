import { useState } from "react";
import axios from "axios";
import SearchBar from "../SearchBar/SearchBar";
import MovieGrid from "../MovieGrid/MovieGrid";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import type { Movie } from "../../types/movie";
import fetchMovies 

import css from "./App.module.css";

import { Toaster } from "react-hot-toast";

export default function App() {

    const [movies, setMovies] = useState<Movie[]>([]);


    const handleSubmit = async (query: string) => void;
    
    const response = await fetchMovies(query);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />;
      <SearchBar onSubmit={handleSubmit} />;
      {/* {loading && <Loader />}
      {error && <ErrorMessage />} */}
      {movies.length > 0 && <MovieGrid movies={movies} onSelect={setSelectedMovie} />}
    </>
  );
}
