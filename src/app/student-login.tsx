import { useAuth } from '../context/AuthContext';
import { router } from 'expo-router';
import { useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, radius, spacing } from '../theme';

export default function StudentLoginScreen() {
  const { login } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    setError('');

    if (!email.trim()) {
      setError(
        'Please enter your email or phone number.'
      );
      return;
    }

    if (!password.trim()) {
      setError('Please enter your password.');
      return;
    }

    const success = await login(
      email,
      password,
      'student'
    );

    if (success) {
      router.replace('/student-home');
    } else {
      setError(
        'Unable to log in. Please check your details.'
      );
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={
          Platform.OS === 'ios'
            ? 'padding'
            : undefined
        }
      >
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Header */}

          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => router.back()}
              style={styles.backButton}
              activeOpacity={0.7}
            >
              <Text style={styles.back}>‹</Text>
            </TouchableOpacity>

            <Image
              source={require('../../assets/guriva-horizontal-logo.png')}
              style={styles.logo}
              resizeMode="contain"
            />

            <View style={styles.headerSpace} />
          </View>

          {/* Intro */}

          <View style={styles.intro}>
            <View style={styles.iconCircle}>
              <Text style={styles.iconText}>
                S
              </Text>
            </View>

            <Text style={styles.title}>
              Student Login
            </Text>

            <Text style={styles.subtitle}>
              Sign in to find tutors, manage your classes
              and continue learning with Guriva.
            </Text>
          </View>

          {/* Login Card */}

          <View style={styles.card}>
            <Text style={styles.label}>
              Email or Phone
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Enter your email or phone"
              placeholderTextColor={
                colors.textMuted
              }
              value={email}
              onChangeText={(text) => {
                setEmail(text);
                setError('');
              }}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />

            <Text style={styles.label}>
              Password
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              placeholderTextColor={
                colors.textMuted
              }
              value={password}
              onChangeText={(text) => {
                setPassword(text);
                setError('');
              }}
              secureTextEntry
              autoCapitalize="none"
            />

            {/* Error */}

            {error ? (
              <View style={styles.errorBox}>
                <Text style={styles.errorText}>
                  {error}
                </Text>
              </View>
            ) : null}

            {/* Forgot Password */}

            <TouchableOpacity
              style={styles.forgotButton}
              activeOpacity={0.75}
            >
              <Text style={styles.forgotText}>
                Forgot password?
              </Text>
            </TouchableOpacity>

            {/* Login Button */}

            <TouchableOpacity
              style={styles.loginButton}
              onPress={handleLogin}
              activeOpacity={0.85}
            >
              <Text style={styles.loginText}>
                Log In
              </Text>

              <Text style={styles.arrow}>
                →
              </Text>
            </TouchableOpacity>
          </View>

          {/* Signup */}

          <View style={styles.signupSection}>
            <Text style={styles.signupText}>
              Don't have a student account?
            </Text>

            <TouchableOpacity
              onPress={() =>
                router.push('/student-signup')
              }
              activeOpacity={0.75}
            >
              <Text style={styles.signupLink}>
                Create account
              </Text>
            </TouchableOpacity>
          </View>

          {/* Security */}

          <View style={styles.securityCard}>
            <View style={styles.securityIcon}>
              <Text
                style={styles.securityIconText}
              >
                ✓
              </Text>
            </View>

            <View style={styles.securityContent}>
              <Text style={styles.securityTitle}>
                Your information is secure
              </Text>

              <Text style={styles.securityText}>
                Guriva keeps your account information
                protected.
              </Text>
            </View>
          </View>

          {/* Footer */}

          <Text style={styles.footer}>
            By continuing, you agree to Guriva's Terms
            of Service and Privacy Policy.
          </Text>

          <View style={styles.bottomSpace} />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },

  keyboard: {
    flex: 1,
  },

  container: {
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.md,
    paddingBottom: 30,
  },

  header: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  backButton: {
    width: 38,
    height: 38,
    justifyContent: 'center',
  },

  back: {
    fontSize: 36,
    lineHeight: 38,
    color: colors.navy,
  },

  logo: {
    width: 135,
    height: 45,
  },

  headerSpace: {
    width: 38,
  },

  intro: {
    alignItems: 'center',
    marginTop: 23,
    marginBottom: 23,
  },

  iconCircle: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: colors.lightBlue,
    borderWidth: 2,
    borderColor: colors.lightTeal,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },

  iconText: {
    fontSize: 23,
    fontWeight: '900',
    color: colors.blue,
  },

  title: {
    fontSize: 24,
    fontWeight: '800',
    color: colors.navy,
  },

  subtitle: {
    fontSize: 12,
    lineHeight: 18,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: 7,
    paddingHorizontal: 8,
  },

  card: {
    backgroundColor: colors.white,
    borderRadius: radius.xl,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
  },

  label: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.navy,
    marginBottom: 7,
  },

  input: {
    height: 49,
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    paddingHorizontal: 13,
    fontSize: 13,
    color: colors.navy,
    marginBottom: 16,
  },

  errorBox: {
    backgroundColor: colors.errorLight,
    borderWidth: 1,
    borderColor: colors.error,
    borderRadius: radius.md,
    paddingHorizontal: 12,
    paddingVertical: 9,
    marginTop: -3,
    marginBottom: 12,
  },

  errorText: {
    fontSize: 10,
    lineHeight: 15,
    color: colors.error,
    fontWeight: '600',
  },

  forgotButton: {
    alignSelf: 'flex-end',
    marginTop: -2,
    marginBottom: 17,
  },

  forgotText: {
    fontSize: 10,
    fontWeight: '700',
    color: colors.blue,
  },

  loginButton: {
    backgroundColor: colors.teal,
    borderRadius: radius.lg,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  loginText: {
    fontSize: 15,
    fontWeight: '800',
    color: colors.navy,
  },

  arrow: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.navy,
    marginLeft: 9,
  },

  signupSection: {
    alignItems: 'center',
    marginTop: 21,
  },

  signupText: {
    fontSize: 11,
    color: colors.textSecondary,
  },

  signupLink: {
    fontSize: 11,
    fontWeight: '800',
    color: colors.blue,
    marginTop: 5,
  },

  securityCard: {
    backgroundColor: colors.lightTeal,
    borderRadius: radius.xl,
    padding: spacing.lg,
    marginTop: 21,
    flexDirection: 'row',
    alignItems: 'center',
  },

  securityIcon: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: colors.teal,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },

  securityIconText: {
    fontSize: 17,
    fontWeight: '900',
    color: colors.navy,
  },

  securityContent: {
    flex: 1,
  },

  securityTitle: {
    fontSize: 12,
    fontWeight: '800',
    color: colors.navy,
  },

  securityText: {
    fontSize: 10,
    lineHeight: 15,
    color: colors.textSecondary,
    marginTop: 3,
  },

  footer: {
    fontSize: 9,
    lineHeight: 14,
    color: colors.textMuted,
    textAlign: 'center',
    marginTop: 19,
    paddingHorizontal: 15,
  },

  bottomSpace: {
    height: 15,
  },
});