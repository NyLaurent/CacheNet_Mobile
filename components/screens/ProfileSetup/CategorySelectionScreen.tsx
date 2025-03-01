import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigation/types';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

type CategorySelectionNavigationProp = StackNavigationProp<RootStackParamList, 'CategorySelection'>;

const categories = [
  { id: 1, name: 'Text' },
  { id: 2, name: 'Document' },
  { id: 3, name: 'Video' },
  { id: 4, name: 'Text' },
  { id: 5, name: 'Document' },
  { id: 6, name: 'Video' },
  { id: 7, name: 'Text' },
  { id: 8, name: 'Document' },
  { id: 9, name: 'Video' },
  { id: 10, name: 'Text' },
  { id: 11, name: 'Document' },
  { id: 12, name: 'Video' },
  { id: 13, name: 'Text' },
  { id: 14, name: 'Document' },
  { id: 15, name: 'Video' },
  { id: 16, name: 'Text' },
  { id: 17, name: 'Document' },
  { id: 18, name: 'Video' },
];

const CategorySelectionScreen = () => {
  const navigation = useNavigation<CategorySelectionNavigationProp>();
  const [selectedCategories, setSelectedCategories] = React.useState<string[]>([]);

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()} 
          style={styles.backButton}
        >
          <Icon name="arrow-back" size={24} color="#873BEA" />
          <Text style={styles.headerTitle}>Choose Categories</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>
        Choose your favourite categories you wish cachenet to start caching for your
      </Text>

      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        <View style={styles.categoryGrid}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={[
                styles.categoryButton,
                selectedCategories.includes(category.name) && styles.categoryButtonSelected
              ]}
              onPress={() => toggleCategory(category.name)}
            >
              <Text style={[
                styles.categoryButtonText,
                selectedCategories.includes(category.name) && styles.categoryButtonTextSelected
              ]}>
                {category.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.skipButton}
          onPress={() => navigation.navigate('SetupSuccess')}
        >
          <Text style={styles.skipButtonText}>Skip</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.continueButton}
          onPress={() => navigation.navigate('SetupSuccess')}
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
  title: {
    fontSize: 14,
    textAlign: 'center',
    paddingHorizontal: 40,
    marginBottom: 24,
    color: '#666',
    lineHeight: 20,
    fontFamily: 'Poppins-Regular',
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    justifyContent: 'space-between',
  },
  categoryButton: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#873BEA',
    backgroundColor: '#fff',
    minWidth: '30%',
    alignItems: 'center',
  },
  categoryButtonSelected: {
    backgroundColor: '#873BEA',
    borderColor: '#873BEA',
  },
  categoryButtonText: {
    color: '#873BEA',
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
  },
  categoryButtonTextSelected: {
    color: '#fff',
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

export default CategorySelectionScreen;