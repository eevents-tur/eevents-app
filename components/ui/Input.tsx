import { StyleSheet, TextInput, View, type TextInputProps } from 'react-native';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { ThemedText } from '../ThemedText';

type InputProps = TextInputProps & {
  label?: string;
  error?: string;
};

export function Input({ label, error, style, ...rest }: InputProps) {
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme];

  return (
    <View style={styles.container}>
      {label && <ThemedText style={styles.label}>{label}</ThemedText>}
      <TextInput
        style={[
          styles.input,
          { 
            backgroundColor: colors.white,
            color: colors.black,
            borderColor: error ? colors.error : colors.gray 
          },
          style,
        ]}
        placeholderTextColor={colors.gray}
        {...rest}
      />
      {error && (
        <ThemedText style={[styles.error, { color: colors.error }]}>{error}</ThemedText>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    width: '100%',
  },
  label: {
    marginBottom: 8,
  },
  input: {
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    width: '100%',
  },
  error: {
    fontSize: 12,
    marginTop: 4,
  },
});
