import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from '../context/AuthContext';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, radius, spacing } from '../theme';

type DaySchedule = {
  enabled: boolean;
  start: string;
  end: string;
};

type Availability = {
  Monday: DaySchedule;
  Tuesday: DaySchedule;
  Wednesday: DaySchedule;
  Thursday: DaySchedule;
  Friday: DaySchedule;
  Saturday: DaySchedule;
  Sunday: DaySchedule;
};

const AVAILABILITY_STORAGE_KEY =
  '@guriva_tutor_availability';

const defaultSchedule: DaySchedule = {
  enabled: false,
  start: '09:00 AM',
  end: '06:00 PM',
};

const defaultAvailability: Availability = {
  Monday: { ...defaultSchedule },
  Tuesday: { ...defaultSchedule },
  Wednesday: { ...defaultSchedule },
  Thursday: { ...defaultSchedule },
  Friday: { ...defaultSchedule },
  Saturday: { ...defaultSchedule },
  Sunday: { ...defaultSchedule },
};

const days: Array<keyof Availability> = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

export default function TutorAvailabilityScreen() {
  const { user } = useAuth();

  const [availability, setAvailability] =
    useState<Availability>(
      defaultAvailability
    );

  const [saved, setSaved] = useState(false);

  useEffect(() => {
    loadAvailability();
  }, []);

  const loadAvailability = async () => {
    try {
      const savedAvailability =
        await AsyncStorage.getItem(
          `${AVAILABILITY_STORAGE_KEY}_${user?.email || 'default'}`
        );

      if (savedAvailability) {
        setAvailability(
          JSON.parse(savedAvailability)
        );
      }
    } catch (error) {
      console.log(
        'Failed to load availability:',
        error
      );
    }
  };

  const toggleDay = (
    day: keyof Availability
  ) => {
    setSaved(false);

    setAvailability((current) => ({
      ...current,
      [day]: {
        ...current[day],
        enabled: !current[day].enabled,
      },
    }));
  };

  const saveAvailability = async () => {
    try {
      await AsyncStorage.setItem(
        `${AVAILABILITY_STORAGE_KEY}_${user?.email || 'default'}`,
        JSON.stringify(availability)
      );

      setSaved(true);
    } catch (error) {
      console.log(
        'Failed to save availability:',
        error
      );
    }
  };

  const enabledDays = days.filter(
    (day) => availability[day].enabled
  ).length;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}

        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.backButton}
            activeOpacity={0.7}
          >
            <Text style={styles.back}>‹</Text>
          </TouchableOpacity>

          <Text style={styles.headerTitle}>
            Availability
          </Text>

          <View style={styles.headerSpace} />
        </View>

        {/* Intro */}

        <View style={styles.intro}>
          <View style={styles.iconCircle}>
            <Text style={styles.iconText}>
              ◷
            </Text>
          </View>

          <Text style={styles.title}>
            Set your availability
          </Text>

          <Text style={styles.subtitle}>
            Tell students when you are available to
            teach.
          </Text>
        </View>

        {/* Summary */}

        <View style={styles.summaryCard}>
          <View style={styles.summaryIcon}>
            <Text style={styles.summaryIconText}>
              ✓
            </Text>
          </View>

          <View style={styles.summaryContent}>
            <Text style={styles.summaryTitle}>
              {enabledDays} days available
            </Text>

            <Text style={styles.summaryText}>
              Students can use this information when
              planning lessons with you.
            </Text>
          </View>
        </View>

        {/* Days */}

        <Text style={styles.sectionTitle}>
          Weekly schedule
        </Text>

        <View style={styles.scheduleCard}>
          {days.map((day, index) => {
            const schedule =
              availability[day];

            return (
              <View key={day}>
                <View style={styles.dayRow}>
                  <View style={styles.dayInfo}>
                    <Text style={styles.dayName}>
                      {day}
                    </Text>

                    <Text
                      style={[
                        styles.dayStatus,
                        schedule.enabled &&
                          styles.dayStatusActive,
                      ]}
                    >
                      {schedule.enabled
                        ? `${schedule.start} – ${schedule.end}`
                        : 'Not available'}
                    </Text>
                  </View>

                  <Switch
                    value={schedule.enabled}
                    onValueChange={() =>
                      toggleDay(day)
                    }
                    trackColor={{
                      false: colors.borderStrong,
                      true: colors.teal,
                    }}
                    thumbColor={
                      colors.white
                    }
                  />
                </View>

                {index < days.length - 1 ? (
                  <View style={styles.divider} />
                ) : null}
              </View>
            );
          })}
        </View>

        {/* Time note */}

        <View style={styles.noteCard}>
          <View style={styles.noteIcon}>
            <Text style={styles.noteIconText}>
              i
            </Text>
          </View>

          <View style={styles.noteContent}>
            <Text style={styles.noteTitle}>
              Default teaching hours
            </Text>

            <Text style={styles.noteText}>
              Your current default hours are 9:00 AM to
              6:00 PM. Detailed time-slot selection will
              be added later.
            </Text>
          </View>
        </View>

        {/* Save */}

        {saved ? (
          <View style={styles.successBox}>
            <Text style={styles.successText}>
              ✓ Availability saved successfully.
            </Text>
          </View>
        ) : null}

        <TouchableOpacity
          style={styles.saveButton}
          onPress={saveAvailability}
          activeOpacity={0.85}
        >
          <Text style={styles.saveText}>
            Save Availability
          </Text>

          <Text style={styles.arrow}>
            →
          </Text>
        </TouchableOpacity>

        <Text style={styles.footer}>
          You can update your availability whenever your
          schedule changes.
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
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  backButton: {
    width: 38,
    height: 38,
    justifyContent: 'center',
  },

  back: {
    fontSize: 36,
    lineHeight: 38,
    color: colors.navy,
  },

  headerTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: colors.navy,
  },

  headerSpace: {
    width: 38,
  },

  intro: {
    alignItems: 'center',
    marginTop: 19,
    marginBottom: 21,
  },

  iconCircle: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: colors.lightTeal,
    borderWidth: 2,
    borderColor: colors.teal,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 11,
  },

  iconText: {
    fontSize: 24,
    fontWeight: '900',
    color: colors.blue,
  },

  title: {
    fontSize: 23,
    fontWeight: '800',
    color: colors.navy,
  },

  subtitle: {
    fontSize: 12,
    lineHeight: 18,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: 7,
    paddingHorizontal: 10,
  },

  summaryCard: {
    backgroundColor: colors.lightTeal,
    borderRadius: radius.xl,
    padding: spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
  },

  summaryIcon: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: colors.teal,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 11,
  },

  summaryIconText: {
    fontSize: 17,
    fontWeight: '900',
    color: colors.navy,
  },

  summaryContent: {
    flex: 1,
  },

  summaryTitle: {
    fontSize: 13,
    fontWeight: '800',
    color: colors.navy,
  },

  summaryText: {
    fontSize: 9,
    lineHeight: 14,
    color: colors.textSecondary,
    marginTop: 3,
  },

  sectionTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: colors.navy,
    marginTop: 23,
    marginBottom: 11,
  },

  scheduleCard: {
    backgroundColor: colors.white,
    borderRadius: radius.xl,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: spacing.lg,
  },

  dayRow: {
    minHeight: 65,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  dayInfo: {
    flex: 1,
  },

  dayName: {
    fontSize: 12,
    fontWeight: '800',
    color: colors.navy,
  },

  dayStatus: {
    fontSize: 9,
    color: colors.textMuted,
    marginTop: 4,
  },

  dayStatusActive: {
    color: colors.success,
    fontWeight: '600',
  },

  divider: {
    height: 1,
    backgroundColor: colors.border,
  },

  noteCard: {
    backgroundColor: colors.lightBlue,
    borderRadius: radius.xl,
    padding: spacing.lg,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  noteIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },

  noteIconText: {
    fontSize: 15,
    fontWeight: '900',
    color: colors.blue,
  },

  noteContent: {
    flex: 1,
  },

  noteTitle: {
    fontSize: 11,
    fontWeight: '800',
    color: colors.navy,
  },

  noteText: {
    fontSize: 9,
    lineHeight: 14,
    color: colors.textSecondary,
    marginTop: 3,
  },

  successBox: {
    backgroundColor: colors.successLight,
    borderWidth: 1,
    borderColor: colors.success,
    borderRadius: radius.md,
    paddingHorizontal: 12,
    paddingVertical: 9,
    marginTop: 20,
  },

  successText: {
    fontSize: 10,
    fontWeight: '700',
    color: colors.success,
  },

  saveButton: {
    backgroundColor: colors.teal,
    borderRadius: radius.lg,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },

  saveText: {
    fontSize: 14,
    fontWeight: '800',
    color: colors.navy,
  },

  arrow: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.navy,
    marginLeft: 9,
  },

  footer: {
    fontSize: 9,
    lineHeight: 14,
    color: colors.textMuted,
    textAlign: 'center',
    marginTop: 18,
    paddingHorizontal: 15,
  },

  bottomSpace: {
    height: 15,
  },
});