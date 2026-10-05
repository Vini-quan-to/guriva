import { useAuth } from '../context/AuthContext';
import { router } from 'expo-router';
import { useState } from 'react';
import {
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

export default function TutorSignupScreen() {
  const { signup } = useAuth();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async () => {
    setError('');

    if (!name.trim()) {
      setError('Please enter your full name.');
      return;
    }

    if (!email.trim()) {
      setError('Please enter your email.');
      return;
    }

    if (!phone.trim()) {
      setError('Please enter your phone number.');
      return;
    }

    if (!password.trim()) {
      setError('Please create a password.');
      return;
    }

    if (password.length < 8) {
      setError(
        'Password must contain at least 8 characters.'
      );
      return;
    }

    const success = await signup(
      name,
      email,
      phone,
      password,
      'tutor'
    );

    if (success) {
      router.replace('/tutor-onboarding');
    } else {
      setError(
        'Unable to create your tutor account. Please try again.'
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

            <Text style={styles.headerTitle}>
              Become a Tutor
            </Text>

            <View style={styles.headerSpace} />
          </View>

          {/* Intro */}

          <View style={styles.intro}>
            <View style={styles.iconCircle}>
              <Text style={styles.iconText}>
                T
              </Text>
            </View>

            <Text style={styles.title}>
              Join Guriva as a Tutor
            </Text>

            <Text style={styles.subtitle}>
              Create your tutor account and connect with
              students looking for the right teacher.
            </Text>
          </View>

          {/* Form */}

          <View style={styles.card}>
            <Text style={styles.sectionTitle}>
              Basic details
            </Text>

            <Text style={styles.label}>
              Full Name
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Enter your full name"
              placeholderTextColor={
                colors.textMuted
              }
              value={name}
              onChangeText={(text) => {
                setName(text);
                setError('');
              }}
              autoCapitalize="words"
              autoCorrect={false}
            />

            <Text style={styles.label}>
              Email
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Enter your email"
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
              Phone Number
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Enter your phone number"
              placeholderTextColor={
                colors.textMuted
              }
              value={phone}
              onChangeText={(text) => {
                setPhone(text);
                setError('');
              }}
              keyboardType="phone-pad"
            />

            <Text style={styles.label}>
              Password
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Create a password"
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

            <Text style={styles.passwordHint}>
              Use at least 8 characters.
            </Text>

            {error ? (
              <View style={styles.errorBox}>
                <Text style={styles.errorText}>
                  {error}
                </Text>
              </View>
            ) : null}

            <TouchableOpacity
              style={styles.signupButton}
              onPress={handleSignup}
              activeOpacity={0.85}
            >
              <Text style={styles.signupButtonText}>
                Create Tutor Account
              </Text>

              <Text style={styles.arrow}>
                →
              </Text>
            </TouchableOpacity>
          </View>

          {/* Login */}

          <View style={styles.loginSection}>
            <Text style={styles.loginText}>
              Already have a tutor account?
            </Text>

            <TouchableOpacity
              onPress={() =>
                router.push('/tutor-login')
              }
              activeOpacity={0.75}
            >
              <Text style={styles.loginLink}>
                Log in
              </Text>
            </TouchableOpacity>
          </View>

          {/* Journey */}

          <View style={styles.infoCard}>
            <Text style={styles.infoTitle}>
              Your Guriva tutor journey
            </Text>

            <View style={styles.stepRow}>
              <View style={styles.stepCircle}>
                <Text style={styles.stepNumber}>
                  1
                </Text>
              </View>

              <View style={styles.stepContent}>
                <Text style={styles.stepTitle}>
                  Create your account
                </Text>

                <Text style={styles.stepText}>
                  Add your basic information to get started.
                </Text>
              </View>
            </View>

            <View style={styles.connector} />

            <View style={styles.stepRow}>
              <View style={styles.stepCircle}>
                <Text style={styles.stepNumber}>
                  2
                </Text>
              </View>

              <View style={styles.stepContent}>
                <Text style={styles.stepTitle}>
                  Build your tutor profile
                </Text>

                <Text style={styles.stepText}>
                  Add your subjects, experience and teaching
                  details.
                </Text>
              </View>
            </View>

            <View style={styles.connector} />

            <View style={styles.stepRow}>
              <View style={styles.stepCircle}>
                <Text style={styles.stepNumber}>
                  3
                </Text>
              </View>

              <View style={styles.stepContent}>
                <Text style={styles.stepTitle}>
                  Connect with students
                </Text>

                <Text style={styles.stepText}>
                  Receive enquiries and start teaching.
                </Text>
              </View>
            </View>
          </View>

          {/* Footer */}

          <Text style={styles.footer}>
            By creating an account, you agree to Guriva's
            Terms of Service and Privacy Policy.
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
    height: 48,
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

  headerTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: colors.navy,
  },

  headerSpace: {
    width: 38,
  },

  intro: {
    alignItems: 'center',
    marginTop: 18,
    marginBottom: 21,
  },

  iconCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.lightTeal,
    borderWidth: 2,
    borderColor: colors.teal,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 11,
  },

  iconText: {
    fontSize: 22,
    fontWeight: '900',
    color: colors.navy,
  },

  title: {
    fontSize: 23,
    fontWeight: '800',
    color: colors.navy,
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 12,
    lineHeight: 18,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: 7,
    paddingHorizontal: 7,
  },

  card: {
    backgroundColor: colors.white,
    borderRadius: radius.xl,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
  },

  sectionTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: colors.navy,
    marginBottom: 17,
  },

  label: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.navy,
    marginBottom: 7,
  },

  input: {
    height: 48,
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    paddingHorizontal: 13,
    fontSize: 13,
    color: colors.navy,
    marginBottom: 15,
  },

  passwordHint: {
    fontSize: 9,
    color: colors.textMuted,
    marginTop: -8,
    marginBottom: 13,
  },

  errorBox: {
    backgroundColor: colors.errorLight,
    borderWidth: 1,
    borderColor: colors.error,
    borderRadius: radius.md,
    paddingHorizontal: 12,
    paddingVertical: 9,
    marginBottom: 15,
  },

  errorText: {
    fontSize: 10,
    lineHeight: 15,
    color: colors.error,
    fontWeight: '600',
  },

  signupButton: {
    backgroundColor: colors.teal,
    borderRadius: radius.lg,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },

  signupButtonText: {
    fontSize: 14,
    fontWeight: '800',
    color: colors.navy,
  },

  arrow: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.navy,
    marginLeft: 9,
  },

  loginSection: {
    alignItems: 'center',
    marginTop: 20,
  },

  loginText: {
    fontSize: 11,
    color: colors.textSecondary,
  },

  loginLink: {
    fontSize: 11,
    fontWeight: '800',
    color: colors.blue,
    marginTop: 5,
  },

  infoCard: {
    backgroundColor: colors.lightBlue,
    borderRadius: radius.xl,
    padding: spacing.lg,
    marginTop: 20,
  },

  infoTitle: {
    fontSize: 13,
    fontWeight: '800',
    color: colors.navy,
    marginBottom: 16,
  },

  stepRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  stepCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.teal,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },

  stepNumber: {
    fontSize: 11,
    fontWeight: '900',
    color: colors.navy,
  },

  stepContent: {
    flex: 1,
    paddingTop: 1,
  },

  stepTitle: {
    fontSize: 11,
    fontWeight: '800',
    color: colors.navy,
  },

  stepText: {
    fontSize: 9,
    lineHeight: 14,
    color: colors.textSecondary,
    marginTop: 3,
  },

  connector: {
    width: 1,
    height: 12,
    backgroundColor: colors.borderStrong,
    marginLeft: 13,
  },

  footer: {
    fontSize: 9,
    lineHeight: 14,
    color: colors.textMuted,
    textAlign: 'center',
    marginTop: 18,
    paddingHorizontal: 15,
  },

  bottomSpace: {
    height: 15,
  },
});