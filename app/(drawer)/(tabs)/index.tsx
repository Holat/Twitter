import { StyleSheet, FlatList, Pressable } from "react-native";
import { View } from "../../../components/Themed";
import { Entypo } from "@expo/vector-icons";
import { Link } from "expo-router";

import Tweet from "../../../components/Tweet";
import tweets from "../../../assets/data/tweets";
import floatingBtnS from "../../../components/FloatingBtn";

export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      <FlatList
        data={tweets}
        renderItem={({ item }) => <Tweet tweet={item} />}
      />
      <Link href={"/new-tweet"} asChild>
        <View style={floatingBtnS.floatinBtn}>
          <Entypo name="plus" size={24} color="white" />
        </View>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "white",
  },
});
