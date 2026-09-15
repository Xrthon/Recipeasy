import {View} from 'react-native';
import {RecepiesRadioGroup} from './RadioGroup.js'
import { Field,fieldStyles } from '../../components/Field.js';
import {TimerField} from '../../components/TimerField.js'
import {globalStyles} from '../../components/styles/global.styles.js'
import {SubmitButton} from '../../components/SubmitButton.js'

export function RecipesForm(){
    return (
        <View style={globalStyles.container} > 
            <RecipiesRadioGroup/>
            <Field label="Name" ></Field>
            <TimerField></TimerField>
            <Field label="Description" style={fieldStyles.textArea} multiline={true} ></Field>
            <SubmitButton text="Save" onPress={() => alert('Request send')}/>
        </View>
    ) 
}