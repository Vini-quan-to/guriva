import { useAuth } from '../context/AuthContext';
import { router } from 'expo-router';
import { useEffect } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../theme';

export default function IndexScreen() {
  const {
    user,
    isAuthenticated,
    isLoading,
  } = useAuth();

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (!isAuthenticated || !user) {
      router.replace('/onboarding');
      return;
    }

    if (user.role === 'student') {
      router.replace('/student-home');
      return;
    }

    if (
      user.role === 'tutor' &&
      !user.tutorProfile
    ) {
      router.replace('/tutor-onboarding');
      return;
    }

    if (user.role === 'tutor') {
      router.replace('/tutor-home');
    }
  }, [
    isLoading,
    isAuthenticated,
    user,
  ]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.logoText}>
          GURIVA
        </Text>

        <Text style={styles.tagline}>
          Learn. Connect. Grow.
        </Text>

        <ActivityIndicator
          size="small"
          color={colors.teal}
          style={styles.loader}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.navy,
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  logoText: {
    fontSize: 30,
    fontWeight: '900',
    letterSpacing: 3,
    color: colors.white,
  },

  tagline: {
    fontSize: 11,
    fontWeight: '600',
    color: colors.teal,
    marginTop: 7,
  },

  loader: {
    marginTop: 25,
  },
});