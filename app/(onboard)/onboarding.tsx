import React, { useState, useRef } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  StyleSheet,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import images from "../../constants/images";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

interface Page {
  id: string;
  title: string;
  subtitle: string;
  image: any; // Consider using a more specific type if possible
}

const pages: Page[] = [
  {
    id: "1",
    title: "Connect All Your Accounts",
    subtitle:
      "Link all your bank accounts in one place and manage your finances effortlessly.",
    image: images.onboard1,
  },
  {
    id: "2",
    title: "Automate Your Savings",
    subtitle:
      "Set goals, automate deposits, and control spending with custom limits.",
    image: images.onboard2,
  },
  {
    id: "3",
    title: "Take Control of Your Finances",
    subtitle:
      "Track income and expenses across all accounts, automate payments, and more.",
    image: images.onboard3,
  },
];

const CustomOnboardScreen: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const selectedIndex = Math.round(contentOffsetX / width);
    setCurrentIndex(selectedIndex);
  };

  const flatListRef = useRef<FlatList<Page>>(null);
  const router = useRouter();

  const handleNext = () => {
    if (currentIndex < pages.length - 1) {
      flatListRef.current?.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
      setCurrentIndex(currentIndex + 1);
    } else {
      handleOnboardingComplete();
    }
  };

  const handleOnboardingComplete = async () => {
    await AsyncStorage.setItem("isFirstTimeOpen", "false");
    router.replace("/login");
  };

  const renderItem = ({ item }: { item: Page }) => (
    <View style={styles.pageContainer}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} resizeMode="contain" />
      </View>
      <Text className="font-pbold text-2xl mb-1 ">{item.title}</Text>
      <Text className="font-plight text-lg">{item.subtitle}</Text>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 ">
      <View className="h-full">
        <TouchableOpacity className="mt-9" onPress={handleOnboardingComplete}>
          <Text className=" mr-4 text-right">Skippo</Text>
        </TouchableOpacity>
        <FlatList
          ref={flatListRef}
          data={pages}
          renderItem={renderItem}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          onScroll={onScroll}
          style={styles.flatList}
        />

        {/* Conditional rendering based on currentIndex */}
        {currentIndex === pages.length - 1 ? (
          <View className="flex-row justify-evenly mt-3 py-16">
            <TouchableOpacity
              className="border border-primary rounded-lg p-4" // Added rounded-lg for rounded corners and padding
              onPress={() => router.replace("/login")}
            >
              <Text className="text-lg">Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.replace("/signup")}>
              <Text className="text-lg">Sign Up</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.bottomNav}>
            <View style={styles.pagination}>
              {pages.map((_, index) => (
                <View
                  key={index}
                  style={[
                    styles.paginationDot,
                    index === currentIndex && styles.paginationDotActive,
                  ]}
                />
              ))}
            </View>

            <TouchableOpacity onPress={handleNext} style={styles.nextButton}>
              <AntDesign name="arrowright" size={24} color="white" />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  //   content: {
  //     flex: 1,
  //   },
  skipButton: {},
  skipText: {
    color: "#3B82F6",
    fontSize: 18,
  },
  flatList: {
    flex: 1,
  },
  pageContainer: {
    width: width,
    alignItems: "flex-start",
    paddingHorizontal: 13,
    justifyContent: "flex-start",
  },
  imageContainer: {
    width: width - 23,
    height: width,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 24,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#4B5563",
    textAlign: "center",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  pagination: {
    flexDirection: "row",
  },
  paginationDot: {
    width: 12,
    height: 12,
    borderRadius: 30,
    backgroundColor: "#D1D5DB",
    marginHorizontal: 4,
  },
  paginationDotActive: {
    backgroundColor: "#4bc355",
  },
  nextButton: {
    backgroundColor: "#3B82F6",
    borderRadius: 24,
    padding: 12,
  },
});

export default CustomOnboardScreen;
