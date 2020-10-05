import {useIsFocused} from '@react-navigation/native';
import React from 'react';
import {
  FlatList,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Header from '../../components/Header';
import ProductCard from '../../components/ProductCard';
import {Products} from '../../data/MockData';

const statusbarHeight: any = StatusBar.currentHeight;

const ProductsScreen = (props: any) => {
  const isFocused = useIsFocused();

  React.useEffect(() => {}, [isFocused]);

  return (
    <View style={{backgroundColor: 'white'}}>
      <View
        style={{
          marginTop: Platform.OS === 'android' ? statusbarHeight + 10 : 0,
          marginLeft: 15,
          marginRight: 15,
        }}>
        <Header props={props} />
      </View>
      <FlatList
        data={Products}
        horizontal={false}
        numColumns={2}
        keyExtractor={(item) => item.key.toString()}
        renderItem={({item, index}) => {
          return (
            <ProductCard
              item={item}
              arraysize={Products.length}
              navigate={props.navigation.navigate}
              isProductScreen={true}
              route={props.route}
            />
          );
        }}
        style={{backgroundColor: 'white', padding: 6}}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({});
