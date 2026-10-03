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

const subjects = ['Maths', 'Physics', 'Chemistry', 'Biology'];

const tutors = [
  {
    name: 'Tutor Name',
    subject: 'Mathematics',
    experience: '5+ years experience',
  },
  {
    name: 'Tutor Name',
    subject: 'Physics',
    experience: '4+ years experience',
  },
];

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

          <TouchableOpacity style={styles.profileButton}>
            <Text style={styles.profileText}>V</Text>
          </TouchableOpacity>
        </View>

        {/* Search */}
        <TouchableOpacity
          style={styles.searchContainer}
          onPress={() => router.push('/find-tutor')}
        >
          <Text style={styles.searchIcon}>⌕</Text>

          <Text style={styles.searchPlaceholder}>
            Search for a subject or tutor
          </Text>
        </TouchableOpacity>

        {/* Subjects */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Explore subjects</Text>

          <TouchableOpacity>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.subjectsContainer}
        >
          {subjects.map((subject) => (
            <TouchableOpacity
              key={subject}
              style={styles.subjectCard}
              onPress={() => router.push('/find-tutor')}
            >
              <View style={styles.subjectIcon}>
                <Text style={styles.subjectIconText}>
                  {subject.charAt(0)}
                </Text>
              </View>

              <Text style={styles.subjectText}>{subject}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Recommended tutors */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recommended tutors</Text>

          <TouchableOpacity>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>

        {tutors.map((tutor, index) => (
          <TouchableOpacity
            key={index}
            style={styles.tutorCard}
            onPress={() => router.push('/tutor-profile')}
          >
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>
                {tutor.name.charAt(0)}
              </Text>
            </View>

            <View style={styles.tutorInfo}>
              <Text style={styles.tutorName}>{tutor.name}</Text>

              <Text style={styles.tutorSubject}>
                {tutor.subject}
              </Text>

              <Text style={styles.tutorExperience}>
                {tutor.experience}
              </Text>
            </View>

            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>
        ))}

        {/* Bottom spacing */}
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
    paddingTop: 15,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },

  greeting: {
    fontSize: 14,
    color: '#64748B',
    marginBottom: 5,
  },

  title: {
    fontSize: 25,
    fontWeight: '800',
    color: '#0F172A',
  },

  profileButton: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: '#DBEAFE',
    alignItems: 'center',
    justifyContent: 'center',
  },

  profileText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2563EB',
  },

  searchContainer: {
    height: 54,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },

  searchIcon: {
    fontSize: 24,
    color: '#64748B',
    marginRight: 10,
  },

  searchPlaceholder: {
    fontSize: 15,
    color: '#94A3B8',
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: '700',
    color: '#0F172A',
  },

  seeAll: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2563EB',
  },

  subjectsContainer: {
    gap: 12,
    paddingBottom: 30,
  },

  subjectCard: {
    width: 100,
    height: 105,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },

  subjectIcon: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#DBEAFE',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },

  subjectIconText: {
    fontSize: 18,
    fontWeight: '800',
    color: '#2563EB',
  },

  subjectText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#334155',
  },

  tutorCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },

  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#DBEAFE',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },

  avatarText: {
    fontSize: 20,
    fontWeight: '800',
    color: '#2563EB',
  },

  tutorInfo: {
    flex: 1,
  },

  tutorName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 4,
  },

  tutorSubject: {
    fontSize: 14,
    color: '#475569',
    marginBottom: 3,
  },

  tutorExperience: {
    fontSize: 12,
    color: '#94A3B8',
  },

  arrow: {
    fontSize: 28,
    color: '#94A3B8',
  },

  bottomSpace: {
    height: 30,
  },
});