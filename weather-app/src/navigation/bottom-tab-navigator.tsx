import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackNavigator from "./home-stack-navigator";

import { RootBottomTabParamsList } from "./types";

import FavoriteScreen from "@/screens/favorites";

import Icons from "@/components/shared/Icon";
import React from "react";
import { StyleSheet } from "react-native";
import SearchStackNavigator from "./search-stack-navigator";

const Tab = createBottomTabNavigator<RootBottomTabParamsList>();

const TABSCREENS = [
  {
    name: "HomeStack",
    component: HomeStackNavigator,
    options: {
      title: "Home",
      headerShown: false,
      tabBarIcon: ({ color }: { color: string }) => (
        <Icons name="home" color={color} />
      ),
    },
  },
  {
    name: "SearchStack",
    component: SearchStackNavigator,
    options: {
      title: "Search",
      headerShown: false,
      tabBarIcon: ({ color }: { color: string }) => (
        <Icons name="search" color={color} />
      ),
    },
  },
  {
    name: "Favorites",
    component: FavoriteScreen,
    options: {
      title: "Bookmark",
      headerShown: false,
      tabBarIcon: ({ color }: { color: string }) => (
        <Icons name="favorite" color={color} />
      ),
    },
  },
];

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
        tabBarHideOnKeyboard: true,
        //Tab bar styles can be added here
        tabBarStyle: {
          paddingVertical: 5,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          backgroundColor: "white",
          position: "absolute",
          height: 90,
        },
        tabBarLabelStyle: { paddingBottom: 3 },
      }}
    >
      {TABSCREENS.map((screen) => (
        <Tab.Screen
          key={screen.name}
          name={screen.name as keyof RootBottomTabParamsList}
          component={screen.component}
          options={() => screen.options}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({});
