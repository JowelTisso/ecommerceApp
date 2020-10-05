import * as React from 'react';
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StatusBar,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import * as RootNavigation from '../routes/RootNavigation';

const HeaderNav = (props: any) => {
  const route = props.props.route.name;
  const navigation = props.props.navigation;

  let image: ImageSourcePropType;
  let menuStyle: StyleProp<ImageStyle>;

  switch (route) {
    case 'Home':
      image = require('../assets/menu.png');
      menuStyle = styles.menuIcon;
      break;
    case 'Search':
      image = require('../assets/menu.png');
      menuStyle = styles.menuIcon;
      break;
    case 'Wishlist':
      image = require('../assets/menu.png');
      menuStyle = styles.menuIcon;
      break;
    case 'Profile':
      image = require('../assets/menu.png');
      menuStyle = styles.menuIcon;
      break;
    default:
      image = require('../assets/left-arrow.png');
      menuStyle = styles.backIcon;
      break;
  }

  const clickHandler = () => {
    switch (route) {
      case 'Home':
        navigation.openDrawer();
        break;
      case 'Search':
        navigation.openDrawer();
        break;
      case 'Wishlist':
        navigation.openDrawer();
        break;
      case 'Profile':
        navigation.openDrawer();
        break;
      default:
        props.props.navigation.goBack();
        break;
    }
  };

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        delayPressIn={0}
        onPress={() => {
          clickHandler();
        }}>
        <Image source={image} style={menuStyle} />
      </TouchableOpacity>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          delayPressIn={0}
          onPress={() => RootNavigation.navigate('Cart', {})}>
          <Image
            source={require('../assets/cart.png')}
            style={styles.cartIcon}
          />
        </TouchableOpacity>
        <Image source={require('../assets/bell.png')} style={styles.bellIcon} />
      </View>
    </View>
  );
};

export default HeaderNav;

const statusbarHeight: any = StatusBar.currentHeight;

const styles = StyleSheet.create({
  menuIcon: {
    height: 20,
    width: 20,
    transform: [{scaleX: -1}],
  },
  backIcon: {
    height: 20,
    width: 20,
  },
  cartIcon: {
    height: 20,
    width: 20,
    marginRight: 20,
  },
  bellIcon: {
    height: 20,
    width: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    height: 30,
  },
});
