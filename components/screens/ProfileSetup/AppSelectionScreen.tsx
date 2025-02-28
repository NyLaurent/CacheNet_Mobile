import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigation/types';

type AppSelectionNavigationProp = StackNavigationProp<RootStackParamList, 'AppSelection'>;

interface AppOption {
  id: string;
  name: string;
  icon: any;
}

const apps: AppOption[] = [
  { id: 'youtube', name: 'Youtube', icon: require('../../../assets/images/youtube.png') },
  { id: 'slack', name: 'Slack', icon: require('../../../assets/images/slack.png') },
  { id: 'github', name: 'Github', icon: require('../../../assets/images/github.png') },
  { id: 'twitter', name: 'Twitter', icon: require('../../../assets/images/twitter.png') },
  { id: 'instagram', name: 'Instagram', icon: require('../../../assets/images/instagram.png') },
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

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text>← Choose Apps</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Choose your favourite apps you wish cachenet to start caching for you</Text>

      <View style={styles.appList}>
        {apps.map((app) => (
          <View key={app.id} style={styles.appItem}>
            <Image source={app.icon} style={styles.appIcon} />
            <Text style={styles.appName}>{app.name}</Text>
            <TouchableOpacity
              style={[
                styles.chooseButton,
                selectedApps.includes(app.id) && styles.chooseButtonSelected
              ]}
              onPress={() => toggleApp(app.id)}>
              <Text style={[
                styles.chooseButtonText,
                selectedApps.includes(app.id) && styles.chooseButtonTextSelected
              ]}>
                {selectedApps.includes(app.id) ? 'Selected' : 'Choose'}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.skipButton}
          onPress={() => navigation.navigate('CategorySelection')}>
          <Text style={styles.skipButtonText}>Skip</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.continueButton}
          onPress={() => navigation.navigate('CategorySelection')}>
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
  backButton: {
    padding: 16,
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 40,
    marginBottom: 32,
  },
  appList: {
    paddingHorizontal: 16,
    gap: 16,
  },
  appItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  appIcon: {
    width: 32,
    height: 32,
    marginRight: 12,
  },
  appName: {
    flex: 1,
    fontSize: 16,
  },
  chooseButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
  },
  chooseButtonSelected: {
    backgroundColor: '#873BEA',
  },
  chooseButtonText: {
    color: '#666',
  },
  chooseButtonTextSelected: {
    color: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
    padding: 16,
    marginTop: 'auto',
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

export default AppSelectionScreen; 