import {View} from 'react-native';
import {RecepiesRadioGroup} from '../components/RadioGroup/RadioGroup.js'
import {Field} from '../components/Field/Field.js'
import {TimerField} from '../components/Timer/TimerField.js'
import {globalStyles} from '../components/styles/global.styles.js'
import {SubmitButton} from '../components/SubmitButton/SubmitButton.js'
import {StyleSheet} from 'react-native';

export function RecipesForm(){

 

    return (
        <View> 
            <RecepiesRadioGroup/>
            <Field label="Name" ></Field>
            <TimerField></TimerField>
            <Field label="Description"  ></Field>
            <SubmitButton text="Save"  onPress={() => alert('Request send')}/>
        </View>

    ) 
}