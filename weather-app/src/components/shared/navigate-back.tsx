import { Box, Theme } from "@/utils/theme";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "@shopify/restyle";
import React from "react";
import { Pressable } from "react-native";

const NavigateBack = () => {
  const navigation = useNavigation();
  const theme = useTheme<Theme>();
  const navigateBack = () => {
    navigation.goBack();
  };
  return (
    <Pressable onPress={navigateBack}>
      <Box bg="gray550" p="2" borderRadius="rounded-7xl">
        <Entypo name="arrow-left" size={24} color={theme.colors.white} />
      </Box>
    </Pressable>
  );
};

export default NavigateBack;
