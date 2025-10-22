import { Image } from "expo-image";
import { router } from "expo-router";
import { Card, CardBackground, CardHeader, Text } from "tamagui";

import { MovieItem } from "@/src/types";
import { FavoriteButton } from "../FavoriteButton.component";
import {
  useIsFavorite,
  useUpdateFavorites,
} from "@/src/stores/favorites.store";

type MovieCardProps = {
  item: MovieItem;
};

export const MovieCard = ({ item }: MovieCardProps) => {
  const isPosterAvailable = item.Poster && item.Poster !== "N/A";

  const updateFavorites = useUpdateFavorites();
  const isFavorite = useIsFavorite(item.imdbID);

  const handleRedirect = (movieId: string) => {
    router.push({
      pathname: "/movies/[movieId]",
      params: { movieId },
    });
  };

  return (
    <Card
      bordered
      elevate
      size="$4"
      margin={4}
      aspectRatio={2 / 3}
      borderRadius={8}
      overflow="hidden"
      backgroundColor="$color2"
      pressStyle={{ scale: 0.975 }}
      onPress={() => handleRedirect(item.imdbID)}
    >
      <CardHeader padding={4}>
        <FavoriteButton
          size="sm"
          isActive={isFavorite}
          onPress={() => updateFavorites(item)}
        />
      </CardHeader>

      <CardBackground
        justifyContent="center"
        alignItems="center"
        backgroundColor="$color1"
      >
        {isPosterAvailable ? (
          <Image
            source={{ uri: item.Poster }}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        ) : (
          <Text paddingInline={12} textAlign="center">
            {item.Title}
          </Text>
        )}
      </CardBackground>
    </Card>
  );
};
