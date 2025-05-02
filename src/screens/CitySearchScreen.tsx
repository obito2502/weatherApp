import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { observer } from 'mobx-react-lite';
import Colors from '../styles/Colors';
import { screenWidth } from '../utils/getScreenSize';
import GradientButton from '../components/GradientButton';
import CitySearch from '../components/citySearch/CitySearch';
import CitiesListComponent from '../components/citySearch/CitiesListComponent';
import { CitySearchScreenProps } from '../types/NavigationType';
import SCREENS from '../enum/SCREENS';
import useRootStore from '../store/useRootStore';
import { resizeHeight } from '../utils/resizeHelper';

const CitySearchScreen = ({ navigation }: CitySearchScreenProps) => {
  const { citiesStore } = useRootStore();
  const [searchText, setSearchText] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <CitySearch onChangeText={setSearchText} />
        <GradientButton text="Search" onPress={() => citiesStore.searchCity(searchText)} />
        <CitiesListComponent
          navigateToCity={(city) => navigation.navigate(SCREENS.CITY_WEATHER, { city })}
        />
      </View>
    </SafeAreaView>
  );
};

export default observer(CitySearchScreen);

const styles = StyleSheet.create({
  body: {
    alignSelf: 'center',
    flex: 1,
    gap: resizeHeight(30),
    width: screenWidth * 0.9,
  },
  container: {
    backgroundColor: Colors.white,
    flex: 1,
  },
});
