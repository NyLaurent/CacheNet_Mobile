import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

export type RootStackParamList = {
    Splash: undefined;
    Onboarding: undefined;
    SignUp: undefined;
    SignIn: undefined;
    ProfileCompletion: undefined;
    AuthSuccess: undefined;
    Home: undefined;
    Search: undefined;
    HomeTab: undefined;
    Settings: undefined;
    ProfileTab: undefined;
    SignUpOptions: undefined;
    SignUpForm: undefined;
    ProfileSetup: undefined;
    ProfilePicture: undefined;
    AppSelection: undefined;
    CategorySelection: undefined;
    SetupSuccess: undefined;
    Notifications: undefined;
    EditProfile: undefined;
    Security: undefined;
    Subscription: undefined;
    PaymentMethod: undefined;
    AddCard: undefined;
    ReviewSummary: undefined;
    SubscriptionSuccess: {
        planType: 'monthly' | 'yearly';
        amount: number;
    };
};

export type PremiumStackNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Subscription' | 'PaymentMethod' | 'AddCard' | 'ReviewSummary' | 'SubscriptionSuccess'
>;

const navigation = useNavigation<PremiumStackNavigationProp>(); 