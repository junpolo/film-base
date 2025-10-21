import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { MovieResponse } from "../types";

const API_KEY = process.env.EXPO_PUBLIC_API_KEY;
const DEFAULT_SEARCH_STRING = "avengers";

type FetchMoviesProps = {
  pageParam: number | undefined;
  queryKey: string[];
};

// TODO: get movies when parameters change
const fetchMovies = async ({ pageParam = 1, queryKey }: FetchMoviesProps) => {
  const [_, search] = queryKey;
  const searchParam = encodeURIComponent(search || DEFAULT_SEARCH_STRING);

  const res = await axios.get<MovieResponse>(
    `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchParam}&type=movie&page=${pageParam}`
  );

  const data = res.data;

  if (data.Response === "False") {
    return { Search: [], totalResults: "0", Response: "False" };
  }

  return data;
};

export const useGetMovies = (search: string) => {
  return useInfiniteQuery({
    queryKey: ["movies", search],
    initialPageParam: 1,
    queryFn: fetchMovies,
    getNextPageParam: (lastPage, allPages) => {
      // 🧩 Guard: If the API response is invalid, stop pagination
      if (!lastPage || lastPage.Response === "False") return undefined;

      const totalResults = Number(lastPage.totalResults || 0);
      const loadedResults = (allPages?.length ?? 0) * 10; // OMDb returns 10 items per page

      return loadedResults < totalResults ? allPages.length + 1 : undefined;
    },
  });
};
