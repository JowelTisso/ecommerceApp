import * as React from 'react';
import {useEffect, useState} from 'react';
import {
  Image,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  BackHandler,
} from 'react-native';
import * as RootNavigation from '../routes/RootNavigation';

const routeStack: Array<string> = ['Home'];

const NavBar = ({navref}: any) => {
  const [currentRoute, setCurrentRoute] = useState('Home');

  const backPress = () => {
    if (currentRoute !== 'Home') {
      routeStack.pop();
      setCurrentRoute(routeStack[routeStack.length - 1]);
      return false;
    }

    if (currentRoute === 'Home') {
      BackHandler.exitApp();
      return true;
    }
  };
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backPress);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backPress);
  }, [currentRoute]);

  return (
    <View ref={navref} style={styles.navBarContainer}>
      <View style={styles.iconContainer}>
        <TouchableWithoutFeedback
          style={styles.iconContainer}
          onPress={() => (
            RootNavigation.navigate('Home', {}),
            routeStack.push('Home'),
            setCurrentRoute('Home')
          )}>
          <View
            style={
              currentRoute === 'Home'
                ? styles.activeIconBackground
                : styles.iconBackground
            }>
            <Image
              source={
                currentRoute === 'Home'
                  ? require('../assets/homewhite.png')
                  : require('../assets/home.png')
              }
              style={currentRoute === 'Home' ? styles.activeIcon : styles.icon}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>

      <View style={styles.iconContainer}>
        <TouchableWithoutFeedback
          style={styles.iconContainer}
          onPress={() => (
            RootNavigation.navigate('Search', {}),
            routeStack.push('Search'),
            setCurrentRoute('Search')
          )}>
          <View
            style={
              currentRoute === 'Search'
                ? styles.activeIconBackground
                : styles.iconBackground
            }>
            <Image
              source={
                currentRoute === 'Search'
                  ? require('../assets/searchwhite.png')
                  : require('../assets/search.png')
              }
              style={
                currentRoute === 'Search' ? styles.activeIcon : styles.icon
              }
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.iconContainer}>
        <TouchableWithoutFeedback
          delayPressIn={0}
          style={styles.iconContainer}
          onPress={() => (
            RootNavigation.navigate('Wishlist', {}),
            routeStack.push('Wishlist'),
            setCurrentRoute('Wishlist')
          )}>
          <View
            style={
              currentRoute === 'Wishlist'
                ? styles.activeIconBackground
                : styles.iconBackground
            }>
            <Image
              source={
                currentRoute === 'Wishlist'
                  ? require('../assets/heartwhite.png')
                  : require('../assets/heart.png')
              }
              style={
                currentRoute === 'Wishlist' ? styles.activeIcon : styles.icon
              }
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.iconContainer}>
        <TouchableWithoutFeedback
          delayPressIn={0}
          style={styles.iconContainer}
          onPress={() => (
            RootNavigation.navigate('Profile', {}),
            routeStack.push('Profile'),
            setCurrentRoute('Profile')
          )}>
          <View
            style={
              currentRoute === 'Profile'
                ? styles.activeIconBackground
                : styles.iconBackground
            }>
            <Image
              source={
                currentRoute === 'Profile'
                  ? require('../assets/userwhite.png')
                  : require('../assets/user.png')
              }
              style={
                currentRoute === 'Profile' ? styles.activeIcon : styles.icon
              }
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default NavBar;

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
