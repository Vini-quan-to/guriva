import { router } from 'expo-router';
import { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

export default function TutorAvailabilityScreen() {
  const [selectedDays, setSelectedDays] = useState<string[]>([
    'Monday',
    'Wednesday',
    'Friday',
  ]);

  const [selectedTime, setSelectedTime] = useState('5:00 PM - 8:00 PM');

  const toggleDay = (day: string) => {
    setSelectedDays((current) =>
      current.includes(day)
        ? current.filter((item) => item !== day)
        : [...current, day]
    );
  };

  const timeSlots = [
    '8:00 AM - 11:00 AM',
    '11:00 AM - 2:00 PM',
    '2:00 PM - 5:00 PM',
    '5:00 PM - 8:00 PM',
    '8:00 PM - 10:00 PM',
  ];

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

          <Text style={styles.headerTitle}>Availability</Text>

          <View style={styles.headerSpace} />
        </View>

        <Text style={styles.subtitle}>
          Tell students when you are available for classes.
        </Text>

        {/* Days */}
        <Text style={styles.sectionTitle}>Available days</Text>

        <View style={styles.daysContainer}>
          {days.map((day) => {
            const selected = selectedDays.includes(day);

            return (
              <TouchableOpacity
                key={day}
                style={[
                  styles.dayButton,
                  selected && styles.dayButtonSelected,
                ]}
                onPress={() => toggleDay(day)}
              >
                <Text
                  style={[
                    styles.dayText,
                    selected && styles.dayTextSelected,
                  ]}
                >
                  {day}
                </Text>

                {selected && (
                  <Text style={styles.check}>✓</Text>
                )}
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Time */}
        <Text style={styles.sectionTitle}>Preferred time</Text>

        <View style={styles.timeContainer}>
          {timeSlots.map((slot) => {
            const selected = selectedTime === slot;

            return (
              <TouchableOpacity
                key={slot}
                style={[
                  styles.timeButton,
                  selected && styles.timeButtonSelected,
                ]}
                onPress={() => setSelectedTime(slot)}
              >
                <Text
                  style={[
                    styles.timeText,
                    selected && styles.timeTextSelected,
                  ]}
                >
                  {slot}
                </Text>

                {selected && (
                  <Text style={styles.timeCheck}>✓</Text>
                )}
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Summary */}
        <Text style={styles.sectionTitle}>Your schedule</Text>

        <View style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>
            Weekly availability
          </Text>

          <Text style={styles.summaryText}>
            {selectedDays.length === 0
              ? 'No days selected'
              : selectedDays.join(', ')}
          </Text>

          <View style={styles.divider} />

          <Text style={styles.summaryTitle}>
            Preferred time
          </Text>

          <Text style={styles.summaryText}>
            {selectedTime}
          </Text>
        </View>

        {/* Save */}
        <TouchableOpacity
          style={styles.saveButton}
          onPress={() => router.push('/tutor-home')}
        >
          <Text style={styles.saveButtonText}>
            Save Availability
          </Text>
        </TouchableOpacity>

        <Text style={styles.note}>
          Students will see your availability when looking for tutors.
        </Text>

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
    marginBottom: 25,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 12,
    marginTop: 8,
  },

  daysContainer: {
    gap: 9,
  },

  dayButton: {
    minHeight: 48,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CBD5E1',
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  dayButtonSelected: {
    backgroundColor: '#EFF6FF',
    borderColor: '#2563EB',
  },

  dayText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#475569',
  },

  dayTextSelected: {
    color: '#2563EB',
  },

  check: {
    fontSize: 17,
    fontWeight: '800',
    color: '#2563EB',
  },

  timeContainer: {
    gap: 9,
  },

  timeButton: {
    height: 50,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CBD5E1',
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  timeButtonSelected: {
    backgroundColor: '#EFF6FF',
    borderColor: '#2563EB',
  },

  timeText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#475569',
  },

  timeTextSelected: {
    color: '#2563EB',
  },

  timeCheck: {
    fontSize: 17,
    fontWeight: '800',
    color: '#2563EB',
  },

  summaryCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },

  summaryTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#334155',
    marginBottom: 5,
  },

  summaryText: {
    fontSize: 14,
    lineHeight: 21,
    color: '#64748B',
  },

  divider: {
    height: 1,
    backgroundColor: '#E2E8F0',
    marginVertical: 14,
  },

  saveButton: {
    height: 54,
    borderRadius: 12,
    backgroundColor: '#2563EB',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
  },

  saveButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },

  note: {
    fontSize: 12,
    lineHeight: 18,
    color: '#94A3B8',
    textAlign: 'center',
    marginTop: 12,
  },

  bottomSpace: {
    height: 30,
  },
});