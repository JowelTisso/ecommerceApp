import * as React from 'react';
import {
  Image,
  StyleSheet,
  Text,
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
import Icon from 'react-native-vector-icons/Ionicons';

const height = Dimensions.get('window').height;

const CartScreen = (props: any) => {
  const [promoValue, setPromoValue] = React.useState('Add promo code');
  const [cartIndex, setCartIndex] = React.useState<number>();
  const [state, setState] = React.useState(0);
  const [promoBtnState, setPromoBtnState] = React.useState(false);
  const navigation = props.navigation;

  React.useEffect(() => {
    // Button state handler
    const buttonStateHandler = () => {
      if (promoValue === 'Add promo code') {
        setPromoBtnState(false);
      } else {
        setPromoBtnState(true);
      }
    };

    buttonStateHandler();
  }, [cartIndex, state, promoValue]);

  var amount: number = 0;
  const item = props.route.params.item;

  const getTotalAmount = () => {
    let price: number = 0;
    cartData.map((item: any) => {
      price = item.price * item.count;
      amount += price;
    });
    //For calculating the discount in the total amount
    if (amount != 0) {
      if (item) {
        if (promoValue != 'Add promo code') {
          const discountAmount = amount * (item.discount / 100);
          amount = amount - discountAmount;
        }
      }
    }
  };

  getTotalAmount();

  // For re-rendering the component to update changes
  const renderHandler = () => {
    setState(Math.random());
  };
  // For passing this handler to another component to change the promocode value from it
  const promoHandler = (data: any) => {
    setPromoValue(data);
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
                height: 40,
              },
            ]}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                flex: 1,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={require('../../assets/discount.png')}
                  style={{width: 15, height: 15, marginRight: 15}}
                />
                <TouchableOpacity
                  delayPressIn={0}
                  onPress={() => {
                    navigation.navigate('PromoCode', {
                      promoHandler,
                    });
                  }}
                  disabled={promoBtnState}>
                  <Text style={styles.promo}>{promoValue}</Text>
                </TouchableOpacity>
              </View>
              {promoValue !== 'Add promo code' && (
                <TouchableOpacity
                  onPress={() => {
                    setPromoValue('Add promo code');
                  }}
                  style={{
                    height: 25,
                    width: 30,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Icon
                    name="close-circle"
                    size={20}
                    color={CustomColors.colorAccent}
                  />
                </TouchableOpacity>
              )}
            </View>
          </View>
          <View style={[styles.summaryContainer, {paddingTop: 13}]}>
            <View
              style={{
                flexDirection: 'row',
                marginLeft: -1,
              }}>
              <Icon name="wallet" size={17} color={CustomColors.colorAccent} />
              <Text style={[styles.promo, {marginLeft: 14}]}>Total Amount</Text>
            </View>
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
