import {View, Text} from 'react-native';
import {SubmitButton, submitButtonStyles} from '../components/SubmitButton.js'
import {Field} from '../components/Field.js';
import {globalStyles} from '../components/styles/global.styles.js';


export function RecipesView({navigation, route}){

  console.log(route.params)

  return(
    <View style={globalStyles.container}>
      <SubmitButton text={"+"} style={submitButtonStyles.cornerRight.box} textStyle={submitButtonStyles.cornerRight.text} navigateTo={"RecipeForm"} />
    </View>
  )
}
