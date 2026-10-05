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
import { colors, radius, spacing } from '../theme';

const tutors = [
  {
    name: 'Aarav Sharma',
    subject: 'Mathematics',
    experience: '5+ years experience',
    rating: '4.8',
    students: '120+ students',
    initial: 'A',
  },
  {
    name: 'Riya Mehta',
    subject: 'Physics',
    experience: '6+ years experience',
    rating: '4.9',
    students: '95+ students',
    initial: 'R',
  },
  {
    name: 'Karan Verma',
    subject: 'Chemistry',
    experience: '4+ years experience',
    rating: '4.7',
    students: '80+ students',
    initial: 'K',
  },
];

export default function FindTutorScreen() {
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

          <Text style={styles.headerTitle}>Find a Tutor</Text>

          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterIcon}>☷</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.subtitle}>
          Find the right tutor for your learning goals.
        </Text>

        {/* Search */}
        <View style={styles.searchContainer}>
          <Text style={styles.searchIcon}>⌕</Text>

          <TextInput
            style={styles.searchInput}
            placeholder="Search subject or tutor"
            placeholderTextColor={colors.textMuted}
          />
        </View>

        {/* Filters */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterRow}
        >
          <TouchableOpacity style={styles.activeFilter}>
            <Text style={styles.activeFilterText}>All</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.filterChip}>
            <Text style={styles.filterText}>Subject</Text>
            <Text style={styles.filterArrow}>⌄</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.filterChip}>
            <Text style={styles.filterText}>Class</Text>
            <Text style={styles.filterArrow}>⌄</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.filterChip}>
            <Text style={styles.filterText}>Location</Text>
            <Text style={styles.filterArrow}>⌄</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.filterChip}>
            <Text style={styles.filterText}>Experience</Text>
            <Text style={styles.filterArrow}>⌄</Text>
          </TouchableOpacity>
        </ScrollView>

        {/* Results Header */}
        <View style={styles.resultsHeader}>
          <View>
            <Text style={styles.resultsTitle}>Recommended tutors</Text>
            <Text style={styles.resultsCount}>24 tutors found</Text>
          </View>

          <TouchableOpacity>
            <Text style={styles.sortText}>Sort by</Text>
          </TouchableOpacity>
        </View>

        {/* Tutor Cards */}
        {tutors.map((tutor) => (
          <TouchableOpacity
            key={tutor.name}
            style={styles.tutorCard}
            onPress={() => router.push('/tutor-profile')}
            activeOpacity={0.85}
          >
            <View style={styles.tutorTop}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>{tutor.initial}</Text>
              </View>

              <View style={styles.tutorInfo}>
                <View style={styles.nameRow}>
                  <Text style={styles.tutorName}>{tutor.name}</Text>

                  <View style={styles.verifiedBadge}>
                    <Text style={styles.verifiedText}>✓</Text>
                  </View>
                </View>

                <Text style={styles.subject}>{tutor.subject}</Text>

                <Text style={styles.experience}>
                  {tutor.experience}
                </Text>
              </View>

              <Text style={styles.cardArrow}>›</Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.tutorBottom}>
              <View style={styles.ratingContainer}>
                <Text style={styles.star}>★</Text>
                <Text style={styles.rating}>{tutor.rating}</Text>
              </View>

              <Text style={styles.students}>
                {tutor.students}
              </Text>

              <View style={styles.onlineBadge}>
                <Text style={styles.onlineText}>Online</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}

        {/* More Results */}
        <View style={styles.moreCard}>
          <Text style={styles.moreTitle}>
            Looking for something specific?
          </Text>

          <Text style={styles.moreText}>
            Use filters to find tutors based on subject, class,
            location and experience.
          </Text>

          <TouchableOpacity
            style={styles.exploreButton}
            onPress={() => router.push('/tutor-profile')}
          >
            <Text style={styles.exploreButtonText}>
              Explore Tutors
            </Text>
          </TouchableOpacity>
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
    paddingBottom: 35,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  back: {
    fontSize: 36,
    lineHeight: 38,
    color: colors.navy,
  },

  headerTitle: {
    fontSize: 21,
    fontWeight: '800',
    color: colors.navy,
  },

  filterButton: {
    width: 40,
    height: 40,
    borderRadius: radius.md,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },

  filterIcon: {
    fontSize: 21,
    color: colors.navy,
  },

  subtitle: {
    fontSize: 13,
    color: colors.textSecondary,
    marginTop: 5,
    marginBottom: spacing.xl,
  },

  searchContainer: {
    height: 55,
    backgroundColor: colors.white,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
  },

  searchIcon: {
    fontSize: 27,
    color: colors.blue,
    marginRight: 9,
  },

  searchInput: {
    flex: 1,
    fontSize: 14,
    color: colors.navy,
  },

  filterRow: {
    gap: 9,
    paddingVertical: spacing.lg,
  },

  activeFilter: {
    backgroundColor: colors.navy,
    borderRadius: radius.round,
    paddingHorizontal: 17,
    paddingVertical: 9,
  },

  activeFilterText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: '700',
  },

  filterChip: {
    backgroundColor: colors.white,
    borderRadius: radius.round,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: 14,
    paddingVertical: 9,
    flexDirection: 'row',
    alignItems: 'center',
  },

  filterText: {
    color: colors.navy,
    fontSize: 12,
    fontWeight: '600',
  },

  filterArrow: {
    color: colors.textSecondary,
    marginLeft: 5,
    fontSize: 13,
  },

  resultsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: 8,
    marginBottom: spacing.md,
  },

  resultsTitle: {
    fontSize: 19,
    fontWeight: '800',
    color: colors.navy,
  },

  resultsCount: {
    fontSize: 12,
    color: colors.textMuted,
    marginTop: 4,
  },

  sortText: {
    color: colors.blue,
    fontSize: 12,
    fontWeight: '700',
  },

  tutorCard: {
    backgroundColor: colors.white,
    borderRadius: radius.xl,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
    marginBottom: 12,
  },

  tutorTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: colors.lightBlue,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 13,
  },

  avatarText: {
    fontSize: 21,
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
    fontSize: 15,
    fontWeight: '800',
    color: colors.navy,
  },

  verifiedBadge: {
    width: 17,
    height: 17,
    borderRadius: 9,
    backgroundColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 6,
  },

  verifiedText: {
    color: colors.white,
    fontSize: 9,
    fontWeight: '800',
  },

  subject: {
    fontSize: 13,
    color: colors.blue,
    fontWeight: '600',
    marginTop: 4,
  },

  experience: {
    fontSize: 11,
    color: colors.textSecondary,
    marginTop: 4,
  },

  cardArrow: {
    fontSize: 29,
    color: colors.textMuted,
    marginLeft: 7,
  },

  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: 14,
  },

  tutorBottom: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  star: {
    color: colors.teal,
    fontSize: 14,
    marginRight: 4,
  },

  rating: {
    color: colors.navy,
    fontSize: 12,
    fontWeight: '700',
  },

  students: {
    fontSize: 11,
    color: colors.textSecondary,
    marginLeft: 15,
    flex: 1,
  },

  onlineBadge: {
    backgroundColor: colors.successLight,
    borderRadius: radius.round,
    paddingHorizontal: 9,
    paddingVertical: 5,
  },

  onlineText: {
    color: colors.success,
    fontSize: 10,
    fontWeight: '700',
  },

  moreCard: {
    backgroundColor: colors.navy,
    borderRadius: radius.xl,
    padding: spacing.xl,
    marginTop: 10,
  },

  moreTitle: {
    fontSize: 17,
    fontWeight: '800',
    color: colors.white,
    marginBottom: 7,
  },

  moreText: {
    fontSize: 12,
    lineHeight: 18,
    color: '#D8E6F2',
    marginBottom: 15,
  },

  exploreButton: {
    alignSelf: 'flex-start',
    backgroundColor: colors.teal,
    borderRadius: radius.md,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },

  exploreButtonText: {
    color: colors.navy,
    fontSize: 12,
    fontWeight: '800',
  },

  bottomSpace: {
    height: 20,
  },
});