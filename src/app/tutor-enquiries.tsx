import { router } from 'expo-router';
import { useMemo } from 'react';
import {
  ActivityIndicator,
  Alert,
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

export default function TutorEnquiriesScreen() {
  const { user } = useAuth();

  const {
    enquiries,
    isLoading,
    updateEnquiryStatus,
  } = useMarketplace();

  const tutorEnquiries = useMemo(() => {
    if (!user?.email) {
      return [];
    }

    return enquiries
      .filter(
        (enquiry) =>
          enquiry.tutorEmail.toLowerCase() ===
          user.email.toLowerCase()
      )
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() -
          new Date(a.createdAt).getTime()
      );
  }, [enquiries, user?.email]);

  const handleAccept = async (
    enquiryId: string
  ) => {
    try {
      await updateEnquiryStatus(
        enquiryId,
        'accepted'
      );

      Alert.alert(
        'Enquiry accepted',
        'The student enquiry has been accepted.'
      );
    } catch (error) {
      Alert.alert(
        'Unable to update',
        'Something went wrong while accepting this enquiry.'
      );
    }
  };

  const handleReject = async (
    enquiryId: string
  ) => {
    try {
      await updateEnquiryStatus(
        enquiryId,
        'rejected'
      );

      Alert.alert(
        'Enquiry rejected',
        'The student enquiry has been rejected.'
      );
    } catch (error) {
      Alert.alert(
        'Unable to update',
        'Something went wrong while rejecting this enquiry.'
      );
    }
  };

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

  const pendingCount =
    tutorEnquiries.filter(
      (enquiry) =>
        enquiry.status === 'pending'
    ).length;

  const acceptedCount =
    tutorEnquiries.filter(
      (enquiry) =>
        enquiry.status === 'accepted'
    ).length;

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
            <Text style={styles.back}>
              ‹
            </Text>
          </TouchableOpacity>

          <Text style={styles.headerTitle}>
            Student Enquiries
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
              Manage your enquiries
            </Text>

            <Text style={styles.introText}>
              Review students who are interested in
              learning with you.
            </Text>
          </View>
        </View>

        {/* STATS */}

        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>
              {tutorEnquiries.length}
            </Text>

            <Text style={styles.statLabel}>
              Total
            </Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statNumber}>
              {pendingCount}
            </Text>

            <Text style={styles.statLabel}>
              Pending
            </Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statNumber}>
              {acceptedCount}
            </Text>

            <Text style={styles.statLabel}>
              Accepted
            </Text>
          </View>
        </View>

        {/* TITLE */}

        <Text style={styles.sectionTitle}>
          Enquiries
        </Text>

        {/* EMPTY */}

        {tutorEnquiries.length === 0 ? (
          <View style={styles.emptyCard}>
            <Text style={styles.emptyIcon}>
              📭
            </Text>

            <Text style={styles.emptyTitle}>
              No enquiries yet
            </Text>

            <Text style={styles.emptyText}>
              When students contact you through
              Guriva, their enquiries will appear
              here.
            </Text>
          </View>
        ) : (
          tutorEnquiries.map((enquiry) => {
            const initials =
              enquiry.studentName
                .split(' ')
                .map((name) => name[0])
                .join('')
                .slice(0, 2)
                .toUpperCase();

            const isPending =
              enquiry.status === 'pending';

            return (
              <View
                key={enquiry.id}
                style={styles.enquiryCard}
              >
                {/* STUDENT */}

                <View style={styles.topRow}>
                  <View style={styles.avatar}>
                    <Text style={styles.avatarText}>
                      {initials}
                    </Text>
                  </View>

                  <View style={styles.studentInfo}>
                    <Text style={styles.studentName}>
                      {enquiry.studentName}
                    </Text>

                    <Text style={styles.subject}>
                      Interested in{' '}
                      {enquiry.subject}
                    </Text>
                  </View>

                  <View
                    style={[
                      styles.statusBadge,
                      enquiry.status ===
                        'pending' &&
                        styles.pendingBadge,
                      enquiry.status ===
                        'accepted' &&
                        styles.acceptedBadge,
                      enquiry.status ===
                        'rejected' &&
                        styles.rejectedBadge,
                      enquiry.status ===
                        'cancelled' &&
                        styles.cancelledBadge,
                    ]}
                  >
                    <Text
                      style={[
                        styles.statusText,
                        enquiry.status ===
                          'pending' &&
                          styles.pendingText,
                        enquiry.status ===
                          'accepted' &&
                          styles.acceptedText,
                        enquiry.status ===
                          'rejected' &&
                          styles.rejectedText,
                        enquiry.status ===
                          'cancelled' &&
                          styles.cancelledText,
                      ]}
                    >
                      {enquiry.status}
                    </Text>
                  </View>
                </View>

                {/* MESSAGE */}

                <View style={styles.messageBox}>
                  <Text style={styles.messageLabel}>
                    Student message
                  </Text>

                  <Text style={styles.message}>
                    {enquiry.message}
                  </Text>
                </View>

                {/* CONTACT */}

                <View style={styles.contactBox}>
                  <Text style={styles.contactLabel}>
                    Student email
                  </Text>

                  <Text style={styles.contactValue}>
                    {enquiry.studentEmail}
                  </Text>
                </View>

                {/* ACTIONS */}

                {isPending ? (
                  <View style={styles.actionsRow}>
                    <TouchableOpacity
                      style={styles.rejectButton}
                      onPress={() =>
                        handleReject(
                          enquiry.id
                        )
                      }
                      activeOpacity={0.8}
                    >
                      <Text
                        style={
                          styles.rejectText
                        }
                      >
                        Reject
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={styles.acceptButton}
                      onPress={() =>
                        handleAccept(
                          enquiry.id
                        )
                      }
                      activeOpacity={0.8}
                    >
                      <Text
                        style={
                          styles.acceptText
                        }
                      >
                        Accept
                      </Text>
                    </TouchableOpacity>
                  </View>
                ) : null}

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

  studentInfo: {
    flex: 1,
  },

  studentName: {
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

  contactBox: {
    marginTop: 11,
  },

  contactLabel: {
    fontSize: 8,
    color: colors.textMuted,
  },

  contactValue: {
    fontSize: 10,
    color: colors.textSecondary,
    marginTop: 2,
  },

  actionsRow: {
    flexDirection: 'row',
    gap: 9,
    marginTop: 14,
  },

  rejectButton: {
    flex: 1,
    minHeight: 43,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.error,
    alignItems: 'center',
    justifyContent: 'center',
  },

  rejectText: {
    fontSize: 11,
    fontWeight: '800',
    color: colors.error,
  },

  acceptButton: {
    flex: 1,
    minHeight: 43,
    borderRadius: radius.md,
    backgroundColor: colors.teal,
    alignItems: 'center',
    justifyContent: 'center',
  },

  acceptText: {
    fontSize: 11,
    fontWeight: '800',
    color: colors.navy,
  },

  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: colors.border,
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
});