import { useEffect } from "react";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Index = () => {
  const router = useRouter();

  useEffect(() => {
    const checkFirstTime = async () => {
      const isFirstTime = await AsyncStorage.getItem("isFirstTimeOpen");
      if (isFirstTime === null) {
        // If it's the first time, navigate to the onboarding screen
        router.replace("/onboarding");
      } else {
        // Otherwise, navigate to the auth screen
        router.replace("/(auth)");
      }
    };

    checkFirstTime();
  }, []);

  return null; // No UI needed, just a redirect
};

export default Index;
