import { Sliders } from "@tamagui/lucide-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, View, useTheme } from "tamagui";

import { Loader, MovieList, SearchInput } from "@components";
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
  } = useHome();

  const showSearchResultText = searchValue && !isLoading && !isUnableToFetch;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.background?.val,
      }}
    >
      <View flex={1}>
        <View paddingInline={18} marginBottom={24} flexDirection="row" gap={18}>
          <SearchInput onSearch={handleSearch} />
          <Button icon={Sliders} backgroundColor="$accent2" />
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
  );
}
