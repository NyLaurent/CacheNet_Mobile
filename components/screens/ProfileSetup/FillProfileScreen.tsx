import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  Image, 
  Platform, 
  Pressable 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';    
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigation/types';
import Icon from 'react-native-vector-icons/Ionicons';
import * as ImagePicker from 'expo-image-picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { format } from 'date-fns';
import PhoneInput from 'react-native-phone-number-input';

type ProfileSetupNavigationProp = StackNavigationProp<RootStackParamList, 'ProfileSetup'>;

const FillProfileScreen = () => {
  const navigation = useNavigation<ProfileSetupNavigationProp>();
  const [fullName, setFullName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const requestPermission = async () => {
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
        return false;
      }
      return true;
    }
    return true;
  };

  const handleImagePicker = async () => {
    const hasPermission = await requestPermission();
    
    if (!hasPermission) return;
    
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });
      
      if (!result.canceled && result.assets && result.assets.length > 0) {
        setProfileImage(result.assets[0].uri);
      }
    } catch (error) {
      console.log('Error picking image:', error);
    }
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    setDateOfBirth(format(date, 'dd/MM/yyyy'));
    hideDatePicker();
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#873BEA" />
          <Text style={styles.headerTitle}>Fill Your Profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.formContainer}>
        <TouchableOpacity style={styles.avatarContainer} onPress={handleImagePicker}>
          {profileImage ? (
            <Image source={{ uri: profileImage }} style={styles.avatar} />
          ) : (
            <View style={styles.avatarPlaceholder}>
              <Icon name="person-outline" size={40} color="#999" />
            </View>
          )}
          <View style={styles.cameraButton}>
            <Icon name="camera" size={16} color="#fff" />
          </View>
        </TouchableOpacity>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Full Names"
            value={fullName}
            onChangeText={setFullName}
            placeholderTextColor="#999"
          />
          
          <TouchableOpacity 
            style={styles.input}
            onPress={showDatePicker}
          >
            <Text style={[styles.inputText, dateOfBirth ? {} : styles.placeholderText]}>
              {dateOfBirth || "Date of Birth"}
            </Text>
            <Icon name="calendar-outline" size={20} color="#999" />
          </TouchableOpacity>

          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
            maximumDate={new Date()}
          />

          <View style={styles.input}>
            <Text style={[styles.inputText, email ? {} : styles.placeholderText]}>
              {email || "Email"}
            </Text>
            <TextInput
              style={styles.hiddenInput}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              placeholder=""
            />
            <Icon name="mail-outline" size={20} color="#999" />
          </View>

          <PhoneInput
            defaultValue={phoneNumber}
            defaultCode="US"
            layout="first"
            onChangeFormattedText={(text) => setPhoneNumber(text)}
            containerStyle={styles.phoneInputContainer}
            textContainerStyle={styles.phoneTextContainer}
            textInputStyle={styles.phoneTextInput}
            codeTextStyle={styles.phoneCodeText}
            placeholder="Phone Number"
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
            onPress={() => navigation.navigate('AppSelection')}
          >
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
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
    fontSize: 20,
    marginLeft: 12,
    color: '#000',
    fontFamily: 'Poppins-Bold',
  },
  formContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 40,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  avatarPlaceholder: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#873BEA',
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  inputContainer: {
    width: '100%',
    gap: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    paddingHorizontal: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputText: {
    flex: 1,
    color: '#000',
    fontFamily: 'Poppins-Regular',
  },
  placeholderText: {
    color: '#999',
    fontFamily: 'Poppins-Regular',
  },
  hiddenInput: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0,
  },
  phoneInputContainer: {
    width: '100%',
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    backgroundColor: 'transparent',
  },
  phoneTextContainer: {
    backgroundColor: 'transparent',
    paddingHorizontal: 0,
  },
  phoneTextInput: {
    color: '#000',
    height: 50,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  phoneCodeText: {
    color: '#000',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
    marginTop: 'auto',
    paddingBottom: 24
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

export default FillProfileScreen;