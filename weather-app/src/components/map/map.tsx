// Map.tsx
import { Location, setLocation } from "@/modules/map";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { MapScreenNavigationType } from "@/navigation/types";

interface MapProps {}

const Map: React.FC<MapProps> = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<MapScreenNavigationType>();
  const [markerCoordinate, setMarkerCoordinate] = useState<Location | null>(
    null
  );

  const handleMapPress = (event: any) => {
    const { coordinate } = event.nativeEvent;
    const clickedLocation: Location = {
      origin: {
        location: {
          lat: coordinate.latitude,
          lng: coordinate.longitude,
        },
      },
    };

    console.log("Clicked Location:", clickedLocation);

    dispatch(setLocation(clickedLocation));
    setMarkerCoordinate(clickedLocation);
  };

  const handleMarkerPress = () => {
    if (markerCoordinate && markerCoordinate.origin?.location) {
      navigation.navigate("WeatherScreen", {
        coordinates: markerCoordinate.origin.location,
      });
    }
  };

  return (
    <MapView
      style={{ flex: 1 }}
      mapType="mutedStandard"
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
      onPress={handleMapPress}
    >
      {/* Add a marker if there is a selected location */}
      {markerCoordinate && markerCoordinate.origin?.location && (
        <Marker
          coordinate={{
            latitude: markerCoordinate.origin.location.lat || 0,
            longitude: markerCoordinate.origin.location.lng || 0,
          }}
          title={markerCoordinate.origin.location.lat.toString()}
          description={markerCoordinate.origin.location.lng.toString()}
          onPress={handleMarkerPress}
        />
      )}
    </MapView>
  );
};

const styles = StyleSheet.create({});

export default Map;
