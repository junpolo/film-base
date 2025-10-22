import { Sliders } from "@tamagui/lucide-icons";
import React from "react";
import { Button, Input, View } from "tamagui";

const TEST_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BZDI1NGU2ODAtNzBiNy00MWY5LWIyMGEtZjUxZjUwZmZiNjBlXkEyXkFqcGc@._V1_SX300.jpg";

const DATA = [
  {
    key: 1,
    image: TEST_IMAGE,
  },
  {
    key: 2,
    image: TEST_IMAGE,
  },
  {
    key: 3,
    image: TEST_IMAGE,
  },
  {
    key: 4,
    image: TEST_IMAGE,
  },
  {
    key: 5,
    image: TEST_IMAGE,
  },
  {
    key: 6,
    image: TEST_IMAGE,
  },
  {
    key: 7,
    image: TEST_IMAGE,
  },
  {
    key: 8,
    image: TEST_IMAGE,
  },
  {
    key: 9,
    image: TEST_IMAGE,
  },
  {
    key: 10,
    image: TEST_IMAGE,
  },
];

export default function FavoritesScreen() {
  return (
    <View flex={1} backgroundColor="$background" paddingBlock={24}>
      <View paddingInline={18} marginBottom={24} flexDirection="row" gap={18}>
        <Input
          flex={1}
          backgroundColor="$color1"
          placeholder="Find the things you liked"
        />
        <Button icon={Sliders} backgroundColor="$accent2" />
      </View>
    </View>
  );
}
