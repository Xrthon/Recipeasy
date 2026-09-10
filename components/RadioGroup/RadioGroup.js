import { View } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';

export function RecepiesRadioGroup(){

    
    const options = [
        {

            id: '1', 
            label: 'Breakfast',
            value: 'breakfast'
        },
        {
            id: '2',
            label: 'Lunch',
            value: 'lunch'
        },
        {
            id: '3',
            label: 'Dinner',
            value: 'dinner'
        },
    ];

    return (
        <View>
            <RadioGroup radioButtons={ options } layout='row'/>
        </View>
   );

}