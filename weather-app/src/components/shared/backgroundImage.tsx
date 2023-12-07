// Background.tsx

import React, { ReactNode } from "react";
import { StyleSheet, Image, View, ImageSourcePropType } from "react-native";

interface BackgroundProps {
  children: ReactNode;
  backgroundImage: ImageSourcePropType;
}

const Background: React.FC<BackgroundProps> = ({
  children,
  backgroundImage,
}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.backgroundImage}
        blurRadius={70}
        source={backgroundImage}
      />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    resizeMode: "cover",
  },
});

export default Background;
