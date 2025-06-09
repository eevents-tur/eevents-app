import { Pressable, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { Colors } from '@/constants/Colors';
import { ThemedText } from './ThemedText';

type SocialPlatform = 'google' | 'facebook' | 'instagram';

type SocialButtonProps = {
  platform: SocialPlatform;
  onPress: () => void;
};

export function SocialButton({ platform, onPress }: SocialButtonProps) {
  const getButtonStyle = () => {
    switch (platform) {
      case 'google':
        return { backgroundColor: '#DB4437' };
      case 'facebook':
        return { backgroundColor: '#4267B2' };
      case 'instagram':
        return { backgroundColor: '#E1306C' };
    }
  };

  const getIcon = () => {
    switch (platform) {
      case 'google':
        return 'google';
      case 'facebook':
        return 'facebook';
      case 'instagram':
        return 'instagram';
    }
  };

  const getName = () => {
    switch (platform) {
      case 'google':
        return 'Google';
      case 'facebook':
        return 'Facebook';
      case 'instagram':
        return 'Instagram';
    }
  };

  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        getButtonStyle(),
        pressed && styles.pressed,
      ]}
      onPress={onPress}>
      <FontAwesome name={getIcon()} size={20} color="white" />
      <ThemedText style={styles.text} lightColor="white" darkColor="white">
        {getName()}
      </ThemedText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  text: {
    marginLeft: 8,
    fontWeight: 'bold',
  },
  pressed: {
    opacity: 0.8,
  },
});
