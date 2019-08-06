import { createStackNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation';
import {
    SplashScreen,
    LoginScreen,
    RegisterScreen,
    RegisterTokenScreen,
    ForgotPasswordScreen,
    ResetPasswordScreen,
    HelpScreen,
    ProfileScreen,
    CreateAccountScreen,
    EcareHomeScreen,
    BuyGigPackScreen,
    UsageScreen,
    RecordScreen,
    PaymentReportScreen,
    ExtraQoutaScreen,
    InternetReportScreen,
    MyServicesScreen,
    CompleteInfoScreen,
    IPGuideScreen,
    PlanScreen,
    ReservationBankScreen,
    RegisteredTicketScreen,
    EditHistoryScreen,
    GiftScreen,
    EditServiceScreen
} from './../screens';
import { Platform } from 'react-native';
import routeNames from './../helpers/route-names';
import EcareDrawerComponent from '../components/ecare-navigation';

// const EcareRootStack = createDrawerNavigator(
//     {
//         EcareHome: {
//             screen: EcareHomeScreen,
//             navigationOptions: {
//                 title: routeNames.ecare.ecareHome
//             }
//         }
//     },
//     {
//         initialRouteName: routeNames.ecare.ecareHome,
//         contentComponent: EcareDrawerComponent,
//         drawerWidth: 270,
//         drawerType: "back",
//         drawerPosition: "right",
//         headerMode: 'none',
//         mode: Platform.OS === 'ios' ? 'modal' : 'card',
//         contentOptions: {
//             activeTintColor: '#00ea0d',
//             activeBackgroundColor: '#eee',
//         },
//     },

// const AppStack = createStackNavigator(
//     {
//         EcareRoot: {
//             screen: EcareRootStack,
//             navigationOptions: {
//                 title: routeNames.ecare.ecareRoot
//             }
//         },
//         Splash: {
//             screen: SplashScreen,
//             navigationOptions: {
//                 title: routeNames.general.splash
//             }
//         },
//         Login: {
//             screen: LoginScreen,
//             navigationOptions: {
//                 title: routeNames.general.login
//             }
//         },
//         RegisterToken: {
//             screen: RegisterTokenScreen,
//             navigationOptions: {
//                 title: routeNames.general.registerToken
//             }
//         },
//         Register: {
//             screen: RegisterScreen,
//             navigationOptions: {
//                 title: routeNames.general.register
//             }
//         },
//         ResetPassword: {
//             screen: ResetPasswordScreen,
//             navigationOptions: {
//                 title: routeNames.general.resetPassword
//             }
//         },
//         ForgotPassword: {
//             screen: ForgotPasswordScreen,
//             navigationOptions: {
//                 title: routeNames.general.forgotPassword
//             }
//         },
//         Help: {
//             screen: HelpScreen,
//             navigationOptions: {
//                 title: routeNames.general.help
//             }
//         },
//         CreateAccount: {
//             screen: CreateAccountScreen,
//             navigationOptions: {
//                 title: routeNames.ecare.createAccount
//             }
//         },
//         Record: {
//             screen: RecordScreen,
//             navigationOptions: {
//                 title: routeNames.ecare.record
//             }
//         },
//         ExtraQouta: {
//             screen: ExtraQoutaScreen,
//             navigationOptions: {
//                 title: routeNames.ecare.extraQouta
//             }
//         },
//         InternetReport: {
//             screen: InternetReportScreen,
//             navigationOptions: {
//                 title: routeNames.ecare.internetReport
//             }
//         },
//         Usage: {
//             screen: UsageScreen,
//             navigationOptions: {
//                 title: routeNames.ecare.usage
//             }
//         },
//         PaymentReport: {
//             screen: PaymentReportScreen,
//             navigationOptions: {
//                 title: routeNames.ecare.paymentReport
//             }
//         },
//         BuyGigPack: {
//             screen: BuyGigPackScreen,
//             navigationOptions: {
//                 title: routeNames.ecare.buyGigPack
//             }
//         }
//     },
//     {
//         initialRouteName: routeNames.general.splash,
//         headerMode: 'none',
//         mode: Platform.OS === 'ios' ? 'modal' : 'card'
//     });

// const AppStack = createStackNavigator(
//     {
//         EcareRoot: {
//             screen: EcareRootStack,
//             navigationOptions: {
//                 title: routeNames.ecare.ecareRoot
//             }
//         },
//         Splash: {
//             screen: SplashScreen,
//             navigationOptions: {
//                 title: routeNames.general.splash
//             }
//         },
//         Login: {
//             screen: LoginScreen,
//             navigationOptions: {
//                 title: routeNames.general.login
//             }
//         },
//         RegisterToken: {
//             screen: RegisterTokenScreen,
//             navigationOptions: {
//                 title: routeNames.general.registerToken
//             }
//         },
//         Register: {
//             screen: RegisterScreen,
//             navigationOptions: {
//                 title: routeNames.general.register
//             }
//         },
//         ResetPassword: {
//             screen: ResetPasswordScreen,
//             navigationOptions: {
//                 title: routeNames.general.resetPassword
//             }
//         },
//         ForgotPassword: {
//             screen: ForgotPasswordScreen,
//             navigationOptions: {
//                 title: routeNames.general.forgotPassword
//             }
//         },
//         Help: {
//             screen: HelpScreen,
//             navigationOptions: {
//                 title: routeNames.general.help
//             }
//         },
//         CreateAccount: {
//             screen: CreateAccountScreen,
//             navigationOptions: {
//                 title: routeNames.ecare.createAccount
//             }
//         },
//         Record: {
//             screen: RecordScreen,
//             navigationOptions: {
//                 title: routeNames.ecare.record
//             }
//         },
//         ExtraQouta: {
//             screen: ExtraQoutaScreen,
//             navigationOptions: {
//                 title: routeNames.ecare.extraQouta
//             }
//         },
//         InternetReport: {
//             screen: InternetReportScreen,
//             navigationOptions: {
//                 title: routeNames.ecare.internetReport
//             }
//         },
//         Usage: {
//             screen: UsageScreen,
//             navigationOptions: {
//                 title: routeNames.ecare.usage
//             }
//         },
//         PaymentReport: {
//             screen: PaymentReportScreen,
//             navigationOptions: {
//                 title: routeNames.ecare.paymentReport
//             }
//         },
//         BuyGigPack: {
//             screen: BuyGigPackScreen,
//             navigationOptions: {
//                 title: routeNames.ecare.buyGigPack
//             }
//         }
//     },
//     {
//         initialRouteName: routeNames.general.splash,
//         headerMode: 'none',
//         mode: Platform.OS === 'ios' ? 'modal' : 'card'
//     });


const AppStack = createStackNavigator(
    {
        Test: {
            screen: LoginScreen,
            navigationOptions: {
                title: routeNames.general.login
            }
        }
    },
    {
        initialRouteName: "Test",
        headerMode: 'none',
        mode: Platform.OS === 'ios' ? 'modal' : 'card'
    });

export default createAppContainer(AppStack);