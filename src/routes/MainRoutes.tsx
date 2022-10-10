import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeStack} from '../feature';
import {MainRouteEnum, MainStackParamList} from './MainRoutes.types';

const {Navigator, Screen} = createNativeStackNavigator<MainStackParamList>();

export const MainRoute = () => (
  <NavigationContainer>
    <Navigator
      initialRouteName={MainRouteEnum.HOME}
      screenOptions={{headerShown: false}}>
      <Screen name={MainRouteEnum.HOME} component={HomeStack} />
    </Navigator>
  </NavigationContainer>
);
