import { router, useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useMarketplace } from '../context/MarketplaceContext';
import { colors, radius, spacing } from '../theme';

export default function BookingSuccessScreen() {
  const { bookingId } =
    useLocalSearchParams<{
      bookingId?: string;
    }>();

  const { bookings } = useMarketplace();

  const booking = bookings.find(
    (item) => item.id === bookingId
  );

  if (!booking) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyTitle}>
            Booking not found
          </Text>

          <TouchableOpacity
            style={styles.homeButton}
            onPress={() =>
              router.replace('/student-home')
            }
          >
            <Text style={styles.homeButtonText}>
              Go to Home
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  const initials = booking.tutorName
    .split(' ')
    .map((name) => name[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

        {/* SUCCESS ICON */}

        <View style={styles.successCircle}>
          <Text style={styles.check}>
            ✓
          </Text>
        </View>

        <Text style={styles.title}>
          Booking Confirmed!
        </Text>

        <Text style={styles.subtitle}>
          Your class has been successfully booked.
        </Text>

        {/* BOOKING CARD */}

        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            Booking Details
          </Text>

          <View style={styles.tutorRow}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>
                {initials}
              </Text>
            </View>

            <View style={styles.tutorInfo}>
              <Text style={styles.tutorName}>
                {booking.tutorName}
              </Text>

              <Text style={styles.subject}>
                {booking.subject}
              </Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.detailRow}>
            <Text style={styles.label}>
              Booking ID
            </Text>

            <Text style={styles.value}>
              {booking.id}
            </Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.label}>
              Date
            </Text>

            <Text style={styles.value}>
              {booking.date}
            </Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.label}>
              Time
            </Text>

            <Text style={styles.value}>
              {booking.time}
            </Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.label}>
              Mode
            </Text>

            <Text style={styles.value}>
              {booking.mode}
            </Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.label}>
              Payment
            </Text>

            <Text style={styles.paid}>
              Paid
            </Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>
              Amount Paid
            </Text>

            <Text style={styles.totalValue}>
              ₹{booking.amount}
            </Text>
          </View>
        </View>

        {/* STATUS */}

        <View style={styles.statusCard}>
          <View style={styles.statusDot} />

          <View style={styles.statusInfo}>
            <Text style={styles.statusTitle}>
              Booking confirmed
            </Text>

            <Text style={styles.statusText}>
              Your tutor will be notified about
              this booking.
            </Text>
          </View>
        </View>

        {/* ACTIONS */}

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() =>
            router.replace('/student-dashboard')
          }
          activeOpacity={0.85}
        >
          <Text style={styles.primaryText}>
            Go to Dashboard
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() =>
            router.replace('/student-home')
          }
          activeOpacity={0.75}
        >
          <Text style={styles.secondaryText}>
            Back to Home
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },

  container: {
    flex: 1,
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xxxl,
    paddingBottom: spacing.xl,
  },

  successCircle: {
    width: 76,
    height: 76,
    borderRadius: 38,
    backgroundColor: colors.successLight,
    borderWidth: 2,
    borderColor: colors.success,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  check: {
    fontSize: 40,
    fontWeight: '900',
    color: colors.success,
  },

  title: {
    fontSize: 25,
    fontWeight: '900',
    color: colors.navy,
    textAlign: 'center',
    marginTop: spacing.lg,
  },

  subtitle: {
    fontSize: 12,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: 6,
    marginBottom: spacing.xl,
  },

  card: {
    backgroundColor: colors.white,
    borderRadius: radius.xl,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: colors.navy,
    marginBottom: 16,
  },

  tutorRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: colors.teal,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  avatarText: {
    fontSize: 16,
    fontWeight: '900',
    color: colors.navy,
  },

  tutorInfo: {
    flex: 1,
  },

  tutorName: {
    fontSize: 15,
    fontWeight: '800',
    color: colors.navy,
  },

  subject: {
    fontSize: 11,
    color: colors.textSecondary,
    marginTop: 4,
  },

  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: 15,
  },

  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 11,
  },

  label: {
    fontSize: 11,
    color: colors.textSecondary,
  },

  value: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.navy,
    maxWidth: '60%',
    textAlign: 'right',
  },

  paid: {
    fontSize: 11,
    fontWeight: '800',
    color: colors.success,
  },

  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  totalLabel: {
    fontSize: 13,
    fontWeight: '800',
    color: colors.navy,
  },

  totalValue: {
    fontSize: 18,
    fontWeight: '900',
    color: colors.navy,
  },

  statusCard: {
    backgroundColor: colors.successLight,
    borderRadius: radius.lg,
    padding: spacing.md,
    marginTop: spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
  },

  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.success,
    marginRight: 10,
  },

  statusInfo: {
    flex: 1,
  },

  statusTitle: {
    fontSize: 12,
    fontWeight: '800',
    color: colors.success,
  },

  statusText: {
    fontSize: 10,
    color: colors.textSecondary,
    marginTop: 3,
  },

  primaryButton: {
    minHeight: 52,
    backgroundColor: colors.teal,
    borderRadius: radius.lg,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 'auto',
  },

  primaryText: {
    fontSize: 14,
    fontWeight: '800',
    color: colors.navy,
  },

  secondaryButton: {
    minHeight: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },

  secondaryText: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.textSecondary,
  },

  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },

  emptyTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.navy,
  },

  homeButton: {
    marginTop: 20,
    backgroundColor: colors.teal,
    paddingHorizontal: 24,
    paddingVertical: 13,
    borderRadius: radius.lg,
  },

  homeButtonText: {
    fontSize: 13,
    fontWeight: '800',
    color: colors.navy,
  },
});