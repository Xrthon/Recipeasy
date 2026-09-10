import {StyleSheet} from 'react-native';

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