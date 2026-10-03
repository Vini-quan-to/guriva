import { router } from 'expo-router';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function StudentHistoryScreen() {
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

          <Text style={styles.headerTitle}>Learning History</Text>

          <View style={styles.headerSpace} />
        </View>

        <Text style={styles.subtitle}>
          View your previous classes, tutors and payments.
        </Text>

        {/* Summary */}
        <View style={styles.summaryRow}>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryNumber}>12</Text>
            <Text style={styles.summaryLabel}>Classes</Text>
          </View>

          <View style={styles.summaryCard}>
            <Text style={styles.summaryNumber}>₹6,000</Text>
            <Text style={styles.summaryLabel}>Spent</Text>
          </View>

          <View style={styles.summaryCard}>
            <Text style={styles.summaryNumber}>2</Text>
            <Text style={styles.summaryLabel}>Tutors</Text>
          </View>
        </View>

        {/* Recent classes */}
        <Text style={styles.sectionTitle}>Recent classes</Text>

        <View style={styles.historyCard}>
          <View style={styles.dateBox}>
            <Text style={styles.dateDay}>08</Text>
            <Text style={styles.dateMonth}>OCT</Text>
          </View>

          <View style={styles.classInfo}>
            <Text style={styles.classTitle}>Mathematics</Text>
            <Text style={styles.tutorName}>Aarav Sharma</Text>
            <Text style={styles.classDetails}>
              5:00 PM • Online • 1 hour
            </Text>
          </View>

          <Text style={styles.amount}>₹500</Text>
        </View>

        <View style={styles.historyCard}>
          <View style={styles.dateBox}>
            <Text style={styles.dateDay}>05</Text>
            <Text style={styles.dateMonth}>OCT</Text>
          </View>

          <View style={styles.classInfo}>
            <Text style={styles.classTitle}>Mathematics</Text>
            <Text style={styles.tutorName}>Aarav Sharma</Text>
            <Text style={styles.classDetails}>
              5:00 PM • Online • 1 hour
            </Text>
          </View>

          <Text style={styles.amount}>₹500</Text>
        </View>

        <View style={styles.historyCard}>
          <View style={styles.dateBox}>
            <Text style={styles.dateDay}>02</Text>
            <Text style={styles.dateMonth}>OCT</Text>
          </View>

          <View style={styles.classInfo}>
            <Text style={styles.classTitle}>Physics</Text>
            <Text style={styles.tutorName}>Riya Mehta</Text>
            <Text style={styles.classDetails}>
              6:00 PM • Online • 1 hour
            </Text>
          </View>

          <Text style={styles.amount}>₹450</Text>
        </View>

        {/* Reviews */}
        <Text style={styles.sectionTitle}>Your reviews</Text>

        <View style={styles.reviewCard}>
          <View style={styles.reviewHeader}>
            <View style={styles.reviewAvatar}>
              <Text style={styles.reviewAvatarText}>A</Text>
            </View>

            <View style={styles.reviewInfo}>
              <Text style={styles.reviewTutor}>
                Aarav Sharma
              </Text>

              <Text style={styles.reviewDate}>
                Reviewed on 08 Oct
              </Text>
            </View>

            <Text style={styles.rating}>★★★★★</Text>
          </View>

          <Text style={styles.reviewText}>
            Great explanation and very helpful with difficult
            Mathematics problems.
          </Text>
        </View>

        <View style={styles.reviewCard}>
          <View style={styles.reviewHeader}>
            <View style={styles.reviewAvatar}>
              <Text style={styles.reviewAvatarText}>R</Text>
            </View>

            <View style={styles.reviewInfo}>
              <Text style={styles.reviewTutor}>
                Riya Mehta
              </Text>

              <Text style={styles.reviewDate}>
                Reviewed on 02 Oct
              </Text>
            </View>

            <Text style={styles.rating}>★★★★☆</Text>
          </View>

          <Text style={styles.reviewText}>
            Good teaching style and clear explanations.
          </Text>
        </View>

        {/* Find another tutor */}
        <TouchableOpacity
          style={styles.findButton}
          onPress={() => router.push('/find-tutor')}
        >
          <Text style={styles.findButtonText}>
            Find Another Tutor
          </Text>
        </TouchableOpacity>

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

  subtitle: {
    fontSize: 14,
    lineHeight: 21,
    color: '#64748B',
    marginTop: 8,
    marginBottom: 22,
  },

  summaryRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 25,
  },

  summaryCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingVertical: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },

  summaryNumber: {
    fontSize: 17,
    fontWeight: '800',
    color: '#0F172A',
    marginBottom: 4,
  },

  summaryLabel: {
    fontSize: 11,
    color: '#64748B',
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 12,
    marginTop: 6,
  },

  historyCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 12,
  },

  dateBox: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: '#EFF6FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  dateDay: {
    fontSize: 18,
    fontWeight: '800',
    color: '#2563EB',
  },

  dateMonth: {
    fontSize: 9,
    fontWeight: '700',
    color: '#64748B',
  },

  classInfo: {
    flex: 1,
  },

  classTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 3,
  },

  tutorName: {
    fontSize: 12,
    color: '#475569',
    marginBottom: 3,
  },

  classDetails: {
    fontSize: 11,
    color: '#94A3B8',
  },

  amount: {
    fontSize: 13,
    fontWeight: '700',
    color: '#0F172A',
    marginLeft: 8,
  },

  reviewCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 12,
  },

  reviewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  reviewAvatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#DBEAFE',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },

  reviewAvatarText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#2563EB',
  },

  reviewInfo: {
    flex: 1,
  },

  reviewTutor: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 3,
  },

  reviewDate: {
    fontSize: 11,
    color: '#94A3B8',
  },

  rating: {
    fontSize: 12,
    color: '#F59E0B',
  },

  reviewText: {
    fontSize: 13,
    lineHeight: 19,
    color: '#64748B',
    marginTop: 12,
  },

  findButton: {
    height: 52,
    borderRadius: 12,
    backgroundColor: '#2563EB',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 18,
  },

  findButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },

  bottomSpace: {
    height: 25,
  },
});
