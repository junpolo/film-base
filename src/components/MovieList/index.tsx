import { FlashList } from "@shopify/flash-list";
import { Spinner, View } from "tamagui";

import { MovieItem } from "@types";
import { MovieCard } from "./MovieCard.component";

type MovieListProps = {
  data: MovieItem[];
  onEndReached?: () => void;
  isFetchingNextPage?: boolean;
  onRefresh?: () => void;
  disableRefresh?: boolean;
};

export const MovieList = ({
  data,
  onEndReached,
  isFetchingNextPage = false,
  onRefresh,
  disableRefresh = false,
}: MovieListProps) => {
  const handleEndReached = () => {
    onEndReached && onEndReached();
  };

  const handleRefresh = () => {
    onRefresh && onRefresh();
  };

  if (data.length === 0) return null;

  return (
    <FlashList
      data={data}
      keyExtractor={(item) => item.imdbID}
      numColumns={2}
      contentContainerStyle={{
        paddingInline: 18,
        paddingBottom: "25%",
      }}
      ItemSeparatorComponent={() => <View height={7} />}
      onEndReached={handleEndReached}
      onRefresh={disableRefresh ? undefined : handleRefresh}
      onEndReachedThreshold={0.2}
      ListFooterComponent={() =>
        isFetchingNextPage && (
          <Spinner marginTop={48} size="large" color="$accent1" />
        )
      }
      renderItem={({ item }) => <MovieCard item={item} />}
    />
  );
};
