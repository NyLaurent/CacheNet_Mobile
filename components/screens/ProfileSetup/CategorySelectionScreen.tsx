import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  ScrollView, 
  Dimensions 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigation/types';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

type CategorySelectionNavigationProp = StackNavigationProp<RootStackParamList, 'CategorySelection'>;

// Sample categories - in a real app, you might fetch these from an API
const categories = [
  { id: 1, name: 'Text' },
  { id: 2, name: 'Document' },
  { id: 3, name: 'Video' },
  { id: 4, name: 'Images' },
  { id: 5, name: 'Audio' },
  { id: 6, name: 'News' },
  { id: 7, name: 'Sports' },
  { id: 8, name: 'Technology' },
  { id: 9, name: 'Science' },
  { id: 10, name: 'Health' },
  { id: 11, name: 'Education' },
  { id: 12, name: 'Entertainment' },
  { id: 13, name: 'Travel' },
  { id: 14, name: 'Food' },
  { id: 15, name: 'Fashion' },
  { id: 16, name: 'Business' },
  { id: 17, name: 'Art' },
  { id: 18, name: 'Music' },
];

const { width } = Dimensions.get('window');
const ITEM_SPACING = 10;
const ITEMS_PER_ROW = 3;
const ITEM_WIDTH = (width - 40 - (ITEMS_PER_ROW - 1) * ITEM_SPACING) / ITEMS_PER_ROW;

const CategorySelectionScreen = () => {
  const navigation = useNavigation<CategorySelectionNavigationProp>();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()} 
          style={styles.backButton}
        >
          <Icon name="arrow-back" size={24} color="#873BEA" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Choose Categories</Text>
      </View>

      {/* Description */}
      <Text style={styles.title}>
        Choose your favourite categories you wish cachenet to start caching for you
      </Text>

      {/* Categories Grid */}
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        <View style={styles.categoryGrid}>
          {categories.map((category) => {
            const isSelected = selectedCategories.includes(category.name);
            return (
              <TouchableOpacity
                key={category.id}
                style={[
                  styles.categoryButton,
                  isSelected && styles.categoryButtonSelected
                ]}
                onPress={() => toggleCategory(category.name)}
                activeOpacity={0.7}
              >
                <Text 
                  style={[
                    styles.categoryButtonText,
                    isSelected && styles.categoryButtonTextSelected
                  ]}
                  numberOfLines={1}
                >
                  {category.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>

      {/* Bottom Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.skipButton}
          onPress={() => navigation.navigate('SetupSuccess')}
          activeOpacity={0.7}
        >
          <Text style={styles.skipButtonText}>Skip</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[
            styles.continueButton,
            selectedCategories.length === 0 && styles.continueButtonDisabled
          ]}
          onPress={() => navigation.navigate('SetupSuccess')}
          activeOpacity={0.7}
          disabled={selectedCategories.length === 0}
        >
          <Text style={styles.continueButtonText}>
            Continue {selectedCategories.length > 0 ? `(${selectedCategories.length})` : ''}
          </Text>
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
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 18,
    marginLeft: 12,
    color: '#000',
    fontFamily: 'Poppins-Medium',
    flex: 1,
  },
  title: {
    fontSize: 14,
    textAlign: 'center',
    paddingHorizontal: 40,
    marginVertical: 20,
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
    justifyContent: 'flex-start',
    marginHorizontal: -ITEM_SPACING/2,
  },
  categoryButton: {
    width: ITEM_WIDTH,
    margin: ITEM_SPACING/2,
    paddingVertical: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#873BEA',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  categoryButtonSelected: {
    backgroundColor: '#873BEA',
    borderColor: '#873BEA',
    shadowColor: '#873BEA',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  categoryButtonText: {
    color: '#873BEA',
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    paddingHorizontal: 8,
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
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
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
  continueButtonDisabled: {
    backgroundColor: '#C8A9F2',
  },
  skipButtonText: {
    color: '#873BEA',
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
  },
  continueButtonText: {
    color: '#fff',
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
  },
});

export default CategorySelectionScreen;