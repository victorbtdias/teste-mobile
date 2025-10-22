import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createStaticNavigation,
  StaticParamList,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./screens/Home";
import { Profile } from "./screens/Profile";
import { Entypo, Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator({
  screens: {
    Home: {
      screen: Home,
      options: {
        title: "Home",
        tabBarIcon: ({ color, size }) => (
          <Entypo name="home" size={size} color={color} />
        ),
      },
    },
    Profile: {
      screen: Profile,
      options: {
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="person" size={size} color={color} />
        ),
      },
    },
  },
  screenOptions: {
    tabBarStyle: {
      height: 80,
      backgroundColor: "#FFFFFF",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      borderTopWidth: 1,
      borderTopColor: "#E5E7EB",
      paddingLeft: 100,
      paddingRight: 100,
    },
    tabBarItemStyle: {
      height: 24,
    },
    tabBarLabelStyle: {
      fontSize: 12,
      lineHeight: 16,
      fontWeight: 400,
    },
    tabBarActiveTintColor: "#6366F1",
    tabBarInactiveTintColor: "#9CA3AF",
    headerShown: false,
    tabBarShowLabel: true,
  },
});

const RootStack = createNativeStackNavigator({
  screens: {
    HomeTabs: {
      screen: Tab,
      options: { headerShown: false },
    },
  },
});

export const Navigation = createStaticNavigation(RootStack);

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
