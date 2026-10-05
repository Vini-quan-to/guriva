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

export default function TutorProfileScreen() {
  const { user } = useAuth();

  const { createEnquiry } =
    useMarketplace();

  const [message, setMessage] =
    useState('');

  const [sending, setSending] =
    useState(false);

  /*
   * For now this screen represents the tutor
   * selected from Find Tutor.
   *
   * Later this tutor will come from a real
   * tutor database/search result.
   */

  const tutorName =
    user?.role === 'tutor'
      ? user.name
      : 'Aarav Sharma';

  const tutorEmail =
    user?.role === 'tutor'
      ? user.email
      : 'aarav@guriva.in';

  const tutorProfile =
    user?.role === 'tutor'
      ? user.tutorProfile
      : undefined;

  const tutorSubjects =
    tutorProfile?.subjects ||
    'Mathematics';

  const tutorExperience =
    tutorProfile?.experience ||
    '5 years';

  const tutorQualification =
    tutorProfile?.qualification ||
    'M.Sc. Mathematics';

  const tutorMode =
    tutorProfile?.mode ||
    'Both';

  const initials =
    tutorName
      .split(' ')
      .map((part) => part[0])
      .join('')
      .slice(0, 2)
      .toUpperCase() || 'T';

  const handleSendEnquiry = async () => {
    if (sending) {
      return;
    }

    if (!user) {
      Alert.alert(
        'Login required',
        'Please log in before contacting a tutor.'
      );

      router.replace('/login');
      return;
    }

    if (user.role !== 'student') {
      Alert.alert(
        'Student account required',
        'Please log in with a student account to send an enquiry.'
      );

      return;
    }

    if (!message.trim()) {
      Alert.alert(
        'Write a message',
        'Please tell the tutor what you need help with.'
      );

      return;
    }

    setSending(true);

    try {
      await createEnquiry({
        studentEmail: user.email,
        studentName: user.name,

        tutorEmail,
        tutorName,

        subject: tutorSubjects,
        message: message.trim(),
      });

      setMessage('');

      Alert.alert(
        'Enquiry sent',
        `Your enquiry has been sent to ${tutorName}.`,
        [
          {
            text: 'View Enquiries',
            onPress: () =>
              router.push(
                '/student-enquiries'
              ),
          },
          {
            text: 'Done',
            style: 'cancel',
          },
        ]
      );
    } catch (error) {
      console.log(
        'Failed to send enquiry:',
        error
      );

      Alert.alert(
        'Unable to send',
        'Something went wrong while sending your enquiry.'
      );
    } finally {
      setSending(false);
    }
  };

  const handleBook = () => {
    if (!user) {
      Alert.alert(
        'Login required',
        'Please log in before booking a tutor.'
      );

      router.replace('/login');
      return;
    }

    if (user.role !== 'student') {
      Alert.alert(
        'Student account required',
        'Please log in with a student account to book a tutor.'
      );

      return;
    }

    router.push('/booking');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* HEADER */}

        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
            activeOpacity={0.75}
          >
            <Text style={styles.back}>
              ‹
            </Text>
          </TouchableOpacity>

          <Text style={styles.headerTitle}>
            Tutor Profile
          </Text>

          <View style={styles.headerSpace} />
        </View>

        {/* PROFILE */}

        <View style={styles.profileCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {initials}
            </Text>
          </View>

          <Text style={styles.name}>
            {tutorName}
          </Text>

          <Text style={styles.subject}>
            {tutorSubjects} Tutor
          </Text>

          <View style={styles.ratingRow}>
            <Text style={styles.star}>
              ★
            </Text>

            <Text style={styles.rating}>
              4.9
            </Text>

            <Text style={styles.reviews}>
              (124 reviews)
            </Text>
          </View>

          <View style={styles.verifiedBadge}>
            <Text style={styles.verifiedText}>
              ✓ Verified Tutor
            </Text>
          </View>
        </View>

        {/* QUICK STATS */}

        <View style={styles.statsRow}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>
              {tutorExperience}
            </Text>

            <Text style={styles.statLabel}>
              Experience
            </Text>
          </View>

          <View style={styles.statDivider} />

          <View style={styles.stat}>
            <Text style={styles.statNumber}>
              180+
            </Text>

            <Text style={styles.statLabel}>
              Students
            </Text>
          </View>

          <View style={styles.statDivider} />

          <View style={styles.stat}>
            <Text style={styles.statNumber}>
              1,200+
            </Text>

            <Text style={styles.statLabel}>
              Classes
            </Text>
          </View>
        </View>

        {/* ABOUT */}

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>
            About the Tutor
          </Text>

          <Text style={styles.aboutText}>
            {tutorProfile?.bio ||
              'Experienced tutor helping students build strong fundamentals, improve problem-solving skills, and prepare confidently for examinations.'}
          </Text>
        </View>

        {/* QUALIFICATION */}

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>
            Qualification
          </Text>

          <Text style={styles.infoText}>
            {tutorQualification}
          </Text>
        </View>

        {/* SUBJECTS */}

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>
            Subjects
          </Text>

          <View style={styles.subjectBadge}>
            <Text style={styles.subjectBadgeText}>
              {tutorSubjects}
            </Text>
          </View>
        </View>

        {/* TEACHING MODE */}

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>
            Teaching Mode
          </Text>

          <View style={styles.modeBadge}>
            <Text style={styles.modeText}>
              {tutorMode}
            </Text>
          </View>
        </View>

        {/* ENQUIRY */}

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>
            Send an Enquiry
          </Text>

          <Text style={styles.sectionSubtitle}>
            Tell the tutor what you want to learn
            or what you need help with.
          </Text>

          <TextInput
            style={styles.messageInput}
            placeholder="e.g. I need help preparing for my Mathematics exam."
            placeholderTextColor={
              colors.textMuted
            }
            value={message}
            onChangeText={setMessage}
            multiline
            textAlignVertical="top"
          />

          <TouchableOpacity
            style={[
              styles.enquiryButton,
              sending &&
                styles.disabledButton,
            ]}
            onPress={handleSendEnquiry}
            activeOpacity={0.85}
            disabled={sending}
          >
            <Text style={styles.enquiryText}>
              {sending
                ? 'Sending...'
                : 'Send Enquiry'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* BOOK */}

        <TouchableOpacity
          style={styles.bookButton}
          onPress={handleBook}
          activeOpacity={0.85}
        >
          <Text style={styles.bookText}>
            Book a Class
          </Text>
        </TouchableOpacity>

        <Text style={styles.footer}>
          You can contact the tutor before booking
          a class.
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

  profileCard: {
    backgroundColor: colors.navy,
    borderRadius: radius.xl,
    padding: spacing.xl,
    alignItems: 'center',
  },

  avatar: {
    width: 82,
    height: 82,
    borderRadius: 41,
    backgroundColor: colors.teal,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },

  avatarText: {
    fontSize: 25,
    fontWeight: '900',
    color: colors.navy,
  },

  name: {
    fontSize: 22,
    fontWeight: '900',
    color: colors.white,
  },

  subject: {
    fontSize: 12,
    color: '#C9D8E5',
    marginTop: 4,
    textAlign: 'center',
  },

  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 9,
  },

  star: {
    fontSize: 15,
    color: colors.warning,
  },

  rating: {
    fontSize: 12,
    fontWeight: '800',
    color: colors.white,
    marginLeft: 4,
  },

  reviews: {
    fontSize: 10,
    color: '#B8CAD9',
    marginLeft: 4,
  },

  verifiedBadge: {
    backgroundColor: colors.successLight,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: radius.round,
    marginTop: 12,
  },

  verifiedText: {
    fontSize: 9,
    fontWeight: '800',
    color: colors.success,
  },

  statsRow: {
    backgroundColor: colors.white,
    borderRadius: radius.xl,
    borderWidth: 1,
    borderColor: colors.border,
    minHeight: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: spacing.lg,
    marginBottom: spacing.lg,
  },

  stat: {
    flex: 1,
    alignItems: 'center',
  },

  statNumber: {
    fontSize: 13,
    fontWeight: '900',
    color: colors.navy,
  },

  statLabel: {
    fontSize: 9,
    color: colors.textSecondary,
    marginTop: 3,
  },

  statDivider: {
    width: 1,
    height: 32,
    backgroundColor: colors.border,
  },

  card: {
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
  },

  sectionSubtitle: {
    fontSize: 10,
    lineHeight: 15,
    color: colors.textSecondary,
    marginTop: 5,
    marginBottom: 12,
  },

  aboutText: {
    fontSize: 12,
    lineHeight: 19,
    color: colors.textSecondary,
    marginTop: 7,
  },

  infoText: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 8,
  },

  subjectBadge: {
    alignSelf: 'flex-start',
    backgroundColor: colors.lightBlue,
    borderRadius: radius.md,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginTop: 9,
  },

  subjectBadgeText: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.navy,
  },

  modeBadge: {
    alignSelf: 'flex-start',
    backgroundColor: colors.lightTeal,
    borderRadius: radius.md,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginTop: 9,
  },

  modeText: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.navy,
  },

  messageInput: {
    minHeight: 110,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.background,
    borderRadius: radius.md,
    paddingHorizontal: 13,
    paddingTop: 13,
    fontSize: 12,
    lineHeight: 18,
    color: colors.navy,
    marginTop: 12,
  },

  enquiryButton: {
    minHeight: 48,
    borderRadius: radius.lg,
    backgroundColor: colors.lightBlue,
    borderWidth: 1,
    borderColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },

  disabledButton: {
    opacity: 0.6,
  },

  enquiryText: {
    fontSize: 13,
    fontWeight: '800',
    color: colors.blue,
  },

  bookButton: {
    minHeight: 54,
    borderRadius: radius.lg,
    backgroundColor: colors.teal,
    alignItems: 'center',
    justifyContent: 'center',
  },

  bookText: {
    fontSize: 14,
    fontWeight: '800',
    color: colors.navy,
  },

  footer: {
    fontSize: 10,
    lineHeight: 15,
    color: colors.textMuted,
    textAlign: 'center',
    marginTop: 12,
    paddingHorizontal: 20,
  },
});