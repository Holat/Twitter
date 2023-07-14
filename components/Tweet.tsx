import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

import tweets from "../assets/data/tweets";
const tweet = tweets[1];

const Tweet = () => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: tweet.user.image }} style={styles.userImage} />
      <View style={styles.mainContainer}>
        <View style={styles.nameCont}>
          <Text style={styles.name}>{tweet.user.name}</Text>
          <Text style={styles.username}> @{tweet.user.username}</Text>
        </View>
        <Text style={styles.content}>{tweet.content}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "lightgrey",
  },

  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },

  nameCont: {
    flexDirection: "row",
  },

  name: {
    fontWeight: "600",
  },

  username: {
    color: "darkgrey",
  },

  mainContainer: {
    marginLeft: 10,
    flex: 1,
  },

  content: {
    lineHeight: 20,
    marginTop: 5,
  },
});

export default Tweet;
