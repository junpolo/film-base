import { useQueryClient } from "@tanstack/react-query";
import { useMemo, useState } from "react";

import { useGetMovies } from "@services";
import { MovieFilters } from "@types";

export const useHome = () => {
  const queryClient = useQueryClient();
  const [searchValue, setSearchValue] = useState("");
  const [filters, setFilters] = useState<MovieFilters>({
    year: "",
    movieType: undefined,
  });

  const { data, fetchNextPage, isFetchingNextPage, isLoading } = useGetMovies({
    search: searchValue,
    filters,
  });

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

  const handleApplyFilters = ({ movieType, year }: MovieFilters) => {
    setFilters({ movieType, year });
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
    handleApplyFilters,
    filters,
  };
};
