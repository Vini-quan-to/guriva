import { router } from 'expo-router';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function StudentEnquiriesScreen() {
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

          <Text style={styles.headerTitle}>My Enquiries</Text>

          <View style={styles.headerSpace} />
        </View>

        <Text style={styles.subtitle}>
          Track your tutor enquiries and booking requests.
        </Text>

        {/* Pending enquiry */}
        <Text style={styles.sectionTitle}>Pending</Text>

        <View style={styles.card}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>A</Text>
          </View>

          <View style={styles.info}>
            <Text style={styles.name}>Aarav Sharma</Text>

            <Text style={styles.subject}>
              Mathematics • Class 12
            </Text>

            <Text style={styles.mode}>
              Online • ₹500/hour
            </Text>
          </View>

          <View style={styles.pendingBadge}>
            <Text style={styles.pendingText}>Pending</Text>
          </View>
        </View>

        {/* Accepted enquiry */}
        <Text style={styles.sectionTitle}>Accepted</Text>

        <View style={styles.card}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>R</Text>
          </View>

          <View style={styles.info}>
            <Text style={styles.name}>Riya Mehta</Text>

            <Text style={styles.subject}>
              Physics • Class 11
            </Text>

            <Text style={styles.mode}>
              Online • ₹450/hour
            </Text>
          </View>

          <View style={styles.acceptedBadge}>
            <Text style={styles.acceptedText}>Accepted</Text>
          </View>
        </View>

        {/* View booking */}
        <TouchableOpacity
          style={styles.bookingButton}
          onPress={() => router.push('/student-dashboard')}
        >
          <Text style={styles.bookingButtonText}>
            View My Dashboard
          </Text>
        </TouchableOpacity>

        {/* Empty state note */}
        <View style={styles.noteCard}>
          <Text style={styles.noteTitle}>How enquiries work</Text>

          <Text style={styles.noteText}>
            Send an enquiry to a tutor, wait for their response,
            and then continue to booking when they accept.
          </Text>
        </View>

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

  subtitle: {
    fontSize: 14,
    lineHeight: 21,
    color: '#64748B',
    marginTop: 8,
    marginBottom: 24,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 12,
    marginTop: 8,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 20,
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#DBEAFE',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  avatarText: {
    fontSize: 19,
    fontWeight: '800',
    color: '#2563EB',
  },

  info: {
    flex: 1,
  },

  name: {
    fontSize: 15,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 4,
  },

  subject: {
    fontSize: 13,
    color: '#475569',
    marginBottom: 3,
  },

  mode: {
    fontSize: 12,
    color: '#94A3B8',
  },

  pendingBadge: {
    backgroundColor: '#FEF3C7',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 5,
  },

  pendingText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#D97706',
  },

  acceptedBadge: {
    backgroundColor: '#DCFCE7',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 5,
  },

  acceptedText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#16A34A',
  },

  bookingButton: {
    height: 52,
    borderRadius: 12,
    backgroundColor: '#2563EB',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },

  bookingButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },

  noteCard: {
    backgroundColor: '#EFF6FF',
    borderRadius: 14,
    padding: 16,
    marginTop: 20,
  },

  noteTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1E40AF',
    marginBottom: 6,
  },

  noteText: {
    fontSize: 13,
    lineHeight: 20,
    color: '#475569',
  },
});