import {NavigatorScreenParams} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../feature/Home/navigation/HomeNavigation.types';

export enum MainRouteEnum {
  HOME = 'MAIN',
}

export type MainStackParamList = {
  [MainRouteEnum.HOME]: NavigatorScreenParams<HomeStackParamList>;
};

export type MainStackScreenProps<T extends keyof MainStackParamList> =
  NativeStackScreenProps<MainStackParamList, T>;
