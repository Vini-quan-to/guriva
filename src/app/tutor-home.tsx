import { router } from 'expo-router';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TutorHomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hello, Tutor</Text>
            <Text style={styles.title}>Tutor Dashboard</Text>
          </View>

          <TouchableOpacity
            style={styles.profileButton}
            onPress={() => router.push('/tutor-profile-preview')}
          >
            <Text style={styles.profileText}>T</Text>
          </TouchableOpacity>
        </View>

        {/* Earnings */}
        <View style={styles.earningsCard}>
          <Text style={styles.earningsLabel}>
            This month
          </Text>

          <Text style={styles.earningsAmount}>
            ₹12,500
          </Text>

          <Text style={styles.earningsNote}>
            Estimated earnings
          </Text>
        </View>

        {/* Stats */}
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>8</Text>
            <Text style={styles.statLabel}>Students</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statNumber}>24</Text>
            <Text style={styles.statLabel}>Classes</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statNumber}>4.8</Text>
            <Text style={styles.statLabel}>Rating</Text>
          </View>
        </View>

        {/* Today's class */}
        <Text style={styles.sectionTitle}>
          Today's class
        </Text>

        <View style={styles.classCard}>
          <View style={styles.classIcon}>
            <Text style={styles.classIconText}>M</Text>
          </View>

          <View style={styles.classInfo}>
            <Text style={styles.classTitle}>
              Mathematics
            </Text>

            <Text style={styles.classStudent}>
              Rahul Sharma
            </Text>

            <Text style={styles.classTime}>
              5:00 PM • Online
            </Text>
          </View>

          <View style={styles.onlineBadge}>
            <Text style={styles.onlineText}>
              Online
            </Text>
          </View>
        </View>

        {/* Student requests */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            Student requests
          </Text>

          <TouchableOpacity
            onPress={() => router.push('/tutor-enquiries')}
          >
            <Text style={styles.seeAll}>
              See all
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.requestCard}>
          <View style={styles.studentAvatar}>
            <Text style={styles.studentAvatarText}>
              A
            </Text>
          </View>

          <View style={styles.requestInfo}>
            <Text style={styles.requestName}>
              Ananya Verma
            </Text>

            <Text style={styles.requestSubject}>
              Physics • Class 12
            </Text>

            <Text style={styles.requestTime}>
              New request
            </Text>
          </View>

          <TouchableOpacity
            style={styles.viewButton}
            onPress={() => router.push('/tutor-enquiries')}
          >
            <Text style={styles.viewButtonText}>
              View
            </Text>
          </TouchableOpacity>
        </View>

        {/* Quick actions */}
        <Text style={styles.sectionTitle}>
          Quick actions
        </Text>

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => router.push('/tutor-enquiries')}
        >
          <View style={styles.menuIcon}>
            <Text style={styles.menuIconText}>✓</Text>
          </View>

          <View style={styles.menuInfo}>
            <Text style={styles.menuTitle}>
              Student Enquiries
            </Text>

            <Text style={styles.menuSubtitle}>
              View and respond to student requests
            </Text>
          </View>

          <Text style={styles.menuArrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => router.push('/tutor-availability')}
        >
          <View style={styles.menuIcon}>
            <Text style={styles.menuIconText}>◷</Text>
          </View>

          <View style={styles.menuInfo}>
            <Text style={styles.menuTitle}>
              Manage Availability
            </Text>

            <Text style={styles.menuSubtitle}>
              Set your available days and times
            </Text>
          </View>

          <Text style={styles.menuArrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => router.push('/tutor-edit-profile')}
        >
          <View style={styles.menuIcon}>
            <Text style={styles.menuIconText}>✎</Text>
          </View>

          <View style={styles.menuInfo}>
            <Text style={styles.menuTitle}>
              Edit Profile
            </Text>

            <Text style={styles.menuSubtitle}>
              Update your tutor information
            </Text>
          </View>

          <Text style={styles.menuArrow}>›</Text>
        </TouchableOpacity>

        {/* Dashboard note */}
        <View style={styles.noteCard}>
          <Text style={styles.noteTitle}>
            Keep your profile updated
          </Text>

          <Text style={styles.noteText}>
            Students can find you based on your subjects,
            experience, teaching mode and availability.
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
    paddingTop: 15,
    paddingBottom: 30,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 22,
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

  earningsCard: {
    backgroundColor: '#2563EB',
    borderRadius: 18,
    padding: 20,
    marginBottom: 16,
  },

  earningsLabel: {
    fontSize: 13,
    color: '#DBEAFE',
    marginBottom: 5,
  },

  earningsAmount: {
    fontSize: 30,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 4,
  },

  earningsNote: {
    fontSize: 12,
    color: '#DBEAFE',
  },

  statsRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 22,
  },

  statCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },

  statNumber: {
    fontSize: 20,
    fontWeight: '800',
    color: '#0F172A',
    marginBottom: 4,
  },

  statLabel: {
    fontSize: 11,
    color: '#64748B',
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 12,
    marginTop: 6,
  },

  classCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 22,
  },

  classIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#DBEAFE',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 13,
  },

  classIconText: {
    fontSize: 20,
    fontWeight: '800',
    color: '#2563EB',
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

  classStudent: {
    fontSize: 13,
    color: '#475569',
    marginBottom: 3,
  },

  classTime: {
    fontSize: 12,
    color: '#94A3B8',
  },

  onlineBadge: {
    backgroundColor: '#DCFCE7',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 5,
  },

  onlineText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#16A34A',
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  seeAll: {
    fontSize: 13,
    fontWeight: '600',
    color: '#2563EB',
    marginBottom: 12,
  },

  requestCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 22,
  },

  studentAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#DBEAFE',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  studentAvatarText: {
    fontSize: 18,
    fontWeight: '800',
    color: '#2563EB',
  },

  requestInfo: {
    flex: 1,
  },

  requestName: {
    fontSize: 15,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 4,
  },

  requestSubject: {
    fontSize: 13,
    color: '#475569',
    marginBottom: 3,
  },

  requestTime: {
    fontSize: 11,
    color: '#94A3B8',
  },

  viewButton: {
    backgroundColor: '#EFF6FF',
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 8,
  },

  viewButtonText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#2563EB',
  },

  menuButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    minHeight: 68,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 10,
  },

  menuIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#EFF6FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  menuIconText: {
    fontSize: 17,
    fontWeight: '800',
    color: '#2563EB',
  },

  menuInfo: {
    flex: 1,
  },

  menuTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 3,
  },

  menuSubtitle: {
    fontSize: 11,
    color: '#64748B',
  },

  menuArrow: {
    fontSize: 27,
    color: '#94A3B8',
    marginLeft: 8,
  },

  noteCard: {
    backgroundColor: '#EFF6FF',
    borderRadius: 14,
    padding: 16,
    marginTop: 12,
  },

  noteTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1E40AF',
    marginBottom: 5,
  },

  noteText: {
    fontSize: 12,
    lineHeight: 19,
    color: '#475569',
  },

  bottomSpace: {
    height: 20,
  },
});