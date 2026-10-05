import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useMarketplace } from '../context/MarketplaceContext';
import {
  colors,
  radius,
  spacing,
} from '../theme';

export default function PaymentScreen() {
  const { bookingId } =
    useLocalSearchParams<{
      bookingId?: string;
    }>();

  const {
    bookings,
    updatePaymentStatus,
    updateBookingStatus,
  } = useMarketplace();

  const [paying, setPaying] =
    useState(false);

  const booking = bookings.find(
    (item) => item.id === bookingId
  );

  const handlePayment = async () => {
    if (paying) {
      return;
    }

    if (!booking) {
      Alert.alert(
        'Booking not found',
        'We could not find this booking. Please try booking again.'
      );

      router.back();
      return;
    }

    setPaying(true);

    try {
      /*
       * This is a mock payment for the MVP.
       *
       * Later this will be replaced by a real
       * payment gateway such as Razorpay.
       */

      await updatePaymentStatus(
        booking.id,
        'paid'
      );

      await updateBookingStatus(
        booking.id,
        'confirmed'
      );

      router.replace({
        pathname: '/booking-success',
        params: {
          bookingId: booking.id,
        },
      });
    } catch (error) {
      console.log(
        'Payment failed:',
        error
      );

      Alert.alert(
        'Payment failed',
        'Something went wrong while processing your payment.'
      );
    } finally {
      setPaying(false);
    }
  };

  if (!booking) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyTitle}>
            Booking not found
          </Text>

          <Text style={styles.emptyText}>
            This booking could not be found.
          </Text>

          <TouchableOpacity
            style={styles.backHomeButton}
            onPress={() =>
              router.replace('/student-home')
            }
          >
            <Text style={styles.backHomeText}>
              Go to Home
            </Text>
          </TouchableOpacity>
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
            Payment
          </Text>

          <View style={styles.headerSpace} />
        </View>

        {/* PAYMENT STATUS */}

        <View style={styles.secureCard}>
          <View style={styles.lockCircle}>
            <Text style={styles.lock}>
              🔒
            </Text>
          </View>

          <View style={styles.secureInfo}>
            <Text style={styles.secureTitle}>
              Secure Payment
            </Text>

            <Text style={styles.secureSubtitle}>
              Your payment information is protected.
            </Text>
          </View>
        </View>

        {/* BOOKING SUMMARY */}

        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            Booking Summary
          </Text>

          <View style={styles.tutorRow}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>
                {booking.tutorName
                  .split(' ')
                  .map((name) => name[0])
                  .join('')
                  .slice(0, 2)
                  .toUpperCase()}
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
            <Text style={styles.detailLabel}>
              Date
            </Text>

            <Text style={styles.detailValue}>
              {booking.date}
            </Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>
              Time
            </Text>

            <Text style={styles.detailValue}>
              {booking.time}
            </Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>
              Mode
            </Text>

            <Text style={styles.detailValue}>
              {booking.mode}
            </Text>
          </View>
        </View>

        {/* PAYMENT METHOD */}

        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            Payment Method
          </Text>

          <View style={styles.paymentMethod}>
            <View style={styles.radioOuter}>
              <View style={styles.radioInner} />
            </View>

            <View style={styles.paymentInfo}>
              <Text style={styles.paymentTitle}>
                UPI / Online Payment
              </Text>

              <Text style={styles.paymentSubtitle}>
                Secure payment through Guriva
              </Text>
            </View>
          </View>
        </View>

        {/* PRICE */}

        <View style={styles.priceCard}>
          <Text style={styles.priceTitle}>
            Amount Payable
          </Text>

          <Text style={styles.amount}>
            ₹{booking.amount}
          </Text>

          <Text style={styles.priceSubtitle}>
            Includes platform fee
          </Text>
        </View>

        {/* PAY */}

        <TouchableOpacity
          style={[
            styles.payButton,
            paying && styles.disabledButton,
          ]}
          onPress={handlePayment}
          activeOpacity={0.85}
          disabled={paying}
        >
          <Text style={styles.payText}>
            {paying
              ? 'Processing Payment...'
              : `Pay ₹${booking.amount}`}
          </Text>
        </TouchableOpacity>

        <Text style={styles.footer}>
          By continuing, you agree to Guriva's
          booking and payment terms.
        </Text>
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

  secureCard: {
    backgroundColor: colors.successLight,
    borderRadius: radius.xl,
    padding: spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },

  lockCircle: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  lock: {
    fontSize: 18,
  },

  secureInfo: {
    flex: 1,
  },

  secureTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: colors.success,
  },

  secureSubtitle: {
    fontSize: 10,
    color: colors.textSecondary,
    marginTop: 3,
  },

  card: {
    backgroundColor: colors.white,
    borderRadius: radius.xl,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
    marginBottom: spacing.lg,
  },

  cardTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: colors.navy,
    marginBottom: 15,
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
    marginVertical: 16,
  },

  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 11,
  },

  detailLabel: {
    fontSize: 12,
    color: colors.textSecondary,
  },

  detailValue: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.navy,
  },

  paymentMethod: {
    minHeight: 65,
    borderWidth: 1,
    borderColor: colors.teal,
    backgroundColor: colors.lightTeal,
    borderRadius: radius.md,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
  },

  radioOuter: {
    width: 21,
    height: 21,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: colors.teal,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  radioInner: {
    width: 11,
    height: 11,
    borderRadius: 6,
    backgroundColor: colors.teal,
  },

  paymentInfo: {
    flex: 1,
  },

  paymentTitle: {
    fontSize: 13,
    fontWeight: '800',
    color: colors.navy,
  },

  paymentSubtitle: {
    fontSize: 10,
    color: colors.textSecondary,
    marginTop: 3,
  },

  priceCard: {
    backgroundColor: colors.navy,
    borderRadius: radius.xl,
    padding: spacing.xl,
    alignItems: 'center',
    marginBottom: spacing.lg,
  },

  priceTitle: {
    fontSize: 12,
    color: '#C9D8E5',
  },

  amount: {
    fontSize: 30,
    fontWeight: '900',
    color: colors.white,
    marginTop: 5,
  },

  priceSubtitle: {
    fontSize: 10,
    color: '#9FB2C4',
    marginTop: 4,
  },

  payButton: {
    minHeight: 54,
    borderRadius: radius.lg,
    backgroundColor: colors.teal,
    alignItems: 'center',
    justifyContent: 'center',
  },

  disabledButton: {
    opacity: 0.65,
  },

  payText: {
    fontSize: 14,
    fontWeight: '800',
    color: colors.navy,
  },

  footer: {
    fontSize: 10,
    lineHeight: 15,
    color: colors.textMuted,
    textAlign: 'center',
    marginTop: 13,
    paddingHorizontal: 20,
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

  emptyText: {
    fontSize: 13,
    color: colors.textSecondary,
    marginTop: 8,
    textAlign: 'center',
  },

  backHomeButton: {
    marginTop: 20,
    backgroundColor: colors.teal,
    paddingHorizontal: 24,
    paddingVertical: 13,
    borderRadius: radius.lg,
  },

  backHomeText: {
    fontSize: 13,
    fontWeight: '800',
    color: colors.navy,
  },
});