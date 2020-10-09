import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StatusBar,
  StyleProp,
  StyleSheet,
  View,
} from 'react-native';
import {navigationRef} from './RootNavigation';
import {
  HomeScreen,
  ProductDetailScreen,
  CartScreen,
  SearchScreen,
  WishlistScreen,
  ProfileScreen,
  ViewMoreScreen,
  NotificationScreen,
  PromoCodeScreen,
} from '../screens/Screens';
import ProductsScreen from '../screens/subscreen/ProductsScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const statusbarHeight: any = StatusBar.currentHeight;

const getCurrentRoute = () => {
  return navigationRef.current.getCurrentRoute().name;
};

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let icon: ImageSourcePropType = require('../assets/home.png');
          let iconBg: StyleProp<ImageStyle>;

          //For Switching Animation in the tab icons
          switch (route.name) {
            case 'Home':
              icon = focused
                ? require('../assets/homewhite.png')
                : require('../assets/home.png');
              iconBg = focused
                ? styles.activeIconBackground
                : styles.iconBackground;
              break;
            case 'Search':
              icon = focused
                ? require('../assets/searchwhite.png')
                : require('../assets/search.png');
              iconBg = focused
                ? styles.activeIconBackground
                : styles.iconBackground;
              break;
            case 'Wishlist':
              icon = focused
                ? require('../assets/heartwhite.png')
                : require('../assets/heart.png');
              iconBg = focused
                ? styles.activeIconBackground
                : styles.iconBackground;
              break;
            case 'Profile':
              icon = focused
                ? require('../assets/userwhite.png')
                : require('../assets/user.png');
              iconBg = focused
                ? styles.activeIconBackground
                : styles.iconBackground;
              break;
          }

          return (
            <View style={iconBg}>
              <Image source={icon} style={styles.icon} />
            </View>
          );
        },
      })}
      tabBarOptions={{
        showLabel: false,
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Wishlist" component={WishlistScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const MainStack = () => {
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen name="Home" component={HomeTabs} />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
      <Stack.Screen name="ViewMore" component={ViewMoreScreen} />
      <Stack.Screen name="ProductsScreen" component={ProductsScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="Notification" component={NotificationScreen} />
      <Stack.Screen name="PromoCode" component={PromoCodeScreen} />
    </Stack.Navigator>
  );
};

const HomeStack = () => {
  const [currentRoute, setCurrentRoute] = React.useState('Home');

  return (
    <NavigationContainer
      ref={navigationRef}
      onStateChange={() => {
        setCurrentRoute(getCurrentRoute());
      }}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={MainStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default HomeStack;

const styles = StyleSheet.create({
  navBarContainer: {
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#f7f9fa',
    borderTopWidth: 1,
    backgroundColor: 'white',
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
  },
  icon: {
    width: 15,
    height: 15,
  },
  activeIcon: {
    width: 15,
    height: 15,
  },
  iconBackground: {
    backgroundColor: '#f7f9fa',
    padding: 8,
    borderRadius: 20,
  },
  activeIconBackground: {
    borderRadius: 20,
    backgroundColor: 'black',
    padding: 12,
  },
});
