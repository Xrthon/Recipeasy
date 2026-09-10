import {useState } from 'react';
import { View,TouchableOpacity, Text } from 'react-native';
import {timerStyles} from './TimerField.styles';

import { TimerPickerModal } from "react-native-timer-picker";
import { LinearGradient } from "expo-linear-gradient"; 

export function TimerField () {
    const [showPicker, setShowPicker] = useState(false);
    const [alarmString, setAlarmString] = useState(null);

// Forma du Timer HH:MM:SS
    const formatTime = ({
        hours,
        minutes,
    }) => {
        // Tableau des valeurs du timer
        const timeParts = [];

        //Initialisation des HH:MM:SS 
        if (hours !== undefined) {
            timeParts.push(`${hours.toString().padStart(1, "0")}h `);
        }
        if (minutes !== undefined) {
            timeParts.push(`${minutes.toString().padStart(2, "0")}m`);
        }
        // Regroupement des valeur dans le tableau 
        return timeParts.join(" ");
    };

    return (
        <View style={timerStyles.container}>
            <Text style={timerStyles.label}>
                {alarmString !== null ? "Duration:" : "No duration set"}
            </Text>

            {alarmString !== null && (
                <Text style={timerStyles.value}>
                    {alarmString}
                </Text>
            )}

            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setShowPicker(true)}
                style={timerStyles.button}
            >
                <Text style={timerStyles.buttonText}>
                    Set Duration
                </Text>
            </TouchableOpacity>

            <TimerPickerModal
                closeOnOverlayPress
                modalTitle="Set Duration"
                onCancel={() => setShowPicker(false)}
                onConfirm={(pickedDuration) => {
                    setAlarmString(formatTime(pickedDuration));
                    setShowPicker(false);
                }}
                setIsVisible={setShowPicker}
                visible={showPicker}
                maximumHours={12}
                hideSeconds
            />
        </View>
    )
}