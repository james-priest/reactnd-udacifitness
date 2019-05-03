import React from 'react';
import { StyleSheet, View } from 'react-native';
import AddEntry from './components/AddEntry';

export default class App extends React.Component {
  componentDidMount() {
    console.log('begin');
    debugger;
    console.log('end');
  }
  handlePress = () => {
    alert('hello!');
  };
  render() {
    return (
      <View style={styles.container}>
        <AddEntry />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'stretch',
    justifyContent: 'center'
  }
});
