// import axios from "axios";
// import type { Movie } from "../types/movie";

// interface MoviesHttpResponse {
//   hits: Movie[];
// }

// // HTTP-функція запиту статей
// export const fetchMovies = async (topic: string): Promise<Movie[]> => {
//   const response = await axios.get<MoviesHttpResponse>(
//     `https://hn.algolia.com/api/v1/search?query=${topic}`
//   );
//   return response.data.hits;
// };

import axios from "axios";
import type { Movie } from "../types/movie";

const BASE_URL = "https://api.themoviedb.org/3/search/movie";

export async function fetchMovies(query: string): Promise<Movie[]> {
  const token = import.meta.env.VITE_TMDB_TOKEN;

  const config = {
    params: {
      query,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.get(BASE_URL, config);
  return data.results;
}
