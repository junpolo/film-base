import { View, Text } from "tamagui";

import { MovieList } from "@components";
import { useFavorites } from "@stores/favorites.store";
import { HeartCrack } from "@tamagui/lucide-icons";

export default function FavoritesScreen() {
  const favorites = useFavorites();

  const hasFavorites = favorites.length > 0;

  return (
    <View flex={1} backgroundColor="$background" justifyContent="center">
      {hasFavorites && <MovieList data={favorites} disableRefresh />}

      {!hasFavorites && (
        <View
          flex={1}
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          backgroundColor="$background"
          flexWrap="wrap"
          paddingInline={18}
          marginBottom={70}
        >
          <HeartCrack size={120} color="$accent2" marginBottom={24} />
          <Text fontSize="$5">Time to Build Your Collection</Text>
          <Text color="gray" lineHeight="$2" textAlign="center">
            Start exploring and tap the heart icon on any movie to save it here.
          </Text>
        </View>
      )}
    </View>
  );
}
