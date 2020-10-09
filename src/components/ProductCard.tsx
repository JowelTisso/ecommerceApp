import React from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import * as CustomColor from '../color/CustomColors';
import {bottomSheetRef} from '../routes/RootNavigation';
import {itemIndex, WishlistData} from '../data/MockData';

const ProductCard = (props: any) => {
  const item = props.item;
  const columnIdentifier = item.key % 2; //For determining the second column and adding top margin to it
  const arraySize: number = props.arraysize - 1; // For determining the last item in the array and adding bottom margin to it

  // For Wishlist Screen
  const wishlistLength = WishlistData.length - 1;
  const handler = props.handler;

  //Alert menu for removing an item from wishlist
  const alertMenu = () => {
    Alert.alert(
      'Remove',
      'Are you sure?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            WishlistData.splice(WishlistData.indexOf(item), 1); //To remove the data from the database
            handler(); // For re-rendering the parent component to update the list
          },
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <View
      style={
        props.isProductScreen
          ? {
              flex: arraySize === item.key ? 0 : 1, // Setting flex:0 for the last element to be able to set width manually
              width: '47%', // width only works for flex:0 which is the last element
              margin: 5,
              marginTop: columnIdentifier === 1 ? 35 : 10,
              marginBottom: arraySize === item.key ? 30 : 0,
            }
          : {
              flex: wishlistLength === props.index ? 0 : 1, // To find out the last odd item and set the flex to 0
              width: '47%', // width only works for flex:0 which is the last element
              margin: 5,
            }
      }>
      <TouchableOpacity
        delayPressIn={0}
        onPress={() => {
          props.navigate('ProductDetail', {item: item, handler: props.handler});
        }}>
        <View
          style={{elevation: 4, backgroundColor: 'white', borderRadius: 20}}>
          <Image source={{uri: item.image}} style={styles.cardImage} />
          {props.route.name !== 'ProductsScreen' && (
            <TouchableOpacity
              delayPressIn={0}
              onPress={() => {
                alertMenu();
              }}
              style={styles.moreContainer}>
              <Image
                source={require('../assets/delete.png')}
                style={styles.moreMenu}
              />
            </TouchableOpacity>
          )}
        </View>
        <View style={{paddingLeft: 15, paddingTop: 10}}>
          <Text style={styles.cardTitle}>{item.name}</Text>
          <Text style={{fontSize: 13, color: CustomColor.secondaryText}}>
            {item.brand}
          </Text>
          <Text style={styles.cardPrice}>$ {item.price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  cardImage: {
    height: 250,
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 20,
  },
  cardTitle: {
    fontSize: 17,
    fontFamily: 'Mansalva-Regular',
    fontWeight: 'normal',
  },
  cardPrice: {
    marginTop: 5,
    fontFamily: 'Mansalva-Regular',
    fontSize: 15,
  },
  moreMenu: {
    width: 12,
    height: 12,
    tintColor: '#fc585e',
    margin: 5,
    marginTop: 8,
    alignSelf: 'center',
  },
  moreContainer: {
    position: 'absolute',
    alignSelf: 'flex-end',
    right: 10,
    top: 8,
    width: 28,
    height: 28,
    margin: -5,
    backgroundColor: 'white',
    borderRadius: 20,
  },
});
