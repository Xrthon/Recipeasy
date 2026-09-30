import { TextInput, View } from "react-native";
import { StyleSheet } from "react-native";

export function Field(props) {
  return (
    <>
      <TextInput
        value={props.value}
        onChangeText={props.onChangeText}
        placeholder={props.label}
        placeholderTextColor={"#fff"}
        style={[fieldStyles.input, props.style]}
        multiline={props.multiline}
      />
    </>
  );
}

export const fieldStyles = StyleSheet.create({
  input: {
    color: "#fff",
    borderColor: "lightgray",
    borderWidth: 2,
    lineHeight: 32,
    padding: 2,
  },

  form: {
    width: "85%",
    maxWidth: 400,
    alignSelf: "center",
    gap: 16,
  },

  textArea: {
    flex: 1,
    minHeight: 100,
    textAlignVertical: "top",
  },
});
