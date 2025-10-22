import { useLocalSearchParams } from "expo-router";

import { useGetMovieDetails } from "@services";

export const useMovieDetails = () => {
  const { movieId } = useLocalSearchParams();

  const { data, isLoading } = useGetMovieDetails(movieId as string);

  return {
    data,
    isLoading,
  };
};
