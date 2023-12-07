import { WeatherDataProps } from "@/types";
import { Box, Text } from "@/utils/theme";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

interface DegreeTempProps {
  weather: WeatherDataProps; // Updated the prop type
}

const DegreeTemp: React.FC<DegreeTempProps> = ({ weather }) => {
  const [isCelsius, setIsCelsius] = useState(true); // Default to Celsius

  const temperatureInCelsius = weather?.current?.temp_c || "";
  const temperatureInFahrenheit = weather?.current?.temp_f || "";
  const weatherCondition = weather?.current?.condition?.text || "";

  const handleToggle = () => {
    setIsCelsius(!isCelsius);
  };

  return (
    <Box
      flexDirection="column"
      gap="1"
      justifyContent="center"
      alignItems="center"
      m="5"
    >
      <TouchableOpacity onPress={handleToggle}>
        <Text color="white" variant="text3Xl" fontWeight="bold">
          {isCelsius
            ? `${temperatureInCelsius}°C`
            : `${temperatureInFahrenheit}°F`}
        </Text>
        <Text color="gray4" textAlign="center">
          Click to toggle
        </Text>
      </TouchableOpacity>
      <Text
        color="white"
        textAlign="center"
        textTransform="uppercase"
        variant="textXl"
        fontWeight="bold"
      >
        {weatherCondition}
      </Text>
    </Box>
  );
};

export default DegreeTemp;

const styles = StyleSheet.create({});
