import { router } from 'expo-router';
import { useMemo } from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useAuth } from '../context/AuthContext';
import { useMarketplace } from '../context/MarketplaceContext';
import {
  colors,
  radius,
  spacing,
} from '../theme';

export default function StudentDashboardScreen() {
  const { user } = useAuth();

  const {
    bookings,
    enquiries,
    isLoading,
  } = useMarketplace();

  const studentBookings = useMemo(() => {
    if (!user?.email) {
      return [];
    }

    return bookings.filter(
      (booking) =>
        booking.studentEmail.toLowerCase() ===
        user.email.toLowerCase()
    );
  }, [bookings, user?.email]);

  const studentEnquiries = useMemo(() => {
    if (!user?.email) {
      return [];
    }

    return enquiries.filter(
      (enquiry) =>
        enquiry.studentEmail.toLowerCase() ===
        user.email.toLowerCase()
    );
  }, [enquiries, user?.email]);

  const upcomingBookings = studentBookings.filter(
    (booking) =>
      booking.status === 'confirmed' ||
      booking.status === 'pending'
  );

  const latestBooking =
    upcomingBookings[0] || studentBookings[0];

  const confirmedCount =
    studentBookings.filter(
      (booking) =>
        booking.status === 'confirmed'
    ).length;

  const pendingEnquiryCount =
    studentEnquiries.filter(
      (enquiry) =>
        enquiry.status === 'pending'
    ).length;

  const initials =
    user?.name
      ?.split(' ')
      .map((part) => part[0])
      .join('')
      .slice(0, 2)
      .toUpperCase() || 'S';

  if (isLoading) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator
            size="small"
            color={colors.teal}
          />

          <Text style={styles.loadingText}>
            Loading your dashboard...
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* HEADER */}

        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>
              Hello, {user?.name || 'Student'} 👋
            </Text>

            <Text style={styles.subtitle}>
              Continue your learning journey
            </Text>
          </View>

          <TouchableOpacity
            style={styles.avatar}
            onPress={() =>
              router.push('/student-profile')
            }
            activeOpacity={0.8}
          >
            <Text style={styles.avatarText}>
              {initials}
            </Text>
          </TouchableOpacity>
        </View>

        {/* FIND TUTOR */}

        <TouchableOpacity
          style={styles.findTutorCard}
          onPress={() =>
            router.push('/find-tutor')
          }
          activeOpacity={0.9}
        >
          <View style={styles.findTutorContent}>
            <Text style={styles.findTutorTitle}>
              Find the right tutor
            </Text>

            <Text style={styles.findTutorText}>
              Explore tutors, compare profiles,
              and book your next class.
            </Text>

            <View style={styles.findTutorButton}>
              <Text style={styles.findTutorButtonText}>
                Find a Tutor
              </Text>
            </View>
          </View>

          <Text style={styles.findTutorIcon}>
            →
          </Text>
        </TouchableOpacity>

        {/* STATS */}

        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>
              {studentBookings.length}
            </Text>

            <Text style={styles.statLabel}>
              Bookings
            </Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statNumber}>
              {confirmedCount}
            </Text>

            <Text style={styles.statLabel}>
              Confirmed
            </Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statNumber}>
              {pendingEnquiryCount}
            </Text>

            <Text style={styles.statLabel}>
              Enquiries
            </Text>
          </View>
        </View>

        {/* UPCOMING CLASS */}

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            Upcoming Class
          </Text>

          {studentBookings.length > 0 ? (
            <TouchableOpacity
              onPress={() =>
                router.push('/student-history')
              }
            >
              <Text style={styles.seeAll}>
                View all
              </Text>
            </TouchableOpacity>
          ) : null}
        </View>

        {latestBooking ? (
          <View style={styles.bookingCard}>
            <View style={styles.bookingTop}>
              <View style={styles.bookingAvatar}>
                <Text style={styles.bookingAvatarText}>
                  {latestBooking.tutorName
                    .split(' ')
                    .map((name) => name[0])
                    .join('')
                    .slice(0, 2)
                    .toUpperCase()}
                </Text>
              </View>

              <View style={styles.bookingInfo}>
                <Text style={styles.tutorName}>
                  {latestBooking.tutorName}
                </Text>

                <Text style={styles.subject}>
                  {latestBooking.subject}
                </Text>
              </View>

              <View
                style={[
                  styles.statusBadge,
                  latestBooking.status ===
                    'confirmed'
                    ? styles.confirmedBadge
                    : styles.pendingBadge,
                ]}
              >
                <Text
                  style={[
                    styles.statusText,
                    latestBooking.status ===
                      'confirmed'
                      ? styles.confirmedText
                      : styles.pendingText,
                  ]}
                >
                  {latestBooking.status}
                </Text>
              </View>
            </View>

            <View style={styles.divider} />

            <View style={styles.bookingDetails}>
              <View style={styles.detail}>
                <Text style={styles.detailLabel}>
                  Date
                </Text>

                <Text style={styles.detailValue}>
                  {latestBooking.date}
                </Text>
              </View>

              <View style={styles.detail}>
                <Text style={styles.detailLabel}>
                  Time
                </Text>

                <Text style={styles.detailValue}>
                  {latestBooking.time}
                </Text>
              </View>

              <View style={styles.detail}>
                <Text style={styles.detailLabel}>
                  Mode
                </Text>

                <Text style={styles.detailValue}>
                  {latestBooking.mode}
                </Text>
              </View>
            </View>
          </View>
        ) : (
          <View style={styles.emptyCard}>
            <Text style={styles.emptyIcon}>
              📚
            </Text>

            <Text style={styles.emptyTitle}>
              No classes booked yet
            </Text>

            <Text style={styles.emptyText}>
              Find a tutor and book your first class
              to start learning.
            </Text>

            <TouchableOpacity
              style={styles.emptyButton}
              onPress={() =>
                router.push('/find-tutor')
              }
            >
              <Text style={styles.emptyButtonText}>
                Find a Tutor
              </Text>
            </TouchableOpacity>
          </View>
        )}

        {/* QUICK ACTIONS */}

        <Text style={styles.sectionTitle}>
          Quick Actions
        </Text>

        <View style={styles.actionsGrid}>
          <TouchableOpacity
            style={styles.actionCard}
            onPress={() =>
              router.push('/find-tutor')
            }
            activeOpacity={0.8}
          >
            <Text style={styles.actionIcon}>
              🔎
            </Text>

            <Text style={styles.actionTitle}>
              Find Tutor
            </Text>

            <Text style={styles.actionText}>
              Browse tutors
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionCard}
            onPress={() =>
              router.push('/student-enquiries')
            }
            activeOpacity={0.8}
          >
            <Text style={styles.actionIcon}>
              💬
            </Text>

            <Text style={styles.actionTitle}>
              Enquiries
            </Text>

            <Text style={styles.actionText}>
              Track your requests
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionCard}
            onPress={() =>
              router.push('/student-history')
            }
            activeOpacity={0.8}
          >
            <Text style={styles.actionIcon}>
              📋
            </Text>

            <Text style={styles.actionTitle}>
              History
            </Text>

            <Text style={styles.actionText}>
              View past classes
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionCard}
            onPress={() =>
              router.push('/notifications')
            }
            activeOpacity={0.8}
          >
            <Text style={styles.actionIcon}>
              🔔
            </Text>

            <Text style={styles.actionTitle}>
              Notifications
            </Text>

            <Text style={styles.actionText}>
              Stay updated
            </Text>
          </TouchableOpacity>
        </View>

        {/* PROFILE */}

        <TouchableOpacity
          style={styles.profileLink}
          onPress={() =>
            router.push('/student-profile')
          }
          activeOpacity={0.75}
        >
          <View>
            <Text style={styles.profileTitle}>
              Complete your learning profile
            </Text>

            <Text style={styles.profileText}>
              Add your class, city, school and
              learning goals to help tutors
              understand you better.
            </Text>
          </View>

          <Text style={styles.profileArrow}>
            →
          </Text>
        </TouchableOpacity>
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
    paddingTop: spacing.lg,
    paddingBottom: 35,
  },

  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  loadingText: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 10,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.xl,
  },

  greeting: {
    fontSize: 22,
    fontWeight: '900',
    color: colors.navy,
  },

  subtitle: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 5,
  },

  avatar: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: colors.teal,
    alignItems: 'center',
    justifyContent: 'center',
  },

  avatarText: {
    fontSize: 15,
    fontWeight: '900',
    color: colors.navy,
  },

  findTutorCard: {
    backgroundColor: colors.navy,
    borderRadius: radius.xl,
    padding: spacing.xl,
    minHeight: 155,
    flexDirection: 'row',
    marginBottom: spacing.lg,
  },

  findTutorContent: {
    flex: 1,
  },

  findTutorTitle: {
    fontSize: 20,
    fontWeight: '900',
    color: colors.white,
  },

  findTutorText: {
    fontSize: 11,
    lineHeight: 17,
    color: '#C9D8E5',
    marginTop: 6,
    maxWidth: 250,
  },

  findTutorButton: {
    alignSelf: 'flex-start',
    backgroundColor: colors.teal,
    borderRadius: radius.md,
    paddingHorizontal: 15,
    paddingVertical: 9,
    marginTop: 14,
  },

  findTutorButtonText: {
    fontSize: 11,
    fontWeight: '800',
    color: colors.navy,
  },

  findTutorIcon: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.teal,
    alignSelf: 'center',
  },

  statsRow: {
    flexDirection: 'row',
    gap: 9,
    marginBottom: spacing.xl,
  },

  statCard: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    paddingVertical: 15,
    alignItems: 'center',
  },

  statNumber: {
    fontSize: 20,
    fontWeight: '900',
    color: colors.navy,
  },

  statLabel: {
    fontSize: 10,
    color: colors.textSecondary,
    marginTop: 3,
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: colors.navy,
    marginBottom: 10,
  },

  seeAll: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.blue,
  },

  bookingCard: {
    backgroundColor: colors.white,
    borderRadius: radius.xl,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
    marginBottom: spacing.xl,
  },

  bookingTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  bookingAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.lightTeal,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 11,
  },

  bookingAvatarText: {
    fontSize: 14,
    fontWeight: '900',
    color: colors.navy,
  },

  bookingInfo: {
    flex: 1,
  },

  tutorName: {
    fontSize: 14,
    fontWeight: '800',
    color: colors.navy,
  },

  subject: {
    fontSize: 11,
    color: colors.textSecondary,
    marginTop: 3,
  },

  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: radius.round,
  },

  confirmedBadge: {
    backgroundColor: colors.successLight,
  },

  pendingBadge: {
    backgroundColor: colors.warningLight,
  },

  statusText: {
    fontSize: 9,
    fontWeight: '800',
    textTransform: 'capitalize',
  },

  confirmedText: {
    color: colors.success,
  },

  pendingText: {
    color: colors.warning,
  },

  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: 14,
  },

  bookingDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  detail: {
    flex: 1,
  },

  detailLabel: {
    fontSize: 9,
    color: colors.textMuted,
    marginBottom: 3,
  },

  detailValue: {
    fontSize: 10,
    fontWeight: '700',
    color: colors.navy,
  },

  emptyCard: {
    backgroundColor: colors.white,
    borderRadius: radius.xl,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.xl,
    alignItems: 'center',
    marginBottom: spacing.xl,
  },

  emptyIcon: {
    fontSize: 30,
  },

  emptyTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: colors.navy,
    marginTop: 8,
  },

  emptyText: {
    fontSize: 11,
    lineHeight: 17,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: 5,
    maxWidth: 270,
  },

  emptyButton: {
    backgroundColor: colors.teal,
    borderRadius: radius.md,
    paddingHorizontal: 18,
    paddingVertical: 10,
    marginTop: 14,
  },

  emptyButtonText: {
    fontSize: 11,
    fontWeight: '800',
    color: colors.navy,
  },

  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: spacing.xl,
  },

  actionCard: {
    width: '48%',
    backgroundColor: colors.white,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
  },

  actionIcon: {
    fontSize: 22,
    marginBottom: 9,
  },

  actionTitle: {
    fontSize: 13,
    fontWeight: '800',
    color: colors.navy,
  },

  actionText: {
    fontSize: 10,
    color: colors.textSecondary,
    marginTop: 3,
  },

  profileLink: {
    backgroundColor: colors.lightBlue,
    borderRadius: radius.lg,
    padding: spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
  },

  profileTitle: {
    fontSize: 12,
    fontWeight: '800',
    color: colors.navy,
  },

  profileText: {
    fontSize: 10,
    lineHeight: 15,
    color: colors.textSecondary,
    marginTop: 4,
    maxWidth: 280,
  },

  profileArrow: {
    fontSize: 22,
    color: colors.blue,
    marginLeft: 'auto',
  },
});