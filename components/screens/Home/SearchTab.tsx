// CacheManager.tsx
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search, ChevronDown, MoreVertical } from 'react-native-feather';
import { Checkbox } from 'react-native-paper';
import {
  Menu,
  MenuTrigger,
  MenuOptions,
  MenuOption,
} from 'react-native-popup-menu';

type ItemType = 'Video' | 'Audio' | 'Image';

interface CacheItem {
  url: string;
  type: ItemType;
}

interface ItemsData {
  [date: string]: CacheItem[];
}

const CacheManager: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'cached' | 'caching'>('cached');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [filter, setFilter] = useState<'All' | ItemType>('All');

  // Mock data
  const items: ItemsData = {
    Today: [
      { url: 'https://b4music.vercel.app/video/1', type: 'Video' },
      { url: 'https://b4music.vercel.app/video/2', type: 'Audio' },
      { url: 'https://b4music.vercel.app/video/3', type: 'Image' },
      { url: 'https://b4music.vercel.app/video/4', type: 'Video' },
    ],
    Yesterday: [
      { url: 'https://b4music.vercel.app/video/5', type: 'Audio' },
      { url: 'https://b4music.vercel.app/video/6', type: 'Video' },
      { url: 'https://b4music.vercel.app/video/7', type: 'Image' },
      { url: 'https://b4music.vercel.app/video/8', type: 'Video' },
    ],
  };

  const toggleSelection = (item: CacheItem) => {
    const newSelected = new Set(selectedItems);
    if (newSelected.has(item.url)) {
      newSelected.delete(item.url);
    } else {
      newSelected.add(item.url);
    }
    setSelectedItems(newSelected);
  };

  const renderItem = (item: CacheItem) => (
    <View key={item.url} style={styles.itemContainer}>
      <Checkbox.Android
        status={selectedItems.has(item.url) ? 'checked' : 'unchecked'}
        onPress={() => toggleSelection(item)}
        color="#6039C8"
      />
      <Text style={styles.itemText} numberOfLines={1}>
        {item.url}
      </Text>
      <Menu>
        <MenuTrigger>
          <MoreVertical stroke="#666" width={20} height={20} />
        </MenuTrigger>
        <MenuOptions>
          <MenuOption text="Copy URL" />
          <MenuOption text="Delete" />
          <MenuOption text="Share" />
        </MenuOptions>
      </Menu>
    </View>
  );

  const simulateLoading = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  useEffect(() => {
    if (activeTab === 'caching') {
      simulateLoading();
    }
  }, [activeTab]);

  const filterItems = (items: ItemsData): ItemsData => {
    return Object.entries(items).reduce<ItemsData>((acc, [date, dateItems]) => {
      const filteredItems = dateItems.filter(
        (item) =>
          (filter === 'All' || item.type === filter) &&
          item.url.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (filteredItems.length > 0) {
        acc[date] = filteredItems;
      }
      return acc;
    }, {});
  };

  const filteredItems = filterItems(items);

  return (
    <SafeAreaView style={styles.container}>
      {/* Search and Filter */}
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Search stroke="#666" width={20} height={20} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
        <Menu>
          <MenuTrigger>
            <View style={styles.filterButton}>
              <Text style={styles.filterText}>{filter}</Text>
              <ChevronDown stroke="#6039C8" width={16} height={16} />
            </View>
          </MenuTrigger>
          <MenuOptions>
            <MenuOption onSelect={() => setFilter('All')} text="All" />
            <MenuOption onSelect={() => setFilter('Video')} text="Video" />
            <MenuOption onSelect={() => setFilter('Audio')} text="Audio" />
            <MenuOption onSelect={() => setFilter('Image')} text="Image" />
          </MenuOptions>
        </Menu>
      </View>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'cached' && styles.activeTab]}
          onPress={() => setActiveTab('cached')}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'cached' && styles.activeTabText,
            ]}
          >
            Cached
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'caching' && styles.activeTab]}
          onPress={() => setActiveTab('caching')}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'caching' && styles.activeTabText,
            ]}
          >
            Caching
          </Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <ScrollView style={styles.content}>
        {isLoading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#6039C8" />
            <Text style={styles.loadingText}>Caching...</Text>
          </View>
        ) : (
          Object.entries(filteredItems).map(([date, dateItems]) => (
            <View key={date} style={styles.section}>
              <Text style={styles.sectionTitle}>{date}</Text>
              {dateItems.map((item) => renderItem(item))}
            </View>
          ))
        )}
      </ScrollView>

      {/* Selected Counter */}
      {selectedItems.size > 0 && (
        <View style={styles.selectedCounter}>
          <Text style={styles.selectedText}>
            Selected: {selectedItems.size}
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    gap: 12,
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 8,
    marginLeft: 8,
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    padding: 8,
  },
  filterText: {
    color: '#6039C8',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
  tabContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#6039C8',
  },
  tabText: {
    fontSize: 16,
    color: '#666',
    fontFamily: 'Poppins-Regular',
  },
  activeTabText: {
    color: '#6039C8',
    fontFamily: 'Poppins-Medium',
  },
  content: {
    flex: 1,
  },
  section: {
    paddingTop: 20,
  },
  sectionTitle: {
    fontSize: 16,
    color: '#6039C8',
    fontFamily: 'Poppins-Medium',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  itemText: {
    flex: 1,
    fontSize: 14,
    color: '#333',
    marginLeft: 8,
    marginRight: 16,
    fontFamily: 'Poppins-Regular',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: '#666',
    fontFamily: 'Poppins-Regular',
  },
  selectedCounter: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  selectedText: {
    fontSize: 16,
    color: '#6039C8',
    fontFamily: 'Poppins-Medium',
  },
});

export default CacheManager;