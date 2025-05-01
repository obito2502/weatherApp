export interface CityDataType {
  city: string;
  lat: string;
  lng: string;
  country: string;
}

export interface WeatherDataType {
  weather: {
    main: string;
    icon: string;
  }[];
  main: {
    temp: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  dt: number;
  timezone: number;
}
