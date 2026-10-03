import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>Guriva</Text>
          <Text style={styles.tagline}>Learn. Connect. Grow.</Text>
        </View>

        <Text style={styles.description}>
          Find the right tutor. Learn with confidence.
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
    paddingHorizontal: 30,
  },

  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },

  logo: {
    fontSize: 52,
    fontWeight: '800',
    letterSpacing: -1,
    color: '#2563EB',
  },

  tagline: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '500',
    color: '#64748B',
    letterSpacing: 1,
  },

  description: {
    fontSize: 16,
    color: '#475569',
    textAlign: 'center',
    lineHeight: 24,
    maxWidth: 300,
  },
});