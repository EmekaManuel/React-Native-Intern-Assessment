import { IWeather, LocationProps } from "@/types";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeNavigationProp,
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import {
  NativeStackScreenProps,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

export type RootBottomTabParamsList = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
  Search: NavigatorScreenParams<SearchStackParamList>;
  Favorites: NavigatorScreenParams<FavoritesStackParamList>;
};

export type HomeStackParamList = {
  Home: undefined;
  WeatherScreen: {
    id: IWeather;
  };
};

export type SearchStackParamList = {
  Search: undefined;
  WeatherScreen: {
    item: LocationProps;
  };
};

export type FavoritesStackParamList = {
  Weathers: undefined;
  Weather: {
    id: string;
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

export type CategoriesNavigationType =
  NativeStackNavigationProp<FavoritesStackParamList>;

export type HomeScreenNavigationType =
  NativeStackNavigationProp<HomeStackParamList>;

export type SearchScreenNavigationType =
  NativeStackNavigationProp<SearchStackParamList>;
