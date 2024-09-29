import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import React from 'react'
import { pracs } from '../constants';
import { Link, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { useRouter } from 'expo-router';

const Subjects = () => {
    const navigation = useNavigation();
    const router = useRouter();
    useEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, [navigation]);
    return (
        <>
            <StatusBar translucent={true} backgroundColor="black" />
            <View style={styles.container}>
                <Text style={styles.titleBig}>List Of All Practicals</Text>
                {pracs.map((prac, index) => (
                    <TouchableOpacity key={index} style={styles.button} onPress={() => { }}>
                        <Link href={prac.link} ><Text style={styles.buttonText}>{prac.subject}</Text>  </Link>
                    </TouchableOpacity>
                ))}
            </View >
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        backgroundColor: '#000',
    },
    titleBig: {
        marginTop: 20,
        fontFamily: 'myfont',
        color: 'white',
        fontSize: 35,
        letterSpacing: -1,
        color: 'white',
        textAlign: 'center',
    },
    button: {

        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#343a40', // White background color
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20, // Rounded corners with radius of 20
        borderWidth: 1, // Optional: If you want a visible border
        borderColor: '#6c757d', // Optional: Border color (black)
        margin: 10,
    },
    buttonText: {
        letterSpacing: -1,
        fontSize: 16,
        color: '#fff', // Black text color
        textTransform: 'capitalize', // Uppercase text
        fontSize: 18, // Font size
        fontWeight: 'bold', // Bold font
    },
});
export default Subjects