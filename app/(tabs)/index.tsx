import { Image, StyleSheet } from "react-native";
// import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";

import Tweet from "../../components/Tweet";

export default function TabOneScreen() {
  return <Tweet />;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "lightgrey",
  },
});
