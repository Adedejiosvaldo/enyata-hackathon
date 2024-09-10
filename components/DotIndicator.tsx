// DotIndicator.tsx
import React from "react";
import { View, StyleSheet } from "react-native";

interface DotIndicatorProps {
  count: number;
  selectedIndex: number;
}

const DotIndicator: React.FC<DotIndicatorProps> = ({
  count,
  selectedIndex,
}) => {
  return (
    <View style={styles.container}>
      {Array.from({ length: count }).map((_, index) => (
        <View
          key={index}
          style={[styles.dot, index === selectedIndex && styles.selectedDot]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    zIndex: 10, // Ensure the dots are above the images
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: "white",
    opacity: 0.5,
    marginHorizontal: 2,
  },
  selectedDot: {
    width: 20,
    opacity: 1,
    backgroundColor: "white",
  },
});

export default DotIndicator;
