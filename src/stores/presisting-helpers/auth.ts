import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

export const storeLoggedIn = async (value: boolean) => {
  try {
    await AsyncStorage.setItem('@isAuthenticated', `${value}`);
  } catch (e) {
    Alert.alert('Error presesting isAuthenticated value');
  }
};

export const getLoggedIn = async () => {
  try {
    const value = await AsyncStorage.getItem('@isAuthenticated');
    if (value !== null) {
      return value;
    }
  } catch (e) {
    Alert.alert('Error reading isAuthenticated value');
  }
};

export const clearLogin = async () => {
  try {
    return await AsyncStorage.removeItem('@isAuthenticated');
  } catch (e) {
    Alert.alert('Error reading isAuthenticated value');
  }
};
