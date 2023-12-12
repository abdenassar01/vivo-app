import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

export const storeOnBoarding = async (value: boolean) => {
  try {
    await AsyncStorage.setItem('@onboarding', `${value}`);
  } catch (e) {
    Alert.alert('Error presesting OnBoarding value');
  }
};

export const getOnBoarding = async () => {
  try {
    const value = await AsyncStorage.getItem('@onboarding');
    return value;
  } catch (e) {
    Alert.alert('Error reading OnBoarding value');
  }
};
