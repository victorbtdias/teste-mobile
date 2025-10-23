import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createStaticNavigation,
  StaticParamList,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./screens/Home";
import { Profile } from "./screens/Profile";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import { useThemeContext } from "../contexts/ThemeContext";

const Tab = createBottomTabNavigator();

function TabNavigator() {
  const theme = useTheme();
  const { isDark } = useThemeContext();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 80,
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
        tabBarActiveTintColor: !isDark ? theme.colors.primary : "#9CA3AF",
        tabBarInactiveTintColor: !isDark ? "#9CA3AF" : theme.colors.primary,
        headerShown: false,
        tabBarShowLabel: true,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const RootStack = createNativeStackNavigator({
  screens: {
    HomeTabs: {
      screen: TabNavigator,
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
