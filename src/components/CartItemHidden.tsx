import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {cartData} from '../data/MockData';

const CartItemHidden = (props: any) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <TouchableOpacity
        delayPressIn={0}
        style={{
          flex: 1,
          backgroundColor: '#ff3736',
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}
        onPress={() => {
          cartData.splice(props.data.index, 1);
          props.setCartIndex(cartData.length);
        }}>
        <Image
          source={require('../assets/delete.png')}
          style={{
            height: 18,
            width: 18,
            marginRight: 27,
            tintColor: 'white',
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CartItemHidden;
