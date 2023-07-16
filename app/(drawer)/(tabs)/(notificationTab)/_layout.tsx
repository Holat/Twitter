import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Mentions from "./Mentions";
import Verified from "./verified";
import Notification from "./notification";

const Tab = createMaterialTopTabNavigator();

export default function NotificationTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "600",
          textTransform: "capitalize",
        },
      }}
    >
      <Tab.Screen name="All" component={Notification} />
      <Tab.Screen name="verified" component={Verified} />
      <Tab.Screen name="Mentions" component={Mentions} />
    </Tab.Navigator>
  );
}
