import {View} from 'react-native';
import {SubmitButton} from '../components/SubmitButton.js'
import {Field,fieldStyles} from '../components/Field.js';
import {globalStyles} from '../components/styles/global.styles.js';


export function SignUpForm({navigation, route}){

  const requiredFields =[
    "Username",
    "Password",
    "Comfirm Password",
  ]
  
  const allFields = requiredFields.map( f => <Field label={f} style={fieldStyles.form}/> )
  
  return(
    <View style={globalStyles.centerScreenContainer}>
      {
        allFields
      }
      <SubmitButton text="Create my account" navigateTo={"RecipesView"}/>
    </View>
  )
}
