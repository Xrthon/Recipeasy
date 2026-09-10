import {View} from 'react-native';
import {RecepiesRadioGroup} from '../components/RadioGroup/RadioGroup.js'
import { Field } from '../components/Field/Field.js';
import { fieldStyles } from '../components/Field/Field.styles.js';
import {TimerField} from '../components/Timer/TimerField.js'
import {globalStyles} from '../components/styles/global.styles.js'
import {SubmitButton} from '../components/SubmitButton/SubmitButton.js'

export function RecipesForm(){

    return (
        <View style={globalStyles.container}> 
            <RecepiesRadioGroup/>
            <Field label="Name" ></Field>
            <TimerField></TimerField>
            <Field label="Description" style={fieldStyles.textArea} multiline={true}  ></Field>
            <SubmitButton text="Save"  onPress={() => alert('Request send')}/>
        </View>

    ) 
}