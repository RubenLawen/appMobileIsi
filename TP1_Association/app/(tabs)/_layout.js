import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "palus" }} />
      <Tabs.Screen name="mentionlegal" options={{ title: "Mention Légal" }} />
      <Tabs.Screen name="faireundon" options={{ title: "Faire un Don" }} />
    </Tabs>
  );
}
