import { useAuth } from '../context/AuthContext';
import { router } from 'expo-router';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, radius, spacing } from '../theme';

export default function TutorHomeScreen() {
  const { user, logout } = useAuth();

  const profile = user?.tutorProfile;

  const firstName =
    user?.name?.split(' ')[0] || 'Tutor';

  const subjects = profile?.subjects
    ? profile.subjects
        .split(',')
        .map((item) => item.trim())
        .filter(Boolean)
    : [];

  const handleLogout = () => {
    logout();
    router.replace('/login');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}

        <View style={styles.header}>
          <Image
            source={require('../../assets/guriva-horizontal-logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />

          <TouchableOpacity
            style={styles.notificationButton}
            onPress={() =>
              router.push('/notifications')
            }
            activeOpacity={0.8}
          >
            <Text style={styles.notificationIcon}>
              🔔
            </Text>
          </TouchableOpacity>
        </View>

        {/* Welcome */}

        <View style={styles.welcomeSection}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {user?.name?.charAt(0)?.toUpperCase() || 'T'}
            </Text>
          </View>

          <View style={styles.welcomeContent}>
            <Text style={styles.greeting}>
              Welcome back,
            </Text>

            <Text style={styles.name}>
              {firstName} 👋
            </Text>

            <Text style={styles.subtitle}>
              Manage your teaching journey with Guriva.
            </Text>
          </View>
        </View>

        {/* Profile status */}

        <View style={styles.profileStatusCard}>
          <View style={styles.statusTop}>
            <View>
              <Text style={styles.statusTitle}>
                Tutor profile
              </Text>

              <Text style={styles.statusSubtitle}>
                {profile
                  ? 'Your profile is ready to be discovered.'
                  : 'Complete your profile to get started.'}
              </Text>
            </View>

            <View
              style={[
                styles.statusBadge,
                profile
                  ? styles.statusReady
                  : styles.statusIncomplete,
              ]}
            >
              <Text
                style={[
                  styles.statusText,
                  profile
                    ? styles.statusReadyText
                    : styles.statusIncompleteText,
                ]}
              >
                {profile ? 'Ready' : 'Incomplete'}
              </Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.profileButton}
            onPress={() =>
              router.push('/tutor-profile-preview')
            }
            activeOpacity={0.8}
          >
            <Text style={styles.profileButtonText}>
              View Profile
            </Text>

            <Text style={styles.arrow}>
              →
            </Text>
          </TouchableOpacity>
        </View>

        {/* Stats */}

        <Text style={styles.sectionTitle}>
          Your activity
        </Text>

        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>0</Text>

            <Text style={styles.statLabel}>
              Enquiries
            </Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statNumber}>0</Text>

            <Text style={styles.statLabel}>
              Classes
            </Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statNumber}>₹0</Text>

            <Text style={styles.statLabel}>
              Earnings
            </Text>
          </View>
        </View>

        {/* Subjects */}

        <Text style={styles.sectionTitle}>
          Your subjects
        </Text>

        <View style={styles.subjectCard}>
          {subjects.length > 0 ? (
            <View style={styles.subjects}>
              {subjects.map((subject, index) => (
                <View
                  key={`${subject}-${index}`}
                  style={styles.subjectChip}
                >
                  <Text style={styles.subjectText}>
                    {subject}
                  </Text>
                </View>
              ))}
            </View>
          ) : (
            <Text style={styles.emptyText}>
              Add your subjects to help students find you.
            </Text>
          )}
        </View>

        {/* Teaching information */}

        <Text style={styles.sectionTitle}>
          Teaching information
        </Text>

        <View style={styles.infoCard}>
          <View style={styles.infoRow}>
            <View style={styles.infoIcon}>
              <Text style={styles.infoIconText}>
                ★
              </Text>
            </View>

            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>
                Experience
              </Text>

              <Text style={styles.infoValue}>
                {profile?.experience || 'Not added'}
              </Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.infoRow}>
            <View style={styles.infoIcon}>
              <Text style={styles.infoIconText}>
                ✓
              </Text>
            </View>

            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>
                Qualification
              </Text>

              <Text style={styles.infoValue}>
                {profile?.qualification ||
                  'Not added'}
              </Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.infoRow}>
            <View style={styles.infoIcon}>
              <Text style={styles.infoIconText}>
                ↗
              </Text>
            </View>

            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>
                Teaching mode
              </Text>

              <Text style={styles.infoValue}>
                {profile?.mode || 'Not added'}
              </Text>
            </View>
          </View>
        </View>

        {/* Quick actions */}

        <Text style={styles.sectionTitle}>
          Quick actions
        </Text>

        <View style={styles.actionsCard}>
          <TouchableOpacity
            style={styles.actionRow}
            onPress={() =>
              router.push('/tutor-enquiries')
            }
            activeOpacity={0.75}
          >
            <View style={styles.actionIcon}>
              <Text style={styles.actionIconText}>
                ?
              </Text>
            </View>

            <View style={styles.actionContent}>
              <Text style={styles.actionTitle}>
                Student enquiries
              </Text>

              <Text style={styles.actionSubtitle}>
                View and respond to student requests.
              </Text>
            </View>

            <Text style={styles.actionArrow}>
              →
            </Text>
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity
            style={styles.actionRow}
            onPress={() =>
              router.push('/tutor-availability')
            }
            activeOpacity={0.75}
          >
            <View style={styles.actionIcon}>
              <Text style={styles.actionIconText}>
                ◷
              </Text>
            </View>

            <View style={styles.actionContent}>
              <Text style={styles.actionTitle}>
                Availability
              </Text>

              <Text style={styles.actionSubtitle}>
                Set when you are available to teach.
              </Text>
            </View>

            <Text style={styles.actionArrow}>
              →
            </Text>
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity
            style={styles.actionRow}
            onPress={() =>
              router.push('/tutor-edit-profile')
            }
            activeOpacity={0.75}
          >
            <View style={styles.actionIcon}>
              <Text style={styles.actionIconText}>
                ✎
              </Text>
            </View>

            <View style={styles.actionContent}>
              <Text style={styles.actionTitle}>
                Edit profile
              </Text>

              <Text style={styles.actionSubtitle}>
                Update your teaching information.
              </Text>
            </View>

            <Text style={styles.actionArrow}>
              →
            </Text>
          </TouchableOpacity>
        </View>

        {/* Logout */}

        <TouchableOpacity
          style={styles.logoutButton}
          onPress={handleLogout}
          activeOpacity={0.8}
        >
          <Text style={styles.logoutText}>
            Log out
          </Text>
        </TouchableOpacity>

        <Text style={styles.footer}>
          Guriva · Learn. Connect. Grow.
        </Text>

        <View style={styles.bottomSpace} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },

  container: {
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.md,
    paddingBottom: 30,
  },

  header: {
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  logo: {
    width: 135,
    height: 45,
  },

  notificationButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },

  notificationIcon: {
    fontSize: 17,
  },

  welcomeSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 21,
    marginBottom: 21,
  },

  avatar: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: colors.navy,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 13,
  },

  avatarText: {
    fontSize: 23,
    fontWeight: '900',
    color: colors.teal,
  },

  welcomeContent: {
    flex: 1,
  },

  greeting: {
    fontSize: 11,
    color: colors.textSecondary,
  },

  name: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.navy,
    marginTop: 1,
  },

  subtitle: {
    fontSize: 10,
    lineHeight: 15,
    color: colors.textSecondary,
    marginTop: 3,
  },

  profileStatusCard: {
    backgroundColor: colors.white,
    borderRadius: radius.xl,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
  },

  statusTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  statusTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: colors.navy,
  },

  statusSubtitle: {
    fontSize: 10,
    color: colors.textSecondary,
    marginTop: 4,
    maxWidth: 210,
  },

  statusBadge: {
    borderRadius: radius.round,
    paddingHorizontal: 9,
    paddingVertical: 5,
  },

  statusReady: {
    backgroundColor: colors.successLight,
  },

  statusIncomplete: {
    backgroundColor: colors.warningLight,
  },

  statusText: {
    fontSize: 9,
    fontWeight: '800',
  },

  statusReadyText: {
    color: colors.success,
  },

  statusIncompleteText: {
    color: colors.warning,
  },

  profileButton: {
    marginTop: 15,
    backgroundColor: colors.lightBlue,
    borderRadius: radius.md,
    paddingVertical: 11,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  profileButtonText: {
    fontSize: 11,
    fontWeight: '800',
    color: colors.blue,
  },

  arrow: {
    fontSize: 17,
    fontWeight: '800',
    color: colors.blue,
    marginLeft: 7,
  },

  sectionTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: colors.navy,
    marginTop: 23,
    marginBottom: 11,
  },

  statsRow: {
    flexDirection: 'row',
    gap: 9,
  },

  statCard: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    paddingVertical: 16,
    alignItems: 'center',
  },

  statNumber: {
    fontSize: 19,
    fontWeight: '900',
    color: colors.navy,
  },

  statLabel: {
    fontSize: 9,
    color: colors.textSecondary,
    marginTop: 4,
  },

  subjectCard: {
    backgroundColor: colors.white,
    borderRadius: radius.xl,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
  },

  subjects: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 7,
  },

  subjectChip: {
    backgroundColor: colors.lightBlue,
    borderRadius: radius.round,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: 11,
    paddingVertical: 7,
  },

  subjectText: {
    fontSize: 10,
    fontWeight: '700',
    color: colors.blue,
  },

  emptyText: {
    fontSize: 10,
    lineHeight: 15,
    color: colors.textMuted,
  },

  infoCard: {
    backgroundColor: colors.white,
    borderRadius: radius.xl,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: spacing.lg,
  },

  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 13,
  },

  infoIcon: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: colors.lightTeal,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 11,
  },

  infoIconText: {
    fontSize: 13,
    fontWeight: '900',
    color: colors.blue,
  },

  infoContent: {
    flex: 1,
  },

  infoLabel: {
    fontSize: 9,
    color: colors.textMuted,
    fontWeight: '600',
  },

  infoValue: {
    fontSize: 12,
    color: colors.navy,
    fontWeight: '700',
    marginTop: 2,
  },

  divider: {
    height: 1,
    backgroundColor: colors.border,
  },

  actionsCard: {
    backgroundColor: colors.white,
    borderRadius: radius.xl,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: spacing.lg,
  },

  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
  },

  actionIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.lightBlue,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 11,
  },

  actionIconText: {
    fontSize: 14,
    fontWeight: '900',
    color: colors.blue,
  },

  actionContent: {
    flex: 1,
  },

  actionTitle: {
    fontSize: 11,
    fontWeight: '800',
    color: colors.navy,
  },

  actionSubtitle: {
    fontSize: 9,
    lineHeight: 14,
    color: colors.textSecondary,
    marginTop: 3,
  },

  actionArrow: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.textMuted,
    marginLeft: 8,
  },

  logoutButton: {
    marginTop: 22,
    borderWidth: 1,
    borderColor: colors.error,
    borderRadius: radius.lg,
    paddingVertical: 13,
    alignItems: 'center',
  },

  logoutText: {
    fontSize: 12,
    fontWeight: '800',
    color: colors.error,
  },

  footer: {
    fontSize: 9,
    color: colors.textMuted,
    textAlign: 'center',
    marginTop: 18,
  },

  bottomSpace: {
    height: 15,
  },
});