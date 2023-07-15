import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";

import { Trend } from "../types";

type TrendProp = {
  trends: Trend;
};

const Trends = ({ trends }: TrendProp) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 12,
      }}
    >
      <View style={{ flexDirection: "column", alignItems: "flex-start" }}>
        <Text style={{ color: "gray", fontSize: 13, fontWeight: "500" }}>
          Trending in Nigeria
        </Text>
        <Text style={{ fontSize: 17, fontWeight: "bold" }}>{trends.title}</Text>
        <Text style={{ color: "gray", fontSize: 13, fontWeight: "500" }}>
          {trends.tweets}k Tweets
        </Text>
      </View>
      <Entypo name="dots-three-vertical" size={13} color="gray" />
    </View>
  );
};

export default Trends;
