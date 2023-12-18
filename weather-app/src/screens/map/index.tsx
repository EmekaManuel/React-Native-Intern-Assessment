import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Map from "@/components/map/map";

const MapScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Map />
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
