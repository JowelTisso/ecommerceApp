import * as React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import * as CustomColors from '../color/CustomColors';
import PopupMenu from './PopupMenu';

const CartItem = (props: any) => {
  const quantity = props.product.count;
  const product = props.product;

  const [count, setCount] = React.useState(quantity);

  const onPress = (type: string) => {
    if (type === 'increment') {
      setCount(count + 1);
      props.product.count++;
      props.renderHandler();
    } else if (type === 'decrement' && count > 1) {
      setCount(count - 1);
      props.product.count--;
      props.renderHandler();
    }
  };

  return (
    <View style={styles.cartItemContainer}>
      <View style={styles.imageContainer}>
        {/*         Product Image        */}
        <Image
          source={{uri: product.image}}
          style={{
            height: 60,
            width: 60,
            borderRadius: 7,
          }}
        />
      </View>
      {/*     Product Name     */}
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

        {/*       Product price        */}
        <Text style={{fontSize: 14, fontWeight: 'bold', paddingBottom: 2}}>
          ${props.product.price}
        </Text>

        {/*          Size and Color button container            */}

        <View style={{flexDirection: 'row', paddingBottom: 1}}>
          {/*           Size selector Button            */}

          <TouchableOpacity delayPressIn={0}>
            <PopupMenu product={product} type={'size'} />
          </TouchableOpacity>
          {/*           Separator            */}
          <Text style={{marginTop: -2, color: 'gray'}}> | </Text>

          {/*           Size selector Button            */}

          <TouchableOpacity delayPressIn={0}>
            <PopupMenu product={product} type={'color'} />
          </TouchableOpacity>
        </View>
      </View>

      {/*                Increment & Decrement button container               */}

      <View style={{flexDirection: 'row', flex: 1, paddingTop: 4}}>
        {/*             Decrement item button               */}
        <TouchableOpacity
          delayPressIn={0}
          style={styles.minusContainer}
          onPress={() => onPress('decrement')}>
          <View style={styles.minusBtn}>
            <Image
              style={styles.minusImg}
              source={require('../assets/minus.png')}
            />
          </View>
        </TouchableOpacity>
        <Text style={styles.countButton}>{count}</Text>

        {/*             Increment item button               */}
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
  minusContainer: {
    flex: 1,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  minusImg: {
    height: 9,
    width: 8,
    marginLeft: 5,
    marginTop: 2,
  },
});
