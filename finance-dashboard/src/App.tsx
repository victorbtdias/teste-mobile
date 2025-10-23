import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import { createURL } from "expo-linking";
import * as SplashScreen from "expo-splash-screen";
import * as React from "react";
import { useColorScheme } from "react-native";
import { Navigation } from "./navigation";
import { ThemeProvider } from "styled-components/native";
import { StatusBar } from "expo-status-bar";
import { myTheme } from "./styles/theme";
import { LinearGradient } from "expo-linear-gradient";
import Constants from "expo-constants";

SplashScreen.preventAutoHideAsync();

const prefix = createURL("/");

export function App() {
  const colorScheme = useColorScheme();

  const theme = colorScheme === "dark" ? DarkTheme : DefaultTheme;

  return (
    <ThemeProvider theme={myTheme}>
      <LinearGradient
        colors={["#6366F1", "#8B5CF6"]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
        style={{
          height: Constants.statusBarHeight,
          width: "100%",
        }}
      />
      <StatusBar style="light" />
      <Navigation
        theme={theme}
        linking={{
          enabled: "auto",
          prefixes: [prefix],
        }}
        onReady={() => {
          SplashScreen.hideAsync();
        }}
      />
    </ThemeProvider>
  );
}
