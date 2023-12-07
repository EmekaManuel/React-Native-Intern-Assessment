import { Box, Text } from "@/utils/theme";
import React from "react";
import { Image, StyleSheet } from "react-native";

import { WeatherDataProps } from "@/types";

interface WeatherStatsProps {
  weatherStats: WeatherDataProps;
}
const WeatherStats: React.FC<WeatherStatsProps> = ({ weatherStats }) => {
  return (
    <Box flexDirection="row" justifyContent="space-around" mx="4">
      <Box flexDirection="row" gap="1" alignItems="center">
        <Image
          style={styles.imageStyle}
          source={require("../../../assets/icons/wind.png")}
        />
        <Text variant="textBase" fontWeight="600" color="lightGray">
          {weatherStats?.current?.wind_kph} km
        </Text>
      </Box>
      <Box flexDirection="row" gap="1" alignItems="center">
        <Image
          style={styles.imageStyle}
          source={require("../../../assets/icons/drop.png")}
        />
        <Text variant="textBase" fontWeight="600" color="lightGray">
          {weatherStats?.current?.humidity} km
        </Text>
      </Box>
      <Box flexDirection="row" gap="1" alignItems="center">
        <Image
          style={styles.imageStyle}
          source={require("../../../assets/icons/sun.png")}
        />
        <Text variant="textBase" fontWeight="600" color="lightGray">
          {weatherStats?.forecast?.forecastday[0]?.astro?.sunrise}
        </Text>
      </Box>
    </Box>
  );
};

export default WeatherStats;

const styles = StyleSheet.create({
  imageStyle: {
    width: 30,
    height: 30,
  },
});
