import { View, Text, StyleSheet, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react'
import { pracs } from '../constants';
import { Link, useNavigation } from 'expo-router';
import { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';


const acn = () => {
    const [acnData, setacnData] = useState([]);
    const dsDt = pracs.filter((prac) => (prac.link === '/acn'));


    const navigation = useNavigation();
    const router = useRouter();
    useEffect(() => {
        setacnData(dsDt[0].practicals);
    }, [])
    useEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, [navigation]);

    return (
        <ScrollView>
            <View style={styles.container}>
                <StatusBar translucent={true} backgroundColor="black" />
                <Text style={styles.titleBig}>Advanced Computer Networks</Text>
                <Text style={styles.titleBig2}>Practicals</Text>
                {acnData.map((prac, index) => (
                    <View key={index} style={styles.containerStyle}>
                        <Text style={styles.buttonText}>{prac.practicalNo} - {prac.practicalName}</Text>
                    </View>
                ))}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    titleBig: {
        marginTop: 20,
        fontFamily: 'myfont',
        color: 'white',
        fontSize: 35,
        letterSpacing: -1,
        color: 'white',
        textAlign: 'center',
    },
    titleBig2: {
        fontFamily: 'myfont',
        color: 'white',
        textTransform: 'uppercase',
        fontSize: 20,
        letterSpacing: 0.8,
        color: '#adb5bd',
        textAlign: 'center',
        marginBottom: 10,
    },
    containerStyle: {
        padding: 15,
        margin: 10,
        borderWidth: 1,
        borderColor: '#6c757d',
        borderRadius: 20,
        backgroundColor: '#343a40',
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        marginTop: 30,
        backgroundColor: '#000',
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
        letterSpacing: -0.5,
        fontSize: 16,
        color: '#fff', // Black text color
        textTransform: 'capitalize', // Uppercase text
        fontSize: 18, // Font size
        fontWeight: 'bold', // Bold font
    },
});
export default acn