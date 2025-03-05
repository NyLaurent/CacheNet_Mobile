"use client"

import { useState, useRef } from "react"
import { StyleSheet, View, Text, Image, TouchableOpacity, Dimensions, Animated, FlatList } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { BarChart } from "react-native-chart-kit"
import { Bell, Database, ChevronRight, Star } from "react-native-feather"
import { useNavigation } from "@react-navigation/native"
import type { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { LinearGradient } from "expo-linear-gradient"
import type { RootStackParamList } from "../../../navigation/types"

type HomeTabNavigationProp = NativeStackNavigationProp<RootStackParamList>

// App data for the apps section
const appData = [
  {
    id: "1",
    name: "Twitter",
    icon: "𝕏",
    color: "#000000",
    backgroundColor: "#ffffff",
    savedItems: 12,
  },
  {
    id: "2",
    name: "Instagram",
    iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png",
    color: "#C13584",
    backgroundColor: "#ffffff",
    savedItems: 28,
  },
  {
    id: "3",
    name: "YouTube",
    iconUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png",
    color: "#FF0000",
    backgroundColor: "#ffffff",
    savedItems: 7,
  },
  {
    id: "4",
    name: "Facebook",
    iconUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png",
    color: "#1877F2",
    backgroundColor: "#ffffff",
    savedItems: 15,
  },
  {
    id: "5",
    name: "TikTok",
    iconUrl:
      "https://static.vecteezy.com/system/resources/previews/017/743/717/original/tiktok-icon-logo-symbol-free-png.png",
    color: "#000000",
    backgroundColor: "#ffffff",
    savedItems: 22,
  },
]

// Chart data
const chartData = {
  labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
  datasets: [
    {
      data: [50, 30, 25, 35],
    },
  ],
}

const HomeTab = () => {
  const navigation = useNavigation<HomeTabNavigationProp>()
  const scrollY = useRef(new Animated.Value(0)).current
  const [activeChartIndex, setActiveChartIndex] = useState(0)

  // Header animation
  const headerOpacity = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0.9],
    extrapolate: "clamp",
  })

  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [0, -10],
    extrapolate: "clamp",
  })

  // Render app item with animation
  const renderAppItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        style={styles.appCard}
        onPress={() => navigation.navigate("AppDetails", { appId: item.id })}
        activeOpacity={0.7}
      >
        <View style={[styles.appIconContainer, { backgroundColor: item.backgroundColor }]}>
          {item.iconUrl ? (
            <Image source={{ uri: item.iconUrl }} style={styles.appIcon} resizeMode="contain" />
          ) : (
            <Text style={[styles.appTextIcon, { color: item.color }]}>{item.icon}</Text>
          )}
        </View>
        <View style={styles.appInfo}>
          <Text style={styles.appName}>{item.name}</Text>
          <View style={styles.savedItemsContainer}>
            <Database stroke={item.color} width={14} height={14} />
            <Text style={styles.savedItemsText}>{item.savedItems} items</Text>
          </View>
        </View>
        <ChevronRight stroke="#9CA3AF" width={16} height={16} />
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: true })}
        scrollEventThrottle={16}
      >
        {/* Header */}
        <Animated.View
          style={[
            styles.header,
            {
              opacity: headerOpacity,
              transform: [{ translateY: headerTranslateY }],
            },
          ]}
        >
          <View style={styles.profileSection}>
            <Image source={{ uri: "https://randomuser.me/api/portraits/men/32.jpg" }} style={styles.profileImage} />
            <View>
              <Text style={styles.greetingText}>Good Morning 👋</Text>
              <Text style={styles.nameText}>Beni Samuel</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.notificationButton} onPress={() => navigation.navigate("Notifications")}>
            <Bell stroke="#333" width={20} height={20} />
            <View style={styles.notificationBadge} />
          </TouchableOpacity>
        </Animated.View>

        {/* Benefits Card */}
        <LinearGradient
          colors={["#804ee7", "#6c3dd6"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.benefitsCard}
        >
          <View style={styles.benefitsContent}>
            <View>
              <Text style={styles.benefitsTitle}>Enjoy All Benefits</Text>
              <Text style={styles.benefitsSubtitle}>Unlimited storage for all your cached content</Text>
            </View>
            <View style={styles.premiumBadge}>
              <Star fill="#FFD700" stroke="#FFD700" width={12} height={12} />
              <Text style={styles.premiumBadgeText}>PRO</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.premiumButton} onPress={() => navigation.navigate("Subscription")}>
            <Text style={styles.premiumButtonText}>Get Premium</Text>
          </TouchableOpacity>
        </LinearGradient>

        {/* Stats Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Usage Statistics</Text>
          <TouchableOpacity style={styles.seeAllButton} onPress={() => navigation.navigate("Statistics")}>
            <Text style={styles.seeAllText}>See All</Text>
            <ChevronRight stroke="#804ee7" width={16} height={16} />
          </TouchableOpacity>
        </View>

        {/* Chart */}
        <View style={styles.chartContainer}>
          <BarChart
            data={chartData}
            width={Dimensions.get("window").width - 48}
            height={180}
            yAxisLabel=""
            yAxisSuffix=""
            chartConfig={{
              backgroundColor: "#ffffff",
              backgroundGradientFrom: "#ffffff",
              backgroundGradientTo: "#ffffff",
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(128, 78, 231, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(107, 114, 128, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              barPercentage: 0.6,
              propsForLabels: {
                fontSize: 10,
                fontFamily: "Poppins-Regular",
              },
            }}
            style={styles.chart}
            showValuesOnTopOfBars={true}
            withInnerLines={false}
            fromZero
          />
        </View>

        {/* Pagination Dots */}
        <View style={styles.paginationDots}>
          {[0, 1, 2].map((dot, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setActiveChartIndex(index)}
              style={[styles.dot, index === activeChartIndex ? styles.activeDot : {}]}
            />
          ))}
        </View>

        {/* Apps Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Your Apps</Text>
          <TouchableOpacity style={styles.seeAllButton} onPress={() => navigation.navigate("AllApps")}>
            <Text style={styles.seeAllText}>See All</Text>
            <ChevronRight stroke="#804ee7" width={16} height={16} />
          </TouchableOpacity>
        </View>

        {/* App Cards */}
        <FlatList
          data={appData}
          renderItem={renderAppItem}
          keyExtractor={(item) => item.id}
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.appsListContainer}
          scrollEnabled={false}
        />
      </Animated.ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  scrollContent: {
    paddingBottom: 80, // Space for tab bar
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginRight: 12,
    borderWidth: 2,
    borderColor: "#804ee7",
  },
  greetingText: {
    fontSize: 13,
    color: "#6B7280",
    fontFamily: "Poppins-Regular",
    marginBottom: 2,
  },
  nameText: {
    fontSize: 16,
    color: "#1F2937",
    fontFamily: "Poppins-Bold",
  },
  notificationButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F3F4F6",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  notificationBadge: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#EF4444",
    borderWidth: 1,
    borderColor: "white",
  },
  benefitsCard: {
    borderRadius: 16,
    marginHorizontal: 24,
    marginVertical: 8,
    padding: 20,
    shadowColor: "#804ee7",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 5,
  },
  benefitsContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  benefitsTitle: {
    fontSize: 18,
    color: "white",
    marginBottom: 6,
    fontFamily: "Poppins-Bold",
  },
  benefitsSubtitle: {
    fontSize: 13,
    color: "rgba(255, 255, 255, 0.8)",
    fontFamily: "Poppins-Regular",
    maxWidth: "90%",
  },
  premiumBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  premiumBadgeText: {
    color: "white",
    fontSize: 10,
    fontFamily: "Poppins-Bold",
    marginLeft: 4,
  },
  premiumButton: {
    backgroundColor: "white",
    borderRadius: 24,
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignSelf: "flex-start",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  premiumButtonText: {
    color: "#804ee7",
    fontFamily: "Poppins-Bold",
    fontSize: 13,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    marginTop: 24,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 17,
    color: "#1F2937",
    fontFamily: "Poppins-Bold",
  },
  seeAllButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  seeAllText: {
    fontSize: 13,
    color: "#804ee7",
    fontFamily: "Poppins-Medium",
    marginRight: 2,
  },
  chartContainer: {
    alignItems: "center",
    backgroundColor: "white",
    marginHorizontal: 24,
    borderRadius: 16,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  chart: {
    borderRadius: 16,
    paddingRight: 0,
  },
  paginationDots: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 16,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#E5E7EB",
    marginHorizontal: 4,
  },
  activeDot: {
    width: 20,
    backgroundColor: "#804ee7",
  },
  appsListContainer: {
    paddingHorizontal: 24,
    paddingBottom: 16,
  },
  appCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 16,
    padding: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 1,
  },
  appIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  appIcon: {
    width: 28,
    height: 28,
  },
  appTextIcon: {
    fontSize: 22,
    fontFamily: "Poppins-Bold",
  },
  appInfo: {
    flex: 1,
  },
  appName: {
    fontSize: 15,
    color: "#1F2937",
    fontFamily: "Poppins-Medium",
    marginBottom: 4,
  },
  savedItemsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  savedItemsText: {
    fontSize: 12,
    color: "#6B7280",
    fontFamily: "Poppins-Regular",
    marginLeft: 4,
  },
})

export default HomeTab

