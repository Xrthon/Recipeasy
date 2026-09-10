import {Text, Pressable, View} from 'react-native';
import {hyperLinkStyles} from './HyperLink.styles.js'

export function HyperLink({text,onPress}){

  return(
    <View>
      <Pressable onPress={onPress}>
          <Text style={hyperLinkStyles.link} >{text}</Text>
        </Pressable>
    </View>
  )
}
