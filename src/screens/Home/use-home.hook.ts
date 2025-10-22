import { useQueryClient } from "@tanstack/react-query";
import { useMemo, useState } from "react";

import { useDebounce } from "@hooks";
import { useGetMovies } from "@services";

export const useHome = () => {
  const queryClient = useQueryClient();
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 1000);

  const { data, fetchNextPage, isFetchingNextPage, isLoading, error } =
    useGetMovies(debouncedSearch);

  const isUnableToFetch = useMemo(
    () =>
      debouncedSearch !== "" &&
      data?.pages.some((page) => page.Response === "False"),
    [data, debouncedSearch]
  );

  const isEmptyState = useMemo(
    () => debouncedSearch === "" && !isUnableToFetch,
    [isUnableToFetch, debouncedSearch]
  );

  const movies = data?.pages.flatMap((page) => page.Search) ?? [];

  const handleSearch = (value: string) => {
    setSearch(value);
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
    debouncedSearch,
    isUnableToFetch,
    isEmptyState,
  };
};
