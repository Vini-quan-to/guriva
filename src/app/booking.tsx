import { router } from 'expo-router';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function BookingScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Text style={styles.back}>‹</Text>
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Book a Tutor</Text>

          <View style={styles.headerSpace} />
        </View>

        {/* Tutor */}
        <View style={styles.tutorCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>A</Text>
          </View>

          <View>
            <Text style={styles.tutorName}>Aarav Sharma</Text>
            <Text style={styles.tutorSubject}>Mathematics Tutor</Text>
          </View>
        </View>

        {/* Form */}
        <Text style={styles.sectionTitle}>What do you need help with?</Text>

        <TextInput
          style={styles.input}
          placeholder="e.g. Class 10 Mathematics"
          placeholderTextColor="#94A3B8"
        />

        <Text style={styles.sectionTitle}>Preferred mode</Text>

        <View style={styles.modeRow}>
          <TouchableOpacity style={styles.modeButton}>
            <Text style={styles.modeText}>Online</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.modeButton}>
            <Text style={styles.modeText}>Home Tuition</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Message to tutor</Text>

        <TextInput
          style={styles.messageInput}
          placeholder="Tell the tutor about your learning needs..."
          placeholderTextColor="#94A3B8"
          multiline
          textAlignVertical="top"
        />

        {/* Price */}
        <View style={styles.priceCard}>
          <Text style={styles.priceLabel}>Starting from</Text>
          <Text style={styles.price}>₹500 / hour</Text>
        </View>

        {/* Action */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/payment')}
        >
          <Text style={styles.buttonText}>
            Continue to Payment
          </Text>
        </TouchableOpacity>

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

  tutorCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 28,
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

  tutorName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 4,
  },

  tutorSubject: {
    fontSize: 14,
    color: '#64748B',
  },

  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#334155',
    marginBottom: 9,
    marginTop: 8,
  },

  input: {
    height: 52,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 12,
    paddingHorizontal: 15,
    fontSize: 15,
    color: '#0F172A',
  },

  modeRow: {
    flexDirection: 'row',
    gap: 10,
  },

  modeButton: {
    flex: 1,
    height: 48,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#2563EB',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },

  modeText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2563EB',
  },

  messageInput: {
    height: 100,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 12,
    padding: 15,
    fontSize: 15,
    color: '#0F172A',
  },

  priceCard: {
    backgroundColor: '#EFF6FF',
    borderRadius: 14,
    padding: 15,
    marginTop: 18,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  priceLabel: {
    fontSize: 14,
    color: '#475569',
  },

  price: {
    fontSize: 17,
    fontWeight: '800',
    color: '#2563EB',
  },

  button: {
    height: 55,
    borderRadius: 14,
    backgroundColor: '#2563EB',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    fontSize: 17,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});