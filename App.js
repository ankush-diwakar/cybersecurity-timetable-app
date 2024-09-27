import React, { useEffect, useState } from 'react';
import { ScrollView, View, StyleSheet, StatusBar, Text } from 'react-native';
import Card from './components/Card'; // Assuming Card is in the same folder
import { getFormattedDate, getToday, lec } from './constants'; // Assuming lec is in the same folder
import { useFonts } from 'expo-font';
import SingleCard from './components/SingleCard';
import CustomBtn from './components/CustomBtn';
import Title from './components/Title';
import Subjects from './components/Subjects';


const App = () => {

  const getLecturesByDay = (day) => {
    const foundLectures = lec.find(lectureDay => lectureDay.day === day);
    if (foundLectures) {
      return foundLectures.lectures;
    }
  };
  const [todayDay, setTodayDay] = useState(getToday());
  const [todaysLectures, setTodaysLectures] = useState([]);
  const [toggleLectures, setToggleLectures] = useState(true);
  const setLec = () => {
    const todaysDay = getToday();
    setTodaysLectures(getLecturesByDay(todaysDay));
  }

  useEffect(() => {
    setLec();
  }, [])

  const setAll = () => {
    setTodaysLectures(lec);
  }

  const [fontsLoaded] = useFonts({
    'myfont': require('./assets/fonts/sfpro.ttf'), // Add your custom font here
  });
  if (!fontsLoaded) {
    return null;
  }


  return (
    <>
      <StatusBar translucent={true} backgroundColor="black" />
      <ScrollView style={styles.container}>
        <View style={styles.itemcon}>
          {
            !toggleLectures ? (
              <View style={styles.itemcon}>
                {lec.map((lecture, index) => (
                  <Card key={index} lecture={lecture} />
                ))}
                <CustomBtn title="Go back" onPress={() => (setToggleLectures((pr) => {
                  return !pr;
                }))} />
              </View>
            ) : (
              <>
                <Text style={styles.titleBig}>{todayDay}</Text>
                <Text style={styles.titleBig2}>{getFormattedDate()}</Text>
                {todaysLectures.length === 0 ? <Text style={styles.titleBig2}>Their are no lectures Today!🎉</Text> : <SingleCard lecture={todaysLectures} />}

                <CustomBtn title="show all lectures" onPress={() => (setToggleLectures((pr) => {
                  return !pr;
                }))} />
                <CustomBtn title="show Practicals" onPress={() => (setToggleLectures((pr) => {
                  return !pr;
                }))} />
                <Subjects />
              </>
            )
          }
          {/* <CustomBtn title="show all lectures" onPress={() => (setToggleLectures((pr) => {
            return !pr;
          }))} /> */}
        </View>
      </ScrollView>


    </>
  );
};

const styles = StyleSheet.create({
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
});

export default App;
