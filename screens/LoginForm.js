import {View} from 'react-native';
import {HyperLink} from '../components/HyperLink.js';
import {SubmitButton} from '../components/SubmitButton.js'
import {Field,fieldStyles} from '../components/Field.js';
import {globalStyles} from '../components/styles/global.styles.js';
import {useState} from 'react'

export function LoginForm({navigation,route}){

  const requiredFields =[
    "Username",
    "Password",
  ]
  
  const allFields = requiredFields.map( f => <Field label={ f } style= {fieldStyles.form}/> )
  
  return(
    <View style={globalStyles.centerScreenContainer}>
      {
        allFields
      }
      <SubmitButton text="Login" navigateTo={'RecipesView'}/>
      <HyperLink text="Sign up!" navigateTo={'SignUpForm'}/>
    </View>
  )
}
