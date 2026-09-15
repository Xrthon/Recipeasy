import {View} from 'react-native';
import {SubmitButton} from '../components/SubmitButton.js'
import {Field} from '../components/Field.js';
import {globalStyles} from '../components/styles/global.styles.js';


export function SignUpForm({navigation, route}){

  
  const requiredFields =[
    "Username",
    "Password",
    "Comfirm Password",
  ]
  
  const allFields = requiredFields.map( f => <Field label={f}/> )
  
  return(
    <View style={globalStyles.centerScreenContainer}>
      {
        allFields
      }
      <SubmitButton text="Create my account" onPress={() => alert('Request send')}/>
    </View>
  )
}
