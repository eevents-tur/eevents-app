import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';
import { useState } from 'react';

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { ThemedText } from '@/components/ThemedText';
import { Colors } from '@/constants/Colors';

export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');

  const handleRegister = () => {
    router.replace('/login');
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.avatarContainer}>
            <Image
              source={{ uri: 'https://picsum.photos/200' }}
              style={styles.avatar}
            />
          </View>

          <ThemedText style={styles.title} lightColor={Colors.light.secondary}>
            Uma aventura personalizada
          </ThemedText>

          <View style={styles.formContainer}>
            <Input
              placeholder="Nome"
              value={name}
              onChangeText={setName}
            />

            <Input
              placeholder="E-mail"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />

            <Input
              placeholder="Senha"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />

            <Input
              placeholder="Data de Nascimento"
              keyboardType="numeric"
              value={birthdate}
              onChangeText={setBirthdate}
            />

            <View style={styles.locationContainer}>
              <Input
                placeholder="ES"
                style={styles.stateInput}
                value={state}
                onChangeText={setState}
              />

              <Input
                placeholder="Cidade"
                style={styles.cityInput}
                value={city}
                onChangeText={setCity}
              />
            </View>

            <Button
              title="Cadastrar"
              onPress={handleRegister}
              style={styles.registerButton}
            />

            <ThemedText style={styles.termsText} lightColor={Colors.light.white}>
              Ao prosseguir, você concorda com nossos Termos de Serviço & Política de
              Privacidade
            </ThemedText>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.primary,
  },
  keyboardView: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
  },
  avatarContainer: {
    marginVertical: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  formContainer: {
    width: '100%',
    alignItems: 'center',
  },
  locationContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  stateInput: {
    width: '20%',
  },
  cityInput: {
    width: '75%',
  },
  registerButton: {
    width: '100%',
    marginTop: 10,
  },
  termsText: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 12,
  },
});
