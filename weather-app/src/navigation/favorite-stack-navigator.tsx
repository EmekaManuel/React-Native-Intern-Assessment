import SearchScreen from "@/screens/search";
import WeatherScreen from "@/screens/weather";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import { FavoritesStackParamList } from "./types";
import FavoriteScreen from "@/screens/favorites";

const Stack = createNativeStackNavigator<FavoritesStackParamList>();

const FavoriteStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorites"
        component={FavoriteScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="WeatherScreen"
        component={WeatherScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default FavoriteStackNavigator;

const styles = StyleSheet.create({});
