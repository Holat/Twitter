import { StyleSheet, FlatList, View } from "react-native";
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
      <Link
        href={"/new-tweet"}
        style={[floatingBtnS.floatinBtn, styles.fl]}
        asChild
      >
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

  fl: {
    lineHeight: 50,
    textAlign: "center",
  },
});
