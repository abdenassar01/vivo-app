import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

export const storeToken = async (value: string) => {
  try {
    await AsyncStorage.setItem('@auth_token', value);
  } catch (e) {
    Alert.alert('Error presesting theme value');
  }
};

export const clearToken = async () => {
  await AsyncStorage.removeItem('@auth_token');
};

export const clearIsAuthenticatd = async () => {
  await AsyncStorage.removeItem('@is_authenticated');
};

export const getToken = async () => {
  try {
    const value = await AsyncStorage.getItem('@auth_token');
    if (value !== null) {
      return value;
    }
  } catch (e) {
    Alert.alert('Error reading token value');
  }
};

export const storeIsAuthenticatd = async (value: boolean) => {
  try {
    await AsyncStorage.setItem('@is_authenticated', `${value}`);
  } catch (e) {
    Alert.alert('Error presesting isAuth value');
  }
};

export const getIsAuthenticatd = async () => {
  try {
    const value = await AsyncStorage.getItem('@is_authenticated');
    if (value !== null) {
      return value;
    }
  } catch (e) {
    Alert.alert('Error reading isAuth value');
  }
};

export const storeUser = async (value: string) => {
  try {
    await AsyncStorage.setItem('@user', value);
  } catch (e) {
    Alert.alert('Error presesting user value');
  }
};

export const getStoredUser = async () => {
  try {
    const value = await AsyncStorage.getItem('@user');
    if (value !== null) {
      return value;
    }
  } catch (e) {
    Alert.alert('Error reading user value');
  }
};

export const clearStoredUser = async () => {
  await AsyncStorage.removeItem('@user');
};
