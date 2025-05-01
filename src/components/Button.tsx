import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import React, { FC } from 'react';
import Text from './Text';

interface ButtonProps extends TouchableOpacityProps {
  text: string;
}

const Button: FC<ButtonProps> = ({ text }) => {
  return (
    <TouchableOpacity>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
