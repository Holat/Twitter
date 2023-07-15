import { Image, StyleSheet, FlatList, Pressable } from "react-native";
import EditScreenInfo from "../../../components/EditScreenInfo";
import { Text, View } from "../../../components/Themed";
import { Entypo } from "@expo/vector-icons";

import Tweet from "../../../components/Tweet";
import tweets from "../../../assets/data/tweets";
import { Link } from "expo-router";

export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      <FlatList
        data={tweets}
        renderItem={({ item }) => <Tweet tweet={item} />}
      />
      <Link href={"/new-tweet"} asChild style={styles.floatingBtn}>
        <Entypo name="plus" size={24} color="white" />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "white",
  },

  floatingBtn: {
    backgroundColor: "#1DA1F2",
    width: 50,
    height: 50,
    borderRadius: 50,
    lineHeight: 50,
    textAlign: "center",
    position: "absolute",
    right: 15,
    bottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
