import {View} from 'react-native';
import {HyperLink} from '../components/HyperLink/HyperLink.js';
import {SubmitButton} from '../components/SubmitButton/SubmitButton.js'
import {Field} from '../components/Field/Field.js';
import {globalStyles} from '../components/styles/global.styles.js';
import {useState} from 'react'

export function LoginForm({navigation}){

  const requiredFields =[
    "Username",
    "Password",
  ]
  
  const allFields = requiredFields.map( f=> <Field label={f}/>)
  
  return(
    <View style={globalStyles.centerScreenContainer}>
      {
        allFields
      }
      <SubmitButton text="Login"   onPress= { ()=>alert("Login") }/>
      <HyperLink text="Sign up!"   onPress={ ()=>alert("Login") }/>
    </View>
  )
}
