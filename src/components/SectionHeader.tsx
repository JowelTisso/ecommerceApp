import * as React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Categories} from '../data/MockData';

interface Props {
  title?: string;
  navigate?: any;
}

const SectionHeader = (props: any) => {
  return (
    <View style={styles.sectionHeader}>
      <Text style={{fontWeight: 'bold', fontSize: 15, color: '#484a49'}}>
        {props.title}
      </Text>
      <TouchableOpacity
        delayPressIn={0}
        onPress={() => {
          props.navigation.navigate('ViewMore', {
            data: Categories,
            handler: props.handler,
          });
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              color: '#5a5c5b',
              fontSize: 13,
              fontFamily: 'roboto_regular',
            }}>
            View More
          </Text>
          <Image
            source={require('../assets/arrow.png')}
            style={{
              height: 21,
              width: 21,
              tintColor: '#5a5c5b',
              marginTop: 1,
            }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SectionHeader;

const styles = StyleSheet.create({
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 15,
    marginRight: 15,
    fontFamily: 'roboto_regular',
    marginTop: 10,
  },
});
