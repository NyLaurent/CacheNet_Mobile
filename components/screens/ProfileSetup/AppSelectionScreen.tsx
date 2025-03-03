import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigation/types';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';

type AppSelectionNavigationProp = StackNavigationProp<RootStackParamList, 'AppSelection'>;

interface AppOption {
  id: string;
  name: string;
  icon: any;
  colors?: string[];
}

const apps: AppOption[] = [
  { 
    id: 'youtube', 
    name: 'Youtube', 
    icon: require('../../../assets/images/youtube.png'),
    colors: ['#FF0000', '#FF0000']
  },
  { 
    id: 'slack', 
    name: 'Slack', 
    icon: require('../../../assets/images/slack.png'),
    colors: ['#36C5F0', '#2EB67D', '#ECB22E', '#E01E5A']
  },
  { 
    id: 'github', 
    name: 'Github', 
    icon: require('../../../assets/images/github.png'),
    colors: ['#24292e', '#24292e']
  },
  { 
    id: 'twitter', 
    name: 'Twitter', 
    icon: require('../../../assets/images/twitter.png'),
    colors: ['#1DA1F2', '#1DA1F2']
  },
  { 
    id: 'instagram', 
    name: 'Instagram', 
    icon: require('../../../assets/images/instagram.png'),
    colors: ['#833AB4', '#FD1D1D', '#F77737']
  },
];

const AppSelectionScreen = () => {
  const navigation = useNavigation<AppSelectionNavigationProp>();
  const [selectedApps, setSelectedApps] = React.useState<string[]>([]);

  const toggleApp = (appId: string) => {
    setSelectedApps(prev => 
      prev.includes(appId) 
        ? prev.filter(id => id !== appId)
        : [...prev, appId]
    );
  };

  const renderAppItem = ({ item }: { item: AppOption }) => (
    <View style={styles.appItem}>
      <View style={styles.appIconContainer}>
        <Image source={item.icon} style={styles.appIcon} resizeMode="contain" />
      </View>
      <Text style={styles.appName}>{item.name}</Text>
      <TouchableOpacity 
        style={[
          styles.chooseButton,
          selectedApps.includes(item.id) && styles.chooseButtonSelected
        ]}
        onPress={() => toggleApp(item.id)}
      >
        <Text style={styles.chooseButtonText}>
          Choose
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()} 
          style={styles.backButton}
        >
          <Icon name="arrow-back" size={24} color="#873BEA" />
          <Text style={styles.headerTitle}>Choose Apps</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>
          Choose your favourite apps you wish cacheNet to start caching for your
        </Text>

        <FlatList
          data={apps}
          renderItem={renderAppItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.appList}
          showsVerticalScrollIndicator={false}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.skipButton}
          onPress={() => navigation.navigate('SetupSuccess')}
        >
          <Text style={styles.skipButtonText}>Skip</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.continueButton}
          onPress={() => navigation.navigate('CategorySelection')}
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
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 0,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 16,
    marginLeft: 12,
    color: '#000',
    fontFamily: 'Poppins-Medium',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  title: {
    fontSize: 14,
    textAlign: 'center',
    paddingHorizontal: 40,
    marginBottom: 30,
    color: '#666',
    lineHeight: 20,
    fontFamily: 'Poppins-Regular',
  },
  appList: {
    paddingBottom: 20,
  },
  appItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 4,
  },
  appIconContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  appIcon: {
    width: 32,
    height: 32,
  },
  appName: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    fontFamily: 'Poppins-Regular',
  },
  chooseButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#873BEA',
    minWidth: 100,
    alignItems: 'center',
  },
  chooseButtonSelected: {
    backgroundColor: '#873BEA',
  },
  chooseButtonText: {
    color: '#fff',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
    padding: 20,
    paddingBottom: 30,
  },
  skipButton: {
    flex: 1,
    height: 50,
    backgroundColor: '#F3E8FF',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  continueButton: {
    flex: 1,
    height: 50,
    backgroundColor: '#873BEA',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  skipButtonText: {
    color: '#873BEA',
    fontFamily: 'Poppins-Medium',
  },
  continueButtonText: {
    color: '#fff',
    fontFamily: 'Poppins-Medium',
  },
});

export default AppSelectionScreen;