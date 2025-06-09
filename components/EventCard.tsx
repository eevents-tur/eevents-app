import { Image, Pressable, StyleSheet, View } from 'react-native';
import { router } from 'expo-router';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Event } from '@/types';
import { ThemedText } from './ThemedText';

type EventCardProps = {
  event: Event;
  horizontal?: boolean;
};

export function EventCard({ event, horizontal = true }: EventCardProps) {
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme];

  const handlePress = () => {
    router.push(`/event/${event.id}`);
  };

  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        horizontal ? styles.horizontalCard : styles.verticalCard,
        { backgroundColor: colors.white },
        pressed && styles.pressed,
      ]}
      onPress={handlePress}>
      <Image
        source={{ uri: event.image }}
        style={horizontal ? styles.horizontalImage : styles.verticalImage}
      />
      <View
        style={[
          styles.dateTag,
          { backgroundColor: colors.secondary },
        ]}>
        <ThemedText
          style={styles.dateText}
          lightColor={colors.black}
          darkColor={colors.black}>
          {event.date}
        </ThemedText>
      </View>
      <View style={styles.infoContainer}>
        <ThemedText
          style={styles.title}
          lightColor={colors.black}
          darkColor={colors.black}>
          {event.title}
        </ThemedText>
        <ThemedText
          style={styles.location}
          lightColor={colors.black}
          darkColor={colors.black}>
          {event.location}
        </ThemedText>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  horizontalCard: {
    width: 160,
    height: 180,
    marginRight: 10,
  },
  verticalCard: {
    width: '100%',
    height: 200,
  },
  horizontalImage: {
    width: '100%',
    height: 120,
  },
  verticalImage: {
    width: '100%',
    height: 140,
  },
  dateTag: {
    position: 'absolute',
    top: 10,
    left: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
  },
  dateText: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  infoContainer: {
    padding: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  location: {
    fontSize: 12,
    marginTop: 2,
  },
  pressed: {
    opacity: 0.9,
  },
});
