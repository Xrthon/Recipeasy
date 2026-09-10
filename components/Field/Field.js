import {TextInput,View} from 'react-native';
import {fieldStyles} from './Field.styles.js'

export function Field(props){
 
   return (
     <>
       <TextInput placeholder={props.label} placeholderTextColor={"#fff"} style={[fieldStyles.input,props.style]} multiline={props.multiline}/>
     </>
   )
 }
 
