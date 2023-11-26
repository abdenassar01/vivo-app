import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

export type ThemeType = {
  background: string;
  secondaryBackground: string;
  primary: string;
  secondary: string;
  tertiary: string;
  text: string;
  helperText: string;
};

const appColors = {
  primary: '#3878FE',
  secondary: '#27AC6D',
  tertiary: '#00A179',
  white: '#F2F9F9',
  black: '#01191A',
};

export const light: ThemeType = {
  background: '#E4E6EB',
  secondaryBackground: '#FAF8FB',
  text: appColors.black,
  helperText: '#B6B6B6',
  ...appColors,
};

export const dark: ThemeType = {
  background: '#242526',
  secondaryBackground: '#18191A',
  text: appColors.white,
  helperText: '#B6B6B6',
  ...appColors,
};

export const storeTheme = async (value: string) => {
  try {
    await AsyncStorage.setItem('@theme', value);
  } catch (e) {
    Alert.alert('Error presesting theme value');
  }
};

export const getTheme = async () => {
  try {
    const value = await AsyncStorage.getItem('@theme');
    if (value !== null) {
      return value;
    }
  } catch (e) {
    Alert.alert('Error reading theme value');
  }
};
