import {Text, Pressable, View} from 'react-native';
import {submitButtonStyles} from './SubmitButton.styles.js'

export function SubmitButton(props){

  return(
    <>
      <Pressable onPress={props.onPress} style={submitButtonStyles.box}>
          <Text style={submitButtonStyles.button} >{props.text}</Text>
        </Pressable>
    </>
  )
}
