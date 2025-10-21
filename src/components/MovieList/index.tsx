import { FlashList } from "@shopify/flash-list";
import { Spinner, View } from "tamagui";

import { MovieItem } from "@types";
import { MovieCard } from "./MovieCard.component";

type MovieListProps = {
  data: MovieItem[];
  onEndReached?: () => void;
  isFetchingNextPage?: boolean;
  onRefresh?: () => void;
};

export const MovieList = ({
  data,
  onEndReached,
  isFetchingNextPage = false,
  onRefresh,
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
      contentContainerStyle={{ paddingInline: 18, paddingBottom: "25%" }}
      ItemSeparatorComponent={() => <View height={14} />}
      onEndReached={handleEndReached}
      onRefresh={handleRefresh}
      onEndReachedThreshold={0.2}
      ListFooterComponent={() =>
        isFetchingNextPage && (
          <Spinner marginTop={48} size="large" color="$accent1" />
        )
      }
      renderItem={({ item, index }) => <MovieCard item={item} index={index} />}
    />
  );
};
