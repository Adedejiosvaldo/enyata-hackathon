// _layout.tsx
import { View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { SplashScreen, Stack } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import "./global.css";
import { useFonts } from "expo-font";

// Prevent splash screen from auto hiding
SplashScreen.preventAutoHideAsync();

const Root = () => {
  const [isFirstTimeLoad, setIsFirstTimeLoad] = useState(true);
  // Imports fonts
  const [fontsLoaded, err] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  useEffect(() => {
    if (err) throw err;
  }, [err]);

  const checkForFirstTimeLoaded = async () => {
    const result = await AsyncStorage.getItem("isFirstTimeOpen");
    if (result !== null) {
      setIsFirstTimeLoad(false);
    }

    console.log(isFirstTimeLoad);
  };

  useEffect(() => {
    checkForFirstTimeLoaded();
  }, []);

  if (!fontsLoaded && !err) return null;

  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen name="(onboard)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
        {/* Remove the index screen from here if you want to avoid showing it */}
      </Stack>
    </View>
  );
};

export default Root;
