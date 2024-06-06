import * as SplashScreen from "expo-splash-screen";
import { Stack } from "expo-router";

export default function RootLayout() {
  // charger les couleurs
  // charger les fonts
  // Afficher un splashScreen mentionnant Hello Isitech et le logo et
  // l'enlever lorsque vos assets (fonts, ...etc) sont correctement chargés
  // Utilisez le hook useEffect (et useState)

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
