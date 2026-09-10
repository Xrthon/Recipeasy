import {Text, Pressable, View} from 'react-native';
import {submitButtonStyles} from './SubmitButton.styles.js'

export function SubmitButton(props){

  return(
    <View>
      <Pressable onPress={props.onPress}>
          <Text style={submitButtonStyles.button} >{props.text}</Text>
        </Pressable>
    </View>
  )
}
