import {Text, Pressable, View} from 'react-native';
import {StyleSheet} from 'react-native';


export function HyperLink(props){

  return(
    <>
      <Pressable onPress={props.onPress} style={hyperLinkStyles.box}>
        <Text style={hyperLinkStyles.link} >{props.text}</Text>
      </Pressable>
    </>
  )
}

export const hyperLinkStyles = StyleSheet.create({
  box : {
    alignSelf: 'center', 
  }, 
  button: { 
    backgroundColor: '#fcba03',
    color: '#fff',
    padding:10,
    borderRadius:8,
  },
  link:{
    color: 'blue',
  },
});