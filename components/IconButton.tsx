import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { EvilIcons } from "@expo/vector-icons";

type IconButtonProps = {
  icon: React.ComponentProps<typeof EvilIcons>["name"];
  text?: number | string;
};

const IconButton = ({ icon, text }: IconButtonProps) => {
  return (
    <View style={styles.comment}>
      <EvilIcons name={icon} size={22} color="gray" />
      <Text style={styles.number}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  comment: {
    flexDirection: "row",
    alignItems: "center",
  },

  number: {
    color: "gray",
    fontSize: 12,
  },
});

export default IconButton;
