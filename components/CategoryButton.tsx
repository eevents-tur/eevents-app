import { Pressable, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Category } from '@/types';
import { ThemedText } from './ThemedText';

type CategoryButtonProps = {
  category: Category;
  selected: boolean;
  onPress: () => void;
};

export function CategoryButton({ category, selected, onPress }: CategoryButtonProps) {
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme];

  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        selected && { borderBottomWidth: 2, borderBottomColor: colors.secondary },
        pressed && styles.pressed,
      ]}
      onPress={onPress}>
      <FontAwesome5 name={category.icon} size={20} color={colors.white} />
      <ThemedText style={styles.text} lightColor={colors.white} darkColor={colors.white}>
        {category.name}
      </ThemedText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 8,
    paddingBottom: 8,
  },
  text: {
    fontSize: 12,
    marginTop: 4,
  },
  pressed: {
    opacity: 0.8,
  },
});
