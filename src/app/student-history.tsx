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

export default function StudentHistoryScreen() {
  const { user } = useAuth();

  const {
    bookings,
    isLoading,
  } = useMarketplace();

  const studentBookings = useMemo(() => {
    if (!user?.email) {
      return [];
    }

    return bookings
      .filter(
        (booking) =>
          booking.studentEmail.toLowerCase() ===
          user.email.toLowerCase()
      )
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() -
          new Date(a.createdAt).getTime()
      );
  }, [bookings, user?.email]);

  if (isLoading) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator
            size="small"
            color={colors.teal}
          />

          <Text style={styles.loadingText}>
            Loading booking history...
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
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
            activeOpacity={0.75}
          >
            <Text style={styles.back}>‹</Text>
          </TouchableOpacity>

          <Text style={styles.headerTitle}>
            Booking History
          </Text>

          <View style={styles.headerSpace} />
        </View>

        {/* SUMMARY */}

        <View style={styles.summaryCard}>
          <View>
            <Text style={styles.summaryLabel}>
              Total Bookings
            </Text>

            <Text style={styles.summaryNumber}>
              {studentBookings.length}
            </Text>
          </View>

          <View style={styles.summaryDivider} />

          <View>
            <Text style={styles.summaryLabel}>
              Confirmed
            </Text>

            <Text style={styles.summaryNumber}>
              {
                studentBookings.filter(
                  (booking) =>
                    booking.status ===
                    'confirmed'
                ).length
              }
            </Text>
          </View>

          <View style={styles.summaryDivider} />

          <View>
            <Text style={styles.summaryLabel}>
              Paid
            </Text>

            <Text style={styles.summaryNumber}>
              {
                studentBookings.filter(
                  (booking) =>
                    booking.paymentStatus ===
                    'paid'
                ).length
              }
            </Text>
          </View>
        </View>

        {/* TITLE */}

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            Your Bookings
          </Text>
        </View>

        {/* EMPTY STATE */}

        {studentBookings.length === 0 ? (
          <View style={styles.emptyCard}>
            <Text style={styles.emptyIcon}>
              📚
            </Text>

            <Text style={styles.emptyTitle}>
              No bookings yet
            </Text>

            <Text style={styles.emptyText}>
              Your completed and upcoming tutor
              bookings will appear here.
            </Text>

            <TouchableOpacity
              style={styles.findButton}
              onPress={() =>
                router.push('/find-tutor')
              }
              activeOpacity={0.85}
            >
              <Text style={styles.findButtonText}>
                Find a Tutor
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          /* BOOKING LIST */

          studentBookings.map((booking) => {
            const initials = booking.tutorName
              .split(' ')
              .map((name) => name[0])
              .join('')
              .slice(0, 2)
              .toUpperCase();

            const isPaid =
              booking.paymentStatus ===
              'paid';

            const isConfirmed =
              booking.status ===
              'confirmed';

            return (
              <View
                key={booking.id}
                style={styles.bookingCard}
              >
                {/* TOP */}

                <View style={styles.bookingTop}>
                  <View style={styles.avatar}>
                    <Text
                      style={styles.avatarText}
                    >
                      {initials}
                    </Text>
                  </View>

                  <View style={styles.tutorInfo}>
                    <Text
                      style={styles.tutorName}
                    >
                      {booking.tutorName}
                    </Text>

                    <Text
                      style={styles.subject}
                    >
                      {booking.subject}
                    </Text>
                  </View>

                  <View
                    style={[
                      styles.statusBadge,
                      isConfirmed
                        ? styles.confirmedBadge
                        : styles.pendingBadge,
                    ]}
                  >
                    <Text
                      style={[
                        styles.statusText,
                        isConfirmed
                          ? styles.confirmedText
                          : styles.pendingText,
                      ]}
                    >
                      {booking.status}
                    </Text>
                  </View>
                </View>

                {/* DETAILS */}

                <View style={styles.divider} />

                <View style={styles.detailRow}>
                  <View style={styles.detailItem}>
                    <Text
                      style={styles.detailLabel}
                    >
                      Date
                    </Text>

                    <Text
                      style={styles.detailValue}
                    >
                      {booking.date}
                    </Text>
                  </View>

                  <View style={styles.detailItem}>
                    <Text
                      style={styles.detailLabel}
                    >
                      Time
                    </Text>

                    <Text
                      style={styles.detailValue}
                    >
                      {booking.time}
                    </Text>
                  </View>
                </View>

                <View style={styles.detailRow}>
                  <View style={styles.detailItem}>
                    <Text
                      style={styles.detailLabel}
                    >
                      Mode
                    </Text>

                    <Text
                      style={styles.detailValue}
                    >
                      {booking.mode}
                    </Text>
                  </View>

                  <View style={styles.detailItem}>
                    <Text
                      style={styles.detailLabel}
                    >
                      Amount
                    </Text>

                    <Text
                      style={styles.amount}
                    >
                      ₹{booking.amount}
                    </Text>
                  </View>
                </View>

                {/* PAYMENT */}

                <View style={styles.paymentRow}>
                  <View>
                    <Text
                      style={styles.bookingIdLabel}
                    >
                      Booking ID
                    </Text>

                    <Text
                      style={styles.bookingId}
                    >
                      {booking.id}
                    </Text>
                  </View>

                  <View
                    style={[
                      styles.paymentBadge,
                      isPaid
                        ? styles.paidBadge
                        : styles.unpaidBadge,
                    ]}
                  >
                    <Text
                      style={[
                        styles.paymentText,
                        isPaid
                          ? styles.paidText
                          : styles.unpaidText,
                      ]}
                    >
                      {isPaid
                        ? 'Paid'
                        : 'Payment Pending'}
                    </Text>
                  </View>
                </View>
              </View>
            );
          })
        )}
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
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.lg,
  },

  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
  },

  back: {
    fontSize: 36,
    lineHeight: 38,
    color: colors.navy,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.navy,
  },

  headerSpace: {
    width: 40,
  },

  summaryCard: {
    backgroundColor: colors.navy,
    borderRadius: radius.xl,
    padding: spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: spacing.xl,
  },

  summaryLabel: {
    fontSize: 10,
    color: '#B8CAD9',
    textAlign: 'center',
  },

  summaryNumber: {
    fontSize: 22,
    fontWeight: '900',
    color: colors.white,
    textAlign: 'center',
    marginTop: 3,
  },

  summaryDivider: {
    width: 1,
    height: 35,
    backgroundColor: '#35506A',
  },

  sectionHeader: {
    marginBottom: 11,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: colors.navy,
  },

  bookingCard: {
    backgroundColor: colors.white,
    borderRadius: radius.xl,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
    marginBottom: spacing.md,
  },

  bookingTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.lightTeal,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 11,
  },

  avatarText: {
    fontSize: 14,
    fontWeight: '900',
    color: colors.navy,
  },

  tutorInfo: {
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

  detailRow: {
    flexDirection: 'row',
    marginBottom: 11,
  },

  detailItem: {
    flex: 1,
  },

  detailLabel: {
    fontSize: 9,
    color: colors.textMuted,
    marginBottom: 3,
  },

  detailValue: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.navy,
  },

  amount: {
    fontSize: 13,
    fontWeight: '900',
    color: colors.navy,
  },

  paymentRow: {
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  bookingIdLabel: {
    fontSize: 8,
    color: colors.textMuted,
  },

  bookingId: {
    fontSize: 9,
    color: colors.textSecondary,
    marginTop: 2,
  },

  paymentBadge: {
    paddingHorizontal: 9,
    paddingVertical: 5,
    borderRadius: radius.round,
  },

  paidBadge: {
    backgroundColor: colors.successLight,
  },

  unpaidBadge: {
    backgroundColor: colors.warningLight,
  },

  paymentText: {
    fontSize: 9,
    fontWeight: '800',
  },

  paidText: {
    color: colors.success,
  },

  unpaidText: {
    color: colors.warning,
  },

  emptyCard: {
    backgroundColor: colors.white,
    borderRadius: radius.xl,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.xxl,
    alignItems: 'center',
  },

  emptyIcon: {
    fontSize: 32,
  },

  emptyTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: colors.navy,
    marginTop: 10,
  },

  emptyText: {
    fontSize: 11,
    lineHeight: 17,
    color: colors.textSecondary,
    textAlign: 'center',
    maxWidth: 280,
    marginTop: 5,
  },

  findButton: {
    backgroundColor: colors.teal,
    borderRadius: radius.md,
    paddingHorizontal: 18,
    paddingVertical: 10,
    marginTop: 15,
  },

  findButtonText: {
    fontSize: 11,
    fontWeight: '800',
    color: colors.navy,
  },
});