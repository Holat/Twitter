export type user = {
  id: string;
  username: string;
  name: string;
  image: string;
};

export type Tweets = {
  id: string;
  user: user;
  createdAt: string;
  content: string;
  image?: string;
  numberOfComments?: number;
  numberOfRetweets?: number;
  numberOfLikes?: number;
  impressions?: number;
};

export type Trend = {
  id: number;
  title: string;
  tweets: number;
};
