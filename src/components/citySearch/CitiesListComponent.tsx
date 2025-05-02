import { StyleSheet, View } from 'react-native';
import React, { FC } from 'react';
import { FlashList } from '@shopify/flash-list';
import { observer } from 'mobx-react-lite';
import CityComponent from './CityComponent';
import { resizeHeight } from '../../utils/resizeHelper';
import { CityDataType } from '../../types/MainTypes';
import useRootStore from '../../store/useRootStore';
import NoCityComponent from './NoCityComponent';
import { useTheme } from '../../themeProvider/useTheme';

interface CitiesListComponentProps {
  navigateToCity: (city: CityDataType) => void;
}

const CitiesListComponent: FC<CitiesListComponentProps> = ({ navigateToCity }) => {
  const { citiesStore } = useRootStore();
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      <FlashList
        data={citiesStore.citiesList}
        renderItem={({ item }) => (
          <CityComponent city={item} navigateTo={() => navigateToCity(item)} />
        )}
        estimatedItemSize={resizeHeight(60)}
        ListEmptyComponent={<NoCityComponent />}
        extraData={theme}
      />
    </View>
  );
};

export default observer(CitiesListComponent);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
