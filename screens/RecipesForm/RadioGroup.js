import { View } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import {StyleSheet} from 'react-native';

export function RecipiesRadioGroup(){
    const options = [
        {

            id: '1', 
            label: 'Breakfast',
            value: 'breakfast',
            color:"#fff",
        },
        {
            id: '2',
            label: 'Lunch',
            value: 'lunch',
            color:"#fff",
        },
        {
            id: '3',
            label: 'Dinner',
            value: 'dinner',
            color:"#fff",
        },
    ];

    return (
        <View style={radioGrpStyle.container}>
            <RadioGroup radioButtons={ options } styles={radioGrpStyle.radio} labelStyle={radioGrpStyle.label} layout='row'/>
        </View>
   );
}

export const radioGrpStyle = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    label:{
        color:"#fff",
    },
    radio:{
        alignItems: "center"
    },
});
