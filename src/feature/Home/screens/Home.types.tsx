import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../navigation/HomeNavigation.types';

export type HomeScreensNavigationProps =
  NativeStackNavigationProp<HomeStackParamList>;

export type HomeScreensProps = {
  navigation: HomeScreensNavigationProps;
};
