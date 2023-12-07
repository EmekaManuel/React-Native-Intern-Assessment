import { Box, Text } from "@/utils/theme";
import { StyleSheet, TouchableOpacity } from "react-native";

type ButtonProps = {
  label: string;
  onPress: () => void;
  onLongPress?: () => void;
  disabled?: boolean;
  uppercase?: boolean;
};

const Button = ({
  label,
  onPress,
  onLongPress,
  disabled,
  uppercase,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      disabled={disabled}
    >
      <Box
        py="3.5"
        borderRadius="rounded-7xl"
        bg={disabled ? "gray800" : "blu500"}
        p="4"
      >
        <Text
          variant="textXs"
          textAlign="center"
          fontWeight="700"
          color="white"
          textTransform={uppercase ? "uppercase" : "capitalize"}
        >
          {label}
        </Text>
      </Box>
    </TouchableOpacity>
  );
};

export default Button;
