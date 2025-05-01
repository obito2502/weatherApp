import { StyleSheet, TextInput, View } from 'react-native';
import React, { FC } from 'react';
import Octicons from 'react-native-vector-icons/Octicons';
import Text from '../Text';
import Colors from '../../styles/Colors';
import { resizeHeight, resizeWidth } from '../../utils/resizeHelper';
import resizeFont from '../../utils/resizeFont';
import Fonts from '../../styles/Fonts';

interface CitySearchProps {
  onChangeText: (val: string) => void;
}

const CitySearch: FC<CitySearchProps> = ({ onChangeText }) => {
  return (
    <View style={styles.container}>
      <Text color={Colors.text}>Search City</Text>
      <View style={styles.inputView}>
        <Octicons name="search" size={resizeWidth(24)} color={Colors.green} />
        <TextInput
          placeholder="Search"
          placeholderTextColor={Colors.placeholder}
          style={styles.input}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
};

export default CitySearch;

const styles = StyleSheet.create({
  container: {
    gap: resizeHeight(5),
  },
  input: {
    color: Colors.text,
    fontFamily: Fonts.roboto.regular,

    fontSize: resizeFont(16),
  },
  inputView: {
    alignItems: 'center',
    borderColor: Colors.green,
    borderRadius: resizeWidth(6),
    borderWidth: resizeWidth(1),
    flexDirection: 'row',
    gap: resizeWidth(8),
    padding: resizeWidth(12),
  },
});
