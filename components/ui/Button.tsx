import { Pressable, StyleSheet, type PressableProps } from 'react-native';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { ThemedText } from '../ThemedText';

type ButtonProps = PressableProps & {
  title: string;
  variant?: 'primary' | 'secondary' | 'outline';
};

export function Button({ title, variant = 'primary', style, ...rest }: ButtonProps) {
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme];

  const getButtonStyle = () => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: colors.secondary,
          borderColor: colors.secondary,
        };
      case 'secondary':
        return {
          backgroundColor: colors.primary,
          borderColor: colors.primary,
        };
      case 'outline':
        return {
          backgroundColor: 'transparent',
          borderColor: colors.secondary,
        };
    }
  };

  const getTextColor = () => {
    switch (variant) {
      case 'primary':
        return colors.black;
      case 'secondary':
        return colors.white;
      case 'outline':
        return colors.secondary;
    }
  };

  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        getButtonStyle(),
        pressed && styles.pressed,
        style,
      ]}
      {...rest}>
      <ThemedText
        style={[styles.text, { color: getTextColor() }]}
        type="defaultSemiBold">
        {title}
      </ThemedText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  pressed: {
    opacity: 0.8,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
