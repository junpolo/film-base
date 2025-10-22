import { useQueryClient } from "@tanstack/react-query";
import { useMemo, useState } from "react";

import { useDebounce } from "@hooks";
import { useGetMovies } from "@services";

export const useHome = () => {
  const queryClient = useQueryClient();
  const [searchValue, setSearchValue] = useState("");

  const { data, fetchNextPage, isFetchingNextPage, isLoading } =
    useGetMovies(searchValue);

  const isUnableToFetch = useMemo(
    () =>
      searchValue !== "" &&
      data?.pages.some((page) => page.Response === "False"),
    [data, searchValue]
  );

  const isEmptyState = useMemo(
    () => searchValue === "" && !isUnableToFetch && !isLoading,
    [isUnableToFetch, searchValue, isLoading]
  );

  const movies = data?.pages.flatMap((page) => page.Search) ?? [];

  const handleSearch = (value: string) => {
    setSearchValue(value);
  };

  const handleRefresh = () => {
    queryClient.resetQueries({ queryKey: ["movies"] });
  };

  return {
    movies,
    fetchNextPage,
    isFetchingNextPage,
    isLoading,
    handleSearch,
    handleRefresh,
    searchValue,
    isUnableToFetch,
    isEmptyState,
  };
};
