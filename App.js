import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList
} from 'react-native';
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function App() {
  const [task, setTast] = useState(['alisson', 'renan', 'marcelo']);
  const [newTask, setNewTask] = useState('');

  return (
    <> 
    <View style={styles.container}>
        <View style={styles.Body}>
          <FlatList 
          style={styles.FlatList}
          data={task} //de onde vai vir os dados
          keyExtractor={item=>item.toString()} // propriedade especie de um id que o react native sabe qual item é aquele e tbm convertermos ele aqui 
          showsVerticalScrollIndicator={false} //
          renderItem={({ item }) =>(
            <View style={styles.ContainerView}>
              <Text>[item]</Text>
              <TouchableOpacity>
                <MaterialIcons 
                name="delete-forever"
                size={25}
                color="#f64c75"
                />
              </TouchableOpacity>
            </View>
          )}
         />
        
      </View>
        <View style={styles.Form}>
          <TextInput
            style={styles.Input}
            placeholderTextColor="#999"
            autoCorrect={true}
            placeholder="Adicione uma tarefa"
            maxLength={50}
          />
          <TouchableOpacity style={styles.Button}>
            <Ionicons name="ios-add" size={25} color="#fff"/>
          </TouchableOpacity>
         </View>
         </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginTop: 50,
    marginLeft: 15
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
    borderTopWidth: 1,
    borderColor: '#eee',
    marginEnd: 10,
  },
  Input: {
    flex: 1,
    height: 40,
    backgroundColor: '#eee',
    borderRadius: 4,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#eee"
  },
  Button: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1c6cce',
    borderRadius: 4,
    marginLeft: 10,
    marginEnd: 20
  },
  FlatList: {
    flex: 1,
    marginTop: 5
  },
  ContainerView: {
    marginBottom: 15,
    padding: 15,
    borderRadius: 4,
    backgroundColor: "#eee"
  }
});
