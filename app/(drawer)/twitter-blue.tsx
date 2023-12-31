import { View, Text } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const TwitterBlue = () => {
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
      <AntDesign name="twitter" size={24} color="grey" />
      <Text style={{ fontWeight: "bold", color: "grey", fontSize: 17 }}>
        No bookmarks
      </Text>
    </View>
  );
};

export default TwitterBlue;
