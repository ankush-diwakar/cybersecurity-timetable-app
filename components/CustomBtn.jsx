import React from 'react'
import { useFonts } from 'expo-font';

import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
const CustomBtn = ({ title, onPress }) => {

    const [fontsLoaded] = useFonts({
        myfont: require('../assets/fonts/sfpro.ttf'), // Add your custom font here
    });
    if (!fontsLoaded) {
        return null;
    }

    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff', // White background color
        paddingVertical: 10,
        paddingHorizontal: 20,

        borderRadius: 20, // Rounded corners with radius of 20
        borderWidth: 1, // Optional: If you want a visible border
        borderColor: '#000', // Optional: Border color (black)
        margin: 10,
    },
    buttonText: {
        letterSpacing: -1,
        fontSize: 16,
        color: '#000', // Black text color
        textTransform: 'capitalize', // Uppercase text
        fontSize: 18, // Font size
        fontWeight: 'bold', // Bold font
    },
});
export default CustomBtn