import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';

const CategoriesCard = (props: any) => {
  return (
    <View style={styles.cardContainer}>
      <ImageBackground
        source={{uri: props.item.imageMen}}
        style={{flex: 1, justifyContent: 'center'}}
        imageStyle={styles.imageBackground}>
        <View>
          <Text style={styles.font}>{props.item.title}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default CategoriesCard;

const styles = StyleSheet.create({
  font: {
    color: 'white',
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 21,
    margin: 1,
  },
  cardContainer: {
    height: 127,
    justifyContent: 'center',
    flex: 1,
    margin: 2,
    backgroundColor: '#424141',
    borderRadius: 10,
  },
  imageBackground: {
    resizeMode: 'cover',
    borderRadius: 10,
    opacity: 0.8,
  },
});
