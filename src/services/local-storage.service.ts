import AsyncStorage from '@react-native-async-storage/async-storage';

export function localStorageService() {
  const get = async (key: string) => {
    const data = (await AsyncStorage.getItem(key)) as string;

    if (!['undefined', 'null', undefined].includes(data)) {
      return JSON.parse(data);
    }
    return null;
  };

  const store = async (key: string, payload: any) => {
    await AsyncStorage.setItem(key, JSON.stringify(payload));
  };

  const clear = () => {
    AsyncStorage.clear();
  };

  const removeItem = async (key: string) => {
    await AsyncStorage.removeItem(key);
  };

  return {get, store, clear, removeItem};
}
