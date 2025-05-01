import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import React, { FC } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Text from './Text';
import Colors from '../styles/Colors';
import { screenWidth } from '../utils/getScreenSize';

interface GradientButtonProps extends TouchableOpacityProps {
  text: string;
}

const GradientButton: FC<GradientButtonProps> = ({ text, ...restProps }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={restProps.onPress}>
      <LinearGradient
        colors={[Colors.lightBlue, Colors.lightGreen]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.container}
      >
        <Text size={18} weight="700">
          {text}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default GradientButton;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    aspectRatio: 343 / 61,
    borderRadius: 15,
    height: 'auto',
    justifyContent: 'center',
    width: screenWidth * 0.9,
  },
});
