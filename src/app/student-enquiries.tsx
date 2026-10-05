import { router } from 'expo-router';
import { useMemo } from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
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

export default function StudentEnquiriesScreen() {
  const { user } = useAuth();

  const {
    enquiries,
    isLoading,
  } = useMarketplace();

  const studentEnquiries = useMemo(() => {
    if (!user?.email) {
      return [];
    }

    return enquiries
      .filter(
        (enquiry) =>
          enquiry.studentEmail.toLowerCase() ===
          user.email.toLowerCase()
      )
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() -
          new Date(a.createdAt).getTime()
      );
  }, [enquiries, user?.email]);

  if (isLoading) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator
            size="small"
            color={colors.teal}
          />

          <Text style={styles.loadingText}>
            Loading enquiries...
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* HEADER */}

        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
            activeOpacity={0.75}
          >
            <Text style={styles.back}>‹</Text>
          </TouchableOpacity>

          <Text style={styles.headerTitle}>
            My Enquiries
          </Text>

          <View style={styles.headerSpace} />
        </View>

        {/* INTRO */}

        <View style={styles.introCard}>
          <View style={styles.introIcon}>
            <Text style={styles.introIconText}>
              💬
            </Text>
          </View>

          <View style={styles.introContent}>
            <Text style={styles.introTitle}>
              Tutor enquiries
            </Text>

            <Text style={styles.introText}>
              Track the requests you have sent to
              tutors and see their responses.
            </Text>
          </View>
        </View>

        {/* SUMMARY */}

        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>
              {studentEnquiries.length}
            </Text>

            <Text style={styles.statLabel}>
              Total
            </Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statNumber}>
              {
                studentEnquiries.filter(
                  (enquiry) =>
                    enquiry.status === 'pending'
                ).length
              }
            </Text>

            <Text style={styles.statLabel}>
              Pending
            </Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statNumber}>
              {
                studentEnquiries.filter(
                  (enquiry) =>
                    enquiry.status === 'accepted'
                ).length
              }
            </Text>

            <Text style={styles.statLabel}>
              Accepted
            </Text>
          </View>
        </View>

        {/* TITLE */}

        <Text style={styles.sectionTitle}>
          Your Enquiries
        </Text>

        {/* EMPTY STATE */}

        {studentEnquiries.length === 0 ? (
          <View style={styles.emptyCard}>
            <Text style={styles.emptyIcon}>
              💬
            </Text>

            <Text style={styles.emptyTitle}>
              No enquiries yet
            </Text>

            <Text style={styles.emptyText}>
              When you contact a tutor, your enquiry
              and its status will appear here.
            </Text>

            <TouchableOpacity
              style={styles.findButton}
              onPress={() =>
                router.push('/find-tutor')
              }
              activeOpacity={0.85}
            >
              <Text style={styles.findButtonText}>
                Find a Tutor
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          studentEnquiries.map((enquiry) => {
            const initials =
              enquiry.tutorName
                .split(' ')
                .map((name) => name[0])
                .join('')
                .slice(0, 2)
                .toUpperCase();

            return (
              <View
                key={enquiry.id}
                style={styles.enquiryCard}
              >
                {/* TOP */}

                <View style={styles.topRow}>
                  <View style={styles.avatar}>
                    <Text style={styles.avatarText}>
                      {initials}
                    </Text>
                  </View>

                  <View style={styles.tutorInfo}>
                    <Text style={styles.tutorName}>
                      {enquiry.tutorName}
                    </Text>

                    <Text style={styles.subject}>
                      {enquiry.subject}
                    </Text>
                  </View>

                  <View
                    style={[
                      styles.statusBadge,
                      enquiry.status ===
                        'accepted' &&
                        styles.acceptedBadge,
                      enquiry.status ===
                        'rejected' &&
                        styles.rejectedBadge,
                      enquiry.status ===
                        'cancelled' &&
                        styles.cancelledBadge,
                      enquiry.status ===
                        'pending' &&
                        styles.pendingBadge,
                    ]}
                  >
                    <Text
                      style={[
                        styles.statusText,
                        enquiry.status ===
                          'accepted' &&
                          styles.acceptedText,
                        enquiry.status ===
                          'rejected' &&
                          styles.rejectedText,
                        enquiry.status ===
                          'cancelled' &&
                          styles.cancelledText,
                        enquiry.status ===
                          'pending' &&
                          styles.pendingText,
                      ]}
                    >
                      {enquiry.status}
                    </Text>
                  </View>
                </View>

                {/* MESSAGE */}

                <View style={styles.messageBox}>
                  <Text style={styles.messageLabel}>
                    Your message
                  </Text>

                  <Text style={styles.message}>
                    {enquiry.message}
                  </Text>
                </View>

                {/* FOOTER */}

                <View style={styles.footerRow}>
                  <Text style={styles.enquiryId}>
                    {enquiry.id}
                  </Text>

                  <Text style={styles.date}>
                    {new Date(
                      enquiry.createdAt
                    ).toLocaleDateString()}
                  </Text>
                </View>
              </View>
            );
          })
        )}

        {/* FIND MORE */}

        {studentEnquiries.length > 0 ? (
          <TouchableOpacity
            style={styles.bottomButton}
            onPress={() =>
              router.push('/find-tutor')
            }
            activeOpacity={0.85}
          >
            <Text style={styles.bottomButtonText}>
              Find Another Tutor
            </Text>
          </TouchableOpacity>
        ) : null}
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

  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  loadingText: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 10,
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

  introCard: {
    backgroundColor: colors.navy,
    borderRadius: radius.xl,
    padding: spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },

  introIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.teal,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  introIconText: {
    fontSize: 21,
  },

  introContent: {
    flex: 1,
  },

  introTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: colors.white,
  },

  introText: {
    fontSize: 10,
    lineHeight: 15,
    color: '#C9D8E5',
    marginTop: 3,
  },

  statsRow: {
    flexDirection: 'row',
    gap: 9,
    marginBottom: spacing.xl,
  },

  statCard: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    paddingVertical: 14,
    alignItems: 'center',
  },

  statNumber: {
    fontSize: 19,
    fontWeight: '900',
    color: colors.navy,
  },

  statLabel: {
    fontSize: 9,
    color: colors.textSecondary,
    marginTop: 3,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: colors.navy,
    marginBottom: 11,
  },

  enquiryCard: {
    backgroundColor: colors.white,
    borderRadius: radius.xl,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
    marginBottom: spacing.md,
  },

  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.lightTeal,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 11,
  },

  avatarText: {
    fontSize: 14,
    fontWeight: '900',
    color: colors.navy,
  },

  tutorInfo: {
    flex: 1,
  },

  tutorName: {
    fontSize: 14,
    fontWeight: '800',
    color: colors.navy,
  },

  subject: {
    fontSize: 10,
    color: colors.textSecondary,
    marginTop: 3,
  },

  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: radius.round,
  },

  pendingBadge: {
    backgroundColor: colors.warningLight,
  },

  acceptedBadge: {
    backgroundColor: colors.successLight,
  },

  rejectedBadge: {
    backgroundColor: colors.errorLight,
  },

  cancelledBadge: {
    backgroundColor: '#EEF1F4',
  },

  statusText: {
    fontSize: 9,
    fontWeight: '800',
    textTransform: 'capitalize',
  },

  pendingText: {
    color: colors.warning,
  },

  acceptedText: {
    color: colors.success,
  },

  rejectedText: {
    color: colors.error,
  },

  cancelledText: {
    color: colors.textSecondary,
  },

  messageBox: {
    backgroundColor: colors.background,
    borderRadius: radius.md,
    padding: 12,
    marginTop: 14,
  },

  messageLabel: {
    fontSize: 9,
    fontWeight: '700',
    color: colors.textMuted,
    marginBottom: 5,
  },

  message: {
    fontSize: 11,
    lineHeight: 17,
    color: colors.textSecondary,
  },

  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },

  enquiryId: {
    fontSize: 8,
    color: colors.textMuted,
  },

  date: {
    fontSize: 9,
    color: colors.textMuted,
  },

  emptyCard: {
    backgroundColor: colors.white,
    borderRadius: radius.xl,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.xxl,
    alignItems: 'center',
  },

  emptyIcon: {
    fontSize: 32,
  },

  emptyTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: colors.navy,
    marginTop: 10,
  },

  emptyText: {
    fontSize: 11,
    lineHeight: 17,
    color: colors.textSecondary,
    textAlign: 'center',
    maxWidth: 280,
    marginTop: 5,
  },

  findButton: {
    backgroundColor: colors.teal,
    borderRadius: radius.md,
    paddingHorizontal: 18,
    paddingVertical: 10,
    marginTop: 15,
  },

  findButtonText: {
    fontSize: 11,
    fontWeight: '800',
    color: colors.navy,
  },

  bottomButton: {
    minHeight: 50,
    borderRadius: radius.lg,
    backgroundColor: colors.teal,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 6,
  },

  bottomButtonText: {
    fontSize: 13,
    fontWeight: '800',
    color: colors.navy,
  },
});