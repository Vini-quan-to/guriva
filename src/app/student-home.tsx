import { router } from 'expo-router';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, radius, spacing, typography } from '../theme';

export default function StudentHomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hello 👋</Text>
            <Text style={styles.title}>Find your perfect tutor</Text>
          </View>

          <TouchableOpacity
            style={styles.profileButton}
            onPress={() => router.push('/student-profile')}
          >
            <Text style={styles.profileText}>V</Text>
          </TouchableOpacity>
        </View>

        {/* Search */}
        <TouchableOpacity
          style={styles.searchContainer}
          onPress={() => router.push('/find-tutor')}
          activeOpacity={0.8}
        >
          <Text style={styles.searchIcon}>⌕</Text>

          <Text style={styles.searchPlaceholder}>
            Search for a subject or tutor
          </Text>

          <Text style={styles.searchArrow}>›</Text>
        </TouchableOpacity>

        {/* Subjects */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Explore subjects</Text>

          <TouchableOpacity
            onPress={() => router.push('/find-tutor')}
          >
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.subjectRow}>
          <TouchableOpacity
            style={styles.subjectCard}
            onPress={() => router.push('/find-tutor')}
          >
            <View style={styles.subjectIcon}>
              <Text style={styles.subjectIconText}>M</Text>
            </View>

            <Text style={styles.subjectName}>Maths</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.subjectCard}
            onPress={() => router.push('/find-tutor')}
          >
            <View style={styles.subjectIcon}>
              <Text style={styles.subjectIconText}>P</Text>
            </View>

            <Text style={styles.subjectName}>Physics</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.subjectCard}
            onPress={() => router.push('/find-tutor')}
          >
            <View style={styles.subjectIcon}>
              <Text style={styles.subjectIconText}>C</Text>
            </View>

            <Text style={styles.subjectName}>Chemistry</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.subjectCard}
            onPress={() => router.push('/find-tutor')}
          >
            <View style={styles.subjectIcon}>
              <Text style={styles.subjectIconText}>B</Text>
            </View>

            <Text style={styles.subjectName}>Biology</Text>
          </TouchableOpacity>
        </View>

        {/* Recommended Tutors */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            Recommended tutors
          </Text>

          <TouchableOpacity
            onPress={() => router.push('/find-tutor')}
          >
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>

        {/* Tutor 1 */}
        <TouchableOpacity
          style={styles.tutorCard}
          onPress={() => router.push('/tutor-profile')}
          activeOpacity={0.8}
        >
          <View style={styles.tutorAvatar}>
            <Text style={styles.tutorAvatarText}>T</Text>
          </View>

          <View style={styles.tutorInfo}>
            <View style={styles.nameRow}>
              <Text style={styles.tutorName}>Tutor Name</Text>

              <View style={styles.verifiedBadge}>
                <Text style={styles.verifiedText}>✓</Text>
              </View>
            </View>

            <Text style={styles.tutorSubject}>
              Mathematics
            </Text>

            <Text style={styles.tutorExperience}>
              5+ years experience
            </Text>
          </View>

          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>

        {/* Tutor 2 */}
        <TouchableOpacity
          style={styles.tutorCard}
          onPress={() => router.push('/tutor-profile')}
          activeOpacity={0.8}
        >
          <View style={styles.tutorAvatar}>
            <Text style={styles.tutorAvatarText}>T</Text>
          </View>

          <View style={styles.tutorInfo}>
            <View style={styles.nameRow}>
              <Text style={styles.tutorName}>Tutor Name</Text>

              <View style={styles.verifiedBadge}>
                <Text style={styles.verifiedText}>✓</Text>
              </View>
            </View>

            <Text style={styles.tutorSubject}>
              Physics
            </Text>

            <Text style={styles.tutorExperience}>
              4+ years experience
            </Text>
          </View>

          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>

        {/* Find Tutor Banner */}
        <View style={styles.banner}>
          <View style={styles.bannerContent}>
            <Text style={styles.bannerTitle}>
              Can't find the right tutor?
            </Text>

            <Text style={styles.bannerText}>
              Explore more tutors based on your subject,
              class and location.
            </Text>

            <TouchableOpacity
              style={styles.bannerButton}
              onPress={() => router.push('/find-tutor')}
            >
              <Text style={styles.bannerButtonText}>
                Explore Tutors
              </Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.bannerIcon}>🎓</Text>
        </View>

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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.xl,
  },

  greeting: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 5,
  },

  title: {
    fontSize: 27,
    lineHeight: 33,
    fontWeight: '800',
    color: colors.navy,
  },

  profileButton: {
    width: 48,
    height: 48,
    borderRadius: radius.round,
    backgroundColor: colors.lightBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },

  profileText: {
    fontSize: 19,
    fontWeight: '800',
    color: colors.blue,
  },

  searchContainer: {
    height: 58,
    backgroundColor: colors.white,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    marginBottom: 38,
  },

  searchIcon: {
    fontSize: 28,
    color: colors.blue,
    marginRight: 10,
  },

  searchPlaceholder: {
    flex: 1,
    fontSize: 15,
    color: colors.textMuted,
  },

  searchArrow: {
    fontSize: 27,
    color: colors.textMuted,
  },

  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.navy,
  },

  seeAll: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.blue,
  },

  subjectRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 38,
  },

  subjectCard: {
    flex: 1,
    minHeight: 130,
    backgroundColor: colors.white,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },

  subjectIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.lightBlue,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },

  subjectIconText: {
    fontSize: 21,
    fontWeight: '800',
    color: colors.blue,
  },

  subjectName: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.navy,
  },

  tutorCard: {
    backgroundColor: colors.white,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    minHeight: 122,
    padding: spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },

  tutorAvatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: colors.lightBlue,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },

  tutorAvatarText: {
    fontSize: 23,
    fontWeight: '800',
    color: colors.blue,
  },

  tutorInfo: {
    flex: 1,
  },

  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  tutorName: {
    fontSize: 17,
    fontWeight: '800',
    color: colors.navy,
  },

  verifiedBadge: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 7,
  },

  verifiedText: {
    color: colors.white,
    fontSize: 10,
    fontWeight: '800',
  },

  tutorSubject: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 5,
  },

  tutorExperience: {
    fontSize: 12,
    color: colors.textMuted,
    marginTop: 5,
  },

  arrow: {
    fontSize: 30,
    color: colors.textMuted,
    marginLeft: 8,
  },

  banner: {
    backgroundColor: colors.navy,
    borderRadius: radius.xl,
    marginTop: 24,
    padding: spacing.xl,
    minHeight: 170,
    flexDirection: 'row',
    overflow: 'hidden',
  },

  bannerContent: {
    flex: 1,
    zIndex: 2,
  },

  bannerTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.white,
    marginBottom: 8,
  },

  bannerText: {
    fontSize: 12,
    lineHeight: 18,
    color: '#D8E6F2',
    maxWidth: 240,
    marginBottom: 16,
  },

  bannerButton: {
    alignSelf: 'flex-start',
    backgroundColor: colors.teal,
    borderRadius: radius.md,
    paddingHorizontal: 15,
    paddingVertical: 9,
  },

  bannerButtonText: {
    fontSize: 12,
    fontWeight: '800',
    color: colors.navy,
  },

  bannerIcon: {
    position: 'absolute',
    right: 12,
    bottom: 12,
    fontSize: 48,
    opacity: 0.7,
  },

  bottomSpace: {
    height: 20,
  },
});