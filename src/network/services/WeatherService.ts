import request from '../axios';

class WeatherService {
  static async getWeatherByCoord(lat: string, lng: string) {
    const result = await request.get(`lat=${lat}&lon=${lng}&units=metric`);
    return result.data;
  }
}

export default WeatherService;
