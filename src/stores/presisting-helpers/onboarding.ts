import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

export const storeOnBoarding = async (value: boolean) => {
  try {
    await AsyncStorage.setItem('@onboarding', `${value}`);
  } catch (e) {
    Alert.alert('Error presesting OnBoarding value');
  }
};

export const getTheme = async () => {
  try {
    const value = await AsyncStorage.getItem('@onboarding');
    if (value !== null) {
      return value;
    }
    return null;
  } catch (e) {
    Alert.alert('Error reading OnBoarding value');
  }
};
