import { Spinner, View, Text } from "tamagui";
import { Image } from "expo-image";
import { Search } from "@tamagui/lucide-icons";

import { FilmReel } from "@components";

export const Placeholder = () => {
  return (
    <View
      flex={1}
      justifyContent="center"
      alignItems="center"
      alignContent="center"
      backgroundColor="$background"
      flexWrap="wrap"
      marginBottom={70}
      paddingInline={24}
    >
      <FilmReel
        style={{
          height: 160,
          width: 160,
          marginBottom: 24,
        }}
      />
      <Text fontSize="$5">What to Watch Next</Text>
      <Text color="gray" lineHeight="$2" textAlign="center">
        Find your favorite movies. All the info you need is here—start searching
        now!
      </Text>
    </View>
  );
};
