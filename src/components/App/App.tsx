import { useState } from "react";
import axios from "axios";
import SearchBar from "../SearchBar/SearchBar";
import MovieGrid from "../MovieGrid/MovieGrid";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";

import css from "./App.module.css";

import { Toaster } from "react-hot-toast";

export default function App() {
  const handleSubmit = (query: string) => void;

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />;
      <SearchBar onSubmit={handleSubmit} />;

    </>
  );
}
