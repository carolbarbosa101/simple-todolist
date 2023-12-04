import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,// para o teclado nao bugar
  Platform
} from 'react-native';
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function App() {
  const [task, setTask] = useState(['alisson', 'renan', 'marcelo']);
  const [newTask, setNewTask] = useState('');


//logically
  async function addTask(){
    setTask([ ... task, newTask ]);
  }






  return (
    <> 
    <KeyboardAvoidingView
      keyboardVerticalOffset={0}
      behavior="padding"
      style={{ flex: 1}}
      enabled={ Platform.OS === 'ios'}
    >
    <View style={styles.container}>
        <View style={styles.Body}>
          <FlatList 
          style={styles.FlatList}
          data={task} //de onde vai vir os dados
          keyExtractor={item=>item.toString()} // propriedade especie de um id que o react native sabe qual item é aquele e tbm convertermos ele aqui 
          showsVerticalScrollIndicator={false} //
          renderItem={({ item }) =>(
            <View style={styles.ContainerView}>
              <Text>
                [item] 
              </Text>
              <TouchableOpacity>
                <MaterialIcons 
                name="delete-forever"
                size={25}
                color="#000000"
                />
              </TouchableOpacity>
            </View>
          )}
         />
        
      </View>
        <View style={styles.Form}>
          <TextInput
            style={styles.Input}
            placeholderTextColor="#1b1e23"
            autoCorrect={true}
            placeholder="Adicione uma tarefa"
            maxLength={70}
            backgroundColor="#d4d5d6"
            onChangeText={text => setNewTask(text)} //to passando pra nova tarefa o valor do texto, toda vez que o texto mudar
            value={newTask}
          />
          <TouchableOpacity
          style={styles.Button}
          onPress={() => addTask()}
          >
            <Ionicons
              name="ios-add" 
              size={30}
              color="#fff"/>
          </TouchableOpacity>
         </View>
        </View>
         </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#23262b',
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginTop: 50,
    marginLeft: 0
  },
  Body: {
    flex: 1
  },
  Form: {
    padding: 0,
    height: 70,
    justifyContent: 'center',
    alignSelf: 'stretch',
    flexDirection: 'row',
    paddingTop: 5,
    marginEnd: 10,
  },
  Input: {
    flex: 1,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 4,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#a9a9a9"
  },
  Button: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1c6cce',
    borderRadius: 4,
    marginLeft: 10,
    marginEnd: 20
  },
  FlatList: {
    flex: 1,
    marginTop: 15,
    backgroundColor: '#23262b',
  },
  ContainerView: {
    marginBottom: 15,
    padding: 15,
    borderRadius: 5,
    backgroundColor: "#a9a9a9",
    shadowColor: "1c1e22",
    shadowOffset: 10,
    
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#16181c",
  }
});
