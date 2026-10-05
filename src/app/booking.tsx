import { router } from 'expo-router';
import { useState } from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
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

export default function BookingScreen() {
  const { user } = useAuth();
  const { createBooking } = useMarketplace();

  const [selectedMode, setSelectedMode] =
    useState('Online');

  const [selectedDuration, setSelectedDuration] =
    useState('1 hour');

  const [selectedTime, setSelectedTime] =
    useState('5:00 PM');

  const [message, setMessage] =
    useState('');

  const [creatingBooking, setCreatingBooking] =
    useState(false);

  const times = [
    '5:00 PM',
    '6:00 PM',
    '7:00 PM',
  ];

  const modes = [
    'Online',
    'Home Tuition',
  ];

  const durations = [
    '1 hour',
    '1.5 hours',
    '2 hours',
  ];

  const tutor = {
    name: 'Aarav Sharma',
    subject: 'Mathematics Tutor',
    level: 'Class 12',
    email: 'aarav@guriva.in',
  };

  const getAmount = () => {
    if (selectedDuration === '1.5 hours') {
      return 750;
    }

    if (selectedDuration === '2 hours') {
      return 1000;
    }

    return 500;
  };

  const amount = getAmount();

  const handleContinue = async () => {
    if (creatingBooking) {
      return;
    }

    if (!user) {
      Alert.alert(
        'Login required',
        'Please log in before booking a tutor.'
      );

      router.replace('/login');
      return;
    }

    if (!message.trim()) {
      Alert.alert(
        'Add a message',
        'Please tell the tutor what you would like help with.'
      );

      return;
    }

    setCreatingBooking(true);

    try {
      const booking = await createBooking({
        studentEmail: user.email,
        studentName: user.name,

        tutorEmail: tutor.email,
        tutorName: tutor.name,

        subject: 'Mathematics',

        date: '12 October 2026',
        time: selectedTime,

        mode:
          selectedMode === 'Home Tuition'
            ? 'Offline'
            : 'Online',

        amount,
      });

      router.push({
        pathname: '/payment',
        params: {
          bookingId: booking.id,
        },
      });
    } catch (error) {
      console.log(
        'Failed to create booking:',
        error
      );

      Alert.alert(
        'Booking failed',
        'We could not create your booking. Please try again.'
      );
    } finally {
      setCreatingBooking(false);
    }
  };

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
            Book a Class
          </Text>

          <View style={styles.headerSpace} />
        </View>

        {/* TUTOR */}

        <View style={styles.tutorCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              AS
            </Text>
          </View>

          <View style={styles.tutorInfo}>
            <Text style={styles.tutorName}>
              {tutor.name}
            </Text>

            <Text style={styles.tutorSubject}>
              {tutor.subject}
            </Text>

            <Text style={styles.tutorLevel}>
              {tutor.level}
            </Text>
          </View>
        </View>

        {/* MODE */}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Teaching Mode
          </Text>

          <View style={styles.optionRow}>
            {modes.map((mode) => {
              const selected =
                selectedMode === mode;

              return (
                <TouchableOpacity
                  key={mode}
                  style={[
                    styles.optionButton,
                    selected &&
                      styles.optionButtonSelected,
                  ]}
                  onPress={() =>
                    setSelectedMode(mode)
                  }
                  activeOpacity={0.8}
                >
                  <Text
                    style={[
                      styles.optionText,
                      selected &&
                        styles.optionTextSelected,
                    ]}
                  >
                    {mode}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* DURATION */}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Class Duration
          </Text>

          <View style={styles.optionRow}>
            {durations.map((duration) => {
              const selected =
                selectedDuration === duration;

              return (
                <TouchableOpacity
                  key={duration}
                  style={[
                    styles.durationButton,
                    selected &&
                      styles.optionButtonSelected,
                  ]}
                  onPress={() =>
                    setSelectedDuration(duration)
                  }
                  activeOpacity={0.8}
                >
                  <Text
                    style={[
                      styles.optionText,
                      selected &&
                        styles.optionTextSelected,
                    ]}
                  >
                    {duration}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* DATE */}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Preferred Date
          </Text>

          <View style={styles.dateBox}>
            <Text style={styles.dateIcon}>
              📅
            </Text>

            <Text style={styles.dateText}>
              12 October 2026
            </Text>
          </View>
        </View>

        {/* TIME */}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Preferred Time
          </Text>

          <View style={styles.timeGrid}>
            {times.map((time) => {
              const selected =
                selectedTime === time;

              return (
                <TouchableOpacity
                  key={time}
                  style={[
                    styles.timeButton,
                    selected &&
                      styles.optionButtonSelected,
                  ]}
                  onPress={() =>
                    setSelectedTime(time)
                  }
                  activeOpacity={0.8}
                >
                  <Text
                    style={[
                      styles.optionText,
                      selected &&
                        styles.optionTextSelected,
                    ]}
                  >
                    {time}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* MESSAGE */}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Message to Tutor
          </Text>

          <TextInput
            style={styles.messageInput}
            placeholder="Tell the tutor what you need help with..."
            placeholderTextColor={
              colors.textMuted
            }
            value={message}
            onChangeText={setMessage}
            multiline
            textAlignVertical="top"
          />
        </View>

        {/* PRICE */}

        <View style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>
            Price Summary
          </Text>

          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>
              Class fee
            </Text>

            <Text style={styles.summaryValue}>
              ₹{amount}
            </Text>
          </View>

          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>
              Platform fee
            </Text>

            <Text style={styles.summaryValue}>
              ₹0
            </Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.summaryRow}>
            <Text style={styles.totalLabel}>
              Total
            </Text>

            <Text style={styles.totalValue}>
              ₹{amount}
            </Text>
          </View>
        </View>

        {/* CONTINUE */}

        <TouchableOpacity
          style={[
            styles.continueButton,
            creatingBooking &&
              styles.disabledButton,
          ]}
          onPress={handleContinue}
          activeOpacity={0.85}
          disabled={creatingBooking}
        >
          <Text style={styles.continueText}>
            {creatingBooking
              ? 'Creating Booking...'
              : 'Continue to Payment'}
          </Text>
        </TouchableOpacity>

        <Text style={styles.secureText}>
          🔒 You can review your booking before
          making payment.
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

  tutorCard: {
    backgroundColor: colors.navy,
    borderRadius: radius.xl,
    padding: spacing.xl,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.xl,
  },

  avatar: {
    width: 62,
    height: 62,
    borderRadius: 31,
    backgroundColor: colors.teal,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },

  avatarText: {
    fontSize: 20,
    fontWeight: '900',
    color: colors.navy,
  },

  tutorInfo: {
    flex: 1,
  },

  tutorName: {
    fontSize: 19,
    fontWeight: '800',
    color: colors.white,
  },

  tutorSubject: {
    fontSize: 12,
    color: '#D6E3EF',
    marginTop: 4,
  },

  tutorLevel: {
    fontSize: 11,
    color: '#B8CAD9',
    marginTop: 3,
  },

  section: {
    backgroundColor: colors.white,
    borderRadius: radius.xl,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
    marginBottom: spacing.lg,
  },

  sectionTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: colors.navy,
    marginBottom: 13,
  },

  optionRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 9,
  },

  optionButton: {
    minHeight: 42,
    paddingHorizontal: 15,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },

  durationButton: {
    minHeight: 42,
    paddingHorizontal: 14,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },

  optionButtonSelected: {
    backgroundColor: colors.teal,
    borderColor: colors.teal,
  },

  optionText: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.textSecondary,
  },

  optionTextSelected: {
    color: colors.navy,
  },

  dateBox: {
    height: 48,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    backgroundColor: colors.background,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 13,
  },

  dateIcon: {
    fontSize: 16,
    marginRight: 10,
  },

  dateText: {
    fontSize: 13,
    color: colors.navy,
    fontWeight: '600',
  },

  timeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 9,
  },

  timeButton: {
    minHeight: 42,
    minWidth: 92,
    paddingHorizontal: 14,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },

  messageInput: {
    minHeight: 110,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    backgroundColor: colors.background,
    paddingHorizontal: 13,
    paddingTop: 13,
    fontSize: 13,
    color: colors.navy,
  },

  summaryCard: {
    backgroundColor: colors.lightBlue,
    borderRadius: radius.xl,
    padding: spacing.lg,
    marginBottom: spacing.lg,
  },

  summaryTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: colors.navy,
    marginBottom: 14,
  },

  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },

  summaryLabel: {
    fontSize: 12,
    color: colors.textSecondary,
  },

  summaryValue: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.navy,
  },

  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: 5,
  },

  totalLabel: {
    fontSize: 14,
    fontWeight: '800',
    color: colors.navy,
  },

  totalValue: {
    fontSize: 18,
    fontWeight: '900',
    color: colors.navy,
  },

  continueButton: {
    minHeight: 54,
    borderRadius: radius.lg,
    backgroundColor: colors.teal,
    alignItems: 'center',
    justifyContent: 'center',
  },

  disabledButton: {
    opacity: 0.65,
  },

  continueText: {
    fontSize: 14,
    fontWeight: '800',
    color: colors.navy,
  },

  secureText: {
    fontSize: 10,
    color: colors.textMuted,
    textAlign: 'center',
    marginTop: 13,
  },
});