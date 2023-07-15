import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import floatingBtnS from "../../../components/FloatingBtn";

const Messages = () => {
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
      <Text style={{ fontWeight: "bold", color: "grey", fontSize: 17 }}>
        No Messages
      </Text>
      <View style={floatingBtnS.floatinBtn}>
        <MaterialCommunityIcons
          name="email-plus-outline"
          size={24}
          color="white"
        />
      </View>
    </View>
  );
};

export default Messages;
