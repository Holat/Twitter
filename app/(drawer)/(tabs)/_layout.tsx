import { Link, Tabs, useNavigation } from "expo-router";
import { Pressable, useColorScheme, Image, TextInput } from "react-native";
import {
  AntDesign,
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome,
} from "@expo/vector-icons";

import Colors from "../../../constants/Colors";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof AntDesign>["name"];
  color: string;
}) {
  return <AntDesign size={24} style={{ marginBottom: -3 }} {...props} />;
}

function AvatarHeader() {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.openDrawer()}>
      <Image
        source={{ uri: "https://files.fm/thumb_show.php?i=rpcdpy4jn" }}
        style={{ width: 30, aspectRatio: 1, borderRadius: 40, marginLeft: 10 }}
      />
    </Pressable>
  );
}

function Logo() {
  return (
    <Image
      source={require("../../../assets/images/logo.png")}
      style={{ width: 30, height: 30, marginLeft: 10 }}
    />
  );
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: () => <Logo />,
          headerTitleAlign: "center",
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerLeft: () => <AvatarHeader />,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          headerTitle: () => (
            <TextInput
              placeholder="Search Twitter"
              style={{
                backgroundColor: "lightgrey",
                borderRadius: 50,
                width: 300,
                paddingHorizontal: 15,
                paddingVertical: 5,
                fontWeight: "600",
              }}
            />
          ),
          headerTitleAlign: "left",
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="search1" color={color} />
          ),
          headerRight: () => (
            <AntDesign
              name="setting"
              size={24}
              color="black"
              style={{ marginRight: 10 }}
            />
          ),
          headerLeft: () => <AvatarHeader />,
        }}
      />
      <Tabs.Screen
        name="spaces"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="google-podcast"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="notification"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="ios-notifications-outline"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="envelope-o" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
