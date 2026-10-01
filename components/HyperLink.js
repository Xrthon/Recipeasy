import { Text, Pressable, View } from "react-native";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function HyperLink(props) {
  const navigation = useNavigation();

  const handlePress = () => {
    if (props.onPress){ props.onPress();}
    if (props.navigateTo) {
      navigation.navigate(props.navigateTo);
    } else if (props.popToTop) {
      navigation.popToTop();
    }
  };

  return (
    <>
      <Pressable onPress={handlePress} style={hyperLinkStyles.box}>
        <Text style={[hyperLinkStyles.link, props?.textStyle]}>
          {props.text}
        </Text>
      </Pressable>
    </>
  );
}

export const hyperLinkStyles = StyleSheet.create({
  box: {
    alignSelf: "center",
  },
  button: {
    backgroundColor: "#fcba03",
    color: "#fff",
    padding: 10,
    borderRadius: 8,
  },
  link: {
    color: "blue",
  },
  logout: {
    color: "red",
  },
});
