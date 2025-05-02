import AsyncStorage from '@react-native-async-storage/async-storage';
import { makeAutoObservable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';
import { Appearance, StatusBar } from 'react-native';

class ThemeStore {
  public theme: 'dark' | 'light' = 'light';

  constructor() {
    makeAutoObservable(this);

    makePersistable(this, {
      name: 'ThemeStore',
      properties: ['theme'],
      storage: AsyncStorage,
    });
  }

  init = async () => {
    const initialTheme = await AsyncStorage.getItem('theme');

    if (initialTheme === 'dark') {
      this.setTheme('dark');
    }

    if (initialTheme === 'system') {
      const systemTheme = Appearance.getColorScheme();
      this.setTheme(systemTheme || 'light');
    }

    if (initialTheme === 'light') {
      this.setTheme('light');
    }

    if (!initialTheme) {
      const systemTheme = Appearance.getColorScheme();
      this.setTheme(systemTheme || 'light');
    }
  };

  setTheme(item: 'dark' | 'light') {
    StatusBar.setBarStyle(item === 'dark' ? 'light-content' : 'dark-content');
    this.theme = item;
  }
}

export default ThemeStore;
