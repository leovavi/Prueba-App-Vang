import React from 'react';
import { StyleSheet, Text, View, Header } from 'react-native';
import TaskList from './TaskList.js';

export default class App extends React.Component {
  render() {
    return (
      <TaskList/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
