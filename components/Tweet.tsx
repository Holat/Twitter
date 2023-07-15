import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  Pressable,
} from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";

import { Tweets } from "../types";
import IconButton from "./IconButton";
import { Link } from "expo-router";

type tweetProps = {
  tweet: Tweets;
};

const Tweet = ({ tweet }: tweetProps) => {
  return (
    <Link href={`/tweet/${tweet.id}`} asChild>
      <Pressable style={styles.container}>
        <Image source={{ uri: tweet.user.image }} style={styles.userImage} />
        <View style={styles.mainContainer}>
          <View style={styles.nameCont}>
            <Text style={styles.name}>{tweet.user.name}</Text>
            <Text style={styles.username}> @{tweet.user.username} • 2h</Text>
            <Entypo
              name="dots-three-horizontal"
              size={16}
              color="gray"
              style={{ marginLeft: "auto" }}
            />
          </View>
          <Text style={styles.content}>{tweet.content}</Text>
          {tweet.image && (
            <Image source={{ uri: tweet.image }} style={styles.image} />
          )}
          <View style={styles.footer}>
            <IconButton icon={"comment"} text={tweet.numberOfComments} />
            <IconButton icon={"retweet"} text={tweet.numberOfRetweets} />
            <IconButton icon={"heart"} text={tweet.numberOfLikes} />
            <IconButton icon={"chart"} text={tweet.impressions || 0} />
            <IconButton
              icon={Platform.OS === "android" ? "share-google" : "share-apple"}
            />
          </View>
        </View>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "lightgrey",
    backgroundColor: "white",
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
    color: "gray",
  },

  mainContainer: {
    marginLeft: 10,
    flex: 1,
  },

  content: {
    lineHeight: 20,
    marginTop: 5,
  },

  image: {
    width: "100%",
    aspectRatio: 16 / 9,
    borderRadius: 12,
    marginVertical: 10,
  },

  footer: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-between",
    marginVertical: 5,
  },
});

export default Tweet;
