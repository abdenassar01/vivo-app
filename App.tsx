import React, { useEffect } from "react";
import { StatusBar } from "react-native";
import "react-native-gesture-handler";
import SplashScreen from "react-native-splash-screen";
import { ThemeProvider } from "styled-components/native";
import { dark, light } from "./src/utils/theme";
import Toast from "react-native-toast-message";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Router from "./src/app/navigators/router";
import "./src/i18/i18n";
import { useThemeStore } from "./src/stores/theme";
import { useLangStore } from "./src/stores/lang";
import ReactQueryProvider from "./src/app/contexts/ReactQueryProvider";
import { AuthContextProvider } from "./src/app/contexts/AuthContext";

function App(): JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  const { currentTheme } = useThemeStore();
  const { currentLang } = useLangStore();

  return (
    <ThemeProvider
      theme={
        currentTheme === "light"
          ? { ...light, lang: currentLang }
          : { ...dark, lang: currentLang }
      }
    >
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <AuthContextProvider>
            <ReactQueryProvider>
              <StatusBar
                barStyle="dark-content"
                backgroundColor={light.primary}
              />
              <Router />
            </ReactQueryProvider>
          </AuthContextProvider>
        </NavigationContainer>
        <Toast visibilityTime={5000} />
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}

export default App;
