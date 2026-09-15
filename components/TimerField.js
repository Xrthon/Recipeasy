import {useState } from 'react';
import { View,TouchableOpacity, Text } from 'react-native';
import { TimerPickerModal } from "react-native-timer-picker";
import {StyleSheet} from 'react-native';


export function TimerField () {
    const [showPicker, setShowPicker] = useState(false);
    const [alarmString, setAlarmString] = useState(null);

// Forma du Timer HH:MM
    const formatTime = ({
        hours,
        minutes,
    }) => {
        // Tableau des valeurs du timer
        const timeParts = [];

        //Initialisation des HH:MM
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

export const timerStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: "center", 
        justifyContent: "space-between",
        padding: 10,
        borderRadius: 8,
        gap: 10,
    },
    label: { 
        color:"#fff",
    },
    value: {
        color:"#fff",
        fontWeight: "600",
    },
    button: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#fff",
        paddingVertical: 4,
        paddingHorizontal: 8,
    },
    buttonText: {
        color: "#fff",
    },
});