import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigation/types';

type ProfileSetupNavigationProp = StackNavigationProp<RootStackParamList, 'ProfileSetup'>;

const FillProfileScreen = () => {
  const navigation = useNavigation<ProfileSetupNavigationProp>();
  const [fullName, setFullName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text>← Fill Your Profile</Text>
      </TouchableOpacity>

      <View style={styles.formContainer}>
        <View style={styles.avatarPlaceholder}>
          <Text style={styles.avatarText}>+</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={fullName}
            onChangeText={setFullName}
          />
          
          <TextInput
            style={styles.input}
            placeholder="Date of Birth"
            value={dateOfBirth}
            onChangeText={setDateOfBirth}
          />

          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.skipButton}
            onPress={() => navigation.navigate('AppSelection')}>
            <Text style={styles.skipButtonText}>Skip</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.continueButton}
            onPress={() => navigation.navigate('ProfilePicture')}>
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backButton: {
    padding: 16,
  },
  formContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  avatarPlaceholder: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },
  avatarText: {
    fontSize: 40,
    color: '#666',
  },
  inputContainer: {
    width: '100%',
    gap: 16,
  },
  input: {
    width: '100%',
    height: 48,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    paddingHorizontal: 16,
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
    marginTop: 'auto',
    paddingBottom: 24,
  },
  skipButton: {
    flex: 1,
    height: 48,
    backgroundColor: '#f0f0f0',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  continueButton: {
    flex: 1,
    height: 48,
    backgroundColor: '#873BEA',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  skipButtonText: {
    color: '#666',
  },
  continueButtonText: {
    color: '#fff',
  },
});

export default FillProfileScreen; 