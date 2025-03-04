import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigation/types';
import { SafeAreaView } from 'react-native-safe-area-context';


type AddCardScreenNavigationProp = StackNavigationProp<RootStackParamList, 'AddCard'>;

const AddCardScreen = () => {
  const navigation = useNavigation<AddCardScreenNavigationProp>();
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()} 
          style={styles.backButton}
        >
          <Icon name="arrow-back" size={24} color="#873BEA" />
          <Text style={styles.headerTitle}>Add New Card</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.cardPreview}>
          <Text style={styles.balance}>$5,750.20</Text>
          <Icon name="card" size={32} color="#fff" />
          <Text style={styles.cardNumberPreview}>
            {cardNumber || '5282 3456 7890 1289'}
          </Text>
        </View>

        <View style={styles.form}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Card Name</Text>
            <TextInput
              style={styles.input}
              value={cardName}
              onChangeText={setCardName}
              placeholder="Enter card name"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Card Number</Text>
            <TextInput
              style={styles.input}
              value={cardNumber}
              onChangeText={setCardNumber}
              placeholder="Enter card number"
              keyboardType="numeric"
              maxLength={16}
            />
          </View>

          <View style={styles.row}>
            <View style={[styles.inputGroup, { flex: 1, marginRight: 10 }]}>
              <Text style={styles.label}>Expiry Date</Text>
              <TextInput
                style={styles.input}
                value={expiryDate}
                onChangeText={setExpiryDate}
                placeholder="MM/YY"
                maxLength={5}
              />
            </View>

            <View style={[styles.inputGroup, { flex: 1, marginLeft: 10 }]}>
              <Text style={styles.label}>CVV</Text>
              <TextInput
                style={styles.input}
                value={cvv}
                onChangeText={setCvv}
                placeholder="Enter CVV"
                keyboardType="numeric"
                maxLength={3}
              />
            </View>
          </View>
        </View>

        <TouchableOpacity 
          style={styles.addButton}
          onPress={() => navigation.navigate('ReviewSummary')}
        >
          <Text style={styles.addButtonText}>Add</Text>
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
  cardPreview: {
    backgroundColor: '#873BEA',
    borderRadius: 16,
    padding: 24,
    marginBottom: 30,
  },
  balance: {
    fontSize: 24,
    color: '#fff',
    fontFamily: 'Poppins-Bold',
    marginBottom: 40,
  },
  cardNumberPreview: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'Poppins-Medium',
    marginTop: 40,
  },
  form: {
    marginBottom: 30,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
    fontFamily: 'Poppins-Regular',
  },
  input: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 12,
    padding: 12,
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addButton: {
    backgroundColor: '#873BEA',
    borderRadius: 25,
    padding: 16,
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
});

export default AddCardScreen; 