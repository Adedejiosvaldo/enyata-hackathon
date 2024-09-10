import { Stack } from "expo-router";
import SweetScreen from "./sweet"; // Ensure this import is correct

const OnboardingScreen = () => {
  return (
    <Stack>
      <Stack.Screen name="sweet" options={{ headerShown: false }} />
      <Stack.Screen name="onboarding" options={{ headerShown: false }} />
    </Stack>
  );
};

export default OnboardingScreen;
