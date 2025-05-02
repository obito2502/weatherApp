import Config from 'react-native-config';
import moment from 'moment';
import request from '../axios';
import networkConfig from '../networkConfig';
import { CachedWeatherData } from '../../types/MainTypes';
import LocalStorage from '../../utils/localStore';

class WeatherService {
  static async getWeatherByCoord(lat: string, lng: string) {
    const fullUrl = `${networkConfig.apiUrl}/weather?appid=${Config.API_KEY}&lat=${lat}&lon=${lng}&units=metric`;
    let cachedData: CachedWeatherData | null = null;
    cachedData = await LocalStorage.getItem(fullUrl);
    if (cachedData && moment(cachedData.date).diff(new Date(), 'h') < 1) {
      return cachedData.weatherData;
    }
    const result = await request.get(`lat=${lat}&lon=${lng}&units=metric`);
    await LocalStorage.saveData(fullUrl, result.data);
    return result.data;
  }
}

export default WeatherService;
