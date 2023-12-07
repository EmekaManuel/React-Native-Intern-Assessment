import { IWeather, LocationProps } from "@/types";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";

export type RootBottomTabParamsList = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
  SearchStack: NavigatorScreenParams<SearchStackParamList>;
  FavoritesStack: NavigatorScreenParams<FavoritesStackParamList>;
};

export type HomeStackParamList = {
  Home: undefined;
};

export type SearchStackParamList = {
  Search: undefined;
  WeatherScreen: {
    item: LocationProps;
  };
};
export type FavoritesStackParamList = {
  Favorite: undefined;
  WeatherScreen: {
    item: LocationProps;
  };
};

export type AppStackParamList = {
  Root: NavigatorScreenParams<RootBottomTabParamsList>;
  Settings: undefined;
};

export type RootStackParamList = {
  AppStack: NavigatorScreenParams<AppStackParamList>;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootTabScreenProps<Screen extends keyof RootBottomTabParamsList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootBottomTabParamsList, Screen>,
    NativeStackScreenProps<RootBottomTabParamsList>
  >;

export type HomeScreenNavigationType =
  NativeStackNavigationProp<HomeStackParamList>;

export type SearchScreenNavigationType =
  NativeStackNavigationProp<SearchStackParamList>;

export type FavoritesScreenNavigationType =
  NativeStackNavigationProp<FavoritesStackParamList>;
