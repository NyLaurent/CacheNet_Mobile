import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigation/types';

type CategorySelectionNavigationProp = StackNavigationProp<RootStackParamList, 'CategorySelection'>;

const categories = [
  'Text', 'Document', 'Video',
  'Text', 'Document', 'Video',
  'Text', 'Document', 'Video',
  'Text', 'Document', 'Video',
  'Text', 'Document', 'Video',
  'Text', 'Document', 'Video',
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
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text>←</Text>
      </TouchableOpacity>

      <Text style={styles.title}>
        Choose your favourite categories you wish cachenet to start caching for you
      </Text>

      <ScrollView style={styles.scrollView}>
        <View style={styles.categoryGrid}>
          {categories.map((category, index) => (
            <TouchableOpacity
              key={`${category}-${index}`}
              style={[
                styles.categoryButton,
                selectedCategories.includes(category) && styles.categoryButtonSelected
              ]}
              onPress={() => toggleCategory(category)}>
              <Text style={[
                styles.categoryButtonText,
                selectedCategories.includes(category) && styles.categoryButtonTextSelected
              ]}>
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.skipButton}
          onPress={() => navigation.navigate('SetupSuccess')}>
          <Text style={styles.skipButtonText}>Skip</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.continueButton}
          onPress={() => navigation.navigate('SetupSuccess')}>
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
    fontFamily: 'Poppins-Regular',
  },
  scrollView: {
    flex: 1,
  },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 16,
    gap: 12,
  },
  categoryButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#873BEA',
    backgroundColor: '#fff',
  },
  categoryButtonSelected: {
    backgroundColor: '#873BEA',
  },
  categoryButtonText: {
    color: '#873BEA',
    fontFamily: 'Poppins-Regular',
  },
  categoryButtonTextSelected: {
    color: '#fff',
    fontFamily: 'Poppins-Regular',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
    padding: 16,
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
    fontFamily: 'Poppins-Medium',
  },
  continueButtonText: {
    color: '#fff',
    fontFamily: 'Poppins-Medium',
  },
});

export default CategorySelectionScreen; 