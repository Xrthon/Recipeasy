import {View} from 'react-native';
import {HyperLink} from '../components/HyperLink.js';
import {SubmitButton} from '../components/SubmitButton.js'
import {Field} from '../components/Field.js';
import {globalStyles} from '../components/styles/global.styles.js';
import {useState} from 'react'

export function LoginForm({navigation,route}){

  const requiredFields =[
    "Username",
    "Password",
  ]
  
  const allFields = requiredFields.map( f => <Field label={ f }/> )
  
  return(
    <View style={globalStyles.centerScreenContainer}>
      {
        allFields
      }
      <SubmitButton text="Login" onPress= { console.log("je me rend ") } navigateTo={'RecipesView'}/>
      <HyperLink text="Sign up!" onPress={ console.log("je me rend ") }  navigateTo={'SignUpForm'}/>
    </View>
  )
}
