import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { MainNavigationParamList } from '../types/NavigationType';
import STACKS from '../enum/STACKS';
import CityWeatherNavigation from './stacks/CityWeatherNavigation';

const Stack = createNativeStackNavigator<MainNavigationParamList>();

const MainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={STACKS.CITY_WEATHER_STACK} component={CityWeatherNavigation} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
