import { StyleSheet, View } from "react-native";
import React from "react";
import { Box, Text } from "@/utils/theme";
import { Image } from "react-native";
import { weatherImages } from "@/constants";
import { WeatherDataProps } from "@/types";

interface WeatherIconProps {
  weatherIcon: WeatherDataProps;
}

const WeatherIcon: React.FC<WeatherIconProps> = ({ weatherIcon }) => {
  const currentConditionText = weatherIcon?.current?.condition?.text || "other";

  return (
    <Box flexDirection="row" justifyContent="center">
      <Image
        style={styles.imageStyle}
        source={weatherImages[currentConditionText]}
      />
    </Box>
  );
};

export default WeatherIcon;

const styles = StyleSheet.create({
  imageStyle: {
    width: 170,
    height: 170,
  },
});
