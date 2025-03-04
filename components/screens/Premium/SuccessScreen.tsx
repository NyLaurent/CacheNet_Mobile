import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigation/types';

type SuccessScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SubscriptionSuccess'>;

const SuccessScreen = () => {
  const navigation = useNavigation<SuccessScreenNavigationProp>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Icon name="crown" size={40} color="#873BEA" />
        </View>

        <Text style={styles.title}>Congratulations!</Text>
        <Text style={styles.message}>
          You have successfully subscribed! Enjoy the benefits of premium membership.
        </Text>

        <TouchableOpacity 
          style={styles.okButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.okButtonText}>OK</Text>
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
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#F3E8FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    color: '#333',
    marginBottom: 12,
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    fontFamily: 'Poppins-Regular',
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  okButton: {
    backgroundColor: '#873BEA',
    borderRadius: 25,
    paddingVertical: 16,
    paddingHorizontal: 64,
    alignItems: 'center',
  },
  okButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
});

export default SuccessScreen; 