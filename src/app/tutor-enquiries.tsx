import { router } from 'expo-router';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TutorEnquiriesScreen() {
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

          <Text style={styles.headerTitle}>Student Enquiries</Text>

          <View style={styles.headerSpace} />
        </View>

        <Text style={styles.subtitle}>
          Review students who are interested in learning with you.
        </Text>

        {/* Pending request */}
        <Text style={styles.sectionTitle}>New Requests</Text>

        <View style={styles.requestCard}>
          <View style={styles.studentRow}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>A</Text>
            </View>

            <View style={styles.studentInfo}>
              <Text style={styles.studentName}>Ananya Verma</Text>

              <Text style={styles.studentDetails}>
                Physics • Class 12
              </Text>

              <Text style={styles.requestTime}>
                Received today
              </Text>
            </View>

            <View style={styles.pendingBadge}>
              <Text style={styles.pendingText}>New</Text>
            </View>
          </View>

          <View style={styles.messageBox}>
            <Text style={styles.messageLabel}>Student message</Text>

            <Text style={styles.message}>
              I am preparing for my board exams and would like
              regular Physics classes.
            </Text>
          </View>

          <View style={styles.actionRow}>
            <TouchableOpacity style={styles.rejectButton}>
              <Text style={styles.rejectText}>Reject</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.acceptButton}
              onPress={() => router.push('/tutor-home')}
            >
              <Text style={styles.acceptText}>Accept</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Another request */}
        <View style={styles.requestCard}>
          <View style={styles.studentRow}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>R</Text>
            </View>

            <View style={styles.studentInfo}>
              <Text style={styles.studentName}>Rahul Sharma</Text>

              <Text style={styles.studentDetails}>
                Mathematics • Class 10
              </Text>

              <Text style={styles.requestTime}>
                Received yesterday
              </Text>
            </View>

            <View style={styles.pendingBadge}>
              <Text style={styles.pendingText}>New</Text>
            </View>
          </View>

          <View style={styles.messageBox}>
            <Text style={styles.messageLabel}>Student message</Text>

            <Text style={styles.message}>
              Looking for help with algebra and geometry.
            </Text>
          </View>

          <View style={styles.actionRow}>
            <TouchableOpacity style={styles.rejectButton}>
              <Text style={styles.rejectText}>Reject</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.acceptButton}
              onPress={() => router.push('/tutor-home')}
            >
              <Text style={styles.acceptText}>Accept</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Information */}
        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>What happens next?</Text>

          <Text style={styles.infoText}>
            Accepting an enquiry allows you to continue the
            conversation and arrange the student's classes.
          </Text>
        </View>

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
  },

  requestCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 18,
  },

  studentRow: {
    flexDirection: 'row',
    alignItems: 'center',
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

  studentInfo: {
    flex: 1,
  },

  studentName: {
    fontSize: 15,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 4,
  },

  studentDetails: {
    fontSize: 13,
    color: '#475569',
    marginBottom: 3,
  },

  requestTime: {
    fontSize: 11,
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

  messageBox: {
    backgroundColor: '#F8FAFC',
    borderRadius: 12,
    padding: 13,
    marginTop: 16,
  },

  messageLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: '#334155',
    marginBottom: 5,
  },

  message: {
    fontSize: 13,
    lineHeight: 19,
    color: '#64748B',
  },

  actionRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 16,
  },

  rejectButton: {
    flex: 1,
    height: 46,
    borderRadius: 11,
    borderWidth: 1,
    borderColor: '#CBD5E1',
    alignItems: 'center',
    justifyContent: 'center',
  },

  rejectText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#475569',
  },

  acceptButton: {
    flex: 1,
    height: 46,
    borderRadius: 11,
    backgroundColor: '#2563EB',
    alignItems: 'center',
    justifyContent: 'center',
  },

  acceptText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
  },

  infoCard: {
    backgroundColor: '#EFF6FF',
    borderRadius: 14,
    padding: 16,
    marginTop: 6,
  },

  infoTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1E40AF',
    marginBottom: 6,
  },

  infoText: {
    fontSize: 13,
    lineHeight: 20,
    color: '#475569',
  },

  bottomSpace: {
    height: 30,
  },
});