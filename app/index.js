import React, { useEffect, useState } from 'react';
import { ScrollView, View, TouchableOpacity, StyleSheet, StatusBar, Text } from 'react-native';
import { Link, useNavigation } from 'expo-router';
import Card from '../components/Card'; // Assuming Card is in the same folder
import { getFormattedDate, getToday, lec } from '../constants'; // Assuming lec is in the same folder
import { useFonts } from 'expo-font';
import SingleCard from '../components/SingleCard';
import CustomBtn from '../components/CustomBtn';
import { useRouter } from 'expo-router';
import Zocial from '@expo/vector-icons/Zocial';


const index = () => {
    const router = useRouter();
    const getLecturesByDay = (day) => {
        const foundLectures = lec.filter((lm) => lm.day === day);
        if (foundLectures.length !== 0) {
            return foundLectures[0].lectures;
        } else {
            return [];
        }
    };
    const [todayDay, setTodayDay] = useState(getToday());
    const [todaysLectures, setTodaysLectures] = useState([]);
    const [toggleLectures, setToggleLectures] = useState(true);
    const setLec = () => {
        const todaysDay = getToday();
        console.log(todaysDay);
        setTodaysLectures(getLecturesByDay(todaysDay));
    }

    useEffect(() => {
        setLec();
    }, [])
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, [navigation]);

    const setAll = () => {
        setTodaysLectures(lec);
    }

    const [fontsLoaded] = useFonts({
        'myfont': require('../assets/fonts/sfpro.ttf'), // Add your custom font here
    });
    if (!fontsLoaded) {
        return null;
    }

    return (
        <>

            <StatusBar backgroundColor="black" />
            <ScrollView style={styles.container} >

                {/* <View style={styles.itemcon}> */}
                {
                    !toggleLectures ? (
                        <ScrollView style={styles.container}>
                            <View style={styles.itemcon}>
                                <Text style={styles.titleBig5}>All Cyber security Lectures</Text>
                                {lec.map((lecture, index) => (
                                    <Card key={index} lecture={lecture} />
                                ))}
                                <CustomBtn title="Go back" onPress={() => (setToggleLectures((pr) => {
                                    return !pr;
                                }))} />
                            </View>
                        </ScrollView>
                    ) : (
                        <>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.titleBig}>{todayDay}</Text>
                                <Text style={styles.titleBig2}>{getFormattedDate()}</Text>
                                {todaysLectures?.length === 0 ? <Text style={styles.titleBig2}>Their are no lectures Today!🎉</Text> : <SingleCard lecture={todaysLectures} />}

                                <CustomBtn title="show all lectures" onPress={() => (setToggleLectures((pr) => {
                                    return !pr;
                                }))} />
                                <TouchableOpacity style={styles.button} onPress={() => { router.push('/subjects') }}>
                                    <Link href="/subjects"><Text style={styles.buttonText}>show Practicals</Text> </Link>
                                </TouchableOpacity>
                            </View>
                            <View style={{ height: 100, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                <Link href="https://github.com/ankush-diwakar"><Zocial style={{ height: 50, color: "#ffff", margin: 10 }} name="github" size={40} color="#fff" /></Link>
                                <Text style={styles.titleBig55}>Connect with me</Text>
                            </View>
                        </>
                    )
                }

            </ScrollView>


        </>
    );
};
//  <SingleCard lecture={todaysLectures} />
const styles = StyleSheet.create({
    titleBig5: {
        marginTop: 20,
        textTransform: 'capitalize',
        fontFamily: 'myfont',
        color: 'white',
        fontSize: 35,
        letterSpacing: -1.3,
        color: 'white',
        textAlign: 'center',
    },
    titleBig55: {
        textTransform: 'capitalize',
        fontFamily: 'myfont',
        color: 'white',
        fontSize: 35,
        letterSpacing: -1.3,
        color: 'white',
        textAlign: 'center',
    },
    container55: {
        flex: 1,
        backgroundColor: 'red',
        marginTop: 30,

        // Background color to make the card stand out
    },
    container: {
        flex: 1,
        marginTop: 30,
        backgroundColor: '#000', // Background color to make the card stand out
    },
    itemcon: {
        flex: 1,

        justifyContent: 'center',
        marginTop: 5,
        marginBottom: 10,
        padding: 16,
    },
    titleBig: {
        fontFamily: 'myfont',
        color: 'white',
        fontSize: 55,
        color: 'white',
        textAlign: 'center',
    },
    titleBig2: {
        fontFamily: 'myfont',
        color: 'white',
        fontSize: 20,
        letterSpacing: 0.8,
        color: '#adb5bd',
        textAlign: 'center',
        marginBottom: 10,
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
    buttonText7: {
        letterSpacing: -1,
        fontSize: "20%",
        color: '#fff', // Black text color
        textTransform: 'capitalize', // Uppercase text
        fontSize: 18, // Font size
        fontWeight: 'bold', // Bold font
    },
});

export default index;
