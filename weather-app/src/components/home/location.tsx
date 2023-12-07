import { StyleSheet } from "react-native";
import React from "react";
import { Box, Text } from "@/utils/theme";

interface LocationProps {
  name: string;
  country?: string;
}

const Location = ({ name, country }: LocationProps) => {
  return (
    <Box
      flexDirection="column"
      gap="1"
      justifyContent="center"
      alignItems="center"
      m="5"
    >
      <Text color="white" variant="text3Xl" fontWeight="bold">
        {name}
      </Text>

      <Text color="gray4" variant="textXl" fontWeight="bold">
        {country}
      </Text>
    </Box>
  );
};

export default Location;

const styles = StyleSheet.create({});
