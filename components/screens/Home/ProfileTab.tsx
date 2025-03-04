import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigation/types';
import Icon from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
// Define the type for your navigation prop
type ProfileTabNavigationProp = StackNavigationProp<RootStackParamList>;

const ProfileTab = () => {
  const navigation = useNavigation<ProfileTabNavigationProp>();

  return (
   <ScrollView>
     <SafeAreaView style={styles.container}>

<View style={styles.header}>
  <Text style={styles.headerTitle}>Profile</Text>
</View>

<View style={styles.profileSection}>
  <Image 
    source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }} 
    style={styles.profileImage} 
  />
  <Text style={styles.profileName}>Beni Samuel</Text>
  <Text style={styles.profileEmail}>benisamuel565@gmail.com</Text>
</View>

<View style={styles.benefitsCard}>
  <Text style={styles.benefitsTitle}>Enjoy All Benefits</Text>
  <Text style={styles.benefitsDescription}>
    enjoy caching all your content with unlimited storage
  </Text>
  <TouchableOpacity 
    style={styles.premiumButton}
    onPress={() => navigation.navigate('Subscription')}
  >
    <Text style={styles.premiumButtonText}>Get Premium</Text>
  </TouchableOpacity>
</View>

<View style={styles.menuSection}>
  <TouchableOpacity 
    style={styles.menuItem}
    onPress={() => navigation.navigate('EditProfile')}
  >
    <Icon name="person-outline" size={24} color="#333" />
    <Text style={styles.menuText}>Edit Profile</Text>
    <Icon name="chevron-forward" size={24} color="#666" />
  </TouchableOpacity>

  <TouchableOpacity 
    style={styles.menuItem}
    onPress={() => navigation.navigate('Notifications')}
  >
    <Icon name="notifications-outline" size={24} color="#333" />
    <Text style={styles.menuText}>Notification</Text>
    <Icon name="chevron-forward" size={24} color="#666" />
  </TouchableOpacity>

  <TouchableOpacity 
    style={styles.menuItem}
    onPress={() => navigation.navigate('Settings')}
  >
    <Icon name="settings-outline" size={24} color="#333" />
    <Text style={styles.menuText}>Settings</Text>
    <Icon name="chevron-forward" size={24} color="#666" />
  </TouchableOpacity>

  <TouchableOpacity 
    style={styles.menuItem}
    onPress={() => navigation.navigate('Security')}
  >
    <Icon name="shield-outline" size={24} color="#333" />
    <Text style={styles.menuText}>Security</Text>
    <Icon name="chevron-forward" size={24} color="#666" />
  </TouchableOpacity>

  <TouchableOpacity style={styles.menuItem}>
    <Icon name="document-text-outline" size={24} color="#333" />
    <Text style={styles.menuText}>Terms & Services</Text>
    <Icon name="chevron-forward" size={24} color="#666" />
  </TouchableOpacity>
</View>
</SafeAreaView>
   </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    color: '#333',
  },
  profileSection: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
  },
  profileName: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    color: '#333',
    marginBottom: 4,
  },
  profileEmail: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#666',
  },
  benefitsCard: {
    backgroundColor: '#873BEA',
    margin: 16,
    padding: 20,
    borderRadius: 16,
  },
  benefitsTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: '#fff',
    marginBottom: 8,
  },
  benefitsDescription: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#fff',
    opacity: 0.8,
    marginBottom: 16,
  },
  premiumButton: {
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  premiumButtonText: {
    color: '#873BEA',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
  },
  menuSection: {
    paddingHorizontal: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuText: {
    flex: 1,
    marginLeft: 16,
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#333',
  },
});

export default ProfileTab;

