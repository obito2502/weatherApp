import { StyleSheet } from 'react-native';
import React from 'react';
import Text from '../Text';

const NoCityComponent = () => {
  return (
    <Text size={26} style={styles.text}>
      No city corresponds to your search
    </Text>
  );
};

export default NoCityComponent;

const styles = StyleSheet.create({
  text: {
    alignSelf: 'center',
  },
});
