import {TextInput,View} from 'react-native';
import {StyleSheet} from 'react-native';

export function Field(props){
 
  return (
    <>
      <TextInput placeholder={props.label} placeholderTextColor={"#fff"} style={[fieldStyles.input,props.style]} multiline={props.multiline}/>
    </>
  )
}
 
 
export const fieldStyles = StyleSheet.create({
  input:{
    color:"#fff",
    borderColor: "lightgray",
    borderWidth: 2,
    lineHeight: 32,
    padding:2,
  },
  textArea: {
    minHeight: 550,
    maxHeight: 550,
    textAlignVertical: 'top', 
  }
});
