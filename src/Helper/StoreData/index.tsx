import AsyncStorage from '@react-native-async-storage/async-storage';

export const setItem = async (key: any, value: any) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.error(e);
  }
};

export const getItem = async (key: any) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value; // Return the retrieved value
  } catch (e) {
    console.error(e);
    return null; // Return null or handle the error as needed
  }
};

export const multiGetItem = async (key1: any, key2: any) => {
  try {
    const value = await AsyncStorage.multiGet([key1, key2]);
    return value; // Return the retrieved value
  } catch (e) {
    console.error(e);
    return null; // Return null or handle the error as needed
  }
};
export const multiSetItem = async (
  key1: any,
  value1: any,
  key2: any,
  value2: any,
) => {
  try {
    const value = await AsyncStorage.multiSet([
      [key1, value1],
      [key2, value2],
    ]);
    return value; // Return the retrieved value
  } catch (e) {
    console.error(e);
    return null; // Return null or handle the error as needed
  }
};

export const removeItem = async (key: any) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.error(e);
  }
};
