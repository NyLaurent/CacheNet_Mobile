import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigation/types';

type SetupSuccessNavigationProp = StackNavigationProp<RootStackParamList, 'SetupSuccess'>;

const SetupSuccessScreen = () => {
  const navigation = useNavigation<SetupSuccessNavigationProp>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Home');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image 
          source={require('../../../assets/images/success.png')} 
          style={styles.successIcon}
        />
        <Text style={styles.title}>Success</Text>
        <Text style={styles.message}>
          Successfully added user to CacheNet enjoy having a nice caching
        </Text>
      </View>
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
  },
  successIcon: {
    width: 100,
    height: 100,
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#873BEA',
    marginBottom: 16,
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
  },
});

export default SetupSuccessScreen; 