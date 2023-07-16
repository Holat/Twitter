import { View, Text } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";

import floatingBtnS from "./FloatingBtn";

type LoremProp = {
  text: string;
};

const Lorem = ({ text }: LoremProp) => {
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
        {text}
      </Text>
      <View style={floatingBtnS.floatinBtn}>
        <Entypo name="plus" size={24} color="white" />
      </View>
    </View>
  );
};

export default Lorem;
