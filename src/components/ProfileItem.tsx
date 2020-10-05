import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import * as CustomColor from '../color/CustomColors';

const ProfileItem = (props: any) => {
  const data = props.data;

  return (
    <View style={{flexDirection: 'row', height: 60, marginTop: 5}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 12,
        }}>
        <View
          style={{
            backgroundColor: 'pink',
            justifyContent: 'center',
            alignItems: 'center',
            height: 30,
            width: 30,
            borderRadius: 15,
          }}>
          <Image source={data.image} style={{height: 12, width: 12}} />
        </View>
      </View>
      <View style={{flex: 6, justifyContent: 'center', paddingLeft: 17}}>
        <Text style={{fontWeight: 'bold'}}>{data.title}</Text>
        <Text
          style={{
            fontSize: 13,
            fontWeight: 'bold',
            color: CustomColor.lightTextv2,
          }}>
          {data.value}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../assets/arrow.png')}
          style={{height: 17, width: 17, tintColor: 'gray'}}
        />
      </View>
    </View>
  );
};

export default ProfileItem;

const styles = StyleSheet.create({});
