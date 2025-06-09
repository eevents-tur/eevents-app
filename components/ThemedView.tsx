import { StyleSheet, View, type ViewProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({ style, lightColor, darkColor, ...rest }: ThemedViewProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <View style={[{ backgroundColor }, style]} {...rest} />;
}

export function ThemedSafeAreaView({ style, lightColor, darkColor, ...rest }: ThemedViewProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <View style={[styles.safeArea, { backgroundColor }, style]} {...rest} />;
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
