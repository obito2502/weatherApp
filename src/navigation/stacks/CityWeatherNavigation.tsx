import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { CityWeatherNavigationParamList } from '../../types/NavigationType';
import SCREENS from '../../enum/SCREENS';
import CitySearchScreen from '../../screens/CitySearchScreen';
import CityWeatherScreen from '../../screens/CityWeatherScreen';

const Stack = createNativeStackNavigator<CityWeatherNavigationParamList>();

const CityWeatherNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={SCREENS.CITY_SEARCH} component={CitySearchScreen} />
      <Stack.Screen name={SCREENS.CITY_WEATHER} component={CityWeatherScreen} />
    </Stack.Navigator>
  );
};

export default CityWeatherNavigation;
