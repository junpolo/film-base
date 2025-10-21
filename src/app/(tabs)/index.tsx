import { Sliders } from "@tamagui/lucide-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Input, Spinner, View, useTheme } from "tamagui";

import { MovieList } from "@components";
import { EmptySearch, SearchResultText, useHome } from "@screens/Home";

export default function HomeScreen() {
  const theme = useTheme();
  const {
    movies,
    fetchNextPage,
    isFetchingNextPage,
    handleSearch,
    handleRefresh,
    isLoading,
    debouncedSearch,
    isUnableToFetch,
  } = useHome();

  const showSearchResultText =
    debouncedSearch && !isLoading && !isUnableToFetch;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.background?.val,
      }}
    >
      <View flex={1}>
        <View paddingInline={18} marginBottom={24} flexDirection="row" gap={18}>
          <Input
            flex={1}
            backgroundColor="$color1"
            placeholder="What's on your mind?"
            onChangeText={handleSearch}
          />
          <Button icon={Sliders} backgroundColor="$accent2" />
        </View>

        {showSearchResultText && <SearchResultText value={debouncedSearch} />}

        {isUnableToFetch && <EmptySearch value={debouncedSearch} />}

        {isLoading ? (
          <Spinner size="large" color="$accent2" alignSelf="center" />
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
