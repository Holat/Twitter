import { View, Text } from "react-native";
import React from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import floatingBtnS from "../../../components/FloatingBtn";

const Spaces = () => {
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
      <Ionicons name="planet-sharp" size={50} color="grey" />
      <Text style={{ fontWeight: "bold", color: "grey", fontSize: 17 }}>
        Spaces
      </Text>
      <View style={floatingBtnS.floatinBtn}>
        <MaterialCommunityIcons name="google-podcast" size={24} color="white" />
      </View>
    </View>
  );
};

export default Spaces;
