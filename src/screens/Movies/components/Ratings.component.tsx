import { Card, Text, View, useTheme } from "tamagui";

import { MovieRatingType } from "@types";
import { withOpacity, parseScore } from "@utils";

type RatingsProps = {
  ratings: MovieRatingType[];
};

const GAP = 30;

export const Ratings = ({ ratings }: RatingsProps) => {
  if (!ratings || ratings.length === 0) return null;

  const theme = useTheme();

  const reduceSourceText = (source: string) => {
    if (source === "Internet Movie Database") return "IMDb";
    return source;
  };

  return (
    <Card
      padding={18}
      backgroundColor="transparent"
      borderRadius="$4"
      flexDirection="row"
      justifyContent="space-evenly"
      flexWrap="wrap"
      marginTop={16}
      gap={GAP}
    >
      {ratings.map((item, idx) => (
        <View key={`rating-${item}-${idx}`} alignItems="center" rowGap={GAP}>
          <View flexDirection="column" alignItems="center">
            <Text fontSize="$5" color="$color" fontWeight={900}>
              {parseScore(item.Value)}
            </Text>
            <Text color={withOpacity(theme.color?.val, 0.65)}>
              {reduceSourceText(item.Source)}
            </Text>
          </View>
        </View>
      ))}
    </Card>
  );
};
