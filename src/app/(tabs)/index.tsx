import { Sliders } from "@tamagui/lucide-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, View, useTheme } from "tamagui";
import { useState } from "react";

import { Loader, MovieList, SearchInput, FilterBottomSheet } from "@components";
import {
  EmptySearch,
  SearchResultText,
  useHome,
  Placeholder,
} from "@screens/Home";

export default function HomeScreen() {
  const theme = useTheme();
  const {
    movies,
    fetchNextPage,
    isFetchingNextPage,
    handleSearch,
    searchValue,
    handleRefresh,
    isLoading,
    isUnableToFetch,
    isEmptyState,
    handleApplyFilters,
    filters,
  } = useHome();

  const [openModal, setOpenModal] = useState(false);

  const showSearchResultText = searchValue && !isLoading && !isUnableToFetch;

  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: theme.background?.val,
        }}
      >
        <View flex={1}>
          <View
            paddingInline={18}
            marginBottom={24}
            flexDirection="row"
            gap={18}
          >
            <SearchInput onSearch={handleSearch} />
            <Button
              icon={Sliders}
              backgroundColor="$accent2"
              onPress={() => setOpenModal(true)}
            />
          </View>

          {showSearchResultText && <SearchResultText value={searchValue} />}
          {isUnableToFetch && <EmptySearch value={searchValue} />}
          {isEmptyState && <Placeholder />}

          {isLoading ? (
            <Loader />
          ) : (
            <MovieList
              data={movies}
              onEndReached={fetchNextPage}
              isFetchingNextPage={isFetchingNextPage}
              onRefresh={handleRefresh}
            />
          )}
        </View>
      </SafeAreaView>

      <FilterBottomSheet
        open={openModal}
        setOpen={setOpenModal}
        onApplyFilter={handleApplyFilters}
        selectedType={filters.movieType}
        yearReleased={filters.year}
      />
    </>
  );
}
