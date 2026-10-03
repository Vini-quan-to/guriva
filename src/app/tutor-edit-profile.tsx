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

export default function TutorEditProfileScreen() {
  const [selectedMode, setSelectedMode] = useState('Online');

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Text style={styles.back}>‹</Text>
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Edit Profile</Text>

          <View style={styles.headerSpace} />
        </View>

        <Text style={styles.subtitle}>
          Update your tutor profile information.
        </Text>

        {/* Profile photo */}
        <Text style={styles.sectionTitle}>Profile photo</Text>

        <TouchableOpacity style={styles.photoContainer}>
          <View style={styles.photoCircle}>
            <Text style={styles.photoText}>T</Text>
          </View>

          <Text style={styles.changePhoto}>
            Change photo
          </Text>
        </TouchableOpacity>

        {/* Basic information */}
        <Text style={styles.sectionTitle}>Basic information</Text>

        <Text style={styles.label}>Full name</Text>

        <TextInput
          style={styles.input}
          defaultValue="Your Name"
          placeholder="Enter your full name"
          placeholderTextColor="#94A3B8"
        />

        <Text style={styles.label}>Subject</Text>

        <TextInput
          style={styles.input}
          defaultValue="Mathematics"
          placeholder="e.g. Mathematics"
          placeholderTextColor="#94A3B8"
        />

        <Text style={styles.label}>Classes you teach</Text>

        <TextInput
          style={styles.input}
          defaultValue="Class 9 - 12"
          placeholder="e.g. Class 9 - 12"
          placeholderTextColor="#94A3B8"
        />

        <Text style={styles.label}>Years of experience</Text>

        <TextInput
          style={styles.input}
          defaultValue="5 years"
          placeholder="e.g. 5 years"
          placeholderTextColor="#94A3B8"
        />

        {/* Qualification */}
        <Text style={styles.sectionTitle}>Qualification</Text>

        <TextInput
          style={styles.input}
          defaultValue="B.Sc. Mathematics"
          placeholder="Enter your qualification"
          placeholderTextColor="#94A3B8"
        />

        {/* About */}
        <Text style={styles.sectionTitle}>About you</Text>

        <TextInput
          style={styles.aboutInput}
          defaultValue="I help students understand Mathematics through clear explanations and regular practice."
          placeholder="Tell students about yourself..."
          placeholderTextColor="#94A3B8"
          multiline
          textAlignVertical="top"
        />

        {/* Teaching mode */}
        <Text style={styles.sectionTitle}>Teaching mode</Text>

        <View style={styles.modeContainer}>
          <TouchableOpacity
            style={[
              styles.modeButton,
              selectedMode === 'Online' &&
                styles.modeButtonSelected,
            ]}
            onPress={() => setSelectedMode('Online')}
          >
            <Text
              style={[
                styles.modeText,
                selectedMode === 'Online' &&
                  styles.modeTextSelected,
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
            onPress={() =>
              setSelectedMode('Home Tuition')
            }
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
          defaultValue="Pune, Maharashtra"
          placeholder="Enter your city / area"
          placeholderTextColor="#94A3B8"
        />

        {/* Save */}
        <TouchableOpacity
          style={styles.saveButton}
          onPress={() => router.push('/tutor-profile-preview')}
        >
          <Text style={styles.saveButtonText}>
            Save Changes
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
    paddingBottom: 30,
  },

  header: {
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  back: {
    fontSize: 36,
    color: '#0F172A',
  },

  headerTitle: {
    fontSize: 19,
    fontWeight: '700',
    color: '#0F172A',
  },

  headerSpace: {
    width: 25,
  },

  subtitle: {
    fontSize: 14,
    lineHeight: 21,
    color: '#64748B',
    marginTop: 8,
    marginBottom: 22,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0F172A',
    marginTop: 20,
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
    fontSize: 28,
    fontWeight: '800',
    color: '#2563EB',
  },

  changePhoto: {
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
    marginBottom: 15,
  },

  aboutInput: {
    height: 105,
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

  saveButton: {
    height: 54,
    borderRadius: 12,
    backgroundColor: '#2563EB',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },

  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },

  bottomSpace: {
    height: 30,
  },
});