import MapScreen from "@/screens/map";
import WeatherScreen from "@/screens/weather";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import { MapStackParamList } from "./types";

const Stack = createNativeStackNavigator<MapStackParamList>();

const MapStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Map"
        component={MapScreen}
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

export default MapStackNavigator;

const styles = StyleSheet.create({});
