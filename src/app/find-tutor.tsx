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

const filters = ['Subject', 'Class', 'Location', 'Experience'];

const tutors = [
  {
    name: 'Aarav Sharma',
    subject: 'Mathematics',
    experience: '5 years',
    location: 'Pune',
  },
  {
    name: 'Priya Verma',
    subject: 'Physics',
    experience: '4 years',
    location: 'Pune',
  },
  {
    name: 'Rahul Singh',
    subject: 'Chemistry',
    experience: '6 years',
    location: 'Online',
  },
];

export default function FindTutorScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Text style={styles.back}>‹</Text>
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Find a Tutor</Text>

          <View style={styles.headerSpace} />
        </View>

        {/* Search */}
        <View style={styles.searchBox}>
          <Text style={styles.searchIcon}>⌕</Text>

          <TextInput
            style={styles.searchInput}
            placeholder="Search subject or tutor"
            placeholderTextColor="#94A3B8"
          />
        </View>

        {/* Filters */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filters}
        >
          {filters.map((filter) => (
            <TouchableOpacity key={filter} style={styles.filterButton}>
              <Text style={styles.filterText}>{filter}</Text>
              <Text style={styles.filterArrow}>⌄</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Results */}
        <View style={styles.resultsHeader}>
          <Text style={styles.resultsTitle}>Tutors near you</Text>

          <Text style={styles.resultCount}>24 tutors</Text>
        </View>

        {tutors.map((tutor) => (
          <TouchableOpacity
            key={tutor.name}
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

              <Text style={styles.subject}>{tutor.subject}</Text>

              <Text style={styles.details}>
                {tutor.experience} • {tutor.location}
              </Text>

              <View style={styles.ratingRow}>
                <Text style={styles.star}>★</Text>
                <Text style={styles.rating}>4.8</Text>

                <Text style={styles.reviews}>
                  (32 reviews)
                </Text>
              </View>
            </View>

            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>
        ))}
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

  searchBox: {
    height: 54,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginTop: 10,
    marginBottom: 15,
  },

  searchIcon: {
    fontSize: 23,
    color: '#64748B',
    marginRight: 10,
  },

  searchInput: {
    flex: 1,
    fontSize: 15,
    color: '#0F172A',
  },

  filters: {
    gap: 10,
    paddingBottom: 25,
  },

  filterButton: {
    height: 40,
    paddingHorizontal: 14,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CBD5E1',
    flexDirection: 'row',
    alignItems: 'center',
  },

  filterText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#334155',
  },

  filterArrow: {
    fontSize: 15,
    color: '#64748B',
    marginLeft: 7,
  },

  resultsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },

  resultsTitle: {
    fontSize: 19,
    fontWeight: '700',
    color: '#0F172A',
  },

  resultCount: {
    fontSize: 13,
    color: '#64748B',
  },

  tutorCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },

  avatar: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: '#DBEAFE',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },

  avatarText: {
    fontSize: 21,
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

  subject: {
    fontSize: 14,
    color: '#475569',
    marginBottom: 4,
  },

  details: {
    fontSize: 12,
    color: '#64748B',
    marginBottom: 7,
  },

  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  star: {
    fontSize: 13,
    color: '#F59E0B',
  },

  rating: {
    fontSize: 12,
    fontWeight: '700',
    color: '#334155',
    marginLeft: 4,
  },

  reviews: {
    fontSize: 12,
    color: '#94A3B8',
    marginLeft: 4,
  },

  arrow: {
    fontSize: 28,
    color: '#94A3B8',
    alignSelf: 'center',
  },
});