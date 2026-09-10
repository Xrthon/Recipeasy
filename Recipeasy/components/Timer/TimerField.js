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
        seconds,
    }) => {
        // Tableau des valeurs du timer
        const timeParts = [];

        //Initialisation des HH:MM:SS 
        if (hours !== undefined) {
            timeParts.push(hours.toString().padStart(2, "0"));
        }
        if (minutes !== undefined) {
            timeParts.push(minutes.toString().padStart(2, "0"));
        }
        if (seconds !== undefined) {
            timeParts.push(seconds.toString().padStart(2, "0"));
        }
        // Regroupement des valeur dans le tableau 
        return timeParts.join(":");
    };


    return (
        //Vue global du timer  
        <View style={timerStyles.container}>

        {/* Texte pour afficher l'état de la duration */}
            <Text style={timerStyles.textstate}>
                { alarmString !== null ? "Duration" : "No duration set"}
            </Text>


            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setShowPicker(true)}>


                <View style={{alignItems: "center"}}>
                    {alarmString !== null ? (
                        <Text style={timerStyles.textstate}>
                            {alarmString}
                        </Text>
                    ) : null}


                    <TouchableOpacity

                        onPress={() => setShowPicker(true)}>

                        <View>

                            <Text
                                style={{
                                    borderWidth: 1,
                                    borderRadius: 10,
                                    fontSize: 10,
                                    overflow: "hidden",
                                    borderColor: "#8C8C8C",
                                    color: "#8C8C8C"
                                }}>
                                {"Set Duration"}
                            </Text>

                        </View>

                    </TouchableOpacity>


                </View>


            </TouchableOpacity>


            <TimerPickerModal
                closeOnOverlayPress
                LinearGradient={LinearGradient}
                modalTitle="Set Duration"
                onCancel={() => setShowPicker(false)}
                onConfirm={(pickedDuration) => {
                    setAlarmString(formatTime(pickedDuration));
                    setShowPicker(false);
                }}
                setIsVisible={setShowPicker}
                styles={{
                    theme: "light",

                }}
                visible={showPicker}
                 maximumHours={99}
            />

            
        </View>
    )
}