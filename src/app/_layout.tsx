import { Stack, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Button, TamaguiProvider, Theme } from "tamagui";

import { config } from "@/tamagui.config";
import { useInitFonts } from "@hooks";
import { ArrowLeft } from "@tamagui/lucide-icons";
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
                    backgroundColor: "red",
                  },
                }}
              />
              <Stack.Screen
                name="movie-details"
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
            <StatusBar style="inverted" />
          </Theme>
        </TamaguiProvider>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
