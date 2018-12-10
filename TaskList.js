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
                    style = {{flex: 4}}
                    />
                    <Button
                        title = "Add"
                        color = "blue"
                        style = {{flex: 1}}
                        onPress = {this.handleOnPress}
                    />
                </View>
                {
                    this.state.tasks.map(task => (
                        <Text>{task}</Text>
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
          width: 150
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
          backgroundColor: "#657",
          color: "black",
          height: 40,
          width: 300,
          marginTop: 20,
          marginHorizontal: 20,
          paddingHorizontal: 10,
          alignSelf: "center"
      },
      imageContainer: {
          flex: 1,
      },
      image: {
          flex: 1,
          width: null,
          height: null,
          resizeMode: 'cover'
      },
      detailsContainer: {
          flex: 1,
          justifyContent: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          paddingHorizontal: 20
      }
  });