import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { TamaguiProvider, Theme } from "tamagui";

import { config } from "@/tamagui.config";
import { useInitFonts } from "@hooks";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function RootLayout() {
  const isFontsLoaded = useInitFonts();

  if (!isFontsLoaded) return null;

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <TamaguiProvider config={config}>
          <Theme name="dark">
            <Stack>
              <Stack.Screen
                name="(tabs)"
                options={{
                  headerShown: false,
                  contentStyle: {
                    backgroundColor: config.themes.dark.background.val,
                  },
                }}
              />
              <Stack.Screen
                name="movies"
                options={{
                  headerShown: false,
                }}
              />
            </Stack>
            <StatusBar style="inverted" />
          </Theme>
        </TamaguiProvider>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
