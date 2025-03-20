// App.js
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BarChart } from 'react-native-chart-kit';
import { Bell, Home, Database, User, Settings } from 'react-native-feather';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/types';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

type HomeTabNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const App = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const [currentUser, setCurrentUser] = useState<{
    name: string;
    email: string;
    password: string;
    dob: string;
    phone: string;
  }>({
    name: '',
    email: '',
    password: '',
    dob: '',
    phone: '',
  });
  
  const navigation = useNavigation<HomeTabNavigationProp>();

  // Chart data
  const data = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        data: [50, 30, 25, 35],
      },
    ],
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  // Fetching the current User
  const getCurrentUser = async () => {
    try {
      const token = await SecureStore.getItemAsync('AuthToken');
      if (!token) {
        console.log('No token found, redirecting to login');
        navigation.navigate('SignIn');
        return;
      }
      const response = await axios.get('http://10.0.2.2:3000/user/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCurrentUser(response.data);
      console.log(currentUser); // Assuming response contains `name`
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error message:", error.message);
        console.error("Error code:", error.code);
        console.error("Error config:", error.config);
        
        if (error.response) {
          // Server responded with a status code outside the 2xx range
          console.error("Response data:", error.response.data);
          console.error("Response status:", error.response.status);
          console.error("Response headers:", error.response.headers);
        } else if (error.request) {
          // Request was made but no response was received
          console.error("No response received:", error.request);
        } else {
          // Other errors (e.g., setting up the request)
          console.error("Error setting up request:", error.message);
        }
      } else {
        console.error("Non-Axios error:", error);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.profileSection}>
            <Image
              source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
              style={styles.profileImage}
            />
            <View>
              <Text style={styles.greetingText}>Good Morning 👋</Text>
              <Text style={styles.nameText}>{currentUser.name}</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
            <Bell stroke="#333" width={24} height={24} />
          </TouchableOpacity>
        </View>

        {/* Benefits Card */}
        <View style={styles.benefitsCard}>
          <Text style={styles.benefitsTitle}>Enjoy All Benefits</Text>
          <Text style={styles.benefitsSubtitle}>
            enjoy caching all your content with unlimited storage
          </Text>
          <TouchableOpacity
            style={styles.premiumButton}
            onPress={() => navigation.navigate('Subscription')}>
            <Text style={styles.premiumButtonText}>Get Premium</Text>
          </TouchableOpacity>
        </View>

        {/* Stats Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Stats</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>See All</Text>
          </TouchableOpacity>
        </View>

        {/* Chart */}
        <View style={styles.chartContainer}>
          <BarChart
            data={data}
            width={Dimensions.get('window').width - 40}
            height={180}
            yAxisLabel="" // Add this line
            yAxisSuffix=""
            chartConfig={{
              backgroundColor: '#ffffff',
              backgroundGradientFrom: '#ffffff',
              backgroundGradientTo: '#ffffff',
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(128, 78, 231, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              barPercentage: 0.5,
            }}
            style={styles.chart}
            showValuesOnTopOfBars={false}
            withInnerLines={false}
            fromZero
          />
        </View>

        {/* Pagination Dots */}
        <View style={styles.paginationDots}>
          {[0, 1, 2, 3, 4].map((dot, index) => (
            <View key={index} style={[styles.dot, index === 0 ? styles.activeDot : {}]} />
          ))}
        </View>

        {/* Apps Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Apps</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>See All</Text>
          </TouchableOpacity>
        </View>

        {/* App Icons */}
        <View style={styles.appsContainer}>
          <TouchableOpacity style={styles.appIconContainer}>
            <Text style={styles.appIcon}>𝕏</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.appIconContainer}>
            <Image
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png',
              }}
              style={styles.instagramIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.appIconContainer}>
            <Image
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png',
              }}
              style={styles.youtubeIcon}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  greetingText: {
    fontSize: 14,
    color: '#666',
    fontFamily: 'Poppins-Regular',
  },
  nameText: {
    fontSize: 16,
    color: '#333',
    fontFamily: 'Poppins-Bold',
  },
  benefitsCard: {
    backgroundColor: '#804ee7',
    borderRadius: 15,
    padding: 20,
    margin: 20,
  },
  benefitsTitle: {
    fontSize: 18,
    color: 'white',
    marginBottom: 5,
    fontFamily: 'Poppins-Bold',
  },
  benefitsSubtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: 15,
    fontFamily: 'Poppins-Regular',
  },
  premiumButton: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
    alignSelf: 'flex-start',
  },
  premiumButtonText: {
    color: '#804ee7',
    fontFamily: 'Poppins-Bold',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    color: '#333',
    fontFamily: 'Poppins-Bold',
  },
  seeAllText: {
    fontSize: 14,
    color: '#804ee7',
    fontFamily: 'Poppins-Medium',
  },
  chartContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    marginHorizontal: 20,
    borderRadius: 15,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  chart: {
    borderRadius: 15,
  },
  paginationDots: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 15,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ddd',
    marginHorizontal: 3,
  },
  activeDot: {
    backgroundColor: '#804ee7',
  },
  appsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  appIconContainer: {
    width: 60,
    height: 60,
    backgroundColor: '#eee',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  appIcon: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
  },
  instagramIcon: {
    width: 30,
    height: 30,
  },
  youtubeIcon: {
    width: 30,
    height: 22,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    marginTop: 3,
    color: '#888',
    fontFamily: 'Poppins-Regular',
  },
  activeNavText: {
    color: '#804ee7',
    fontFamily: 'Poppins-Medium',
  },
});

export default App;
