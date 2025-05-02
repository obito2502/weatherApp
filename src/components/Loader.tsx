import { ActivityIndicator, StyleSheet } from 'react-native';
import React from 'react';
import Colors from '../styles/Colors';

const Loader = () => {
  return <ActivityIndicator size="large" color={Colors.common.green} style={styles.loader} />;
};

export default Loader;

const styles = StyleSheet.create({
  loader: {
    flex: 1,
  },
});
