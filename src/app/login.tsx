import { router } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

        <Text style={styles.logo}>Guriva</Text>

        <Text style={styles.title}>Welcome to Guriva</Text>

        <Text style={styles.subtitle}>
          How would you like to continue?
        </Text>

        <View style={styles.buttonsContainer}>

          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => router.push('/student-login')}
          >
            <Text style={styles.primaryButtonText}>
              I'm a Student
            </Text>

            <Text style={styles.buttonDescription}>
              Find tutors and start learning
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => router.push('/tutor-login')}
          >
            <Text style={styles.secondaryButtonText}>
              I'm a Tutor
            </Text>

            <Text style={styles.buttonDescription}>
              Teach students and grow your career
            </Text>
          </TouchableOpacity>

        </View>

        <Text style={styles.footer}>
          Learn. Connect. Grow.
        </Text>

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
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 28,
  },

  logo: {
    fontSize: 34,
    fontWeight: '800',
    color: '#2563EB',
    marginBottom: 35,
  },

  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#0F172A',
    textAlign: 'center',
    marginBottom: 12,
  },

  subtitle: {
    fontSize: 16,
    color: '#64748B',
    textAlign: 'center',
    marginBottom: 35,
  },

  buttonsContainer: {
    width: '100%',
    maxWidth: 380,
    gap: 16,
  },

  primaryButton: {
    width: '100%',
    minHeight: 76,
    borderRadius: 16,
    backgroundColor: '#2563EB',
    paddingHorizontal: 20,
    paddingVertical: 14,
    justifyContent: 'center',
  },

  secondaryButton: {
    width: '100%',
    minHeight: 76,
    borderRadius: 16,
    backgroundColor: '#EFF6FF',
    borderWidth: 1,
    borderColor: '#2563EB',
    paddingHorizontal: 20,
    paddingVertical: 14,
    justifyContent: 'center',
  },

  primaryButtonText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 4,
  },

  secondaryButtonText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2563EB',
    marginBottom: 4,
  },

  buttonDescription: {
    fontSize: 13,
    color: '#CBD5E1',
  },

  footer: {
    marginTop: 35,
    fontSize: 13,
    color: '#94A3B8',
  },
});