import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createSwitchNavigator } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import RegistrationScreen from "../Screens/RegistrationScreen";
import MapScreen from "../Screens/MapScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import EditProfileScreen from "../Screens/EditProfileScreen";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Colors from "../constants/Colors";
import SportCentersList from "../Screens/SportCentersList";
import TermsAndConditions from "../Screens/TermsAndConditions";
import FindUser from "../Screens/FindUser";
import EventHistory from "../Screens/EventHistory";
import AdminControlPanel from "../Screens/AdminControlPanel";
import allUsersScreen from "../Screens/AdminScreens/allUsersScreen";
import LoginScreen from "../Screens/LoginScreen";
import allEventsScreen from "../Screens/AdminScreens/allEventsScreen";
import userProfileScreen from "../Screens/AdminScreens/userProfileScreen";
import About from "../Screens/About";
import customDrawerComponent from "../Components/customDrawerComponent";
import FriendList from "../Screens/FriendList";
const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
  headerTitleAlign: "center",
};
const LoginRegisterNav = createStackNavigator(
  {
    Login: LoginScreen,
    Registration: RegistrationScreen,
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
    },
  }
);

const MapNav = createStackNavigator(
  {
    Main: {
      screen: MapScreen,
    },
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const AdminNav = createStackNavigator(
  {
    adminPanel: AdminControlPanel,
    adminUsers: allUsersScreen,
    adminEvents: allEventsScreen,
    userProfile: userProfileScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor:
          Platform.OS === "android" ? Colors.adminPanelColor : "",
      },
      headerTintColor:
        Platform.OS === "android" ? "white" : Colors.adminPanelColor,
      headerTitleAlign: "center",
    },
  }
);

const ProfileNav = createStackNavigator(
  {
    profile: ProfileScreen,
    admin: AdminNav,
    editProfile: EditProfileScreen,
    addFriend: FindUser,
    history: EventHistory,
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
    },
  }
);

const SportCentersListNav = createStackNavigator(
  {
    Main: {
      screen: SportCentersList,
    },
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const TermsAndConditionsNavigator = createStackNavigator(
  {
    Main: {
      screen: TermsAndConditions,
    },
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const AboutScreenNavigator = createStackNavigator(
  {
    Main: {
      screen: About,
    },
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const appTabNavigator = {
  Map: {
    screen: MapNav,
    navigationOptions: {
      tabBarIcon: ({ tabInfo }) => {
        return <Ionicons name="ios-map" size={20} color={tabInfo} />;
      },
      tabBarColor: Colors.primaryColor,
    },
  },
  Profile: {
    screen: ProfileNav,
    navigationOptions: {
      tabBarIcon: ({ tabInfo }) => {
        return <Ionicons name="md-contact" size={20} color={tabInfo} />;
      },
      tabBarColor: Colors.accentColor,
    },
  },
};

const MapProfileTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(appTabNavigator, {
        activeTintColor: "white",
        shifting: true,
        barStyle: {
          backgroundColor: Colors.primaryColor,
        },
      })
    : createBottomTabNavigator(appTabNavigator, {
        tabBarOptions: {
          activeTintColor: Colors.accentColor,
        },
      });

const MainNavigator = createDrawerNavigator(
  {
    MapProfile: {
      screen: MapProfileTabNavigator,
      navigationOptions: {
        drawerLabel: "Maps",
      },
    },

    SportCentersList: SportCentersListNav,
    TermsAndConditions: TermsAndConditionsNavigator,
    About: AboutScreenNavigator,
  },
  {
    contentComponent: customDrawerComponent,
  }
);

const Navigator = createSwitchNavigator({
  loginregister: LoginRegisterNav,
  tab: MainNavigator,
});

export default createAppContainer(Navigator);
