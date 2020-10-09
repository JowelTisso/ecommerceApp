import * as React from 'react';
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StatusBar,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {cartData} from '../data/MockData';
import * as RootNavigation from '../routes/RootNavigation';
import * as CustomColor from '../color/CustomColors';

const Header = (props: any) => {
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

  const screenWidth = Dimensions.get('window').width;

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        delayPressIn={0}
        onPress={() => {
          clickHandler();
        }}>
        <Image source={image} style={menuStyle} />
      </TouchableOpacity>
      <View
        style={{
          // position: 'absolute',
          // left: screenWidth / 2 - 45, //To align the header title in center
          marginLeft: 30,
        }}>
        <Text
          style={{
            color: CustomColor.colorAccent,
            fontWeight: 'bold',
            fontSize: 15,
          }}>
          {props.title}
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          delayPressIn={0}
          onPress={() => RootNavigation.navigate('Cart', {})}>
          <View style={{flexDirection: 'row', width: 35}}>
            <Image
              source={require('../assets/cart.png')}
              style={styles.cartIcon}
            />
            <Ionicon
              name={'ellipse'}
              size={10}
              color={'pink'}
              style={{
                marginLeft: -4,
                display: cartData.length > 0 ? 'flex' : 'none',
              }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          delayPressIn={0}
          onPress={() => {
            RootNavigation.navigate('Notification', {});
          }}>
          <Image
            source={require('../assets/bell.png')}
            style={styles.bellIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

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
