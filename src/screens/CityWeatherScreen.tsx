import { Image, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { observer } from 'mobx-react-lite';
import moment from 'moment';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { CityWeatherScreenProps } from '../types/NavigationType';
import Colors from '../styles/Colors';
import Text from '../components/Text';
import { screenWidth } from '../utils/getScreenSize';
import { resizeHeight, resizeWidth } from '../utils/resizeHelper';
import resizeFont from '../utils/resizeFont';
import Header from '../components/cityWeather/Header';
import Loader from '../components/Loader';
import { WeatherDataType } from '../types/MainTypes';
import getImageUrl from '../utils/getImageUrl';
import useRootStore from '../store/useRootStore';

const CityWeatherScreen = ({ route, navigation }: CityWeatherScreenProps) => {
  const { city } = route.params;
  const { weatherStore } = useRootStore();

  const [weatherData, setWeatherData] = useState<WeatherDataType | null>(null);

  useEffect(() => {
    weatherStore.getWeather(city.lat, city.lng).then((res) => setWeatherData(res));

    return () => {
      weatherStore.setError('');
    };
  }, [city.lat, city.lng, weatherStore]);

  if (weatherStore.loader) {
    return (
      <SafeAreaView style={styles.container}>
        <Header cityName={city.city} goBack={() => navigation.goBack()} />
        <Loader />
      </SafeAreaView>
    );
  }

  if (weatherStore.errorMessage || !weatherData) {
    return (
      <SafeAreaView style={styles.container}>
        <Header cityName={city.city} goBack={() => navigation.goBack()} />
        <Text color={Colors.red} size={26} style={styles.errorText}>
          {weatherStore.errorMessage}
        </Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header cityName={city.city} goBack={() => navigation.goBack()} />
      <Text style={styles.dateText}>
        {moment.unix(weatherData?.dt).utc().format('D MMM, dddd')}
      </Text>
      <View style={styles.iconTempView}>
        <Image source={{ uri: getImageUrl(weatherData?.weather[0].icon) }} style={styles.icon} />
        <Text size={96}>{weatherData?.main.temp.toFixed(0)}</Text>
      </View>
      <Text size={36} style={styles.tempText} weight="500">
        {weatherData?.weather[0].main}
      </Text>
      <View style={styles.additionalInfoView}>
        <View style={styles.additionalInfo}>
          <Feather name="wind" color={Colors.green} size={resizeFont(24)} />
          <Text weight="500" color={Colors.green} size={20}>
            {weatherData?.wind.speed.toFixed(2)} m/s
          </Text>
        </View>

        <View style={styles.additionalInfo}>
          <SimpleLineIcons name="drop" color={Colors.green} size={resizeFont(24)} />
          <Text weight="500" color={Colors.green} size={20}>
            {weatherData?.main.humidity.toFixed(0)} %
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default observer(CityWeatherScreen);

const styles = StyleSheet.create({
  additionalInfo: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  additionalInfoView: {
    alignItems: 'center',
    alignSelf: 'center',
    borderColor: Colors.green,
    borderRadius: resizeWidth(6),
    borderWidth: resizeWidth(1),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: resizeHeight(12),
    width: screenWidth * 0.9,
  },
  container: {
    backgroundColor: Colors.white,
    flex: 1,
    gap: resizeHeight(30),
  },
  dateText: {
    alignSelf: 'center',
  },
  errorText: {
    alignSelf: 'center',
  },
  icon: {
    aspectRatio: 180 / 150,
    height: 'auto',
    width: screenWidth * 0.48,
  },
  iconTempView: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  tempText: {
    alignSelf: 'center',
  },
});
