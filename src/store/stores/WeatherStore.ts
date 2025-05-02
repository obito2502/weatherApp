import { makeAutoObservable } from 'mobx';
import { WeatherDataType } from '../../types/MainTypes';
import WeatherService from '../../network/services/WeatherService';

class WeatherStore {
  public loader: boolean = false;

  public errorMessage: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  getWeather = async (lat: string, lng: string) => {
    let weatherData: WeatherDataType | null = null;

    this.setLoader(true);
    try {
      weatherData = await WeatherService.getWeatherByCoord(lat, lng);
    } catch {
      this.setError('Something went wrong');
    }
    this.setLoader(false);
    return weatherData;
  };

  setLoader(item: boolean) {
    this.loader = item;
  }

  setError(item: string) {
    this.errorMessage = item;
  }
}

export default WeatherStore;
