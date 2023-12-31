import { Tabs } from "expo-router";
import { Pressable, useColorScheme, Image, TextInput } from "react-native";
import { DrawerActions, useNavigation } from "@react-navigation/native";
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
    <Pressable onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
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

function SearchBar({ placeholder }: any) {
  return (
    <TextInput
      placeholder={placeholder}
      style={{
        backgroundColor: "lightgrey",
        borderRadius: 50,
        width: 300,
        paddingHorizontal: 15,
        paddingVertical: 5,
        fontWeight: "600",
      }}
    />
  );
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        tabBarShowLabel: false,
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
          headerTitle: () => <SearchBar placeholder={"Search Twitter"} />,
          headerTitleAlign: "left",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="search1" color={color} />
          ),
          headerRight: () => (
            <AntDesign
              name="setting"
              size={24}
              color="grey"
              style={{ marginRight: 10 }}
            />
          ),
          headerLeft: () => <AvatarHeader />,
        }}
      />
      <Tabs.Screen
        name="spaces"
        options={{
          title: "Twitter",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="google-podcast"
              size={24}
              color={color}
            />
          ),
          headerLeft: () => <AvatarHeader />,
        }}
      />
      <Tabs.Screen
        name="(notificationTab)"
        options={{
          title: "Notifications",
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="ios-notifications-outline"
              size={24}
              color={color}
            />
          ),
          headerLeft: () => <AvatarHeader />,
          headerRight: () => (
            <AntDesign
              name="setting"
              size={24}
              color="grey"
              style={{ marginRight: 10 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          headerTitle: () => (
            <SearchBar placeholder={"Search Direct Messages"} />
          ),
          tabBarIcon: ({ color }) => (
            <FontAwesome name="envelope-o" size={24} color={color} />
          ),
          headerRight: () => (
            <AntDesign
              name="setting"
              size={24}
              color="grey"
              style={{ marginRight: 10 }}
            />
          ),
          headerLeft: () => <AvatarHeader />,
        }}
      />
    </Tabs>
  );
}
