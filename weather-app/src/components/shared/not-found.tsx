import React from "react";
import { Box, Text } from "@/utils/theme";
import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet } from "react-native";

interface NotFoundProps {
  message: string;
  svgComponent: React.ReactElement;
}

const NotFound: React.FC<NotFoundProps> = ({ message, svgComponent }) => {
  return (
    <Box style={styles.container}>
      <StatusBar style="light" />

      <Box style={styles.loader}>
        <Image
          style={styles.backgroundImage}
          blurRadius={60}
          source={require("../../../assets/images/bg.png")}
        />
        <Box alignItems="center" justifyContent="center">
          {svgComponent}
        </Box>
        <Text
          variant="textBase"
          textAlign="center"
          fontWeight="bold"
          color="white"
          mt="5"
        >
          {message}
        </Text>
      </Box>
    </Box>
  );
};

export default NotFound;

const styles = StyleSheet.create({
  loader: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  overlay: {
    flex: 1,
  },
  image: {
    width: 60,
    height: 90,
    backgroundColor: "transparent",
  },
});
