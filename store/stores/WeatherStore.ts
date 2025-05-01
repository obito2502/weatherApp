/* eslint-disable @typescript-eslint/no-explicit-any */
import { makeAutoObservable } from 'mobx';
import WeatherService from '../../src/network/services/WeatherService';
import { WeatherDataType } from '../../src/types/MainTypes';

class WeatherStore {
  public loader: boolean = false;

  public ha: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  getWeather = async (lat: string, lng: string) => {
    let weatherData: WeatherDataType | null = null;

    this.setLoader(true);
    try {
      weatherData = await WeatherService.getWeatherByCoord(lat, lng);
    } catch (err: any) {
      this.setHa(err);
    }
    this.setLoader(false);
    return weatherData;
  };

  setHa(item: string) {
    this.ha = item;
  }

  setLoader(item: boolean) {
    this.loader = item;
  }
}

export default WeatherStore;
