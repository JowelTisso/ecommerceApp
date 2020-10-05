import * as React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import CartItem from '../../components/CartItem';
import {cartData} from '../../data/MockData';
import {SwipeListView} from 'react-native-swipe-list-view';
import * as CustomColors from '../../color/CustomColors';
import HeaderNav from '../../components/Header';
import {SafeAreaView} from 'react-native-safe-area-context';

const height = Dimensions.get('window').height;

const CartScreen = (props: any) => {
  const [promoValue, setPromoValue] = React.useState('springsale');
  const [cartIndex, setCartIndex] = React.useState<number>();

  React.useEffect(() => {}, [cartIndex]);

  const HiddenItem = (props: any) => {
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
            setCartIndex(cartData.length);
          }}>
          <Image
            source={require('../../assets/delete.png')}
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

  return (
    <View style={styles.mainContainer}>
      <View
        style={{
          marginLeft: -5,
          marginRight: -5,
          marginTop: 14,
          paddingLeft: 20,
          paddingRight: 20,
        }}>
        <HeaderNav props={props} />
      </View>
      <View style={{height: '63%'}}>
        <SwipeListView
          data={cartData}
          renderItem={({item, index}: any) => (
            <View style={{height: 90}}>
              <CartItem product={item} />
            </View>
          )}
          keyExtractor={(item) => item.key.toString()}
          renderHiddenItem={(data, rowMap) => <HiddenItem data={data} />}
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
        <View style={{}}>
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
                style={{
                  fontWeight: 'bold',
                  color: CustomColors.colorAccent,
                  fontSize: 14,
                  width: 100,
                }}
                value={promoValue}
                placeholder={'promo code'}
                onChangeText={() => {}}
              />

              <TouchableOpacity
                delayPressIn={0}
                style={{height: 20, width: 25}}
                onPress={() => {
                  setPromoValue('');
                }}>
                <Image
                  source={require('../../assets/cancel.png')}
                  style={{
                    height: 12,
                    width: 12,
                    marginLeft: 7,
                    marginTop: 5,
                  }}
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
              <Text style={{fontWeight: 'bold', color: '#252626'}}>$ 210</Text>
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
  promo: {
    fontWeight: 'bold',
    color: CustomColors.lightText,
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
});
