import { FlatList, ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { router } from 'expo-router';

import { CategoryButton } from '@/components/CategoryButton';
import { EventCard } from '@/components/EventCard';
import { ThemedText } from '@/components/ThemedText';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { categories, mockEvents } from '@/utils/mockData';

export default function HomeScreen() {
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme];

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedPeriod, setSelectedPeriod] = useState('Semana');

  const featuredEvents = mockEvents.filter(event => event.featured);
  const sportEvents = mockEvents.filter(event => event.category === 'Esportivo');

  return (
    <View style={[styles.container, { backgroundColor: colors.primary }]}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <ThemedText style={styles.logo} lightColor={colors.white}>
          events
        </ThemedText>
        <View style={styles.headerRight}>
          <ThemedText style={styles.language} lightColor={colors.white}>
            PT
          </ThemedText>
          <FontAwesome5 name="chevron-down" size={12} color={colors.white} style={styles.languageIcon} />
          <TouchableOpacity>
            <ThemedText style={styles.loginText} lightColor={colors.white}>
              Entrar
            </ThemedText>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.categoriesContainer}>
        <FlatList
          data={categories}
          renderItem={({ item }) => (
            <CategoryButton
              category={item}
              selected={selectedCategory === item.id}
              onPress={() => setSelectedCategory(item.id)}
            />
          )}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={styles.searchContainer}>
        <FontAwesome5 name="search" size={16} color={colors.gray} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="O que você procura?"
          placeholderTextColor={colors.gray}
        />
      </View>

      <View style={styles.periodContainer}>
        {['Semana', 'Mês', 'Ano'].map((period) => (
          <TouchableOpacity
            key={period}
            style={[
              styles.periodButton,
              selectedPeriod === period && { backgroundColor: colors.secondary },
            ]}
            onPress={() => setSelectedPeriod(period)}>
            <ThemedText
              style={styles.periodText}
              lightColor={selectedPeriod === period ? colors.black : colors.white}>
              {period}
            </ThemedText>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.sectionContainer}>
          <ThemedText
            style={styles.sectionTitle}
            lightColor={colors.secondary}>
            Destaque
          </ThemedText>
          <FlatList
            data={featuredEvents}
            renderItem={({ item }) => <EventCard event={item} />}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={styles.sectionContainer}>
          <ThemedText
            style={styles.sectionTitle}
            lightColor={colors.secondary}>
            Esportivo
          </ThemedText>
          <FlatList
            data={sportEvents}
            renderItem={({ item }) => <EventCard event={item} />}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
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
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  language: {
    marginRight: 5,
  },
  languageIcon: {
    marginRight: 15,
  },
  loginText: {},
  categoriesContainer: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.1)',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginVertical: 15,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    color: 'black',
  },
  periodContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15,
  },
  periodButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  periodText: {
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  },
  sectionContainer: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
