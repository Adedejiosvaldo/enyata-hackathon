import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      className="h-0 bg-red-600 text-white"
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className=" color-white">
        Edit app/index.tsx to edit this screen.
      </Text>
    </View>
  );
}
