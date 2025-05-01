import { NativeStackScreenProps } from '@react-navigation/native-stack';
import SCREENS from '../enum/SCREENS';
import { CityDataType } from './MainTypes';

// MAIN NAVIGATION
export type MainNavigationParamList = {
  CITY_WEATHER_STACK: undefined;
};

export type CityWeatherNavigationParamList = {
  CITY_SEARCH: undefined;
  CITY_WEATHER: { city: CityDataType };
};

export type CitySearchScreenProps = NativeStackScreenProps<
  CityWeatherNavigationParamList,
  SCREENS.CITY_SEARCH
>;

export type CityWeatherScreenProps = NativeStackScreenProps<
  CityWeatherNavigationParamList,
  SCREENS.CITY_WEATHER
>;
