import {Text, Pressable, View} from 'react-native';
import {hyperLinkStyles} from './HyperLink.styles.js'

export function HyperLink(props){

  return(
    <>
      <Pressable onPress={props.onPress} style={hyperLinkStyles.box}>
          <Text style={hyperLinkStyles.link} >{props.text}</Text>
        </Pressable>
    </>
  )
}
