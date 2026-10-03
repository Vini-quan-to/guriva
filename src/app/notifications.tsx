import { router } from 'expo-router';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function NotificationsScreen() {
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

          <Text style={styles.headerTitle}>
            Notifications
          </Text>

          <View style={styles.headerSpace} />
        </View>

        <Text style={styles.subtitle}>
          Stay updated about your classes, bookings and payments.
        </Text>

        {/* Today */}
        <Text style={styles.sectionTitle}>Today</Text>

        <TouchableOpacity style={styles.notificationCard}>
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>✓</Text>
          </View>

          <View style={styles.notificationInfo}>
            <Text style={styles.notificationTitle}>
              Booking confirmed
            </Text>

            <Text style={styles.notificationText}>
              Your Mathematics class with Aarav Sharma has been
              confirmed.
            </Text>

            <Text style={styles.time}>
              10 minutes ago
            </Text>
          </View>

          <View style={styles.unreadDot} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.notificationCard}>
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>₹</Text>
          </View>

          <View style={styles.notificationInfo}>
            <Text style={styles.notificationTitle}>
              Payment successful
            </Text>

            <Text style={styles.notificationText}>
              Your payment of ₹500 was completed successfully.
            </Text>

            <Text style={styles.time}>
              1 hour ago
            </Text>
          </View>

          <View style={styles.unreadDot} />
        </TouchableOpacity>

        {/* Yesterday */}
        <Text style={styles.sectionTitle}>Yesterday</Text>

        <TouchableOpacity style={styles.notificationCard}>
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>A</Text>
          </View>

          <View style={styles.notificationInfo}>
            <Text style={styles.notificationTitle}>
              Tutor responded
            </Text>

            <Text style={styles.notificationText}>
              Riya Mehta accepted your Physics enquiry.
            </Text>

            <Text style={styles.time}>
              Yesterday, 6:30 PM
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.notificationCard}>
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>◷</Text>
          </View>

          <View style={styles.notificationInfo}>
            <Text style={styles.notificationTitle}>
              Upcoming class reminder
            </Text>

            <Text style={styles.notificationText}>
              Your Mathematics class is scheduled for 5:00 PM.
            </Text>

            <Text style={styles.time}>
              Yesterday, 4:00 PM
            </Text>
          </View>
        </TouchableOpacity>

        {/* Earlier */}
        <Text style={styles.sectionTitle}>Earlier</Text>

        <TouchableOpacity style={styles.notificationCard}>
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>★</Text>
          </View>

          <View style={styles.notificationInfo}>
            <Text style={styles.notificationTitle}>
              Leave a review
            </Text>

            <Text style={styles.notificationText}>
              How was your recent class with Aarav Sharma?
            </Text>

            <Text style={styles.time}>
              3 days ago
            </Text>
          </View>
        </TouchableOpacity>

        {/* Empty state information */}
        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>
            Notifications will appear here
          </Text>

          <Text style={styles.infoText}>
            Guriva will notify you about tutor responses,
            bookings, payments, classes and other important
            updates.
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
    marginBottom: 24,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 12,
    marginTop: 8,
  },

  notificationCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 10,
  },

  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#EFF6FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  icon: {
    fontSize: 16,
    fontWeight: '800',
    color: '#2563EB',
  },

  notificationInfo: {
    flex: 1,
  },

  notificationTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 4,
  },

  notificationText: {
    fontSize: 12,
    lineHeight: 18,
    color: '#64748B',
  },

  time: {
    fontSize: 10,
    color: '#94A3B8',
    marginTop: 6,
  },

  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#2563EB',
    marginTop: 5,
    marginLeft: 8,
  },

  infoCard: {
    backgroundColor: '#EFF6FF',
    borderRadius: 14,
    padding: 16,
    marginTop: 20,
  },

  infoTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1E40AF',
    marginBottom: 6,
  },

  infoText: {
    fontSize: 12,
    lineHeight: 19,
    color: '#475569',
  },

  bottomSpace: {
    height: 25,
  },
});
