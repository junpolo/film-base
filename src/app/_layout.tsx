import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { TamaguiProvider, Theme } from "tamagui";

import { config } from "@/tamagui.config";
import { useInitFonts } from "@hooks";

export default function RootLayout() {
  const isFontsLoaded = useInitFonts();

  if (!isFontsLoaded) return null;

  return (
    <SafeAreaProvider>
      <TamaguiProvider config={config}>
        <Theme name="dark">
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="movie-details" />
          </Stack>
          <StatusBar style="auto" />
        </Theme>
      </TamaguiProvider>
    </SafeAreaProvider>
  );
}
