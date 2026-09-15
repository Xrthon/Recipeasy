import {Text, Pressable, View} from 'react-native';
import {StyleSheet} from 'react-native';


export function SubmitButton(props){
  return(
    <>
      <Pressable onPress={props.onPress} style={submitButtonStyles.box}>
        <Text style={submitButtonStyles.button} >{props.text}</Text>
      </Pressable>
    </>
  )
}

export const submitButtonStyles = StyleSheet.create({
  box : {
    alignSelf: 'center', 
  }, 
  button: { 
    backgroundColor: '#fcba03',
    color: '#fff',
    padding:10,
    borderRadius:8,
    textAlign: "center",
  },
});