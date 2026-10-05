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
import { colors, radius, spacing } from '../theme';

export default function LoginScreen() {
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
          {/* Logo */}
          <View style={styles.logoSection}>
            <Image
              source={require('../../assets/guriva-horizontal-logo.png')}
              style={styles.logo}
              resizeMode="contain"
            />

            <Text style={styles.tagline}>
              Learn. Connect. Grow.
            </Text>
          </View>

          {/* Welcome */}
          <View style={styles.headingSection}>
            <Text style={styles.title}>Welcome back</Text>

            <Text style={styles.subtitle}>
              Sign in to continue your learning journey with Guriva.
            </Text>
          </View>

          {/* Login Card */}
          <View style={styles.card}>
            <Text style={styles.label}>Email or Phone</Text>

            <TextInput
              style={styles.input}
              placeholder="Enter your email or phone"
              placeholderTextColor={colors.textMuted}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <Text style={styles.label}>Password</Text>

            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              placeholderTextColor={colors.textMuted}
              secureTextEntry
            />

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
              onPress={() => router.push('/student-home')}
              activeOpacity={0.85}
            >
              <Text style={styles.loginText}>Log In</Text>
              <Text style={styles.loginArrow}>→</Text>
            </TouchableOpacity>
          </View>

          {/* Divider */}
          <View style={styles.dividerRow}>
            <View style={styles.dividerLine} />
            <Text style={styles.orText}>or</Text>
            <View style={styles.dividerLine} />
          </View>

          {/* Role Options */}
          <Text style={styles.roleTitle}>
            New to Guriva?
          </Text>

          <View style={styles.roleRow}>
            <TouchableOpacity
              style={styles.roleCard}
              onPress={() => router.push('/student-signup')}
              activeOpacity={0.8}
            >
              <View style={styles.roleIconBlue}>
                <Text style={styles.roleIconText}>S</Text>
              </View>

              <Text style={styles.roleName}>
                Join as Student
              </Text>

              <Text style={styles.roleDescription}>
                Find the right tutor
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.roleCard}
              onPress={() => router.push('/tutor-signup')}
              activeOpacity={0.8}
            >
              <View style={styles.roleIconTeal}>
                <Text style={styles.roleIconText}>T</Text>
              </View>

              <Text style={styles.roleName}>
                Join as Tutor
              </Text>

              <Text style={styles.roleDescription}>
                Teach and grow
              </Text>
            </TouchableOpacity>
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
    paddingTop: 25,
    paddingBottom: 30,
  },

  logoSection: {
    alignItems: 'center',
    marginTop: 8,
  },

  logo: {
    width: 190,
    height: 70,
  },

  tagline: {
    fontSize: 10,
    fontWeight: '600',
    color: colors.textSecondary,
    letterSpacing: 1,
    marginTop: -4,
  },

  headingSection: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 22,
  },

  title: {
    fontSize: 25,
    fontWeight: '800',
    color: colors.navy,
  },

  subtitle: {
    fontSize: 12,
    lineHeight: 18,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: 7,
    paddingHorizontal: 10,
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

  forgotButton: {
    alignSelf: 'flex-end',
    marginTop: -5,
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

  loginArrow: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.navy,
    marginLeft: 9,
  },

  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 22,
  },

  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: colors.border,
  },

  orText: {
    fontSize: 11,
    color: colors.textMuted,
    marginHorizontal: 12,
  },

  roleTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: colors.navy,
    textAlign: 'center',
    marginBottom: 11,
  },

  roleRow: {
    flexDirection: 'row',
    gap: 10,
  },

  roleCard: {
    flex: 1,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.xl,
    padding: spacing.lg,
    alignItems: 'center',
  },

  roleIconBlue: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.lightBlue,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 9,
  },

  roleIconTeal: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.lightTeal,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 9,
  },

  roleIconText: {
    fontSize: 16,
    fontWeight: '900',
    color: colors.blue,
  },

  roleName: {
    fontSize: 11,
    fontWeight: '800',
    color: colors.navy,
    textAlign: 'center',
  },

  roleDescription: {
    fontSize: 9,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: 3,
  },

  footer: {
    fontSize: 9,
    lineHeight: 14,
    color: colors.textMuted,
    textAlign: 'center',
    marginTop: 20,
    paddingHorizontal: 15,
  },

  bottomSpace: {
    height: 15,
  },
});