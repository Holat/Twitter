import { StyleSheet, Text, View, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

export default function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.cont}>
        <View style={styles.user}>
          <Image
            source={require("../assets/images/user.jpeg")}
            style={{
              width: 40,
              height: 40,
              borderRadius: 50,
            }}
          />
          <Ionicons
            name="ellipsis-vertical-circle-outline"
            size={24}
            color="grey"
          />
        </View>
        <Text style={styles.num}>Holat</Text>
        <Text style={styles.fol}>@i_am_holat</Text>
        <View style={styles.follow}>
          <View style={styles.follow}>
            <Text style={styles.num}>1025</Text>
            <Text style={styles.fol}>Following</Text>
          </View>
          <View style={styles.follow}>
            <Text style={styles.num}>40M</Text>
            <Text style={styles.fol}>Followers</Text>
          </View>
        </View>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  cont: {
    padding: 10,
    borderBottomColor: "lightgray",
    borderBottomWidth: 0.5,
  },
  user: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  follow: {
    flexDirection: "row",
    marginRight: 10,
    marginTop: 5,
  },
  num: {
    fontWeight: "bold",
    marginRight: 5,
  },

  fol: {
    color: "grey",
  },
});
