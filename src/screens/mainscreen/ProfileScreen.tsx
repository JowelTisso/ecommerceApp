import * as React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Platform,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import * as CustomColor from '../../color/CustomColors';
import HeaderNav from '../../components/Header';
import ProfileItem from '../../components/ProfileItem';
import {accountData, profileData} from '../../data/MockData';

const profilePic =
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60';

const ProfileScreen = (props: any) => {
  const goBack = () => {
    props.navigation.goBack();
  };

  return (
    <ImageBackground
      source={require('../../assets/bg.png')}
      style={styles.mainContainer}>
      <View
        style={{
          marginLeft: -5,
          marginRight: -5,
          marginTop: 14,
        }}>
        <HeaderNav props={props} />
      </View>

      <View style={{flexDirection: 'row', marginTop: 10}}>
        <View
          style={{
            flex: 2,
            marginTop: 15,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 22,
                fontWeight: 'bold',
                color: CustomColor.colorAccent,
              }}>
              {profileData.name}
            </Text>

            <TouchableOpacity
              delayPressIn={0}
              onPress={() => {}}
              style={{
                width: 30,
                marginLeft: 15,
                height: 30,
                justifyContent: 'center',
              }}>
              <Image
                source={require('../../assets/pencil.png')}
                style={{height: 13, width: 13, tintColor: 'gray', marginTop: 5}}
              />
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Text
              style={{
                color: CustomColor.lightText,
                fontWeight: 'bold',
                fontSize: 13,
              }}>
              {profileData.phone} |
            </Text>
            <Text
              style={{
                color: CustomColor.lightText,
                fontWeight: 'bold',
                fontSize: 13,
                marginLeft: 5,
              }}>
              {profileData.email}
            </Text>
          </View>
        </View>
        <View style={styles.profileContainer}>
          <View
            style={{
              elevation: 3,
              borderRadius: 40,
            }}>
            <ImageBackground
              source={{
                uri: profilePic,
              }}
              style={styles.profileImage}
              imageStyle={styles.profileImage}>
              <TouchableOpacity
                delayPressIn={0}
                onPress={() => {}}
                style={{
                  position: 'absolute',
                  right: 1,
                  bottom: 1,
                  width: 30,
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../../assets/picture.png')}
                  style={{
                    height: 20,
                    width: 20,
                  }}
                />
              </TouchableOpacity>
            </ImageBackground>
          </View>
        </View>
      </View>

      <View style={styles.accountDetailContainer}>
        <Text style={styles.accountHeader}>Account</Text>
        <FlatList
          data={accountData}
          renderItem={({item}) => {
            return (
              <TouchableOpacity delayPressIn={0}>
                <ProfileItem data={item} />
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item: any) => item.key.toString()}
          ItemSeparatorComponent={() => (
            <View
              style={{
                backgroundColor: CustomColor.border,
                height: 1,
                marginLeft: 60,
                marginRight: 15,
                marginTop: 5,
              }}
            />
          )}
        />
      </View>
    </ImageBackground>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
  },
  profileImage: {
    height: 85,
    width: 85,
    borderRadius: 50,
    resizeMode: 'cover',
  },
  profileContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    width: 35,
    height: 35,
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  accountHeader: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingLeft: 18,
    color: CustomColor.colorAccent,
  },
  accountDetailContainer: {
    backgroundColor: 'white',
    elevation: 3,
    flex: 1,
    borderRadius: 10,
    marginTop: 15,
    paddingTop: 12,
  },
});
