import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { colors, radius, spacing } from '../theme';

export default function OnboardingScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

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

        {/* Main Illustration */}
        <View style={styles.illustrationArea}>
          <View style={styles.outerCircle}>
            <View style={styles.innerCircle}>
              <Text style={styles.bookIcon}>📚</Text>
            </View>
          </View>

          <View style={styles.floatingCardTop}>
            <Text style={styles.floatingIcon}>✓</Text>
            <Text style={styles.floatingText}>Verified Tutors</Text>
          </View>

          <View style={styles.floatingCardBottom}>
            <Text style={styles.floatingIcon}>★</Text>
            <Text style={styles.floatingText}>Learn Better</Text>
          </View>
        </View>

        {/* Heading */}
        <View style={styles.content}>
          <Text style={styles.title}>
            Find the right tutor.
          </Text>

          <Text style={styles.titleHighlight}>
            Learn with confidence.
          </Text>

          <Text style={styles.description}>
            Guriva connects students with tutors who match
            their learning needs, goals and preferences.
          </Text>
        </View>

        {/* Features */}
        <View style={styles.features}>
          <View style={styles.feature}>
            <View style={styles.featureIconBlue}>
              <Text style={styles.featureIconText}>⌕</Text>
            </View>

            <Text style={styles.featureText}>
              Find tutors
            </Text>
          </View>

          <View style={styles.feature}>
            <View style={styles.featureIconTeal}>
              <Text style={styles.featureIconText}>↔</Text>
            </View>

            <Text style={styles.featureText}>
              Connect
            </Text>
          </View>

          <View style={styles.feature}>
            <View style={styles.featureIconBlue}>
              <Text style={styles.featureIconText}>★</Text>
            </View>

            <Text style={styles.featureText}>
              Grow
            </Text>
          </View>
        </View>

        {/* Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.replace('/login')}
          activeOpacity={0.85}
        >
          <Text style={styles.buttonText}>
            Get Started
          </Text>

          <Text style={styles.arrow}>
            →
          </Text>
        </TouchableOpacity>

        {/* Login */}
        <View style={styles.loginRow}>
          <Text style={styles.loginText}>
            Already have an account?
          </Text>

          <TouchableOpacity
            onPress={() => router.replace('/login')}
            activeOpacity={0.75}
          >
            <Text style={styles.loginLink}>
              Log in
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.footer}>
          Your learning journey starts here.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },

  container: {
    flex: 1,
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.lg,
    paddingBottom: spacing.md,
    alignItems: 'center',
  },

  logoSection: {
    alignItems: 'center',
    marginTop: 5,
  },

  logo: {
    width: 190,
    height: 65,
  },

  tagline: {
    fontSize: 10,
    fontWeight: '600',
    color: colors.textSecondary,
    letterSpacing: 1.1,
    marginTop: -5,
  },

  illustrationArea: {
    width: '100%',
    height: 225,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginTop: 18,
  },

  outerCircle: {
    width: 185,
    height: 185,
    borderRadius: 92.5,
    backgroundColor: colors.lightBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },

  innerCircle: {
    width: 125,
    height: 125,
    borderRadius: 62.5,
    backgroundColor: colors.lightTeal,
    borderWidth: 2,
    borderColor: colors.teal,
    alignItems: 'center',
    justifyContent: 'center',
  },

  bookIcon: {
    fontSize: 52,
  },

  floatingCardTop: {
    position: 'absolute',
    top: 15,
    right: 5,
    backgroundColor: colors.white,
    borderRadius: radius.lg,
    paddingVertical: 9,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
    elevation: 3,
    shadowColor: colors.navy,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 7,
  },

  floatingCardBottom: {
    position: 'absolute',
    bottom: 15,
    left: 5,
    backgroundColor: colors.white,
    borderRadius: radius.lg,
    paddingVertical: 9,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
    elevation: 3,
    shadowColor: colors.navy,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 7,
  },

  floatingIcon: {
    fontSize: 13,
    fontWeight: '900',
    color: colors.teal,
    marginRight: 6,
  },

  floatingText: {
    fontSize: 10,
    fontWeight: '700',
    color: colors.navy,
  },

  content: {
    alignItems: 'center',
    marginTop: 7,
  },

  title: {
    fontSize: 25,
    fontWeight: '800',
    color: colors.navy,
    textAlign: 'center',
  },

  titleHighlight: {
    fontSize: 25,
    fontWeight: '800',
    color: colors.blue,
    textAlign: 'center',
    marginTop: 1,
  },

  description: {
    fontSize: 12,
    lineHeight: 18,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: 10,
    paddingHorizontal: 12,
  },

  features: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 18,
    paddingHorizontal: 5,
  },

  feature: {
    alignItems: 'center',
    flex: 1,
  },

  featureIconBlue: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    backgroundColor: colors.lightBlue,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },

  featureIconTeal: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    backgroundColor: colors.lightTeal,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },

  featureIconText: {
    fontSize: 15,
    fontWeight: '900',
    color: colors.blue,
  },

  featureText: {
    fontSize: 10,
    fontWeight: '700',
    color: colors.navy,
  },

  button: {
    width: '100%',
    backgroundColor: colors.teal,
    borderRadius: radius.lg,
    paddingVertical: 16,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
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

  loginRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 13,
  },

  loginText: {
    fontSize: 10,
    color: colors.textSecondary,
  },

  loginLink: {
    fontSize: 10,
    fontWeight: '800',
    color: colors.blue,
    marginLeft: 4,
  },

  footer: {
    fontSize: 9,
    color: colors.textMuted,
    marginTop: 13,
  },
});