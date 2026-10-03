import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function StudentSignupScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.logo}>Guriva</Text>

        <Text style={styles.title}>Create Student Account</Text>

        <Text style={styles.subtitle}>
          Create your account to start learning.
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Full name"
          placeholderTextColor="#94A3B8"
        />

        <TextInput
          style={styles.input}
          placeholder="Email or phone number"
          placeholderTextColor="#94A3B8"
        />

        <TextInput
          style={styles.input}
          placeholder="Create password"
          placeholderTextColor="#94A3B8"
          secureTextEntry
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>
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
    justifyContent: 'center',
    paddingHorizontal: 28,
  },

  logo: {
    fontSize: 34,
    fontWeight: '800',
    color: '#2563EB',
    textAlign: 'center',
    marginBottom: 35,
  },

  title: {
    fontSize: 27,
    fontWeight: '800',
    color: '#0F172A',
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 16,
    color: '#64748B',
    marginBottom: 28,
  },

  input: {
    height: 54,
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    marginBottom: 14,
    color: '#0F172A',
  },

  button: {
    height: 54,
    borderRadius: 12,
    backgroundColor: '#2563EB',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
  },
});