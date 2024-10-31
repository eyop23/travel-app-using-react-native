import { Stack, Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  // const colorScheme = useColorScheme();

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
