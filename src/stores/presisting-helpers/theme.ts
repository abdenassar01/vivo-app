import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

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
