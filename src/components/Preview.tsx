import * as React from 'react';
import NetInfo from '@react-native-community/netinfo';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Platform,
  Dimensions,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
} from 'react-native';
import {WishlistData} from '../data/MockData';

interface Props {
  style?: object;
  item?: object;
  imageKey?: number;
  onPress?: any;
  index?: number;
  active?: boolean;
  local?: boolean;
  bigType?: boolean;
  productDetail?: boolean;
  info?: boolean;
  handler?: any;
}

export const Preview: React.FC<Props> = ({
  style,
  item,
  imageKey,
  onPress,
  index,
  active,
  local,
  bigType,
  productDetail,
  info = false,
  handler,
}: any) => {
  let connected: boolean = false;

  const checkConnection = NetInfo.addEventListener((state) => {
    connected = state.isConnected;
  });

  checkConnection();

  const foundItem = WishlistData.find(
    (itemWish) => itemWish.name === item.name,
  );
  let wishImage: ImageSourcePropType = require('../assets/favourite.png');
  let wishStyle: StyleProp<ImageStyle> = {
    height: 15,
    width: 15,
    marginTop: 2,
    tintColor: 'black',
  };

  // To add item to wishlist and animate
  const addToWishlist = () => {
    const index = WishlistData.findIndex(
      (itemWish) => itemWish.name === item.name,
    );
    if (foundItem) {
      WishlistData.splice(index, 1);
      wishImage = require('../assets/favourite.png');
      wishStyle = {height: 15, width: 15, marginTop: 2, tintColor: 'black'};
    } else {
      WishlistData.push(item);
      wishImage = require('../assets/heart.png');
      wishStyle = {height: 15, width: 15, marginTop: 2, tintColor: 'red'};
    }
  };

  if (foundItem) {
    wishImage = require('../assets/heart.png');
    wishStyle = {height: 15, width: 15, marginTop: 2, tintColor: 'red'};
  }

  return (
    <TouchableOpacity
      style={[
        productDetail ? stylesforProduct.videoContainer : styles.videoContainer,
        bigType ? {} : {width: 140, justifyContent: 'flex-start'},
      ]}
      onPress={() => (productDetail ? {} : onPress(item))}
      activeOpacity={productDetail ? 1 : 0.5}
      delayPressIn={0}>
      <View
        style={[
          productDetail
            ? stylesforProduct.imageContainer
            : styles.imageContainer,
          bigType
            ? productDetail
              ? stylesforProduct.shadow
              : styles.shadow
            : [styles.shadow, {borderRadius: 12}],
        ]}>
        <Image
          style={[
            bigType
              ? productDetail
                ? stylesforProduct.videoPreview
                : styles.videoPreview
              : styles.itemPreview,
            bigType ? {} : {height: 135, width: 117},
            ,
          ]}
          source={
            connected
              ? {uri: item[imageKey]}
              : require('../assets/default_clothing_item.jpg')
          }
          defaultSource={require('../assets/default_clothing_item.jpg')}
        />
      </View>
      {info && (
        <View
          style={{
            marginTop: 5,
            width: 115,
          }}>
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.brandName}>{item.brand}</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={styles.priceTag}>${item.price}.00</Text>
            <TouchableOpacity
              delayPressIn={0}
              onPress={() => {
                addToWishlist();
                handler();
              }}
              style={{
                width: 25,
                height: 25,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={wishImage} style={wishStyle} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
};

const screenWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  videoContainer: {
    width: 260,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    borderRadius: 19,
  },
  videoPreview: {
    width: 250,
    height: 155,
    borderRadius: 12,
    resizeMode: 'cover',
  },
  itemPreview: {
    width: 120,
    height: 155,
    borderRadius: 12,
    resizeMode: 'cover',
  },
  desc: {
    fontSize: 14,
    letterSpacing: 0,
    lineHeight: 24,
    marginTop: 18,
    fontFamily: 'roboto_regular',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.1,
        shadowRadius: 5,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  productName: {
    color: '#5c5e5d',
    fontWeight: 'bold',
    fontSize: 15,
    fontFamily: 'roboto_regular',
  },
  brandName: {
    color: '#5c5e5d',
    fontSize: 12,
    fontFamily: 'roboto_regular',
  },
  priceTag: {
    fontWeight: 'bold',
    color: '#5c5e5d',
  },
});

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const stylesforProduct = StyleSheet.create({
  videoContainer: {
    width: windowWidth,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  videoPreview: {
    width: windowWidth,
    height: '100%',
    resizeMode: 'cover',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.1,
        shadowRadius: 5,
      },
      android: {
        elevation: 0,
      },
    }),
  },
});
