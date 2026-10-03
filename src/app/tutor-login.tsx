import { router } from 'expo-router';
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TutorLoginScreen() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backText}>‹</Text>
          <Text style={styles.backLabel}>Back</Text>
        </TouchableOpacity>

        <View style={styles.header}>
          <Text style={styles.logo}>Guriva</Text>

          <Text style={styles.title}>Welcome back, Tutor!</Text>

          <Text style={styles.subtitle}>
            Login to manage your students and teaching.
          </Text>
        </View>

        <View style={styles.form}>

          <Text style={styles.label}>Email or phone number</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter your email or phone"
            placeholderTextColor="#94A3B8"
            autoCapitalize="none"
          />

          <View style={styles.passwordHeader}>
            <Text style={styles.label}>Password</Text>

            <TouchableOpacity>
              <Text style={styles.forgotPassword}>
                Forgot password?
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Enter your password"
              placeholderTextColor="#94A3B8"
              secureTextEntry={!showPassword}
            />

            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
            >
              <Text style={styles.showPassword}>
                {showPassword ? 'Hide' : 'Show'}
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
              style={styles.loginButton}
              onPress={() => router.push('/tutor-home')}
            >
             <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>
            New to Guriva?
          </Text>

          <TouchableOpacity
            onPress={() => router.push('/tutor-signup')}
          >
            <Text style={styles.signupLink}> Create tutor account</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  container: {
    flex: 1,
    paddingHorizontal: 28,
  },

  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    width: 80,
  },

  backText: {
    fontSize: 34,
    color: '#0F172A',
    lineHeight: 34,
  },

  backLabel: {
    fontSize: 15,
    color: '#475569',
    marginLeft: 4,
  },

  header: {
    marginTop: 35,
    marginBottom: 38,
  },

  logo: {
    fontSize: 30,
    fontWeight: '800',
    color: '#2563EB',
    marginBottom: 30,
  },

  title: {
    fontSize: 30,
    fontWeight: '800',
    color: '#0F172A',
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    color: '#64748B',
  },

  form: {
    width: '100%',
  },

  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#334155',
    marginBottom: 8,
  },

  input: {
    height: 54,
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#0F172A',
    marginBottom: 22,
  },

  passwordHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  forgotPassword: {
    fontSize: 13,
    fontWeight: '600',
    color: '#2563EB',
    marginBottom: 8,
  },

  passwordContainer: {
    height: 54,
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 14,
    marginBottom: 24,
  },

  passwordInput: {
    flex: 1,
    fontSize: 16,
    color: '#0F172A',
  },

  showPassword: {
    fontSize: 13,
    fontWeight: '600',
    color: '#2563EB',
  },

  loginButton: {
    height: 54,
    borderRadius: 12,
    backgroundColor: '#2563EB',
    alignItems: 'center',
    justifyContent: 'center',
  },

  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
  },

  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 'auto',
    marginBottom: 25,
  },

  signupText: {
    fontSize: 14,
    color: '#64748B',
  },

  signupLink: {
    fontSize: 14,
    fontWeight: '700',
    color: '#2563EB',
  },
});