import React from 'react';
import CitiesStore from './stores/CitiesStore';
import WeatherStore from './stores/WeatherStore';

class RootStore {
  citiesStore: CitiesStore;

  weatherStore: WeatherStore;

  constructor() {
    this.citiesStore = new CitiesStore();
    this.weatherStore = new WeatherStore();
  }
}

export const rootStore = new RootStore();

export const storesContext = React.createContext(rootStore);
