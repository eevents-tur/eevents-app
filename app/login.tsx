import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Link, router } from 'expo-router';

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { SocialButton } from '@/components/SocialButton';
import { ThemedText } from '@/components/ThemedText';
import { Colors } from '@/constants/Colors';

export default function LoginScreen() {
  const handleLogin = () => {
    router.replace('/(tabs)');
  };

  const handleSocialLogin = (platform: 'google' | 'facebook' | 'instagram') => {
    router.replace('/(tabs)');
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.logoContainer}>
            <Image source={require('@/assets/images/15.png')} style={styles.logo} />
            <ThemedText style={styles.logoText} lightColor={Colors.light.white}>
              events
            </ThemedText>
          </View>

          <ThemedText style={styles.welcomeText} lightColor={Colors.light.secondary}>
            Bem Vindo
          </ThemedText>

          <View style={styles.formContainer}>
            <Input placeholder="Usuário" />
            <Input placeholder="Senha" secureTextEntry />

            <Button title="Entrar" onPress={handleLogin} style={styles.loginButton} />

            <ThemedText
              style={styles.forgotPasswordText}
              lightColor={Colors.light.white}
              onPress={() => { }}>
              Esqueceu a senha?
            </ThemedText>
          </View>

          <View style={styles.socialContainer}>
            <ThemedText style={styles.socialText} lightColor={Colors.light.white}>
              ou entrar com
            </ThemedText>

            <View style={styles.socialButtonsContainer}>
              <SocialButton
                platform="google"
                onPress={() => handleSocialLogin('google')}
              />
              <SocialButton
                platform="facebook"
                onPress={() => handleSocialLogin('facebook')}
              />
              <SocialButton
                platform="instagram"
                onPress={() => handleSocialLogin('instagram')}
              />
            </View>
          </View>

          <Link href="/register" asChild>
            <ThemedText
              style={styles.registerText}
              lightColor={Colors.light.secondary}>
              Ainda não faz parte do Events, clique aqui
            </ThemedText>
          </Link>
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
    justifyContent: 'center',
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoText: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  formContainer: {
    width: '100%',
    alignItems: 'center',
  },
  loginButton: {
    width: '100%',
    marginBottom: 10,
  },
  forgotPasswordText: {
    marginTop: 10,
  },
  socialContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  socialText: {
    marginBottom: 10,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  registerText: {
    marginTop: 30,
    textDecorationLine: 'underline',
  },
});
