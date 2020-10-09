import React from 'react';
import {
  FlatList,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../../components/Header';
import PromoCodeItem from '../../components/PromoCodeItem';
import {PromoCodeList} from '../../data/MockData';

const PromoCodeScreen = (props: any) => {
  const navigation = props.navigation;
  const promoHandler = props.route.params.promoHandler;

  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: 'white',
        flex: 1,
      }}>
      <View style={styles.headerContainer}>
        <Header props={props} title="Promo For You" />
      </View>
      <FlatList
        data={PromoCodeList}
        renderItem={({item}) => {
          return (
            <PromoCodeItem
              item={item}
              navigation={navigation}
              promoHandler={promoHandler}
            />
          );
        }}
        keyExtractor={(item) => item.key.toString()}
        style={{padding: 10, flex: 1}}
        ItemSeparatorComponent={() => {
          return <View style={{height: 10}} />;
        }}
      />
    </SafeAreaView>
  );
};

export default PromoCodeScreen;

const styles = StyleSheet.create({
  headerContainer: {
    marginLeft: -5,
    marginRight: -5,
    marginTop: 14,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
