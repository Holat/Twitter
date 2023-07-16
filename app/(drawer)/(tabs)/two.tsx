import { StyleSheet, View, Text, FlatList, Pressable } from "react-native";
import { Entypo } from "@expo/vector-icons";

import Trends from "../../../components/Trends";
import trends from "../../../assets/data/trends";
import floatingBtnS from "../../../components/FloatingBtn";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Trends for You</Text>
      <FlatList
        data={trends}
        renderItem={({ item }) => <Trends trends={item} />}
      />
      <View style={floatingBtnS.floatinBtn}>
        <Entypo name="plus" size={24} color="white" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    borderTopWidth: 0.7,
    borderTopColor: "lightgrey",
  },
  txt: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 12,
    paddingLeft: 12,
    paddingTop: 5,
  },
});
