import { View, Text } from "react-native";
import React from "react";
import { Ionicons, Entypo } from "@expo/vector-icons";

import floatingBtnS from "../../../../components/FloatingBtn";
const Notification = () => {
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
      <Ionicons name="notifications-off" size={50} color="grey" />
      <Text style={{ fontWeight: "bold", color: "grey", fontSize: 17 }}>
        No notifications
      </Text>
      <View style={floatingBtnS.floatinBtn}>
        <Entypo name="plus" size={24} color="white" />
      </View>
    </View>
  );
};

export default Notification;
