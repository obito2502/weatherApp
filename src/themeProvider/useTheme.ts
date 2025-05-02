import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { useMemo } from 'react';
import useRootStore from '../store/useRootStore';

type Theme = 'dark' | 'light';

type NamedStyles<T> = {
  [K in keyof T]: ViewStyle | TextStyle | ImageStyle;
};

type StyleFactory<T extends NamedStyles<T>> = (
  theme: Theme
) => ReturnType<typeof StyleSheet.create<T>>;

export function useTheme(): { theme: Theme };

export function useTheme<T extends NamedStyles<T>>(
  factory: StyleFactory<T>
): { theme: Theme; styles: T };

export function useTheme<T extends NamedStyles<T>>(factory?: StyleFactory<T>) {
  const {
    themeStore: { theme },
  } = useRootStore();

  const styles = useMemo(() => (factory ? factory(theme) : undefined), [factory, theme]) as
    | T
    | undefined;

  return factory ? { theme, styles: styles as T } : { theme };
}
