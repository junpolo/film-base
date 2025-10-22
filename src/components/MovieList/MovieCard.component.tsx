import { Heart } from "@tamagui/lucide-icons";
import { Image } from "expo-image";
import { router } from "expo-router";
import { Button, Card, CardBackground, CardHeader, Text } from "tamagui";

import { MovieItem } from "@/src/types";
import { withOpacity } from "@/src/utils";

// TODO: Fix image bug

type MovieCardProps = {
  item: MovieItem;
  index: number;
};

const MARGIN = 7;

export const MovieCard = ({ item, index }: MovieCardProps) => {
  const isLeft = index % 2 === 0;
  const isPosterAvailable = item.Poster && item.Poster !== "N/A";

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
      flex={1}
      aspectRatio={2 / 3}
      borderRadius={8}
      overflow="hidden"
      backgroundColor="$color2"
      marginLeft={isLeft ? 0 : MARGIN}
      marginRight={isLeft ? MARGIN : 0}
      pressStyle={{ scale: 0.975 }}
      onPress={() => handleRedirect(item.imdbID)}
    >
      <CardHeader padding={4}>
        <Button
          icon={<Heart />}
          alignSelf="baseline"
          backgroundColor={withOpacity("#ffffff", 0.7)}
          pressStyle={{
            backgroundColor: withOpacity("#ffffff", 1),
            borderColor: "none",
          }}
          color="$accent2"
          onPress={() => console.log("press like")}
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
