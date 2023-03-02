/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps, NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  SplashScreen: undefined;
  TestScreen: undefined;
  PersonLoginScreen: undefined;
  PublicScreen: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  SearchScreen:undefined
  EmployeeScreen: undefined;
  EmployerScreen: undefined;
  NetworkingScreen: undefined;
  ProfileScreen: undefined;
  CvScreen: undefined;
};

export type BottomSheetParamList = {
  RootNavigator: undefined;
  TestSheet: undefined
};


export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;
export type BottomSheetScreenProps<T extends keyof BottomSheetParamList> = NativeStackScreenProps<BottomSheetParamList, T>;
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
    interface RootParamList extends BottomSheetParamList {}
  }
}
