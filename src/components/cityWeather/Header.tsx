import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { FC } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../../styles/Colors';
import { resizeHeight, resizeWidth } from '../../utils/resizeHelper';
import { screenWidth } from '../../utils/getScreenSize';
import resizeFont from '../../utils/resizeFont';
import Text from '../Text';
import { useTheme } from '../../themeProvider/useTheme';

interface HeaderProps {
  cityName: string;
  goBack: () => void;
}

const Header: FC<HeaderProps> = ({ cityName, goBack }) => {
  const { theme } = useTheme();

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={goBack}>
        <AntDesign name="left" color={Colors[theme].text} size={resizeFont(24)} />
      </TouchableOpacity>

      <Text size={20}>{cityName}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    alignSelf: 'center',
    borderBottomColor: Colors.common.green,
    borderBottomWidth: resizeWidth(1),
    flexDirection: 'row',
    gap: resizeWidth(20),
    paddingBottom: resizeHeight(10),
    width: screenWidth * 0.9,
  },
});
