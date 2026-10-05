import { useAuth } from '../context/AuthContext';
import { router } from 'expo-router';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, radius, spacing } from '../theme';

export default function TutorProfilePreviewScreen() {
  const { user } = useAuth();

  const profile = user?.tutorProfile;

  const handleContinue = () => {
    router.replace('/tutor-home');
  };

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
            Profile Preview
          </Text>

          <View style={styles.headerSpace} />
        </View>

        {/* Progress */}

        <View style={styles.progressSection}>
          <View style={styles.progressTop}>
            <Text style={styles.progressLabel}>
              Profile setup
            </Text>

            <Text style={styles.progressValue}>
              2 of 2
            </Text>
          </View>

          <View style={styles.progressTrack}>
            <View style={styles.progressFill} />
          </View>
        </View>

        {/* Intro */}

        <View style={styles.intro}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {user?.name?.charAt(0)?.toUpperCase() || 'T'}
            </Text>
          </View>

          <Text style={styles.title}>
            Your tutor profile
          </Text>

          <Text style={styles.subtitle}>
            This is how your profile can appear to students
            on Guriva.
          </Text>
        </View>

        {/* Profile Card */}

        <View style={styles.profileCard}>
          <View style={styles.profileHeader}>
            <View style={styles.profileAvatar}>
              <Text style={styles.profileAvatarText}>
                {user?.name?.charAt(0)?.toUpperCase() || 'T'}
              </Text>
            </View>

            <View style={styles.profileHeaderInfo}>
              <Text style={styles.name}>
                {user?.name || 'Tutor'}
              </Text>

              <Text style={styles.qualification}>
                {profile?.qualification ||
                  'Qualification not added'}
              </Text>

              <View style={styles.verifiedBadge}>
                <Text style={styles.verifiedText}>
                  Profile created
                </Text>
              </View>
            </View>
          </View>

          {/* Subjects */}

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              Subjects
            </Text>

            <View style={styles.subjectContainer}>
              {profile?.subjects
                ? profile.subjects
                    .split(',')
                    .map((subject, index) => (
                      <View
                        key={`${subject}-${index}`}
                        style={styles.subjectChip}
                      >
                        <Text style={styles.subjectText}>
                          {subject.trim()}
                        </Text>
                      </View>
                    ))
                : (
                  <Text style={styles.emptyText}>
                    No subjects added
                  </Text>
                )}
            </View>
          </View>

          {/* Experience */}

          <View style={styles.infoRow}>
            <View style={styles.infoIcon}>
              <Text style={styles.infoIconText}>
                ★
              </Text>
            </View>

            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>
                Teaching Experience
              </Text>

              <Text style={styles.infoValue}>
                {profile?.experience ||
                  'Not added'}
              </Text>
            </View>
          </View>

          {/* Teaching Mode */}

          <View style={styles.infoRow}>
            <View style={styles.infoIcon}>
              <Text style={styles.infoIconText}>
                ↗
              </Text>
            </View>

            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>
                Teaching Mode
              </Text>

              <Text style={styles.infoValue}>
                {profile?.mode || 'Not added'}
              </Text>
            </View>
          </View>

          {/* Email */}

          <View style={styles.infoRow}>
            <View style={styles.infoIcon}>
              <Text style={styles.infoIconText}>
                @
              </Text>
            </View>

            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>
                Contact
              </Text>

              <Text style={styles.infoValue}>
                {user?.email || 'Not added'}
              </Text>
            </View>
          </View>

          {/* Bio */}

          <View style={styles.bioSection}>
            <Text style={styles.sectionTitle}>
              About the tutor
            </Text>

            <Text style={styles.bio}>
              {profile?.bio ||
                'No introduction added yet.'}
            </Text>
          </View>
        </View>

        {/* Note */}

        <View style={styles.noteCard}>
          <View style={styles.noteIcon}>
            <Text style={styles.noteIconText}>
              ✓
            </Text>
          </View>

          <View style={styles.noteContent}>
            <Text style={styles.noteTitle}>
              Looking good!
            </Text>

            <Text style={styles.noteText}>
              You can update these details later from
              your tutor profile.
            </Text>
          </View>
        </View>

        {/* Continue */}

        <TouchableOpacity
          style={styles.continueButton}
          onPress={handleContinue}
          activeOpacity={0.85}
        >
          <Text style={styles.continueText}>
            Go to Tutor Dashboard
          </Text>

          <Text style={styles.arrow}>
            →
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.editButton}
          onPress={() => router.back()}
          activeOpacity={0.75}
        >
          <Text style={styles.editText}>
            Edit profile
          </Text>
        </TouchableOpacity>

        <Text style={styles.footer}>
          Your profile can later include verification,
          availability, pricing and reviews.
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

  progressSection: {
    marginTop: 13,
  },

  progressTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 7,
  },

  progressLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: colors.textSecondary,
  },

  progressValue: {
    fontSize: 10,
    fontWeight: '800',
    color: colors.blue,
  },

  progressTrack: {
    height: 5,
    backgroundColor: colors.border,
    borderRadius: 5,
    overflow: 'hidden',
  },

  progressFill: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.teal,
    borderRadius: 5,
  },

  intro: {
    alignItems: 'center',
    marginTop: 21,
    marginBottom: 21,
  },

  avatar: {
    width: 62,
    height: 62,
    borderRadius: 31,
    backgroundColor: colors.lightTeal,
    borderWidth: 2,
    borderColor: colors.teal,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 11,
  },

  avatarText: {
    fontSize: 25,
    fontWeight: '900',
    color: colors.navy,
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
    paddingHorizontal: 7,
  },

  profileCard: {
    backgroundColor: colors.white,
    borderRadius: radius.xl,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
  },

  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 18,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },

  profileAvatar: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: colors.navy,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  profileAvatarText: {
    fontSize: 23,
    fontWeight: '900',
    color: colors.teal,
  },

  profileHeaderInfo: {
    flex: 1,
  },

  name: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.navy,
  },

  qualification: {
    fontSize: 11,
    color: colors.textSecondary,
    marginTop: 4,
  },

  verifiedBadge: {
    alignSelf: 'flex-start',
    backgroundColor: colors.successLight,
    borderRadius: radius.round,
    paddingHorizontal: 9,
    paddingVertical: 4,
    marginTop: 6,
  },

  verifiedText: {
    fontSize: 9,
    fontWeight: '700',
    color: colors.success,
  },

  section: {
    paddingTop: 17,
    paddingBottom: 5,
  },

  sectionTitle: {
    fontSize: 12,
    fontWeight: '800',
    color: colors.navy,
    marginBottom: 9,
  },

  subjectContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 7,
  },

  subjectChip: {
    backgroundColor: colors.lightBlue,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.round,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },

  subjectText: {
    fontSize: 10,
    fontWeight: '700',
    color: colors.blue,
  },

  emptyText: {
    fontSize: 10,
    color: colors.textMuted,
  },

  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },

  infoIcon: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: colors.lightTeal,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
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

  bioSection: {
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingTop: 16,
    marginTop: 3,
  },

  bio: {
    fontSize: 11,
    lineHeight: 17,
    color: colors.textSecondary,
  },

  noteCard: {
    backgroundColor: colors.lightTeal,
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
    backgroundColor: colors.teal,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },

  noteIconText: {
    fontSize: 15,
    fontWeight: '900',
    color: colors.navy,
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

  continueButton: {
    backgroundColor: colors.teal,
    borderRadius: radius.lg,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },

  continueText: {
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

  editButton: {
    alignItems: 'center',
    paddingVertical: 14,
  },

  editText: {
    fontSize: 11,
    fontWeight: '800',
    color: colors.blue,
  },

  footer: {
    fontSize: 9,
    lineHeight: 14,
    color: colors.textMuted,
    textAlign: 'center',
    marginTop: 5,
    paddingHorizontal: 15,
  },

  bottomSpace: {
    height: 15,
  },
});