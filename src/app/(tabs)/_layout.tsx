import { Heart, Home, Star } from "@tamagui/lucide-icons";
import { Tabs } from "expo-router";
import { useTheme } from "tamagui";

export default function TabLayout() {
  const theme = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.accent1?.val,
        animation: "shift",
        tabBarStyle: {
          backgroundColor: theme.background?.val,
          borderTopColor: theme.borderColor?.val,
          position: "absolute",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => <Home color={color} />,
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          headerTitle: "My Favorites",
          headerTintColor: theme.color?.val,
          headerStyle: { backgroundColor: theme.background?.val },
          tabBarLabel: "Favorites",
          tabBarIcon: ({ color }) => <Heart color={color} />,
        }}
      />
    </Tabs>
  );
}
