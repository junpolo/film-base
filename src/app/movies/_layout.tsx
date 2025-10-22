import { ArrowLeft } from "@tamagui/lucide-icons";
import { Stack, router } from "expo-router";
import { Button } from "tamagui";

export default function MoviesLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="[movieId]"
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => (
            <Button
              icon={ArrowLeft}
              size="$3"
              backgroundColor="$accent2"
              onPress={() => router.back()}
            />
          ),
        }}
      />
    </Stack>
  );
}
