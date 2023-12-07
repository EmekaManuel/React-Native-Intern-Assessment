import { Box } from "@/utils/theme";
import React from "react";
import * as Progress from "react-native-progress";
import SafeAreaWrapper from "./safe-area-wrapper";

import { Image, StyleSheet } from "react-native";

const Loader = () => {
  return (
    <SafeAreaWrapper>
      <Box style={styles.loader}>
        <Image
          style={styles.backgroundImage}
          blurRadius={60}
          source={require("../../../assets/images/bg.png")}
        />
        <Progress.CircleSnail
          animating={true}
          thickness={3}
          size={70}
          color="#0bb3b2"
        />
      </Box>
    </SafeAreaWrapper>
  );
};

export default Loader;

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
});
