import { StyleSheet, View, Text, FlatList } from "react-native";

import Trends from "../../../components/Trends";
import trends from "../../../assets/data/trends";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Trends for You</Text>
      <FlatList
        data={trends}
        renderItem={({ item }) => <Trends trends={item} />}
      />
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
