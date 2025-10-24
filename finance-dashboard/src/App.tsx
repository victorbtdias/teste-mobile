import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import { createURL } from "expo-linking";
import * as SplashScreen from "expo-splash-screen";
import * as React from "react";
import { Navigation } from "./navigation";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import Constants from "expo-constants";
import { ThemeProvider, useThemeContext } from "./contexts/ThemeContext";
import { useTheme } from "styled-components/native";
import { ValuesVisibilityProvider } from "./contexts/ValuesVisibilityContext";
import { CurrencyProvider } from "./contexts/CurrencyContext";
import ErrorBoundary from "./components/Error";

SplashScreen.preventAutoHideAsync();

const prefix = createURL("/");

function AppContent() {
  const theme = useTheme();
  const { isDark } = useThemeContext();
  const navigationTheme = isDark ? DarkTheme : DefaultTheme;

  return (
    <>
      <LinearGradient
        colors={[theme.colors.primary, theme.colors.gradient]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
        style={{
          height: Constants.statusBarHeight,
          width: "100%",
        }}
      />
      <StatusBar style={"light"} />
      <Navigation
        theme={navigationTheme}
        linking={{
          enabled: "auto",
          prefixes: [prefix],
        }}
        onReady={() => {
          SplashScreen.hideAsync();
        }}
      />
    </>
  );
}

export function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <ValuesVisibilityProvider>
          <CurrencyProvider>
            <AppContent />
          </CurrencyProvider>
        </ValuesVisibilityProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
