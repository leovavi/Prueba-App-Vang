import React from 'react';
import {StyleSheet, Text, View, Platform, TextInput, KeyboardAvoidingView, ImageBackground, Header } from 'react-native';
import { Button } from 'react-native';

export default class TaskList extends React.Component {
    state = {
        todo: "",
        tasks: []
    }

    handleChangeText = (newTodo) => {
        this.setState({
            todo: newTodo
        })
    }

    handleOnPress = () =>{
        let newTasks = this.state.tasks;
        newTasks.push(this.state.todo);

        this.setState({
            todo: "",
            tasks: newTasks
        });
    }

    render(){
        const {todo} = this.state;

        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <TextInput
                    autoCorrect={false}
                    placeholder="Write a to do ..."
                    placeholderTextColor="black"
                    style={styles.textInput}
                    value = {todo}
                    clearButtonMode="always"
                    onChangeText = {this.handleChangeText}
                    />
                    <Button
                        title = "Add"
                        color = "blue"
                        onPress = {this.handleOnPress}
                        style = {{width: 50}}
                    />
                </View>
                {
                    this.state.tasks.map(task => (
                        <Text style = {styles.detailsContainer}>{task}</Text>
                    ))
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
          flex: 1,
          alignItems: "center",
          backgroundColor: "#fff",
          marginTop: 30
      },
      row: {
          flexDirection: "row",
          width: 350
      },
      textStyle: {
          textAlign: "center",
          fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto'
      },
      largeText: {
          fontSize: 44
      },
      smallText: {
          fontSize: 18
      },
      textInput: {
          borderColor: "#667",
          color: "black",
          width: 300,
          borderWidth: 1,
          paddingHorizontal: 10
      },
      detailsContainer: {
          justifyContent: 'center',
          paddingHorizontal: 20,
          fontSize: 20
      }
  });