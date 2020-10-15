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
                <TouchableOpacity
                  onPress={() => delItem(liste.splice(liste.indexOf(item), 1))}
                  style={styles.delButton}>
                  <Text style={styles.delText}>X</Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </ScrollView>
      <View style={styles.container}>
        <TextInput
          returnKeyType={'can'}
          blurOnSubmit={false}
          onSubmitEditing={() =>
            text == ''
              ? console.warn('Please enter a todo')
              : addItem(liste.push(text) && setText(''))
          }
          onChangeText={(text) => setText(text)}
          defaultValue={text}
          style={styles.InputStyle}
        />
        <TouchableOpacity
          onPress={() =>
            text == ''
              ? console.warn('Please enter a todo')
              : addItem(liste.push(text) && setText(''))
          }
          style={styles.addButton}>
          <Text style={styles.textButton}>ADD TODO</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => {
            delItem(liste.splice(0));
          }}>
          <Text style={styles.textButton}>RESET</Text>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    color: 'orange',
    fontSize: 50,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  container: {
    backgroundColor: '#b0bec5',
    alignItems: 'stretch',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginBottom: 20,
    borderRadius: 20,
  },
  delButton: {
    position: 'absolute',
    right: 2,
    top: -4,
    backgroundColor: '#eceff1',
    borderRadius: 20,
    height: Dimensions.get('window').height * 0.02,
    width: Dimensions.get('window').width * 0.04,
    justifyContent: 'center',
  },
  delText: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  todoContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: '#546E7A',
    width: Dimensions.get('window').width * 0.95,
    justifyContent: 'space-between',
  },
  todoText: {
    color: 'white',
    fontSize: 20,
    paddingLeft: 15,
    paddingTop: 12,
    paddingBottom: 8,
  },
  InputStyle: {
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 10,
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
  addButton: {
    marginHorizontal: 120,
    backgroundColor: '#7e8d94',
    borderRadius: 10,
    marginBottom: 10,
  },
  textButton: {
    textAlign: 'center',
    fontWeight: 'bold',
    paddingVertical: 10,
    color: 'white',
  },
});