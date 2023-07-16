import { withLayoutContext } from "expo-router";
import {
  DrawerContentScrollView,
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import { Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "expo-router";

import CustomDrawerContent from "../../components/CustomDrawerContent";

const DrawerNavigator = createDrawerNavigator().Navigator;
const Drawer = withLayoutContext(DrawerNavigator);
export const unstable_settings = {
  initialRouteName: "(tabs)",
};

const BackArrow = () => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.goBack()} style={{ marginLeft: 10 }}>
      <AntDesign name="arrowleft" size={24} color="black" />
    </Pressable>
  );
};

export default function DrawerLayout() {
  const navigation = useNavigation();
  return (
    <Drawer drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="(tabs)"
        options={{ headerShown: false, title: "Home" }}
      />
      <Drawer.Screen
        name="bookmarks"
        options={{
          title: "Bookmarks",
          headerLeft: () => <BackArrow />,
        }}
      />
      <Drawer.Screen
        name="twitter-blue"
        options={{
          title: "Twitter Blue",
          headerLeft: () => <BackArrow />,
        }}
      />
    </Drawer>
  );
}
