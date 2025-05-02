import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import React, { FC } from 'react';
import { CityDataType } from '../../types/MainTypes';
import Text from '../Text';
import Colors from '../../styles/Colors';
import { resizeHeight, resizeWidth } from '../../utils/resizeHelper';

interface CityComponentProps extends TouchableOpacityProps {
  city: CityDataType;
  navigateTo: () => void;
}

const CityComponent: FC<CityComponentProps> = ({ city, navigateTo }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={navigateTo}>
      <Text size={20}>{city.city}</Text>
    </TouchableOpacity>
  );
};

export default CityComponent;

const styles = StyleSheet.create({
  container: {
    borderBottomColor: Colors.common.green,
    borderBottomWidth: resizeWidth(1),
    paddingVertical: resizeHeight(10),
  },
});
