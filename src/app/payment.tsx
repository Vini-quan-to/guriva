import { router } from 'expo-router';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function PaymentScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Text style={styles.back}>‹</Text>
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Payment</Text>

          <View style={styles.headerSpace} />
        </View>

        {/* Booking summary */}
        <View style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>Booking Summary</Text>

          <View style={styles.row}>
            <Text style={styles.label}>Tutor</Text>
            <Text style={styles.value}>Aarav Sharma</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Subject</Text>
            <Text style={styles.value}>Mathematics</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Mode</Text>
            <Text style={styles.value}>Online</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.row}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.total}>₹500</Text>
          </View>
        </View>

        {/* Payment method */}
        <Text style={styles.sectionTitle}>Payment method</Text>

        <TouchableOpacity style={styles.paymentOption}>
          <View style={styles.paymentIcon}>
            <Text style={styles.paymentIconText}>₹</Text>
          </View>

          <View style={styles.paymentInfo}>
            <Text style={styles.paymentTitle}>UPI</Text>
            <Text style={styles.paymentSubtitle}>
              Pay securely using UPI
            </Text>
          </View>

          <View style={styles.radioSelected}>
            <View style={styles.radioDot} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.paymentOption}>
          <View style={styles.paymentIcon}>
            <Text style={styles.paymentIconText}>▣</Text>
          </View>

          <View style={styles.paymentInfo}>
            <Text style={styles.paymentTitle}>Card</Text>
            <Text style={styles.paymentSubtitle}>
              Credit or debit card
            </Text>
          </View>

          <View style={styles.radio} />
        </TouchableOpacity>

        {/* Pay button */}
        <View style={styles.bottomSection}>
          <Text style={styles.secureText}>
            🔒 Secure payment
          </Text>

          <TouchableOpacity
            style={styles.payButton}
            onPress={() => router.push('/student-home')}
          >
            <Text style={styles.payButtonText}>
              Pay ₹500
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },

  container: {
    flex: 1,
    paddingHorizontal: 20,
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

  summaryCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginTop: 20,
    marginBottom: 28,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },

  summaryTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 20,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 14,
  },

  label: {
    fontSize: 14,
    color: '#64748B',
  },

  value: {
    fontSize: 14,
    fontWeight: '600',
    color: '#334155',
  },

  divider: {
    height: 1,
    backgroundColor: '#E2E8F0',
    marginVertical: 6,
  },

  totalLabel: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0F172A',
  },

  total: {
    fontSize: 20,
    fontWeight: '800',
    color: '#2563EB',
  },

  sectionTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 12,
  },

  paymentOption: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },

  paymentIcon: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: '#EFF6FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  paymentIconText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2563EB',
  },

  paymentInfo: {
    flex: 1,
  },

  paymentTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 3,
  },

  paymentSubtitle: {
    fontSize: 12,
    color: '#94A3B8',
  },

  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#CBD5E1',
  },

  radioSelected: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#2563EB',
    alignItems: 'center',
    justifyContent: 'center',
  },

  radioDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#2563EB',
  },

  bottomSection: {
    marginTop: 'auto',
    paddingBottom: 20,
  },

  secureText: {
    textAlign: 'center',
    fontSize: 13,
    color: '#64748B',
    marginBottom: 12,
  },

  payButton: {
    height: 56,
    borderRadius: 14,
    backgroundColor: '#2563EB',
    alignItems: 'center',
    justifyContent: 'center',
  },

  payButtonText: {
    fontSize: 17,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});