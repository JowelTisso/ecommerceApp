import {useIsFocused} from '@react-navigation/native';
import * as React from 'react';
import {Platform, StatusBar, StyleSheet, Text, View} from 'react-native';
import Header from '../../components/Header';

const statusbarHeight: any = StatusBar.currentHeight;

const SearchScreen = (props: any) => {
  const isFocused = useIsFocused();

  React.useEffect(() => {}, [isFocused]);

  return (
    <View>
      <View
        style={{
          marginTop: Platform.OS === 'android' ? statusbarHeight + 10 : 0,
          marginLeft: 15,
          marginRight: 15,
        }}>
        <Header props={props} />
      </View>
      <Text>SearchScreen</Text>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
