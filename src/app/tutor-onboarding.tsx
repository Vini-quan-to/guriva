import { useAuth } from '../context/AuthContext';
import { router } from 'expo-router';
import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, radius, spacing } from '../theme';

export default function TutorOnboardingScreen() {
  const { updateTutorProfile } = useAuth();

  const [subjects, setSubjects] = useState('');
  const [experience, setExperience] = useState('');
  const [qualification, setQualification] = useState('');
  const [bio, setBio] = useState('');

  const [mode, setMode] = useState<
    'Online' | 'Offline' | 'Both'
  >('Both');

  const [error, setError] = useState('');

  const handleContinue = () => {
    setError('');

    if (!subjects.trim()) {
      setError('Please enter at least one subject.');
      return;
    }

    if (!experience.trim()) {
      setError('Please enter your teaching experience.');
      return;
    }

    if (!qualification.trim()) {
      setError('Please enter your qualification.');
      return;
    }

    if (!bio.trim()) {
      setError(
        'Please add a short introduction about yourself.'
      );
      return;
    }

    updateTutorProfile({
      subjects: subjects.trim(),
      experience: experience.trim(),
      qualification: qualification.trim(),
      mode,
      bio: bio.trim(),
    });

    router.push('/tutor-profile-preview');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={
          Platform.OS === 'ios'
            ? 'padding'
            : undefined
        }
      >
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => router.back()}
              style={styles.backButton}
              activeOpacity={0.7}
            >
              <Text style={styles.back}>‹</Text>
            </TouchableOpacity>

            <Text style={styles.headerTitle}>
              Tutor Profile
            </Text>

            <View style={styles.headerSpace} />
          </View>

          <View style={styles.progressSection}>
            <View style={styles.progressTop}>
              <Text style={styles.progressLabel}>
                Profile setup
              </Text>

              <Text style={styles.progressValue}>
                1 of 2
              </Text>
            </View>

            <View style={styles.progressTrack}>
              <View style={styles.progressFill} />
            </View>
          </View>

          <View style={styles.intro}>
            <View style={styles.iconCircle}>
              <Text style={styles.iconText}>T</Text>
            </View>

            <Text style={styles.title}>
              Tell students about yourself
            </Text>

            <Text style={styles.subtitle}>
              Add a few details so students can understand
              your teaching experience and expertise.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.sectionTitle}>
              Teaching details
            </Text>

            <Text style={styles.label}>
              Subjects
            </Text>

            <TextInput
              style={styles.input}
              placeholder="e.g. Mathematics, Physics"
              placeholderTextColor={colors.textMuted}
              value={subjects}
              onChangeText={(text) => {
                setSubjects(text);
                setError('');
              }}
            />

            <Text style={styles.helperText}>
              Separate multiple subjects with commas.
            </Text>

            <Text style={styles.label}>
              Teaching Experience
            </Text>

            <TextInput
              style={styles.input}
              placeholder="e.g. 3 years"
              placeholderTextColor={colors.textMuted}
              value={experience}
              onChangeText={(text) => {
                setExperience(text);
                setError('');
              }}
            />

            <Text style={styles.label}>
              Highest Qualification
            </Text>

            <TextInput
              style={styles.input}
              placeholder="e.g. M.Sc. Mathematics"
              placeholderTextColor={colors.textMuted}
              value={qualification}
              onChangeText={(text) => {
                setQualification(text);
                setError('');
              }}
            />

            <Text style={styles.label}>
              Teaching Mode
            </Text>

            <View style={styles.modeRow}>
              {(
                ['Online', 'Offline', 'Both'] as const
              ).map((item) => (
                <TouchableOpacity
                  key={item}
                  style={[
                    styles.modeButton,
                    mode === item &&
                      styles.modeButtonActive,
                  ]}
                  onPress={() => setMode(item)}
                  activeOpacity={0.8}
                >
                  <Text
                    style={[
                      styles.modeText,
                      mode === item &&
                        styles.modeTextActive,
                    ]}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <Text style={styles.label}>
              About You
            </Text>

            <TextInput
              style={styles.bioInput}
              placeholder="Tell students briefly about your teaching style, experience and what you can help them achieve."
              placeholderTextColor={colors.textMuted}
              value={bio}
              onChangeText={(text) => {
                setBio(text);
                setError('');
              }}
              multiline
              textAlignVertical="top"
            />

            <Text style={styles.helperText}>
              Keep it clear and student-friendly.
            </Text>

            {error ? (
              <View style={styles.errorBox}>
                <Text style={styles.errorText}>
                  {error}
                </Text>
              </View>
            ) : null}

            <TouchableOpacity
              style={styles.continueButton}
              onPress={handleContinue}
              activeOpacity={0.85}
            >
              <Text style={styles.continueText}>
                Continue
              </Text>

              <Text style={styles.arrow}>
                →
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.noteCard}>
            <View style={styles.noteIcon}>
              <Text style={styles.noteIconText}>
                i
              </Text>
            </View>

            <View style={styles.noteContent}>
              <Text style={styles.noteTitle}>
                Verification comes next
              </Text>

              <Text style={styles.noteText}>
                Your profile can later include qualification
                documents and identity verification.
              </Text>
            </View>
          </View>

          <Text style={styles.footer}>
            You can update your tutor profile later from
            your account.
          </Text>

          <View style={styles.bottomSpace} />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },

  keyboard: {
    flex: 1,
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
    width: '50%',
    height: '100%',
    backgroundColor: colors.teal,
    borderRadius: 5,
  },

  intro: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 21,
  },

  iconCircle: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: colors.lightTeal,
    borderWidth: 2,
    borderColor: colors.teal,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 11,
  },

  iconText: {
    fontSize: 21,
    fontWeight: '900',
    color: colors.navy,
  },

  title: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.navy,
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 12,
    lineHeight: 18,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: 7,
    paddingHorizontal: 7,
  },

  card: {
    backgroundColor: colors.white,
    borderRadius: radius.xl,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
  },

  sectionTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: colors.navy,
    marginBottom: 17,
  },

  label: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.navy,
    marginBottom: 7,
  },

  input: {
    height: 48,
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    paddingHorizontal: 13,
    fontSize: 13,
    color: colors.navy,
    marginBottom: 5,
  },

  helperText: {
    fontSize: 9,
    color: colors.textMuted,
    marginBottom: 15,
  },

  modeRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 17,
  },

  modeButton: {
    flex: 1,
    height: 42,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },

  modeButtonActive: {
    backgroundColor: colors.lightTeal,
    borderColor: colors.teal,
  },

  modeText: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.textSecondary,
  },

  modeTextActive: {
    color: colors.navy,
  },

  bioInput: {
    minHeight: 105,
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    paddingHorizontal: 13,
    paddingVertical: 12,
    fontSize: 12,
    lineHeight: 18,
    color: colors.navy,
    marginBottom: 5,
  },

  errorBox: {
    backgroundColor: colors.errorLight,
    borderWidth: 1,
    borderColor: colors.error,
    borderRadius: radius.md,
    paddingHorizontal: 12,
    paddingVertical: 9,
    marginTop: 4,
    marginBottom: 15,
  },

  errorText: {
    fontSize: 10,
    lineHeight: 15,
    color: colors.error,
    fontWeight: '600',
  },

  continueButton: {
    backgroundColor: colors.teal,
    borderRadius: radius.lg,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
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