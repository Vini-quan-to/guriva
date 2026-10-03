import { router } from 'expo-router';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function StudentDashboardScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>My learning</Text>
            <Text style={styles.title}>Dashboard</Text>
          </View>

          <TouchableOpacity
            style={styles.profileButton}
          >
            <Text style={styles.profileText}>V</Text>
          </TouchableOpacity>
        </View>

        {/* Current tutor */}
        <Text style={styles.sectionTitle}>
          Current tutor
        </Text>

        <TouchableOpacity
          style={styles.tutorCard}
          onPress={() => router.push('/tutor-profile')}
        >
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>A</Text>
          </View>

          <View style={styles.tutorInfo}>
            <Text style={styles.tutorName}>
              Aarav Sharma
            </Text>

            <Text style={styles.tutorSubject}>
              Mathematics
            </Text>

            <Text style={styles.tutorMode}>
              Online • ₹500/hour
            </Text>
          </View>

          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>

        {/* Upcoming class */}
        <Text style={styles.sectionTitle}>
          Upcoming class
        </Text>

        <View style={styles.classCard}>
          <View style={styles.dateBox}>
            <Text style={styles.dateDay}>12</Text>
            <Text style={styles.dateMonth}>OCT</Text>
          </View>

          <View style={styles.classInfo}>
            <Text style={styles.classTitle}>
              Mathematics
            </Text>

            <Text style={styles.classTutor}>
              with Aarav Sharma
            </Text>

            <Text style={styles.classTime}>
              5:00 PM • Online
            </Text>
          </View>
        </View>

        {/* Booking status */}
        <Text style={styles.sectionTitle}>
          Booking status
        </Text>

        <View style={styles.statusCard}>
          <View style={styles.statusIcon}>
            <Text style={styles.statusIconText}>✓</Text>
          </View>

          <View style={styles.statusInfo}>
            <Text style={styles.statusTitle}>
              Booking confirmed
            </Text>

            <Text style={styles.statusText}>
              Your next class is scheduled.
            </Text>
          </View>

          <View style={styles.confirmedBadge}>
            <Text style={styles.confirmedText}>
              Confirmed
            </Text>
          </View>
        </View>

        {/* Quick actions */}
        <Text style={styles.sectionTitle}>
          Quick actions
        </Text>

        <View style={styles.actionsRow}>
          {/* Find tutor */}
          <TouchableOpacity
            style={styles.actionCard}
            onPress={() => router.push('/find-tutor')}
          >
            <View style={styles.actionIcon}>
              <Text style={styles.actionIconText}>+</Text>
            </View>

            <Text style={styles.actionText}>
              Find tutor
            </Text>
          </TouchableOpacity>

          {/* Reviews */}
          <TouchableOpacity
            style={styles.actionCard}
            onPress={() => router.push('/student-history')}
          >
            <View style={styles.actionIcon}>
              <Text style={styles.actionIconText}>★</Text>
            </View>

            <Text style={styles.actionText}>
              Reviews
            </Text>
          </TouchableOpacity>

          {/* History */}
          <TouchableOpacity
            style={styles.actionCard}
            onPress={() => router.push('/student-history')}
          >
            <View style={styles.actionIcon}>
              <Text style={styles.actionIconText}>◷</Text>
            </View>

            <Text style={styles.actionText}>
              History
            </Text>
          </TouchableOpacity>
        </View>

        {/* Enquiries */}
        <Text style={styles.sectionTitle}>
          My enquiries
        </Text>

        <TouchableOpacity
          style={styles.enquiryCard}
          onPress={() => router.push('/student-enquiries')}
        >
          <View style={styles.enquiryIcon}>
            <Text style={styles.enquiryIconText}>?</Text>
          </View>

          <View style={styles.enquiryInfo}>
            <Text style={styles.enquiryTitle}>
              Tutor enquiries
            </Text>

            <Text style={styles.enquiryText}>
              Track your tutor requests and responses.
            </Text>
          </View>

          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>

        {/* Recent activity */}
        <Text style={styles.sectionTitle}>
          Recent activity
        </Text>

        <View style={styles.activityCard}>
          <View style={styles.activityItem}>
            <View style={styles.activityDot} />

            <View style={styles.activityInfo}>
              <Text style={styles.activityTitle}>
                Booking confirmed
              </Text>

              <Text style={styles.activityText}>
                Mathematics with Aarav Sharma
              </Text>
            </View>

            <Text style={styles.activityTime}>
              Today
            </Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.activityItem}>
            <View style={styles.activityDot} />

            <View style={styles.activityInfo}>
              <Text style={styles.activityTitle}>
                Payment completed
              </Text>

              <Text style={styles.activityText}>
                ₹500 paid successfully
              </Text>
            </View>

            <Text style={styles.activityTime}>
              Today
            </Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.activityItem}>
            <View style={styles.activityDot} />

            <View style={styles.activityInfo}>
              <Text style={styles.activityTitle}>
                Tutor enquiry sent
              </Text>

              <Text style={styles.activityText}>
                Physics with Riya Mehta
              </Text>
            </View>

            <Text style={styles.activityTime}>
              Yesterday
            </Text>
          </View>
        </View>

        {/* Bottom spacing */}
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
    paddingTop: 15,
    paddingBottom: 30,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },

  greeting: {
    fontSize: 14,
    color: '#64748B',
    marginBottom: 4,
  },

  title: {
    fontSize: 27,
    fontWeight: '800',
    color: '#0F172A',
  },

  profileButton: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: '#DBEAFE',
    alignItems: 'center',
    justifyContent: 'center',
  },

  profileText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2563EB',
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 12,
    marginTop: 8,
  },

  tutorCard: {
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
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#DBEAFE',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },

  avatarText: {
    fontSize: 20,
    fontWeight: '800',
    color: '#2563EB',
  },

  tutorInfo: {
    flex: 1,
  },

  tutorName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 4,
  },

  tutorSubject: {
    fontSize: 14,
    color: '#475569',
    marginBottom: 3,
  },

  tutorMode: {
    fontSize: 12,
    color: '#94A3B8',
  },

  arrow: {
    fontSize: 28,
    color: '#94A3B8',
  },

  classCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 20,
  },

  dateBox: {
    width: 58,
    height: 58,
    borderRadius: 14,
    backgroundColor: '#EFF6FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },

  dateDay: {
    fontSize: 20,
    fontWeight: '800',
    color: '#2563EB',
  },

  dateMonth: {
    fontSize: 10,
    fontWeight: '700',
    color: '#64748B',
  },

  classInfo: {
    flex: 1,
  },

  classTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 4,
  },

  classTutor: {
    fontSize: 13,
    color: '#475569',
    marginBottom: 3,
  },

  classTime: {
    fontSize: 12,
    color: '#94A3B8',
  },

  statusCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 20,
  },

  statusIcon: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#DCFCE7',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  statusIconText: {
    fontSize: 18,
    fontWeight: '800',
    color: '#16A34A',
  },

  statusInfo: {
    flex: 1,
  },

  statusTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 3,
  },

  statusText: {
    fontSize: 12,
    color: '#64748B',
  },

  confirmedBadge: {
    backgroundColor: '#DCFCE7',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 5,
  },

  confirmedText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#16A34A',
  },

  actionsRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
  },

  actionCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },

  actionIcon: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#EFF6FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 7,
  },

  actionIconText: {
    fontSize: 17,
    fontWeight: '800',
    color: '#2563EB',
  },

  actionText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#334155',
  },

  enquiryCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 20,
  },

  enquiryIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#EFF6FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  enquiryIconText: {
    fontSize: 18,
    fontWeight: '800',
    color: '#2563EB',
  },

  enquiryInfo: {
    flex: 1,
  },

  enquiryTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 4,
  },

  enquiryText: {
    fontSize: 12,
    color: '#64748B',
  },

  activityCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },

  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  activityDot: {
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: '#2563EB',
    marginRight: 12,
  },

  activityInfo: {
    flex: 1,
  },

  activityTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 3,
  },

  activityText: {
    fontSize: 12,
    color: '#64748B',
  },

  activityTime: {
    fontSize: 11,
    color: '#94A3B8',
  },

  divider: {
    height: 1,
    backgroundColor: '#E2E8F0',
    marginVertical: 14,
  },

  bottomSpace: {
    height: 30,
  },
});