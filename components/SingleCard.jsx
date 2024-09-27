import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Title from './Title'; // Assuming both components are in the same folder
import { useFonts } from 'expo-font';

const SingleCard = ({ lecture }) => {

    const [fontsLoaded] = useFonts({
        myfont: require('../assets/fonts/sfpro.ttf'), // Add your custom font here
    });
    if (!fontsLoaded) {
        return null;
    }

    return (
        <>
            {/* <View style={styles.con}>
        <Text style={styles.texth}>{lecture.day}</Text>
      </View> */}
            {lecture.map((lec, index) => (
                <View key={index} style={styles.card}>
                    <Title text={lec.subject} />
                    <Text style={styles.text}>Time: {lec.time}</Text>
                </View>
            ))}

        </>

    );
};

const styles = StyleSheet.create({
    con: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        flex: 1,
        borderColor: '#fff', // White border
        border: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#343a40', // Black background
        borderRadius: 20, // Rounded corners
        padding: 20, // Padding inside the card
        margin: 10, // Margin around the card
        elevation: 10, // Shadow for Android
    },
    text: {
        fontFamily: 'myfont', // Use custom font
        letterSpacing: 0.1,
        color: 'white', // White text for better visibility
        fontSize: 16,
    },
    texth: {
        fontFamily: 'myfont', // Use custom font
        letterSpacing: -1,
        textTransform: 'capitalize', // Uppercase text
        color: 'white', // White text for better visibility
        fontSize: 35,
    },
});

export default SingleCard;
