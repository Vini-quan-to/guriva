import { router } from 'expo-router';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TutorProfileScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Text style={styles.back}>‹</Text>
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Tutor Profile</Text>

          <View style={styles.headerSpace} />
        </View>

        {/* Profile */}
        <View style={styles.profileSection}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>A</Text>
          </View>

          <Text style={styles.name}>Aarav Sharma</Text>

          <Text style={styles.subject}>
            Mathematics Tutor
          </Text>

          <View style={styles.ratingRow}>
            <Text style={styles.star}>★</Text>
            <Text style={styles.rating}>4.8</Text>
            <Text style={styles.reviews}>
              (32 reviews)
            </Text>
          </View>
        </View>

        {/* Quick information */}
        <View style={styles.infoRow}>
          <View style={styles.infoCard}>
            <Text style={styles.infoValue}>5+</Text>
            <Text style={styles.infoLabel}>Years</Text>
          </View>

          <View style={styles.infoCard}>
            <Text style={styles.infoValue}>120+</Text>
            <Text style={styles.infoLabel}>Students</Text>
          </View>

          <View style={styles.infoCard}>
            <Text style={styles.infoValue}>₹500</Text>
            <Text style={styles.infoLabel}>Per hour</Text>
          </View>
        </View>

        {/* About */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About the tutor</Text>

          <Text style={styles.description}>
            Experienced mathematics tutor helping students build
            strong concepts and improve their problem-solving
            skills.
          </Text>
        </View>

        {/* Subjects */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Subjects</Text>

          <View style={styles.tags}>
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

        {/* Teaching mode */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Teaching mode</Text>

          <Text style={styles.detail}>📍 Pune</Text>
          <Text style={styles.detail}>💻 Online classes available</Text>
          <Text style={styles.detail}>🏠 Home tuition available</Text>
        </View>

        {/* Bottom action */}
        <TouchableOpacity
          style={styles.bookingButton}
          onPress={() => router.push('/booking')}
        >
          <Text style={styles.bookingButtonText}>
            Enquire / Book Tutor
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

  profileSection: {
    alignItems: 'center',
    paddingVertical: 25,
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#DBEAFE',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },

  avatarText: {
    fontSize: 34,
    fontWeight: '800',
    color: '#2563EB',
  },

  name: {
    fontSize: 25,
    fontWeight: '800',
    color: '#0F172A',
    marginBottom: 5,
  },

  subject: {
    fontSize: 15,
    color: '#64748B',
    marginBottom: 10,
  },

  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  star: {
    fontSize: 16,
    color: '#F59E0B',
  },

  rating: {
    fontSize: 14,
    fontWeight: '700',
    color: '#334155',
    marginLeft: 5,
  },

  reviews: {
    fontSize: 14,
    color: '#94A3B8',
    marginLeft: 5,
  },

  infoRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 25,
  },

  infoCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },

  infoValue: {
    fontSize: 17,
    fontWeight: '800',
    color: '#2563EB',
    marginBottom: 4,
  },

  infoLabel: {
    fontSize: 12,
    color: '#64748B',
  },

  section: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 18,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },

  sectionTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 10,
  },

  description: {
    fontSize: 14,
    lineHeight: 22,
    color: '#64748B',
  },

  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },

  tag: {
    backgroundColor: '#EFF6FF',
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 20,
  },

  tagText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#2563EB',
  },

  detail: {
    fontSize: 14,
    color: '#475569',
    marginBottom: 9,
  },

  bookingButton: {
    height: 56,
    borderRadius: 14,
    backgroundColor: '#2563EB',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },

  bookingButtonText: {
    fontSize: 17,
    fontWeight: '700',
    color: '#FFFFFF',
  },

  bottomSpace: {
    height: 20,
  },
});