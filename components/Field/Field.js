import {TextInput,View} from 'react-native';
import {fieldStyles} from './Field.styles.js'

export function Field(props){
 
   return (
     <View>
       <TextInput placeholder={props.label}  style={[fieldStyles.input,props.style]}/>
     </View>
   )
 }
 
