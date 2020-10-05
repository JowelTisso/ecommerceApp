import * as React from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  TextInput,
  FlatList,
  RefreshControl,
  Dimensions,
  Platform,
  StatusBar,
} from 'react-native';
import {Preview} from '../../components/Preview';
import SectionHeader from '../../components/SectionHeader';
import {FlatListSlider} from 'react-native-flatlist-slider';
import {ScrollView} from 'react-native-gesture-handler';
import {
  TopicsData,
  Images,
  Products,
  ProductsForWomen,
} from '../../data/MockData';
import Header from '../../components/Header';
import {useIsFocused} from '@react-navigation/native';

const wait = (timeout: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

const HomeScreen = (props: any) => {
  const clickHandler = (item: object) => {
    props.navigation.navigate('ProductDetail', {
      item: item,
      // handler: renderHandler,
    });
  };

  //For Checking if the screen is focused
  const isFocused = useIsFocused();

  const [state, setState] = React.useState(0);

  const renderHandler = () => {
    setState(Math.random());
  };

  React.useEffect(() => {
    const unsubscribe = props.navigation.addListener('tabPress', (e: any) => {
      setState(Math.random());
    });
    return unsubscribe;
  }, [state, props.navigation, isFocused]);

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, [refreshing]);

  const screenWidth: number = Dimensions.get('screen').width;

  let marginLeftValue: number = 0;
  const getMarginLeft = () => {
    if (screenWidth <= 360 && screenWidth > 350) {
      marginLeftValue = 64;
    } else if (screenWidth <= 412 && screenWidth > 410) {
      marginLeftValue = 94;
    } else if (screenWidth <= 480 && screenWidth > 470) {
      marginLeftValue = 134;
    } else {
      marginLeftValue = 64;
    }
  };
  getMarginLeft();
  const statusbarHeight: any = StatusBar.currentHeight;

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View
        style={{
          marginTop: Platform.OS === 'android' ? statusbarHeight + 10 : 0,
          marginLeft: 15,
          marginRight: 15,
        }}>
        <Header props={props} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={styles.searchContainer}>
          <TextInput
            placeholder={'What are you looking for?'}
            style={styles.searchBar}
          />
          <Image
            source={require('../../assets/filter.png')}
            style={styles.filterIcon}
          />
        </View>
        <View style={styles.topics}>
          <FlatList
            data={TopicsData}
            renderItem={({item}) => {
              return (
                <Text
                  style={{
                    color: '#515452',
                    fontWeight: 'bold',
                    marginRight: 30,
                    marginLeft: 2,
                  }}>
                  {item}
                </Text>
              );
            }}
            keyExtractor={(item) => item}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View
          style={{
            marginHorizontal: -15,
          }}>
          <FlatListSlider
            data={Images}
            width={260}
            autoscroll={false}
            component={<Preview bigType={true} />}
            onPress={(item: object) => console.log(item)}
            contentContainerStyle={{
              marginLeft: marginLeftValue,
            }}
            indicatorContainerStyle={{
              bottom: 15,
              marginLeft: 10,
            }}
            indicatorActiveWidth={15}
            indicator={false}
          />
        </View>

        <SectionHeader
          title={'For Men'}
          navigation={props.navigation}
          // handler={renderHandler}
        />
        <View style={{}}>
          <FlatListSlider
            data={Products}
            width={120}
            autoscroll={false}
            component={
              <Preview bigType={false} info={true} handler={renderHandler} />
            }
            onPress={(item: object) => clickHandler(item)}
            contentContainerStyle={{}}
            indicator={false}
          />
        </View>
        <SectionHeader
          title={'For Women'}
          navigation={props.navigation}
          // handler={renderHandler}
        />

        <FlatListSlider
          data={ProductsForWomen}
          width={120}
          autoscroll={false}
          component={
            <Preview bigType={false} info={true} handler={renderHandler} />
          }
          onPress={(item: object) => clickHandler(item)}
          indicator={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  fontStyle: {
    color: '#5c5e5d',
    textAlign: 'center',
  },

  topics: {
    flexDirection: 'row',
    marginTop: 15,
    marginLeft: 18,
    marginRight: 15,
  },
  searchBar: {
    backgroundColor: '#f0f3f5',
    flex: 1,
    height: 35,
    borderRadius: 25,
    paddingLeft: 15,
    marginRight: 15,
    paddingTop: -10,
    paddingBottom: -10,
  },
  filterIcon: {
    height: 20,
    width: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
    marginLeft: 15,
    marginRight: 15,
  },
  imageComponent: {
    backgroundColor: 'pink',
  },
});

export default HomeScreen;
