import { Appearance, Pressable, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Text from '../Text';
import useRootStore from '../../store/useRootStore';
import Colors from '../../styles/Colors';
import { resizeHeight } from '../../utils/resizeHelper';

const ChangeThemeComponent = () => {
  const { themeStore } = useRootStore();

  const [chosenTheme, setChosenTheme] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('theme').then((res) => {
      if (!res) {
        setChosenTheme('system');
      } else {
        setChosenTheme(res);
      }
    });
  }, []);

  const changeTheme = (value: 'system' | 'dark' | 'light') => {
    AsyncStorage.setItem('theme', value);
    if (value === 'system') {
      const systemTheme = Appearance.getColorScheme();
      themeStore.setTheme(systemTheme || 'light');
      setChosenTheme('system');
    } else {
      themeStore.setTheme(value);
      setChosenTheme(value);
    }
  };

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => changeTheme('light')}
        style={chosenTheme === 'light' ? styles.chosenTheme : null}
      >
        <Text size={25}>Light</Text>
      </Pressable>

      <Pressable
        onPress={() => changeTheme('dark')}
        style={chosenTheme === 'dark' ? styles.chosenTheme : null}
      >
        <Text size={25}>Dark</Text>
      </Pressable>

      <Pressable
        onPress={() => changeTheme('system')}
        style={chosenTheme === 'system' ? styles.chosenTheme : null}
      >
        <Text size={25}>System</Text>
      </Pressable>
    </View>
  );
};

export default observer(ChangeThemeComponent);

const styles = StyleSheet.create({
  chosenTheme: {
    borderBottomColor: Colors.common.green,
    borderBottomWidth: resizeHeight(1),
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
