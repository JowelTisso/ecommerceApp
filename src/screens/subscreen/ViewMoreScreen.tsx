import {useIsFocused} from '@react-navigation/native';
import React from 'react';
import {
  FlatList,
  Platform,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import CategoriesCard from '../../components/CategoriesCard';
import Header from '../../components/Header';

const ViewMoreScreen = (props: any) => {
  const subprops = props.route.params; //Param sent through navigation

  const categories = subprops.data;
  const statusbarHeight: any = StatusBar.currentHeight;

  const isFocused = useIsFocused();

  React.useEffect(() => {}, [isFocused]);

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View
        style={{
          marginTop: Platform.OS === 'android' ? statusbarHeight + 10 : 0,
          marginLeft: 15,
          marginRight: 15,
        }}>
        <Header props={props} />
      </View>
      <FlatList
        data={categories}
        horizontal={false}
        numColumns={2}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={{flex: 1}}
              delayPressIn={0}
              onPress={() => {
                props.navigation.navigate('ProductsScreen');
              }}>
              <CategoriesCard item={item} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.key}
        ItemSeparatorComponent={() => (
          <View style={{height: 1, backgroundColor: 'white'}}></View>
        )}
        style={{padding: 2}}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ViewMoreScreen;

const styles = StyleSheet.create({});
