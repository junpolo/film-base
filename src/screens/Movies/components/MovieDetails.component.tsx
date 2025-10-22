import { StarFull } from "@tamagui/lucide-icons";
import { Image } from "expo-image";
import {
  H6,
  Paragraph,
  ScrollView,
  Text,
  View,
  XGroup,
  useTheme,
} from "tamagui";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

import { useDimensions } from "@hooks";
import { withOpacity } from "@utils";
import { FavoriteButton } from "@components";
import { useUpdateFavorites, useIsFavorite } from "@stores/favorites.store";
import { Genre } from "./Genre.component";
import { Ratings } from "./Ratings.component";
import { Runtime } from "./Runtime.component";
import { useMovieDetails } from "../use-movie-details.hook";

export const MovieDetails = () => {
  const { data } = useMovieDetails();
  const theme = useTheme();
  const { width, height } = useDimensions();
  const updateFavorites = useUpdateFavorites();
  const isFavorite = useIsFavorite(data.imdbID);

  return (
    <ScrollView backgroundColor="$background">
      <View>
        <Image
          source={{
            uri: data?.Poster,
          }}
          style={{
            width,
            height: height * 0.55,
            objectFit: "cover",
          }}
        />
        <LinearGradient
          colors={[
            "transparent",
            withOpacity(theme.background?.val, 0.8),
            theme.background?.val,
          ]}
          style={{
            width,
            height: height * 0.5,
            bottom: 0,
            position: "absolute",
          }}
          start={{ x: 0.5, y: 0.4 }}
          end={{ x: 0.5, y: 1 }}
        />
      </View>
      <SafeAreaView>
        <View marginTop={-height * 0.12} paddingInline={18} gap={36}>
          <View gap={20}>
            <View gap={10}>
              <View>
                {data.imdbRating !== "N/A" && (
                  <XGroup gap={5}>
                    <StarFull color="#f5c518" size="$1" />
                    <Text fontWeight={600}>{data.imdbRating}</Text>
                  </XGroup>
                )}

                <Text fontWeight={900} fontSize="$8">
                  {data.Title}
                </Text>
              </View>
              <Runtime data={[data.Year, data.Runtime, data.Rated]} />
              <Genre genre={data.Genre} />
            </View>

            <Ratings ratings={data.Ratings} />

            <FavoriteButton
              isActive={isFavorite}
              onPress={() => updateFavorites(data)}
            />
          </View>

          <View gap={6}>
            <H6>Synopsis</H6>
            <Paragraph color="gray">{data.Plot}</Paragraph>
          </View>

          <View gap={6}>
            <H6>Cast</H6>
            <Paragraph color="gray">{data.Actors}</Paragraph>
          </View>

          <View gap={6}>
            <H6>Director</H6>
            <Paragraph color="gray">{data.Director}</Paragraph>
          </View>

          <View gap={6}>
            <H6>Writer</H6>
            <Paragraph color="gray">{data.Writer}</Paragraph>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
