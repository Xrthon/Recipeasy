import {View} from 'react-native';
import {SubmitButton} from '../components/SubmitButton/SubmitButton.js'
import {Field} from '../components/Field/Field.js';
import {globalStyles} from '../components/styles/global.styles.js';


export function SignUpForm({navigation, route}){

  //console.log(route.params)
  
  const requiredFields =[
    "Username",
    "Password",
    "Comfirm Password",
  ]
  
  const allFields = requiredFields.map( f=> <Field label={f} id={f.downcase}/>)
  
  return(
    <View style={globalStyles.container}>
      {
        allFields
      }
      <SubmitButton text="Create my account"   onPress={() => alert('Request send')}/>
    </View>
  )
}
