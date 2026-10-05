import { useAuth } from '../context/AuthContext';
import { router } from 'expo-router';
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
import { useState } from 'react';
import { colors, radius, spacing } from '../theme';

export default function TutorLoginScreen() {
  const { login } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    setError('');

    if (!email.trim()) {
      setError('Please enter your email or phone number.');
      return;
    }

    if (!password.trim()) {
      setError('Please enter your password.');
      return;
    }

    const success = login(
      email,
      password,
      'tutor'
    );

    if (success) {
      router.replace('/tutor-home');
    } else {
      setError('Unable to log in. Please check your details.');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
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
              <Text style={styles.iconText}>T</Text>
            </View>

            <Text style={styles.title}>Tutor Login</Text>

            <Text style={styles.subtitle}>
              Sign in to manage your students, enquiries,
              availability and earnings with Guriva.
            </Text>
          </View>

          {/* Login Form */}
          <View style={styles.card}>
            <Text style={styles.label}>Email or Phone</Text>

            <TextInput
              style={styles.input}
              placeholder="Enter your email or phone"
              placeholderTextColor={colors.textMuted}
              value={email}
              onChangeText={(text) => {
                setEmail(text);
                setError('');
              }}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />

            <Text style={styles.label}>Password</Text>

            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              placeholderTextColor={colors.textMuted}
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

            <TouchableOpacity
              style={styles.forgotButton}
              activeOpacity={0.75}
            >
              <Text style={styles.forgotText}>
                Forgot password?
              </Text>
            </TouchableOpacity>

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
              New to Guriva as a tutor?
            </Text>

            <TouchableOpacity
              onPress={() => router.push('/tutor-signup')}
              activeOpacity={0.75}
            >
              <Text style={styles.signupLink}>
                Create tutor account
              </Text>
            </TouchableOpacity>
          </View>

          {/* Tutor Benefits */}
          <View style={styles.benefitsCard}>
            <Text style={styles.benefitsTitle}>
              Grow your teaching journey
            </Text>

            <View style={styles.benefitRow}>
              <View style={styles.bullet}>
                <Text style={styles.bulletText}>
                  ✓
                </Text>
              </View>

              <Text style={styles.benefitText}>
                Connect with students looking for tutors
              </Text>
            </View>

            <View style={styles.benefitRow}>
              <View style={styles.bullet}>
                <Text style={styles.bulletText}>
                  ✓
                </Text>
              </View>

              <Text style={styles.benefitText}>
                Manage enquiries and bookings
              </Text>
            </View>

            <View style={styles.benefitRow}>
              <View style={styles.bullet}>
                <Text style={styles.bulletText}>
                  ✓
                </Text>
              </View>

              <Text style={styles.benefitText}>
                Build your profile and grow your reach
              </Text>
            </View>
          </View>

          {/* Footer */}
          <Text style={styles.footer}>
            By continuing, you agree to Guriva's Terms of Service
            and Privacy Policy.
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
    backgroundColor: colors.lightTeal,
    borderWidth: 2,
    borderColor: colors.teal,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },

  iconText: {
    fontSize: 23,
    fontWeight: '900',
    color: colors.navy,
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

  benefitsCard: {
    backgroundColor: colors.lightBlue,
    borderRadius: radius.xl,
    padding: spacing.lg,
    marginTop: 21,
  },

  benefitsTitle: {
    fontSize: 13,
    fontWeight: '800',
    color: colors.navy,
    marginBottom: 13,
  },

  benefitRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 9,
  },

  bullet: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 9,
  },

  bulletText: {
    fontSize: 11,
    fontWeight: '900',
    color: colors.teal,
  },

  benefitText: {
    flex: 1,
    fontSize: 10,
    lineHeight: 15,
    color: colors.textSecondary,
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