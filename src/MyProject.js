import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  Image,
  FlatList,
  Dimensions,
  ImageBackground,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';



const liste = [
  'Do a project with CodeHackers 🔥',
  'Teamwork with LightHouse 🕯🏠 or 🔦',
  'Tell your project to Code47 🕶',
];

const MyProject = () => {
  const [text, setText] = useState('');
  const [,addItem] = useState();
  const [, delItem] = useState();

  return (
    <SafeAreaView style={styles.general}>
      <View style={styles.header}>
        <Text style={styles.headerText}>TODO</Text>
        <Text style={{fontSize: 40, color: 'orange', paddingRight: 10}}>
          {liste.length}
        </Text>
      </View>
      <ScrollView>
        <View>
          {liste.map((item) => {
            return (
              <View style={styles.todoContainer}>
                <Text style={styles.todoText}>{item}</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
      <View style={styles.container}>
        <TextInput
          onChangeText={(text) => setText(text)}
          defaultValue={text}
          style={styles.InputStyle}
        />
        <TouchableOpacity
          onPress={() => addItem(liste.push(text) && setText(''))}
          style={styles.generalStyle}>
          <Text style={styles.textStyle}>ADD TODO</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MyProject;

const styles = StyleSheet.create({
  general: {
    flex: 1,
    backgroundColor: '#37474F',
    justifyContent: 'space-between',
  },
  container: {
    backgroundColor: '#B0BEC5',
    borderRadius: 10,
    height: Dimensions.get('window').height * 0.2,
    width: Dimensions.get('window').width * 0.95,
    justifyContent: 'space-around',
    alignSelf: 'center',
    marginBottom: 10,
  },
  todoContainer: {
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: '#546E7A',
    width: Dimensions.get('window').width * 0.95,
    justifyContent: 'center',
  },
  todoText: {
    color: 'white',
    fontSize: 25,
    paddingLeft: 15,
    paddingTop:8,
    paddingBottom:8
  },
  InputStyle: {
    backgroundColor: '#ECEFF1',
    borderRadius: 10,
    width: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').height * 0.05,
    alignSelf: 'center',
  },
  generalStyle: {
    backgroundColor: '#546E7A',
    alignSelf: 'center',
    width: Dimensions.get('window').width * 0.5,
    height: Dimensions.get('window').height * 0.06,
    justifyContent: 'center',
    borderRadius: 5,
  },
  textStyle: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
});
