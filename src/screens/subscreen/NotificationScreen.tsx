import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

interface Props {}

const NotificationScreen = (props: Props) => {
  const screenHeight = Dimensions.get('window').height;

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={[]}
        renderItem={({item}) => {
          return (
            <View>
              <Text>{item}</Text>
            </View>
          );
        }}
        ListEmptyComponent={() => {
          return (
            <View
              style={{
                height: screenHeight - 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../../assets/box.png')}
                style={{height: 80, width: 80}}
              />
              <Text style={{marginTop: 10}}>No Notifications</Text>
            </View>
          );
        }}
        keyExtractor={(item) => item.name}
        style={{flex: 1}}
      />
    </SafeAreaView>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({});
