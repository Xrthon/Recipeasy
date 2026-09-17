import {Text, Pressable, View} from 'react-native';
import {StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function SubmitButton(props){

  const navigation = useNavigation();
  
  const handlePress = () => {
    if (props.onPress) onPress();     
    if (props.navigateTo) {
      console.log(props.navigateTo);
      navigation.navigate(props.navigateTo);
    }
  };

  return(
    <>
      <Pressable  onPress={handlePress} style={submitButtonStyles.box} >
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