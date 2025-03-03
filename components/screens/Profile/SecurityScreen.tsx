import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Switch } from 'react-native-paper';

const SecurityScreen = () => {
  const navigation = useNavigation();
  const [rememberMe, setRememberMe] = useState(true);
  const [faceId, setFaceId] = useState(true);
  const [biometricId, setBiometricId] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Icon name="arrow-back" size={24} color="#873BEA" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Security</Text>
      </View>

      <ScrollView style={styles.content}>
        {/* Security Options */}
        <View style={styles.section}>
          <View style={styles.securityOption}>
            <Text style={styles.optionText}>Remember me</Text>
            <Switch
              value={rememberMe}
              onValueChange={setRememberMe}
              color="#873BEA"
            />
          </View>

          <View style={styles.securityOption}>
            <Text style={styles.optionText}>Face ID</Text>
            <Switch
              value={faceId}
              onValueChange={setFaceId}
              color="#873BEA"
            />
          </View>

          <View style={styles.securityOption}>
            <Text style={styles.optionText}>Biometric ID</Text>
            <Switch
              value={biometricId}
              onValueChange={setBiometricId}
              color="#873BEA"
            />
          </View>
        </View>

        {/* Security Actions */}
        <View style={styles.section}>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Change PIN</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Change Password</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: '#333',
  },
  content: {
    flex: 1,
  },
  section: {
    padding: 16,
    gap: 16,
  },
  securityOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  optionText: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#333',
  },
  actionButton: {
    backgroundColor: '#f8f8f8',
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionButtonText: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#333',
  },
});

export default SecurityScreen; 