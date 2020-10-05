import {useIsFocused} from '@react-navigation/native';
import * as React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Platform,
  StatusBar,
  ImageSourcePropType,
  StyleProp,
  ImageStyle,
  LogBox,
} from 'react-native';
import {FlatListSlider} from 'react-native-flatlist-slider';
import Header from '../../components/Header';
import {Preview} from '../../components/Preview';
import {cartData, WishlistData} from '../../data/MockData';

const ProductDetailScreen = (props: any) => {
  const [state, setState] = React.useState(0);

  const isFocused = useIsFocused();

  React.useEffect(() => {}, [state, isFocused]);

  const {item} = props.route.params;

  const imageHeight = Dimensions.get('window').height;
  const statusbarHeight: any = StatusBar.currentHeight;

  const addToCart = () => {
    const indexOfItem = cartData.findIndex((data) => data.name === item.name);
    if (indexOfItem != -1) {
      cartData[indexOfItem].count++;
    } else {
      cartData.push(item);
    }
  };

  const renderHandler = () => {
    setState(Math.random());
  };

  let foundItem = WishlistData.find((itemWish) => itemWish.name === item.name);

  let wishImage: ImageSourcePropType = require('../../assets/favourite.png');
  let wishStyle: StyleProp<ImageStyle> = {
    height: 20,
    width: 20,
    marginLeft: 17,
    tintColor: '#5c5e5d',
  };

  // To add item to wishlist and animate
  const addToWishlist = () => {
    foundItem = WishlistData.find((itemWish) => itemWish.name === item.name);

    const index = WishlistData.findIndex(
      (itemWish) => itemWish.name === item.name,
    );

    if (foundItem) {
      WishlistData.splice(index, 1);
      wishImage = require('../../assets/favourite.png');
      wishStyle = {height: 15, width: 15, marginTop: 2, tintColor: 'black'};
    } else {
      WishlistData.push(item);
      wishImage = require('../../assets/heart.png');
      wishStyle = {height: 15, width: 15, marginTop: 2, tintColor: 'red'};
    }
  };

  if (foundItem) {
    wishImage = require('../../assets/heart.png');
    wishStyle = {height: 20, width: 20, marginLeft: 17, tintColor: 'red'};
  }

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          marginTop: Platform.OS === 'android' ? statusbarHeight + 10 : 0,
          marginLeft: 15,
          marginRight: 15,
        }}>
        <Header props={props} />
      </View>
      <ScrollView style={{flex: 1}}>
        <View style={{flex: 1.5, minHeight: imageHeight / 2}}>
          <FlatListSlider
            data={item.images}
            autoscroll={false}
            indicator={false}
            loop={false}
            component={<Preview bigType={true} productDetail={true} />}
            indicatorContainerStyle={{position: 'absolute', bottom: 10}}
          />
        </View>
        <View style={styles.informationContainer}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text style={styles.title}>{item.name}</Text>
                <Image
                  source={require('../../assets/star.png')}
                  style={styles.star}
                />
                <Text style={{fontSize: 13, color: '#5c5e5d', marginTop: 2}}>
                  {item.ratings}
                </Text>
              </View>
              <Text style={{color: '#5c5e5d', fontSize: 13}}>{item.brand}</Text>
            </View>
            <View style={{flexDirection: 'row', marginRight: 5}}>
              <Image
                source={require('../../assets/share.png')}
                style={styles.share_like}
              />
              <TouchableOpacity
                delayPressIn={0}
                onPress={() => {
                  addToWishlist();
                  renderHandler();
                }}>
                <Image source={wishImage} style={wishStyle} />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.description}>Description</Text>
          <Text style={{color: '#5c5e5d', fontSize: 13}}>{item.desc}</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <View>
              <Text
                style={{color: '#5c5e5d', fontWeight: 'bold', fontSize: 15}}>
                Colors
              </Text>
              <View style={{flexDirection: 'row', marginTop: 7}}>
                <Image
                  source={require('../../assets/circle.png')}
                  style={[
                    {
                      tintColor: '#f5f2f2',
                    },
                    styles.colorIcon,
                  ]}
                />
                <Image
                  source={require('../../assets/circle.png')}
                  style={[
                    {
                      tintColor: 'black',
                    },
                    styles.colorIcon,
                  ]}
                />
                <Image
                  source={require('../../assets/circle.png')}
                  style={[
                    {
                      tintColor: 'maroon',
                    },
                    styles.colorIcon,
                  ]}
                />
                <Image
                  source={require('../../assets/circle.png')}
                  style={[
                    {
                      tintColor: 'lightblue',
                    },
                    styles.colorIcon,
                  ]}
                />
              </View>
            </View>
            <View style={{marginRight: 10}}>
              <Text style={{color: '#5c5e5d', fontWeight: 'bold'}}>Price</Text>
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: 'bold',
                  color: 'black',
                }}>
                ${item.price}.00
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={{alignItems: 'center', marginTop: 20, marginBottom: 20}}
            delayPressIn={0}
            onPress={() => {
              addToCart();
              renderHandler();
            }}>
            <Text style={styles.button}>Add to cart</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

export default ProductDetailScreen;

const styles = StyleSheet.create({
  title: {
    marginRight: 10,
    fontWeight: 'bold',
    color: '#303030',
    fontSize: 17,
  },
  informationContainer: {
    flex: 1.3,
    paddingLeft: 18,
    paddingRight: 18,
    paddingTop: 10,
  },
  star: {
    height: 10,
    width: 10,
    marginRight: 5,
    marginTop: 2,
  },
  share_like: {
    height: 20,
    width: 20,
    tintColor: '#5c5e5d',
    marginLeft: 17,
  },
  colorIcon: {
    height: 20,
    width: 20,
    marginRight: 8,
  },
  description: {
    fontSize: 14,
    color: '#5c5e5d',
    fontWeight: 'bold',
    marginTop: 10,
  },
  button: {
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
    width: 250,
    height: 45,
    backgroundColor: '#212020',
    borderRadius: 30,
  },
});
