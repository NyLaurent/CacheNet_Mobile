import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigation/types';
import Icon from 'react-native-vector-icons/Ionicons';

type SetupSuccessNavigationProp = StackNavigationProp<RootStackParamList, 'SetupSuccess'>;

const SetupSuccessScreen = () => {
  const navigation = useNavigation<SetupSuccessNavigationProp>();
  const [fadeAnim] = useState(new Animated.Value(0));
  const [translateY] = useState(new Animated.Value(20));

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View 
        style={[
          styles.content,
          {
            opacity: fadeAnim,
            transform: [{ translateY }],
          },
        ]}
      >
        <View style={styles.iconContainer}>
          <Icon name="checkmark" size={40} color="#873BEA" />
        </View>
        
        <Text style={styles.title}>Success</Text>
        <Text style={styles.message}>
          Successfully added user to CacheNet{'\n'}
          enjoy having a nice caching
        </Text>

        <TouchableOpacity 
          style={styles.continueButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  content: {
    alignItems: 'center',
    width: '100%',
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
    fontFamily: 'Poppins-SemiBold',
    color: '#873BEA',
    marginBottom: 12,
  },
  message: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
    lineHeight: 20,
    marginBottom: 40,
    fontFamily: 'Poppins-Regular',
  },
  continueButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#873BEA',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: -100,
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
});

export default SetupSuccessScreen;