import { Dot, StarFull } from "@tamagui/lucide-icons";
import { LinearGradient } from "expo-linear-gradient";
import {
  H1,
  H6,
  Image,
  Paragraph,
  ScrollView,
  Text,
  View,
  XGroup,
  useTheme,
} from "tamagui";

import { useDimensions } from "@hooks";
import { withOpacity } from "@utils";

const TEST_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BZDI1NGU2ODAtNzBiNy00MWY5LWIyMGEtZjUxZjUwZmZiNjBlXkEyXkFqcGc@._V1_SX300.jpg";

export default function MovieDetails() {
  const theme = useTheme();
  const { width, height } = useDimensions();

  return (
    <ScrollView backgroundColor="$background">
      <View>
        <Image
          src={TEST_IMAGE}
          width={width}
          height={height * 0.55}
          objectFit="cover"
        />
        <LinearGradient
          colors={[
            "transparent",
            withOpacity(theme.background?.val, 0.8),
            theme.background?.val,
          ]}
          style={{
            width,
            height: height * 0.4,
            bottom: 0,
            position: "absolute",
          }}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
        />
      </View>
      <View marginTop={-height * 0.12} paddingInline={18} gap={36}>
        <View gap={12}>
          <XGroup gap={5}>
            <StarFull color="#f5c518" size="$1" />
            <Text fontWeight={600}>6.2</Text>
          </XGroup>

          <H1 fontWeight={900}>Captain Marvel</H1>
          <View flexDirection="row" alignItems="center" gap={5}>
            <Text>2024</Text>

            <Dot />
            <Text>2h 14m</Text>
            <Dot />
            <Text>12+</Text>
          </View>
          <View flexDirection="row" gap={10}>
            <Text
              backgroundColor="$accent2"
              borderRadius="$2"
              paddingBlock={4}
              paddingInline={8}
              fontSize="$1"
            >
              Horror
            </Text>
            <Text
              backgroundColor="$accent2"
              borderRadius="$2"
              paddingBlock={4}
              paddingInline={8}
              fontSize="$1"
            >
              Suicide
            </Text>
            <Text
              backgroundColor="$accent2"
              borderRadius="$2"
              paddingBlock={4}
              paddingInline={8}
              fontSize="$1"
            >
              Drama
            </Text>
          </View>
        </View>

        <View gap={6}>
          <H6>Synopsis</H6>
          <Paragraph color="gray">
            After crashing an experimental aircraft, Air Force pilot Carol
            Danvers is discovered by the Kree and trained as a member of the
            elite Starforce Military under the command of her mentor Yon-Rogg.
            Six years later, after escaping to Earth while under attack by the
            Skrulls, Danvers begins to discover there's more to her past. With
            help from S.H.I.E.L.D. agent Nick Fury, they set out to unravel the
            truth.
          </Paragraph>
        </View>

        <View gap={6}>
          <H6>Cast</H6>
          <Paragraph color="gray">
            Brie Larson, Samuel L. Jackson, Ben Mendelsohn
          </Paragraph>
        </View>
      </View>
    </ScrollView>
  );
}
