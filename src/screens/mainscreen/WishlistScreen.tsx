import * as React from 'react';
import {FlatList, Platform, StatusBar, StyleSheet, View} from 'react-native';
import ProductCard from '../../components/ProductCard';
import {WishlistData} from '../../data/MockData';
import * as CustomColor from '../../color/CustomColors';
import Header from '../../components/Header';
import {useIsFocused} from '@react-navigation/native';

const WishlistScreen = (props: any) => {
  const [state, setState] = React.useState<number>();
  const navigation = props.navigation;

  const statusbarHeight: any = StatusBar.currentHeight;

  const isFocused = useIsFocused();

  React.useEffect(() => {
    //TO re-render the component for new items to be displayed on tab pressed
    const unsubscribe = navigation.addListener('tabPress', (e: any) => {
      setState(Math.random());
    });
    return unsubscribe;
  }, [state, isFocused]);

  //To make random changes to the state so to re-render the components for updating the changes
  const renderHanlder = () => {
    setState(Math.random());
  };

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
        data={WishlistData}
        horizontal={false}
        numColumns={2}
        keyExtractor={(item) => item.key.toString()}
        renderItem={({item, index}) => {
          return (
            <ProductCard
              item={item}
              arraysize={WishlistData.length}
              navigate={props.navigation.navigate}
              index={index}
              route={props.route}
              handler={renderHanlder}
            />
          );
        }}
        style={{backgroundColor: 'white', padding: 6, height: '100%'}}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default WishlistScreen;

const styles = StyleSheet.create({
  font: {
    fontSize: 15,
    paddingLeft: 20,
    height: 40,
    textAlignVertical: 'center',
    fontWeight: 'bold',
    color: CustomColor.secondaryText,
  },
});
