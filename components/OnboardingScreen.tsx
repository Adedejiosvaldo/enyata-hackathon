// OnboardScreen.tsx
import React from "react";
import { Image } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import images from "../constants/images";

const OnboardScreen = () => {
  const router = useRouter();

  const handleOnboardingComplete = async () => {
    await AsyncStorage.setItem("isFirstTimeOpen", "false");
    router.replace("/login"); // Navigates to the Auth screen
  };

  return (
    <Onboarding
      onSkip={handleOnboardingComplete}
      onDone={handleOnboardingComplete}
      pages={[
        {
          backgroundColor: "#F2F2F2",
          image: <Image source={images.onboard1} />,
          title: "Welcome to the App",
          subtitle: "This is the first step of onboarding.",
        },
        {
          backgroundColor: "#F2F2F2",
          image: <Image source={images.onboard2} />,
          title: "Explore Features",
          subtitle: "Discover what our app can do for you.",
        },
        {
          backgroundColor: "#F2F2F2",
          image: <Image source={images.onboard3} />,
          title: "Get Started",
          subtitle: "Let’s get you started with your journey.",
        },
      ]}
    />
  );
};

export default OnboardScreen;
