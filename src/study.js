import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
const items = [];

class study extends Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
  }

  state = {
    toDo: '',
  };
  addItem() {
    items.push(this.state.toDo);
    this.setState({toDo: ''});
  }

  render() {
    return (
      <SafeAreaView style={styles.general}>
        <Text style={{fontSize: 55, color: 'orange', fontWeight: 'bold'}}>
         MY TODO
        </Text>
        <ScrollView>
          <View key={items}>
            {items.map((item) => {
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
            keyboardType="visible-password"
            value={this.state.toDo}
            onChangeText={(v) => this.setState({toDo: v})}
            placeholder="Yapacağınızı giriniz"
            style={styles.InputStyle}
          />
          <TouchableOpacity onPress={this.addItem} style={styles.generalStyle}>
            <Text style={styles.textStyle}>ADD TODO</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export default study;

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
  InputStyle: {
    backgroundColor: '#ECEFF1',
    borderRadius: 12,
    width: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').height * 0.05,
    alignSelf: 'center',
  },
  todoContainer: {
    alignSelf: 'center',
    flexDirection:"row",
    flexWrap:"wrap",
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: '#546E7A',
    width: Dimensions.get("window").width*0.95,
   height: "auto"
  },
  todoText: {
    color: 'white',
    fontSize: 25,
    paddingLeft:10,
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


