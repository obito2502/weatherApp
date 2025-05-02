import AsyncStorage from '@react-native-async-storage/async-storage';
import { CachedWeatherData, WeatherDataType } from '../types/MainTypes';

class LocalStorage {
  static async getItem(key: string) {
    const localData = await AsyncStorage.getItem(key);
    if (!localData) {
      return null;
    }
    return JSON.parse(localData) as CachedWeatherData;
  }

  static async saveData(key: string, data: WeatherDataType) {
    const saveData: CachedWeatherData = {
      date: new Date(),
      weatherData: data,
    };
    await AsyncStorage.setItem(key, JSON.stringify(saveData));
  }
}

export default LocalStorage;
