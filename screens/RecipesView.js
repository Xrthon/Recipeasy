import {View, Text} from 'react-native';
import {SubmitButton} from '../components/SubmitButton.js'
import {Field} from '../components/Field.js';
import {globalStyles} from '../components/styles/global.styles.js';


export function RecipesView({navigation, route}){
  return(
    <View style={globalStyles.container}>
      <SubmitButton onClick={"RecipesForm"} />
    </View>
  )
}
