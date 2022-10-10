import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens';
import {HomeRoutes} from './HomeNavigation.types';

const {Navigator, Screen} = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <Navigator initialRouteName={HomeRoutes.HOME}>
      <Screen name={HomeRoutes.HOME} component={HomeScreen} />
    </Navigator>
  );
};
