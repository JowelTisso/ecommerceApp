import {NavigationContainerRef} from '@react-navigation/native';
import * as React from 'react';
import {View} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

export const navigationRef: React.RefObject<NavigationContainerRef> = React.createRef();

export function navigate(name: string, params: object) {
  navigationRef.current?.navigate(name, params);
}

export const navbarRef: React.RefObject<View> = React.createRef();
export const bottomSheetRef: React.RefObject<RBSheet> = React.createRef();
