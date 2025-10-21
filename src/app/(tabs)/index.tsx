import { FlashList } from "@shopify/flash-list";
import { Filter } from "@tamagui/lucide-icons";
import { router } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Card, Image, Input, View, useTheme } from "tamagui";

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

export default function HomeScreen() {
  const theme = useTheme();

  const handleRedirect = () => {
    router.push("/movie-details");
  };

  const handleFetch = () => {
    console.log("fetch");
  };

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
          />
          <Button icon={Filter} backgroundColor="$accent1" />
        </View>

        <FlashList
          data={DATA}
          keyExtractor={(item) => item.key.toString()}
          numColumns={2}
          contentContainerStyle={{ paddingInline: 18, paddingBottom: "25%" }}
          ItemSeparatorComponent={() => <View height={14} />}
          onEndReached={handleFetch}
          onEndReachedThreshold={0.5}
          // ListFooterComponent={() => (
          //   <View>
          //     <Text>Loading</Text>
          //   </View>
          // )}
          renderItem={({ item, index }) => {
            const isLeft = index % 2 === 0;
            const MARGIN = 7;

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
                onPress={handleRedirect}
              >
                <Image
                  source={{ uri: item.image }}
                  objectFit="cover"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Card>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}
