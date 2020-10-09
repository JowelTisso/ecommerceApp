import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

const PromoCodeItem = (props: any) => {
  const navigation = props.navigation;
  const promoHandler = props.promoHandler;
  const item = props.item;

  return (
    <TouchableOpacity
      style={{
        // backgroundColor: '#666464',
        height: 100,
        borderRadius: 10,
      }}
      onPress={() => {
        navigation.navigate('Cart', {item: item});
        promoHandler(item.code);
      }}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        // colors={['#49494a', '#575759', '#616163']}
        // colors={['#9BA1B0', '#C0C4CA', '#E4E7E4']}
        colors={['#777F96', '#9BA1B0', '#C0C4CA']}
        style={styles.linearGradient}>
        <View style={{flexDirection: 'row', flex: 1}}>
          <Icon
            name="ellipse"
            size={30}
            color="white"
            style={{alignSelf: 'center', marginLeft: -15}}
          />
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={{flex: 1.8, paddingLeft: 10}}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: 'bold',
                  color: 'white',
                  marginBottom: 2,
                }}>
                {item.discountTag} OFF
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 'bold',
                  color: '#c5c5c9',
                  marginBottom: 5,
                }}>
                UPTO {item.maxDiscount}
              </Text>
              <Text style={{fontSize: 14, fontWeight: 'bold', color: 'white'}}>
                {item.description}
              </Text>
            </View>
            <View style={{height: '100%', marginTop: 35, marginRight: 6}}>
              <Text
                style={{
                  // color: '#08ff29',
                  color: '#545d7d',
                  // color: '#fef5ff',
                  fontWeight: 'bold',
                  fontSize: 23,
                }}>
                {item.code}
              </Text>
              <Text
                style={{color: '#dcdce0', fontWeight: 'bold', fontSize: 13}}>
                Coupon Expires
              </Text>
              <Text
                style={{color: '#dcdce0', fontWeight: 'bold', fontSize: 13}}>
                {item.expiryDate}
              </Text>
            </View>
          </View>
          <Icon
            name="ellipse"
            size={30}
            color="white"
            style={{alignSelf: 'center', marginRight: -15}}
          />
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default PromoCodeItem;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    borderRadius: 10,
  },
});
