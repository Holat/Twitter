import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Bookmarks = () => {
  return (
    <View
      style={{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <Ionicons name="bookmark-outline" size={24} color="grey" />
      <Text style={{ fontWeight: "bold", color: "grey", fontSize: 17 }}>
        No bookmarks
      </Text>
    </View>
  );
};

export default Bookmarks;
