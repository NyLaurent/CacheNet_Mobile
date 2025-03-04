// PaymentMethodScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeft, Check } from 'react-native-feather'; // Using Feather icons for consistency
import { SafeAreaView } from 'react-native-safe-area-context';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  PaymentMethod: undefined;
  AddCard: undefined;
};

type PaymentMethodScreenNavigationProp = StackNavigationProp<RootStackParamList, 'PaymentMethod'>;

const PaymentMethodScreen = () => {
  const navigation = useNavigation<PaymentMethodScreenNavigationProp>();

  const SubscriptionCard = () => (
    <TouchableOpacity 
      style={styles.subscriptionCard}
      onPress={() => navigation.navigate('AddCard')}
    >
      <Image 
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/4315/4315512.png' }}
        style={styles.crownImage}
      />
      <View style={styles.priceContainer}>
        <Text style={styles.dollarSign}>$</Text>
        <Text style={styles.price}>9.99</Text>
        <Text style={styles.period}>/month</Text>
      </View>
      <View style={styles.benefitsContainer}>
        <View style={styles.benefitRow}>
          <Check stroke="#6039C8" width={16} height={16} />
          <Text style={styles.benefitText}>Enjoy caching with 1TB storage</Text>
        </View>
        <View style={styles.benefitRow}>
          <Check stroke="#6039C8" width={16} height={16} />
          <Text style={styles.benefitText}>Enjoy caching without data</Text>
        </View>
        <View style={styles.benefitRow}>
          <Check stroke="#6039C8" width={16} height={16} />
          <Text style={styles.benefitText}>Enjoy caching without ads</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()} 
          style={styles.backButton}
        >
          <ArrowLeft stroke="#6039C8" width={24} height={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Subscribe to Premium</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.subtitle}>
          Enjoy caching with unlimited storage{'\n'}
          without worrying about the storage
        </Text>

        <SubscriptionCard />
        <SubscriptionCard />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000000',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  subtitle: {
    fontSize: 15,
    color: '#666666',
    marginBottom: 24,
    textAlign: 'center',
    lineHeight: 22,
  },
  subscriptionCard: {
    padding: 20,
    borderRadius: 16,
    backgroundColor: '#ffffff',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#6039C8',
  },
  crownImage: {
    width: 24,
    height: 24,
    alignSelf: 'flex-end',
    tintColor: '#6039C8',
    marginBottom: 12,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 20,
  },
  dollarSign: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    marginRight: 2,
  },
  price: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000000',
  },
  period: {
    fontSize: 14,
    color: '#666666',
    marginLeft: 4,
  },
  benefitsContainer: {
    gap: 12,
  },
  benefitRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  benefitText: {
    fontSize: 14,
    color: '#666666',
  },
});

export default PaymentMethodScreen;