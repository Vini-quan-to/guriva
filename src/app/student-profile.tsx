import { useAuth } from '../context/AuthContext';
import { colors, radius, spacing } from '../theme';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import {
  Alert,
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

export default function StudentProfileScreen() {
  const {
    user,
    updateStudentProfile,
    logout,
  } = useAuth();

  const [school, setSchool] = useState('');
  const [grade, setGrade] = useState('');
  const [city, setCity] = useState('');
  const [learningGoals, setLearningGoals] =
    useState('');

  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!user) {
      return;
    }

    setSchool(
      user.studentProfile?.school || ''
    );

    setGrade(
      user.studentProfile?.grade || ''
    );

    setCity(
      user.studentProfile?.city || ''
    );

    setLearningGoals(
      user.studentProfile?.learningGoals || ''
    );
  }, [user]);

  const handleSave = async () => {
    if (saving) {
      return;
    }

    setSaving(true);

    try {
      await updateStudentProfile({
        school: school.trim(),
        grade: grade.trim(),
        city: city.trim(),
        learningGoals: learningGoals.trim(),
      });

      Alert.alert(
        'Profile saved',
        'Your student profile has been updated.'
      );
    } catch (error) {
      Alert.alert(
        'Unable to save',
        'Something went wrong while saving your profile.'
      );
    } finally {
      setSaving(false);
    }
  };

  const handleLogout = async () => {
    await logout();
    router.replace('/login');
  };

  const initials =
    user?.name
      ?.split(' ')
      .map((part) => part[0])
      .join('')
      .slice(0, 2)
      .toUpperCase() || 'S';

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
              My Profile
            </Text>

            <View style={styles.headerSpace} />
          </View>

          {/* PROFILE CARD */}
          <View style={styles.profileCard}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>
                {initials}
              </Text>
            </View>

            <View style={styles.identity}>
              <Text style={styles.name}>
                {user?.name || 'Student'}
              </Text>

              <Text style={styles.email}>
                {user?.email || ''}
              </Text>

              {user?.phone ? (
                <Text style={styles.phone}>
                  {user.phone}
                </Text>
              ) : null}
            </View>
          </View>

          {/* ACCOUNT INFORMATION */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              Account Information
            </Text>

            <View style={styles.field}>
              <Text style={styles.label}>
                Full Name
              </Text>

              <View style={styles.readOnlyInput}>
                <Text style={styles.readOnlyText}>
                  {user?.name || 'Student'}
                </Text>
              </View>
            </View>

            <View style={styles.field}>
              <Text style={styles.label}>
                Email
              </Text>

              <View style={styles.readOnlyInput}>
                <Text style={styles.readOnlyText}>
                  {user?.email || ''}
                </Text>
              </View>
            </View>

            <View style={styles.field}>
              <Text style={styles.label}>
                Phone
              </Text>

              <View style={styles.readOnlyInput}>
                <Text
                  style={[
                    styles.readOnlyText,
                    !user?.phone &&
                      styles.placeholderText,
                  ]}
                >
                  {user?.phone ||
                    'No phone number added'}
                </Text>
              </View>
            </View>
          </View>

          {/* LEARNING PROFILE */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              Learning Profile
            </Text>

            <Text style={styles.sectionSubtitle}>
              Help tutors understand what you need
              before you book a class.
            </Text>

            {/* SCHOOL */}
            <View style={styles.field}>
              <Text style={styles.label}>
                School / College
              </Text>

              <TextInput
                style={styles.input}
                placeholder="Enter your school or college"
                placeholderTextColor={
                  colors.textMuted
                }
                value={school}
                onChangeText={setSchool}
                autoCapitalize="words"
              />
            </View>

            {/* GRADE */}
            <View style={styles.field}>
              <Text style={styles.label}>
                Class / Grade
              </Text>

              <TextInput
                style={styles.input}
                placeholder="e.g. Class 10, Grade 8, B.Sc."
                placeholderTextColor={
                  colors.textMuted
                }
                value={grade}
                onChangeText={setGrade}
              />
            </View>

            {/* CITY */}
            <View style={styles.field}>
              <Text style={styles.label}>
                City
              </Text>

              <TextInput
                style={styles.input}
                placeholder="Enter your city"
                placeholderTextColor={
                  colors.textMuted
                }
                value={city}
                onChangeText={setCity}
                autoCapitalize="words"
              />
            </View>

            {/* LEARNING GOALS */}
            <View style={styles.field}>
              <Text style={styles.label}>
                Learning Goals
              </Text>

              <TextInput
                style={[
                  styles.input,
                  styles.textArea,
                ]}
                placeholder="What would you like to learn or improve?"
                placeholderTextColor={
                  colors.textMuted
                }
                value={learningGoals}
                onChangeText={setLearningGoals}
                multiline
                textAlignVertical="top"
              />
            </View>
          </View>

          {/* SAVE BUTTON */}
          <TouchableOpacity
            style={[
              styles.saveButton,
              saving && styles.disabledButton,
            ]}
            onPress={handleSave}
            activeOpacity={0.85}
            disabled={saving}
          >
            <Text style={styles.saveText}>
              {saving
                ? 'Saving...'
                : 'Save Profile'}
            </Text>
          </TouchableOpacity>

          {/* LOGOUT */}
          <TouchableOpacity
            style={styles.logoutButton}
            onPress={handleLogout}
            activeOpacity={0.75}
          >
            <Text style={styles.logoutText}>
              Log Out
            </Text>
          </TouchableOpacity>

          {/* FOOTER */}
          <Text style={styles.footer}>
            Your profile helps Guriva connect you
            with suitable tutors.
          </Text>
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
    paddingBottom: 35,
  },

  /* HEADER */

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

  /* PROFILE CARD */

  profileCard: {
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
    fontSize: 21,
    fontWeight: '900',
    color: colors.navy,
  },

  identity: {
    flex: 1,
  },

  name: {
    fontSize: 19,
    fontWeight: '800',
    color: colors.white,
  },

  email: {
    fontSize: 11,
    color: '#D6E3EF',
    marginTop: 5,
  },

  phone: {
    fontSize: 11,
    color: '#B8CAD9',
    marginTop: 3,
  },

  /* SECTIONS */

  section: {
    backgroundColor: colors.white,
    borderRadius: radius.xl,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
    marginBottom: spacing.lg,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: colors.navy,
  },

  sectionSubtitle: {
    fontSize: 11,
    lineHeight: 16,
    color: colors.textSecondary,
    marginTop: 5,
    marginBottom: 17,
  },

  /* FIELDS */

  field: {
    marginTop: 16,
  },

  label: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.navy,
    marginBottom: 7,
  },

  input: {
    height: 48,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.background,
    borderRadius: radius.md,
    paddingHorizontal: 13,
    fontSize: 13,
    color: colors.navy,
  },

  textArea: {
    height: 105,
    paddingTop: 13,
  },

  /* READ ONLY */

  readOnlyInput: {
    minHeight: 48,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: '#F1F5F8',
    borderRadius: radius.md,
    paddingHorizontal: 13,
    justifyContent: 'center',
  },

  readOnlyText: {
    fontSize: 13,
    color: colors.textSecondary,
  },

  placeholderText: {
    color: colors.textMuted,
  },

  /* SAVE */

  saveButton: {
    backgroundColor: colors.teal,
    borderRadius: radius.lg,
    minHeight: 52,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },

  disabledButton: {
    opacity: 0.65,
  },

  saveText: {
    fontSize: 14,
    fontWeight: '800',
    color: colors.navy,
  },

  /* LOGOUT */

  logoutButton: {
    minHeight: 50,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.error,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 14,
  },

  logoutText: {
    fontSize: 13,
    fontWeight: '800',
    color: colors.error,
  },

  /* FOOTER */

  footer: {
    fontSize: 10,
    lineHeight: 15,
    color: colors.textMuted,
    textAlign: 'center',
    marginTop: 17,
    paddingHorizontal: 20,
  },
});