import { Text, Pressable, View } from "react-native";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function SubmitButton(props) {
  const navigation = useNavigation();

  const handlePress = () => {
    if (props.onBeforeNavigation && props.onBeforeNavigation() === false)
      return;
    if (props.onPress) onPress();
    if (props.popTo) {
      navigation.popTo(props.popTo, props.params);
    } else if (props.navigateTo) {
      navigation.navigate(props.navigateTo, props.params);
    }
  };

  return (
    <>
      <Pressable
        onPress={handlePress}
        style={[submitButtonStyles.default.box, props.style]}
      >
        <Text style={[submitButtonStyles.default.button, props.textStyle]}>
          {props.text}
        </Text>
      </Pressable>
    </>
  );
}

export const submitButtonStyles = StyleSheet.create({
  default: {
    box: {
      alignSelf: "center",
    },
    button: {
      backgroundColor: "#fcba03",
      color: "#fff",
      padding: 10,
      borderRadius: 8,
      textAlign: "center",
    },
  },

  cornerRight: {
    box: {
      position: "absolute",
      bottom: "5%",
      right: "10%",

      width: 56,
      height: 56,

      backgroundColor: "#fcba03",
      borderRadius: 28,

      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      backgroundColor: "transparent",
      padding: 0,
      borderRadius: 0,

      // Apparence du « + »
      color: "#fff",
      fontSize: 28,
      textAlign: "center",
    },
  },
});
