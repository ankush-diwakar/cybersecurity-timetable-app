import { View, Text, StyleSheet } from 'react-native';
import React from 'react'
import { pracs } from '../constants';

const Subjects = () => {
    return (
        <>
            {pracs.map((prac, index) => (
                <View key={index} style={styles.button}>
                    <Text style={styles.buttonText}>{prac.subject}</Text>
                </View>
            ))}
        </>
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
export default Subjects