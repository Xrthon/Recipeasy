import {View} from 'react-native';
import {HyperLink} from '../components/HyperLink/HyperLink.js';
import {SubmitButton} from '../components/SubmitButton/SubmitButton.js'
import {Field} from '../components/Field/Field.js';
import {globalStyles} from '../components/styles/global.styles.js';
import {useState} from 'react'

export function LoginForm({navigation}){

  function handleSignUp(){
    navigation.navigate('SignUpForm')
  }


  const requiredFields =[
    "Username",
    "Password",
  ]
  
  const allFields = requiredFields.map( f=> <Field label={f} id={f.downcase}/>)
  
  return(
    <View style={globalStyles.container}>
      {
        allFields
      }
      <SubmitButton text="Login"   onPress= { handleLogin }/>
      <HyperLink text="Sign up!"   onPress={ handleSignUp }/>
    </View>
  )
}
