import {
  Image,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  StatusBar,
} from "react-native";
import React from "react";
import { useState } from "react";
import { Link, useRouter } from "expo-router";
import { Entypo } from "@expo/vector-icons";

const user = {
  id: "u1",
  username: "holat",
  name: "Holat",
  image:
    "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.png",
};

export default function NewTweet() {
  const [text, setText] = useState("");
  const router = useRouter();

  const onTweetPress = () => {
    console.warn(text);

    setText("");
    router.back();
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.cont}>
        <View style={styles.btnCont}>
          <Link href={"../"} style={{ fontSize: 20 }}>
            <Entypo name="cross" size={30} color="black" />
          </Link>
          <View style={styles.TD}>
            <Pressable>
              <Text style={styles.drafts}>Drafts</Text>
            </Pressable>
            <Pressable onPress={onTweetPress} style={styles.btn}>
              <Text style={styles.btnText}>Tweet</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.inputCont}>
          <Image source={{ uri: user.image }} style={styles.img} />
          <View style={{ flex: 1 }}>
            <Pressable style={styles.pCont}>
              <Text style={styles.public}>Public</Text>
              <Entypo name="chevron-small-down" size={24} color="#1DA1F2" />
            </Pressable>
            <TextInput
              value={text}
              onChangeText={setText}
              placeholder="What's happening?"
              multiline
              numberOfLines={5}
              style={{
                textAlignVertical: "top",
                paddingLeft: 5,
              }}
              cursorColor={"#1DA1F2"}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cont: {
    padding: 10,
    backgroundColor: "white",
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  img: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 50,
    marginRight: 10,
  },

  btnCont: {
    flexDirection: "row",
    marginVertical: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },

  btn: {
    backgroundColor: "#1DA1F2",
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
  },

  btnText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  inputCont: {
    flexDirection: "row",
    // alignItems: "center",
  },

  drafts: {
    color: "#1DA1F2",
    fontWeight: "bold",
    fontSize: 16,
    marginRight: 15,
  },

  TD: {
    flexDirection: "row",
    alignItems: "center",
  },

  public: {
    color: "#1DA1F2",
  },

  pCont: {
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#1DA1F2",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 10,
    paddingVertical: 2,
    width: 80,
    marginBottom: 10,
  },
});
