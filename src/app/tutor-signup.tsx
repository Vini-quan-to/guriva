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

export default function TutorSignupScreen() {
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

          <Text style={styles.title}>Become a Guriva Tutor</Text>

          <Text style={styles.subtitle}>
            Create your account and start teaching students.
          </Text>
        </View>

        <View style={styles.form}>

          <Text style={styles.label}>Full name</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter your full name"
            placeholderTextColor="#94A3B8"
          />

          <Text style={styles.label}>Email or phone number</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter your email or phone"
            placeholderTextColor="#94A3B8"
            autoCapitalize="none"
          />

          <Text style={styles.label}>Password</Text>

          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Create a password"
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
              style={styles.signupButton}
              onPress={() => router.push('/tutor-onboarding')}
           >
             <Text style={styles.signupButtonText}>Create Tutor Account</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Already have a tutor account?
          </Text>

          <TouchableOpacity
            onPress={() => router.push('/tutor-login')}
          >
            <Text style={styles.loginLink}> Login</Text>
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
    marginTop: 30,
    marginBottom: 30,
  },

  logo: {
    fontSize: 30,
    fontWeight: '800',
    color: '#2563EB',
    marginBottom: 25,
  },

  title: {
    fontSize: 29,
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
    marginBottom: 18,
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

  signupButton: {
    height: 54,
    borderRadius: 12,
    backgroundColor: '#2563EB',
    alignItems: 'center',
    justifyContent: 'center',
  },

  signupButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 'auto',
    marginBottom: 25,
  },

  footerText: {
    fontSize: 14,
    color: '#64748B',
  },

  loginLink: {
    fontSize: 14,
    fontWeight: '700',
    color: '#2563EB',
  },
});