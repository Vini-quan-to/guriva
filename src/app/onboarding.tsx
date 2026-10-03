import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

export default function OnboardingScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

        <View style={styles.content}>
          <Text style={styles.logo}>Guriva</Text>

          <Text style={styles.title}>
            Find the right tutor.
          </Text>

          <Text style={styles.subtitle}>
            Learn from trusted tutors who match your
            subjects, class, location, and learning needs.
          </Text>
        </View>

        <View style={styles.bottomSection}>
          <View style={styles.dots}>
            <View style={[styles.dot, styles.activeDot]} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push('/login')}
          >
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>

          <Text style={styles.footer}>
            Learn. Connect. Grow.
          </Text>
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
    justifyContent: 'space-between',
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    fontSize: 24,
    fontWeight: '800',
    color: '#2563EB',
    marginBottom: 55,
  },

  title: {
    fontSize: 34,
    fontWeight: '800',
    color: '#0F172A',
    textAlign: 'center',
    marginBottom: 18,
  },

  subtitle: {
    fontSize: 17,
    lineHeight: 26,
    color: '#64748B',
    textAlign: 'center',
    maxWidth: 340,
  },

  bottomSection: {
    alignItems: 'center',
    paddingBottom: 20,
  },

  dots: {
    flexDirection: 'row',
    marginBottom: 25,
    gap: 8,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#CBD5E1',
  },

  activeDot: {
    width: 24,
    backgroundColor: '#2563EB',
  },

  button: {
    width: '100%',
    height: 54,
    borderRadius: 14,
    backgroundColor: '#2563EB',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
  },

  footer: {
    marginTop: 16,
    fontSize: 13,
    color: '#94A3B8',
  },
});