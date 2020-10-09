import React from 'react';
import {Alert, Image, StyleSheet, Text, View} from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  renderers,
} from 'react-native-popup-menu';
import * as CustomColors from '../color/CustomColors';

const PopupMenu = (props: any) => {
  const type = props.type;
  const size = props.product.size;
  const color = props.product.color;

  return (
    <View>
      <Menu>
        <MenuTrigger
          text={type === 'size' ? `Size: ${size}` : `Color: ${color}`} // Menu title based on popup type
          customStyles={{triggerText: styles.basefont}}
        />
        <MenuOptions
          customStyles={{
            optionsWrapper: {flexDirection: 'row', elevation: 2},
            optionWrapper: {
              paddingLeft: type === 'size' ? 10 : 10,
              paddingRight: type === 'size' ? 10 : 2,
              paddingTop: 10,
              paddingBottom: 10,
            },
          }}>
          <MenuOption
            onSelect={() => Alert.alert(`Save`)}
            children={
              type === 'size' ? (
                <Text>S</Text>
              ) : (
                <Image
                  source={require('../assets/circle.png')}
                  style={[
                    {
                      tintColor: '#f5f2f2',
                    },
                    styles.colorIcon,
                  ]}
                />
              )
            }
          />

          <MenuOption
            onSelect={() => Alert.alert(`Delete`)}
            children={
              type === 'size' ? (
                <Text>M</Text>
              ) : (
                <Image
                  source={require('../assets/circle.png')}
                  style={[
                    {
                      tintColor: 'black',
                    },
                    styles.colorIcon,
                  ]}
                />
              )
            }
          />
          <MenuOption
            onSelect={() => Alert.alert(`Not called`)}
            children={
              type === 'size' ? (
                <Text>L</Text>
              ) : (
                <Image
                  source={require('../assets/circle.png')}
                  style={[
                    {
                      tintColor: 'maroon',
                    },
                    styles.colorIcon,
                  ]}
                />
              )
            }
          />
          <MenuOption
            onSelect={() => Alert.alert(`Not called`)}
            children={
              type === 'size' ? (
                <Text>XL</Text>
              ) : (
                <Image
                  source={require('../assets/circle.png')}
                  style={[
                    {
                      tintColor: 'lightblue',
                    },
                    styles.colorIcon,
                  ]}
                />
              )
            }
          />
        </MenuOptions>
      </Menu>
    </View>
  );
};

export default PopupMenu;

const styles = StyleSheet.create({
  basefont: {
    fontSize: 12,
    color: CustomColors.lightText,
    fontWeight: 'bold',
  },
  colorIcon: {
    height: 20,
    width: 20,
    marginRight: 8,
  },
});
