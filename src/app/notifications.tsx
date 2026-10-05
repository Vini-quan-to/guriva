import { router } from 'expo-router';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, radius, spacing } from '../theme';

const notifications = [
  {
    id: 1,
    type: 'booking',
    title: 'Booking Confirmed',
    message:
      'Your Mathematics class with Aarav Sharma has been confirmed.',
    time: '10 min ago',
    unread: true,
  },
  {
    id: 2,
    type: 'payment',
    title: 'Payment Successful',
    message:
      'Your payment of ₹500 for the Mathematics class was successful.',
    time: '15 min ago',
    unread: true,
  },
  {
    id: 3,
    type: 'tutor',
    title: 'Tutor Accepted Your Enquiry',
    message:
      'Aarav Sharma has accepted your enquiry. You can now book a class.',
    time: '2 hours ago',
    unread: false,
  },
  {
    id: 4,
    type: 'reminder',
    title: 'Upcoming Class',
    message:
      'Your Physics class with Priya Mehta starts tomorrow at 6:00 PM.',
    time: 'Yesterday',
    unread: false,
  },
];

function getNotificationIcon(type: string) {
  if (type === 'booking') return '✓';
  if (type === 'payment') return '₹';
  if (type === 'tutor') return 'T';
  return '⏰';
}

export default function NotificationsScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.backButton}
          >
            <Text style={styles.back}>‹</Text>
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Notifications</Text>

          <TouchableOpacity style={styles.markButton}>
            <Text style={styles.markText}>Mark all</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.subtitle}>
          Stay updated with your Guriva activities.
        </Text>

        {/* Unread summary */}
        <View style={styles.summaryCard}>
          <View style={styles.summaryIcon}>
            <Text style={styles.summaryIconText}>!</Text>
          </View>

          <View style={styles.summaryContent}>
            <Text style={styles.summaryTitle}>
              2 unread notifications
            </Text>

            <Text style={styles.summaryText}>
              You have new updates waiting for you.
            </Text>
          </View>
        </View>

        {/* Notifications */}
        <Text style={styles.sectionTitle}>Recent</Text>

        {notifications.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.notificationCard,
              item.unread && styles.unreadCard,
            ]}
            activeOpacity={0.8}
          >
            <View
              style={[
                styles.iconContainer,
                item.type === 'payment'
                  ? styles.paymentIcon
                  : item.type === 'reminder'
                    ? styles.reminderIcon
                    : styles.defaultIcon,
              ]}
            >
              <Text style={styles.iconText}>
                {getNotificationIcon(item.type)}
              </Text>
            </View>

            <View style={styles.notificationContent}>
              <View style={styles.titleRow}>
                <Text style={styles.notificationTitle}>
                  {item.title}
                </Text>

                {item.unread && <View style={styles.unreadDot} />}
              </View>

              <Text style={styles.message}>
                {item.message}
              </Text>

              <Text style={styles.time}>{item.time}</Text>
            </View>
          </TouchableOpacity>
        ))}

        {/* Empty state / footer */}
        <View style={styles.footerCard}>
          <View style={styles.footerIcon}>
            <Text style={styles.footerIconText}>✓</Text>
          </View>

          <Text style={styles.footerTitle}>
            You're all caught up
          </Text>

          <Text style={styles.footerText}>
            We'll notify you when there is something new.
          </Text>
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
  },

  backButton: {
    width: 36,
    height: 36,
    justifyContent: 'center',
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

  markButton: {
    paddingVertical: 5,
  },

  markText: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.blue,
  },

  subtitle: {
    fontSize: 13,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: 4,
    marginBottom: 20,
  },

  summaryCard: {
    backgroundColor: colors.lightTeal,
    borderRadius: radius.xl,
    padding: spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
  },

  summaryIcon: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: colors.teal,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  summaryIconText: {
    fontSize: 19,
    fontWeight: '900',
    color: colors.navy,
  },

  summaryContent: {
    flex: 1,
  },

  summaryTitle: {
    fontSize: 13,
    fontWeight: '800',
    color: colors.navy,
  },

  summaryText: {
    fontSize: 10,
    color: colors.textSecondary,
    marginTop: 3,
  },

  sectionTitle: {
    fontSize: 17,
    fontWeight: '800',
    color: colors.navy,
    marginTop: 23,
    marginBottom: 11,
  },

  notificationCard: {
    backgroundColor: colors.white,
    borderRadius: radius.xl,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
    flexDirection: 'row',
    marginBottom: 10,
  },

  unreadCard: {
    borderColor: colors.teal,
    backgroundColor: colors.white,
  },

  iconContainer: {
    width: 45,
    height: 45,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  defaultIcon: {
    backgroundColor: colors.lightBlue,
  },

  paymentIcon: {
    backgroundColor: colors.lightTeal,
  },

  reminderIcon: {
    backgroundColor: colors.warningLight,
  },

  iconText: {
    fontSize: 17,
    fontWeight: '800',
    color: colors.blue,
  },

  notificationContent: {
    flex: 1,
  },

  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  notificationTitle: {
    flex: 1,
    fontSize: 13,
    fontWeight: '800',
    color: colors.navy,
  },

  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.teal,
    marginLeft: 7,
  },

  message: {
    fontSize: 11,
    lineHeight: 16,
    color: colors.textSecondary,
    marginTop: 5,
  },

  time: {
    fontSize: 9,
    color: colors.textMuted,
    marginTop: 7,
  },

  footerCard: {
    alignItems: 'center',
    paddingVertical: 24,
    marginTop: 5,
  },

  footerIcon: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: colors.lightTeal,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 9,
  },

  footerIconText: {
    fontSize: 19,
    fontWeight: '900',
    color: colors.success,
  },

  footerTitle: {
    fontSize: 13,
    fontWeight: '800',
    color: colors.navy,
  },

  footerText: {
    fontSize: 10,
    color: colors.textMuted,
    marginTop: 4,
    textAlign: 'center',
  },

  bottomSpace: {
    height: 20,
  },
});