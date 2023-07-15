import Tweet from "../../components/Tweet";
import tweets from "../../assets/data/tweets";
import { useSearchParams } from "expo-router";
import { Text } from "react-native";

const TweetScreen = () => {
  const { id } = useSearchParams();
  const tweet = tweets.find((t) => t.id === id);

  if (!tweet) {
    return <Text>Tweet {id} not found</Text>;
  }

  return <Tweet tweet={tweet} />;
};

export default TweetScreen;
