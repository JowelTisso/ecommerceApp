import * as React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import * as CustomColors from '../color/CustomColors';

const CartItem = (props: any) => {
  const quantity = props.product.count;

  const [count, setCount] = React.useState(quantity);

  const onPress = (type: string) => {
    if (type === 'increment') {
      setCount(count + 1);
    } else if (type === 'decrement' && count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <View style={styles.cartItemContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: props.product.image}}
          style={{
            height: 60,
            width: 60,
            borderRadius: 7,
          }}
        />
      </View>
      <View
        style={{
          paddingLeft: 20,
          flex: 2.5,
        }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            paddingBottom: 2,
          }}>
          {props.product.name}
        </Text>
        <Text style={{fontSize: 14, fontWeight: 'bold', paddingBottom: 2}}>
          ${props.product.price}
        </Text>
        <View style={{flexDirection: 'row', paddingBottom: 1}}>
          <Text style={styles.basefont}>Size: M</Text>
          <Text style={styles.basefont}> | Color: grey</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', flex: 1, paddingTop: 4}}>
        <TouchableOpacity
          delayPressIn={0}
          style={{
            flex: 1,
            height: 25,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => onPress('decrement')}>
          <View style={styles.minusBtn}>
            <Image
              style={[
                {
                  height: 9,
                  width: 8,
                  marginLeft: 5,
                  marginTop: 2,
                },
              ]}
              source={require('../assets/minus.png')}
            />
          </View>
        </TouchableOpacity>
        <Text style={styles.countButton}>{count}</Text>
        <TouchableOpacity
          delayPressIn={0}
          style={{flex: 1, height: 25}}
          onPress={() => onPress('increment')}>
          <Text
            style={[
              styles.countButton,
              {
                borderTopRightRadius: 15,
                borderBottomRightRadius: 15,
              },
            ]}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  basefont: {
    fontSize: 12,
    color: CustomColors.lightText,
    fontWeight: 'bold',
  },
  countButton: {
    fontSize: 12,
    height: 25,
    flex: 1,
    textAlign: 'center',
    backgroundColor: CustomColors.background,
    textAlignVertical: 'center',
    fontWeight: 'bold',
  },
  cartItemContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 90,
    paddingTop: 13,
    paddingLeft: 20,
    paddingRight: 20,
  },
  imageContainer: {
    elevation: 2,
    backgroundColor: 'white',
    height: 60,
    width: 60,
    borderRadius: 7,
    marginTop: 2,
  },
  minusBtn: {
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    backgroundColor: CustomColors.background,
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
  },
});
