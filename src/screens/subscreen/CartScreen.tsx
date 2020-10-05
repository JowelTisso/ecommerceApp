import * as React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import CartItem from '../../components/CartItem';
import {cartData} from '../../data/MockData';
import {SwipeListView} from 'react-native-swipe-list-view';
import * as CustomColors from '../../color/CustomColors';
import Header from '../../components/Header';
import CartItemHidden from '../../components/CartItemHidden';

const height = Dimensions.get('window').height;

const CartScreen = (props: any) => {
  const [promoValue, setPromoValue] = React.useState('springsale');
  const [cartIndex, setCartIndex] = React.useState<number>();
  const [state, setState] = React.useState(0);

  React.useEffect(() => {}, [cartIndex, state]);

  var amount: number = 0;

  const getTotalAmount = () => {
    let price: number = 0;
    cartData.map((item: any) => {
      price = item.price * item.count;
      amount += price;
    });
  };

  getTotalAmount();

  const renderHandler = () => {
    setState(Math.random());
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Header props={props} title="My Bag" />
      </View>
      <View style={{height: '63%'}}>
        <SwipeListView
          data={cartData}
          renderItem={({item}: any) => {
            return (
              <View style={{height: 90}}>
                <CartItem product={item} renderHandler={renderHandler} />
              </View>
            );
          }}
          keyExtractor={(item) => item.key.toString()}
          renderHiddenItem={(data) => (
            <CartItemHidden data={data} setCartIndex={setCartIndex} />
          )}
          leftOpenValue={75}
          rightOpenValue={-75}
          disableRightSwipe={true}
          ItemSeparatorComponent={() => {
            return <View style={styles.separator} />;
          }}
        />
      </View>
      <View
        style={{
          height: '35%',
          paddingLeft: 20,
          paddingRight: 20,
        }}>
        <View>
          <View
            style={[
              styles.summaryContainer,
              {
                borderBottomWidth: 1,
                borderBottomColor: CustomColors.border,
                paddingBottom: 2,
              },
            ]}>
            <Text style={styles.promo}>Promo code</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TextInput
                style={styles.promoInputText}
                value={promoValue}
                placeholder={'promo code'}
                onChangeText={(e) => setPromoValue(e)}
              />

              <TouchableOpacity
                delayPressIn={0}
                style={{height: 20, width: 25}}
                onPress={() => {
                  setPromoValue('');
                }}>
                <Image
                  source={require('../../assets/cancel.png')}
                  style={styles.clearBtn}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.summaryContainer, {paddingTop: 13}]}>
            <Text style={styles.promo}>Total Amount</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginRight: 5,
              }}>
              <Text style={{fontWeight: 'bold', color: '#252626'}}>
                $ {amount}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            marginTop: 28,
          }}>
          <TouchableOpacity delayPressIn={0} style={styles.button}>
            <View>
              <Text style={{color: 'white', fontSize: 15}}>Checkout</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  headerContainer: {
    marginLeft: -5,
    marginRight: -5,
    marginTop: 14,
    paddingLeft: 20,
    paddingRight: 20,
  },
  promo: {
    fontWeight: 'bold',
    color: CustomColors.lightText,
  },
  promoInputText: {
    fontWeight: 'bold',
    color: CustomColors.secondaryText,
    fontSize: 14,
    width: 100,
  },
  mainContainer: {
    backgroundColor: 'white',
    flex: 1,
    paddingTop: 20,
  },
  separator: {
    height: 1,
    backgroundColor: CustomColors.border,
    marginLeft: 20,
    marginRight: 20,
  },
  button: {
    backgroundColor: '#212020',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    elevation: 4,
    height: 47,
  },
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  clearBtn: {
    height: 12,
    width: 12,
    marginLeft: 7,
    marginTop: 5,
  },
});
