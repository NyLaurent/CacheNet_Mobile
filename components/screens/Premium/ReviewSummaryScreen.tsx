import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigation/types';

type ReviewSummaryScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ReviewSummary'>;                                              

const ReviewSummaryScreen = () => {
  const navigation = useNavigation<ReviewSummaryScreenNavigationProp>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()} 
          style={styles.backButton}
        >
          <Icon name="arrow-back" size={24} color="#873BEA" />
          <Text style={styles.headerTitle}>Review Summary</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.planCard}>
          <Icon name="crown" size={24} color="#873BEA" />
          <View style={styles.benefitsList}>
            <Text style={styles.benefit}>• Enjoy caching with 1TB storage</Text>
            <Text style={styles.benefit}>• Enjoy caching without ads</Text>
            <Text style={styles.benefit}>• Enjoy caching without ads</Text>
          </View>
        </View>

        <View style={styles.summarySection}>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Amount</Text>
            <Text style={styles.summaryValue}>$9.99</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Tax</Text>
            <Text style={styles.summaryValue}>$1.99</Text>
          </View>
          <View style={[styles.summaryRow, styles.totalRow]}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalValue}>$11.99</Text>
          </View>
        </View>

        <View style={styles.paymentMethod}>
          <View style={styles.cardInfo}>
            <Icon name="card" size={24} color="#333" />
            <Text style={styles.cardNumber}>5282 3456 7890 1289</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('PaymentMethod')}>
            <Text style={styles.changeText}>Change</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity 
          style={styles.continueButton}
          onPress={() => navigation.navigate('SubscriptionSuccess', {
            planType: 'monthly',
            amount: 11.99
          })}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    marginLeft: 12,
    fontFamily: 'Poppins-Medium',
    color: '#333',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  planCard: {
    backgroundColor: '#F3E8FF',
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
  },
  benefitsList: {
    marginTop: 16,
  },
  benefit: {
    fontSize: 16,
    color: '#333',
    fontFamily: 'Poppins-Regular',
    marginBottom: 8,
  },
  summarySection: {
    backgroundColor: '#f8f8f8',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  summaryLabel: {
    fontSize: 16,
    color: '#666',
    fontFamily: 'Poppins-Regular',
  },
  summaryValue: {
    fontSize: 16,
    color: '#333',
    fontFamily: 'Poppins-Medium',
  },
  totalRow: {
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  totalLabel: {
    fontSize: 16,
    color: '#333',
    fontFamily: 'Poppins-Medium',
  },
  totalValue: {
    fontSize: 16,
    color: '#333',
    fontFamily: 'Poppins-Bold',
  },
  paymentMethod: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
  },
  cardInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardNumber: {
    marginLeft: 12,
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#333',
  },
  changeText: {
    color: '#873BEA',
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
  },
  continueButton: {
    backgroundColor: '#873BEA',
    borderRadius: 25,
    padding: 16,
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
});

export default ReviewSummaryScreen; 