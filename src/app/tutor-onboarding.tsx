import { router } from 'expo-router';
import { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TutorOnboardingScreen() {
  const [selectedMode, setSelectedMode] = useState('Online');

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backText}>‹</Text>
          <Text style={styles.backLabel}>Back</Text>
        </TouchableOpacity>

        <View style={styles.header}>
          <Text style={styles.logo}>Guriva</Text>

          <Text style={styles.title}>Create your tutor profile</Text>

          <Text style={styles.subtitle}>
            Help students understand who you are and what you teach.
          </Text>
        </View>

        {/* Profile Photo */}
        <Text style={styles.sectionTitle}>Profile photo</Text>

        <TouchableOpacity style={styles.photoContainer}>
          <View style={styles.photoCircle}>
            <Text style={styles.photoText}>+</Text>
          </View>

          <Text style={styles.photoLabel}>Add profile photo</Text>
        </TouchableOpacity>

        {/* Basic Information */}
        <Text style={styles.sectionTitle}>Basic information</Text>

        <Text style={styles.label}>Full name</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your full name"
          placeholderTextColor="#94A3B8"
        />

        <Text style={styles.label}>Subject</Text>

        <TextInput
          style={styles.input}
          placeholder="e.g. Mathematics"
          placeholderTextColor="#94A3B8"
        />

        <Text style={styles.label}>Classes you teach</Text>

        <TextInput
          style={styles.input}
          placeholder="e.g. Class 9 - 12"
          placeholderTextColor="#94A3B8"
        />

        <Text style={styles.label}>Years of experience</Text>

        <TextInput
          style={styles.input}
          placeholder="e.g. 5 years"
          placeholderTextColor="#94A3B8"
        />

        {/* Qualification */}
        <Text style={styles.sectionTitle}>Qualification</Text>

        <TextInput
          style={styles.input}
          placeholder="e.g. B.Sc. Mathematics"
          placeholderTextColor="#94A3B8"
        />

        {/* About */}
        <Text style={styles.sectionTitle}>About you</Text>

        <TextInput
          style={styles.aboutInput}
          placeholder="Tell students about your teaching experience..."
          placeholderTextColor="#94A3B8"
          multiline
          textAlignVertical="top"
        />

        {/* Teaching Mode */}
        <Text style={styles.sectionTitle}>Teaching mode</Text>

        <View style={styles.modeContainer}>
          <TouchableOpacity
            style={[
              styles.modeButton,
              selectedMode === 'Online' && styles.modeButtonSelected,
            ]}
            onPress={() => setSelectedMode('Online')}
          >
            <Text
              style={[
                styles.modeText,
                selectedMode === 'Online' && styles.modeTextSelected,
              ]}
            >
              Online
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.modeButton,
              selectedMode === 'Home Tuition' &&
                styles.modeButtonSelected,
            ]}
            onPress={() => setSelectedMode('Home Tuition')}
          >
            <Text
              style={[
                styles.modeText,
                selectedMode === 'Home Tuition' &&
                  styles.modeTextSelected,
              ]}
            >
              Home Tuition
            </Text>
          </TouchableOpacity>
        </View>

        {/* Location */}
        <Text style={styles.sectionTitle}>Location</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your city / area"
          placeholderTextColor="#94A3B8"
        />

        {/* Continue */}
        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => router.push('/tutor-profile-preview')}
        >
          <Text style={styles.continueButtonText}>
            Save & Continue
          </Text>
        </TouchableOpacity>

        <View style={styles.bottomSpace} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  container: {
    paddingHorizontal: 24,
    paddingBottom: 20,
  },

  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    width: 80,
  },

  backText: {
    fontSize: 34,
    color: '#0F172A',
    lineHeight: 34,
  },

  backLabel: {
    fontSize: 15,
    color: '#475569',
    marginLeft: 4,
  },

  header: {
    marginTop: 22,
    marginBottom: 25,
  },

  logo: {
    fontSize: 28,
    fontWeight: '800',
    color: '#2563EB',
    marginBottom: 18,
  },

  title: {
    fontSize: 27,
    fontWeight: '800',
    color: '#0F172A',
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 15,
    lineHeight: 22,
    color: '#64748B',
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0F172A',
    marginTop: 22,
    marginBottom: 14,
  },

  photoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F8FAFC',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 16,
    paddingVertical: 20,
  },

  photoCircle: {
    width: 78,
    height: 78,
    borderRadius: 39,
    backgroundColor: '#DBEAFE',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },

  photoText: {
    fontSize: 32,
    fontWeight: '400',
    color: '#2563EB',
  },

  photoLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: '#2563EB',
  },

  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#334155',
    marginBottom: 8,
  },

  input: {
    height: 52,
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 15,
    color: '#0F172A',
    marginBottom: 16,
  },

  aboutInput: {
    height: 100,
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingTop: 14,
    fontSize: 15,
    color: '#0F172A',
  },

  modeContainer: {
    flexDirection: 'row',
    gap: 10,
  },

  modeButton: {
    flex: 1,
    height: 48,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#CBD5E1',
    alignItems: 'center',
    justifyContent: 'center',
  },

  modeButtonSelected: {
    backgroundColor: '#EFF6FF',
    borderColor: '#2563EB',
  },

  modeText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#64748B',
  },

  modeTextSelected: {
    color: '#2563EB',
  },

  continueButton: {
    height: 54,
    borderRadius: 12,
    backgroundColor: '#2563EB',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },

  continueButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
  },

  bottomSpace: {
    height: 30,
  },
});