import { useAuth } from '../context/AuthContext';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
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

export default function TutorEditProfileScreen() {
  const { user, updateTutorProfile } = useAuth();

  const profile = user?.tutorProfile;

  const [subjects, setSubjects] = useState(
    profile?.subjects || ''
  );

  const [experience, setExperience] = useState(
    profile?.experience || ''
  );

  const [qualification, setQualification] =
    useState(profile?.qualification || '');

  const [bio, setBio] = useState(
    profile?.bio || ''
  );

  const [mode, setMode] = useState<
    'Online' | 'Offline' | 'Both'
  >(profile?.mode || 'Both');

  const [error, setError] = useState('');
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (!profile) {
      return;
    }

    setSubjects(profile.subjects);
    setExperience(profile.experience);
    setQualification(profile.qualification);
    setBio(profile.bio);
    setMode(profile.mode);
  }, [profile]);

  const handleSave = async () => {
    setError('');
    setSaved(false);

    if (!subjects.trim()) {
      setError('Please enter at least one subject.');
      return;
    }

    if (!experience.trim()) {
      setError(
        'Please enter your teaching experience.'
      );
      return;
    }

    if (!qualification.trim()) {
      setError(
        'Please enter your qualification.'
      );
      return;
    }

    if (!bio.trim()) {
      setError(
        'Please add a short introduction about yourself.'
      );
      return;
    }

    await updateTutorProfile({
      subjects: subjects.trim(),
      experience: experience.trim(),
      qualification: qualification.trim(),
      mode,
      bio: bio.trim(),
    });

    setSaved(true);

    setTimeout(() => {
      router.back();
    }, 700);
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
              Edit Profile
            </Text>

            <View style={styles.headerSpace} />
          </View>

          {/* Intro */}

          <View style={styles.intro}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>
                {user?.name
                  ?.charAt(0)
                  ?.toUpperCase() || 'T'}
              </Text>
            </View>

            <Text style={styles.title}>
              Update your tutor profile
            </Text>

            <Text style={styles.subtitle}>
              Keep your teaching information clear and
              up to date for students.
            </Text>
          </View>

          {/* Account information */}

          <View style={styles.accountCard}>
            <Text style={styles.sectionTitle}>
              Account
            </Text>

            <View style={styles.accountRow}>
              <Text style={styles.accountLabel}>
                Name
              </Text>

              <Text style={styles.accountValue}>
                {user?.name || 'Tutor'}
              </Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.accountRow}>
              <Text style={styles.accountLabel}>
                Email
              </Text>

              <Text style={styles.accountValue}>
                {user?.email || 'Not added'}
              </Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.accountRow}>
              <Text style={styles.accountLabel}>
                Phone
              </Text>

              <Text style={styles.accountValue}>
                {user?.phone || 'Not added'}
              </Text>
            </View>
          </View>

          {/* Teaching details */}

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
              placeholderTextColor={
                colors.textMuted
              }
              value={subjects}
              onChangeText={(text) => {
                setSubjects(text);
                setError('');
                setSaved(false);
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
              placeholderTextColor={
                colors.textMuted
              }
              value={experience}
              onChangeText={(text) => {
                setExperience(text);
                setError('');
                setSaved(false);
              }}
            />

            <Text style={styles.label}>
              Highest Qualification
            </Text>

            <TextInput
              style={styles.input}
              placeholder="e.g. M.Sc. Mathematics"
              placeholderTextColor={
                colors.textMuted
              }
              value={qualification}
              onChangeText={(text) => {
                setQualification(text);
                setError('');
                setSaved(false);
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
                  onPress={() => {
                    setMode(item);
                    setSaved(false);
                  }}
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
              placeholder="Tell students about your teaching style, experience and what you can help them achieve."
              placeholderTextColor={
                colors.textMuted
              }
              value={bio}
              onChangeText={(text) => {
                setBio(text);
                setError('');
                setSaved(false);
              }}
              multiline
              textAlignVertical="top"
            />

            <Text style={styles.helperText}>
              Keep your introduction clear and
              student-friendly.
            </Text>

            {/* Error */}

            {error ? (
              <View style={styles.errorBox}>
                <Text style={styles.errorText}>
                  {error}
                </Text>
              </View>
            ) : null}

            {/* Saved */}

            {saved ? (
              <View style={styles.successBox}>
                <Text style={styles.successText}>
                  ✓ Profile updated successfully.
                </Text>
              </View>
            ) : null}

            {/* Save */}

            <TouchableOpacity
              style={styles.saveButton}
              onPress={handleSave}
              activeOpacity={0.85}
            >
              <Text style={styles.saveText}>
                Save Changes
              </Text>

              <Text style={styles.arrow}>
                →
              </Text>
            </TouchableOpacity>
          </View>

          {/* Note */}

          <View style={styles.noteCard}>
            <View style={styles.noteIcon}>
              <Text style={styles.noteIconText}>
                i
              </Text>
            </View>

            <View style={styles.noteContent}>
              <Text style={styles.noteTitle}>
                More profile features are coming
              </Text>

              <Text style={styles.noteText}>
                Later you will be able to add your
                profile photo, pricing, availability,
                verification documents and reviews.
              </Text>
            </View>
          </View>

          <Text style={styles.footer}>
            Changes are saved to your Guriva account.
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

  intro: {
    alignItems: 'center',
    marginTop: 19,
    marginBottom: 21,
  },

  avatar: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: colors.navy,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 11,
  },

  avatarText: {
    fontSize: 23,
    fontWeight: '900',
    color: colors.teal,
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

  accountCard: {
    backgroundColor: colors.lightBlue,
    borderRadius: radius.xl,
    padding: spacing.lg,
    marginBottom: 20,
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
    marginBottom: 15,
  },

  accountRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 9,
  },

  accountLabel: {
    fontSize: 10,
    fontWeight: '600',
    color: colors.textSecondary,
  },

  accountValue: {
    flex: 1,
    textAlign: 'right',
    fontSize: 11,
    fontWeight: '700',
    color: colors.navy,
    marginLeft: 15,
  },

  divider: {
    height: 1,
    backgroundColor: colors.border,
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
    marginBottom: 14,
  },

  errorText: {
    fontSize: 10,
    lineHeight: 15,
    color: colors.error,
    fontWeight: '600',
  },

  successBox: {
    backgroundColor: colors.successLight,
    borderWidth: 1,
    borderColor: colors.success,
    borderRadius: radius.md,
    paddingHorizontal: 12,
    paddingVertical: 9,
    marginBottom: 14,
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
    marginTop: 3,
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