/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import {ThemeProvider} from 'styled-components/native';
import {light} from './src/utils/theme';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Toast from 'react-native-toast-message';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Router from './src/app/navigators/router';

const queryClient = new QueryClient();

function App(): JSX.Element {
  useEffect(() => SplashScreen.hide(), []);

  return (
    <ThemeProvider theme={light}>
      <GestureHandlerRootView style={{flex: 1}}>
        <NavigationContainer>
          <QueryClientProvider client={queryClient}>
            <StatusBar backgroundColor={light.primary} />
            <Router />
          </QueryClientProvider>
        </NavigationContainer>
        <Toast visibilityTime={5000} />
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}

export default App;
