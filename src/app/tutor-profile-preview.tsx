import { router } from 'expo-router';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TutorProfilePreviewScreen() {
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

          <Text style={styles.headerTitle}>Profile Preview</Text>

          <View style={styles.headerSpace} />
        </View>

        {/* Profile */}
        <View style={styles.profileCard}>

          <View style={styles.avatar}>
            <Text style={styles.avatarText}>T</Text>
          </View>

          <Text style={styles.name}>Your Name</Text>

          <Text style={styles.subject}>
            Mathematics Tutor
          </Text>

          <View style={styles.ratingRow}>
            <Text style={styles.star}>★</Text>
            <Text style={styles.rating}>New tutor</Text>
          </View>

        </View>

        {/* Quick Information */}
        <View style={styles.infoRow}>

          <View style={styles.infoCard}>
            <Text style={styles.infoNumber}>5+</Text>
            <Text style={styles.infoLabel}>Years</Text>
          </View>

          <View style={styles.infoCard}>
            <Text style={styles.infoNumber}>Online</Text>
            <Text style={styles.infoLabel}>Mode</Text>
          </View>

          <View style={styles.infoCard}>
            <Text style={styles.infoNumber}>₹500</Text>
            <Text style={styles.infoLabel}>/ hour</Text>
          </View>

        </View>

        {/* About */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About</Text>

          <Text style={styles.aboutText}>
            Your tutor introduction will appear here. Tell students
            about your teaching experience, approach and what makes
            your classes useful.
          </Text>
        </View>

        {/* Subjects */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Subjects</Text>

          <View style={styles.tagsContainer}>
            <View style={styles.tag}>
              <Text style={styles.tagText}>Mathematics</Text>
            </View>

            <View style={styles.tag}>
              <Text style={styles.tagText}>Algebra</Text>
            </View>

            <View style={styles.tag}>
              <Text style={styles.tagText}>Calculus</Text>
            </View>
          </View>
        </View>

        {/* Classes */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Classes</Text>

          <Text style={styles.detailText}>
            Class 9 - 12
          </Text>
        </View>

        {/* Qualification */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Qualification</Text>

          <Text style={styles.detailText}>
            Your qualification will appear here.
          </Text>
        </View>

        {/* Location */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Location</Text>

          <Text style={styles.detailText}>
            Pune, Maharashtra
          </Text>
        </View>

        {/* Buttons */}
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => router.push('/tutor-onboarding')}
        >
          <Text style={styles.editButtonText}>
            Edit Profile
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => router.push('/tutor-home')}
        >
          <Text style={styles.continueButtonText}>
            Continue to Dashboard
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
    backgroundColor: '#F8FAFC',
  },

  container: {
    paddingHorizontal: 20,
    paddingBottom: 20,
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

  profileCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    paddingVertical: 25,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginTop: 15,
  },

  avatar: {
    width: 82,
    height: 82,
    borderRadius: 41,
    backgroundColor: '#DBEAFE',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },

  avatarText: {
    fontSize: 30,
    fontWeight: '800',
    color: '#2563EB',
  },

  name: {
    fontSize: 23,
    fontWeight: '800',
    color: '#0F172A',
    marginBottom: 5,
  },

  subject: {
    fontSize: 15,
    color: '#64748B',
    marginBottom: 8,
  },

  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  star: {
    fontSize: 16,
    color: '#F59E0B',
    marginRight: 5,
  },

  rating: {
    fontSize: 13,
    color: '#64748B',
  },

  infoRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 15,
  },

  infoCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingVertical: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },

  infoNumber: {
    fontSize: 16,
    fontWeight: '800',
    color: '#2563EB',
    marginBottom: 4,
  },

  infoLabel: {
    fontSize: 11,
    color: '#64748B',
  },

  section: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 18,
    marginTop: 15,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },

  sectionTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 10,
  },

  aboutText: {
    fontSize: 14,
    lineHeight: 22,
    color: '#64748B',
  },

  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },

  tag: {
    backgroundColor: '#EFF6FF',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 7,
  },

  tagText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#2563EB',
  },

  detailText: {
    fontSize: 14,
    color: '#475569',
  },

  editButton: {
    height: 52,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#2563EB',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 22,
  },

  editButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2563EB',
  },

  continueButton: {
    height: 52,
    borderRadius: 12,
    backgroundColor: '#2563EB',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },

  continueButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },

  bottomSpace: {
    height: 25,
  },
});