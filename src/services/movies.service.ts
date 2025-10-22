import {
  useInfiniteQuery,
  useQuery,
  useSuspenseQuery,
} from "@tanstack/react-query";
import axios from "axios";
import { MovieDetailsReponse, MovieFilters, MovieResponse } from "../types";

const API_KEY = process.env.EXPO_PUBLIC_API_KEY;
const MOVIES_PER_PAGE = 10;

type FetchMoviesProps = {
  pageParam: number | undefined;
  queryKey: string[];
};

interface GetMovieProps {
  search: string;
  filters: MovieFilters;
}

export const useGetMovies = ({ search, filters }: GetMovieProps) => {
  return useInfiniteQuery({
    queryKey: ["movies", search, filters],
    initialPageParam: 1,
    queryFn: async ({ pageParam = 1 }) => {
      const searchParam = encodeURIComponent(search);
      const yearParam = filters?.year || "";
      const typeParam = filters?.movieType || "";

      const res = await axios.get<MovieResponse>(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchParam}&type=${typeParam}&y=${yearParam}&page=${pageParam}`
      );

      const data = res.data;

      if (data.Response === "False") {
        return { Search: [], totalResults: "0", Response: "False" };
      }

      return data;
    },
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage || lastPage.Response === "False") return undefined;

      const totalResults = Number(lastPage.totalResults || 0);
      const loadedResults = (allPages?.length ?? 0) * MOVIES_PER_PAGE;

      return loadedResults < totalResults ? allPages.length + 1 : undefined;
    },
  });
};

export const useGetMovieDetails = (id: string) => {
  return useSuspenseQuery<MovieDetailsReponse>({
    queryKey: ["movie-details", id],
    queryFn: async () => {
      const result = await axios.get(
        `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`
      );

      return result.data;
    },
  });
};
