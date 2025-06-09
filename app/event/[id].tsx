import { Image, Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';

import { ThemedText } from '@/components/ThemedText';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Event } from '@/types';
import { mockEvents } from '@/utils/mockData';

export default function EventDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme];

  const [event, setEvent] = useState<Event | null>(null);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    // Simulando busca de evento pelo ID
    const foundEvent = mockEvents.find(e => e.id === id);
    if (foundEvent) {
      setEvent(foundEvent);
    }
  }, [id]);

  if (!event) {
    return (
      <View style={[styles.container, { backgroundColor: colors.primary }]}>
        <StatusBar style="light" />
        <ThemedText style={styles.loadingText} lightColor={colors.white}>
          Carregando...
        </ThemedText>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.primary }]}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <Pressable onPress={() => router.back()}>
          <FontAwesome5 name="chevron-left" size={20} color={colors.white} />
        </Pressable>
        <ThemedText style={styles.logo} lightColor={colors.white}>
          events
        </ThemedText>
        <Image
          source={{ uri: 'https://picsum.photos/id/64/200/200' }}
          style={styles.profilePic}
        />
      </View>

      <ScrollView style={styles.content}>
        <Image source={{ uri: event.image }} style={styles.eventImage} />

        <View style={styles.dateContainer}>
          <ThemedText style={styles.dateText} lightColor={colors.white}>
            {event.date}
          </ThemedText>
          <View style={styles.actionButtons}>
            <Pressable style={styles.actionButton}>
              <FontAwesome5 name="calendar-alt" size={20} color={colors.white} />
            </Pressable>
            <Pressable style={styles.actionButton}>
              <FontAwesome5 name="calendar-plus" size={20} color={colors.white} />
            </Pressable>
            <Pressable style={styles.actionButton}>
              <FontAwesome5 name="share-alt" size={20} color={colors.white} />
            </Pressable>
            <Pressable
              style={styles.actionButton}
              onPress={() => setLiked(!liked)}>
              <FontAwesome5
                name="heart"
                solid={liked}
                size={20}
                color={liked ? colors.error : colors.white}
              />
              <ThemedText style={styles.countText} lightColor={colors.white}>
                {liked ? (event.likes || 0) + 1 : event.likes}
              </ThemedText>
            </Pressable>
            <Pressable style={styles.actionButton}>
              <FontAwesome5 name="comment" size={20} color={colors.white} />
              <ThemedText style={styles.countText} lightColor={colors.white}>
                {event.comments}
              </ThemedText>
            </Pressable>
          </View>
        </View>

        <View style={styles.infoContainer}>
          <ThemedText
            style={styles.eventTitle}
            lightColor={colors.secondary}>
            {event.title}
          </ThemedText>
          <ThemedText
            style={styles.eventDescription}
            lightColor={colors.white}>
            {event.description}
          </ThemedText>

          <Pressable style={styles.infoButton}>
            <FontAwesome5
              name="map-marker-alt"
              size={20}
              color={colors.white}
              style={styles.infoIcon}
            />
            <ThemedText
              style={styles.infoText}
              lightColor={colors.white}>
              Conheça a cidade do Evento
            </ThemedText>
            <FontAwesome5
              name="chevron-right"
              size={16}
              color={colors.white}
              style={styles.infoArrow}
            />
          </Pressable>

          <Pressable style={styles.infoButton}>
            <FontAwesome5
              name="store"
              size={20}
              color={colors.white}
              style={styles.infoIcon}
            />
            <ThemedText
              style={styles.infoText}
              lightColor={colors.white}>
              Conheça o comércio local
            </ThemedText>
            <FontAwesome5
              name="chevron-right"
              size={16}
              color={colors.white}
              style={styles.infoArrow}
            />
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.1)',
    marginTop: 40,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  profilePic: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  content: {
    flex: 1,
  },
  loadingText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
  eventImage: {
    width: '100%',
    height: 200,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.1)',
  },
  dateText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  actionButtons: {
    flexDirection: 'row',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
  },
  countText: {
    marginLeft: 5,
    fontSize: 12,
  },
  infoContainer: {
    padding: 20,
  },
  eventTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  eventDescription: {
    lineHeight: 22,
    marginBottom: 20,
  },
  infoButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.1)',
  },
  infoIcon: {
    marginRight: 15,
  },
  infoText: {
    flex: 1,
    fontSize: 16,
  },
  infoArrow: {
    marginLeft: 10,
  },
});
