import React from 'react';
import CitiesStore from './stores/CitiesStore';
import WeatherStore from './stores/WeatherStore';
import ThemeStore from './stores/ThemeStore';

class RootStore {
  citiesStore: CitiesStore;

  themeStore: ThemeStore;

  weatherStore: WeatherStore;

  constructor() {
    this.citiesStore = new CitiesStore();
    this.weatherStore = new WeatherStore();
    this.themeStore = new ThemeStore();
  }
}

export const rootStore = new RootStore();

export const storesContext = React.createContext(rootStore);
