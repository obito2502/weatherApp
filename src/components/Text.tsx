import { Text as RNText, TextProps as RNTextProps, TextStyle } from 'react-native';
import React, { FC } from 'react';
import Fonts from '../styles/Fonts';
import resizeFont from '../utils/resizeFont';
import Colors from '../styles/Colors';

interface TextProps extends RNTextProps {
  children: string | string[];
  style?: TextStyle;
  size?: number;
  weight?: '400' | '500' | '600' | '700';
  color?: string;
}

const Text: FC<TextProps> = ({
  children,
  weight = '400',
  size = 16,
  style,
  color = Colors.text,
}) => {
  const handleFontWeight = () => {
    switch (weight) {
      case '400':
        return Fonts.roboto.regular;
      case '500':
        return Fonts.roboto.medium;
      case '600':
        return Fonts.roboto.semibold;
      case '700':
        return Fonts.roboto.bold;
      default:
        return Fonts.roboto.regular;
    }
  };

  return (
    <RNText style={[{ fontFamily: handleFontWeight(), fontSize: resizeFont(size), color }, style]}>
      {children}
    </RNText>
  );
};

export default Text;
