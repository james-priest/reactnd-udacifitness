import React from 'react';
import { StyleSheet, View } from 'react-native';
import AddEntry from './components/AddEntry';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import reducer from './reducers';
import History from './components/History';

const store = createStore(
  reducer /* preloadedState, */,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logger)
);
export default class App extends React.Component {
  componentDidMount() {
    console.log('begin');
    // debugger;
    console.log('end');
  }
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          {/* <AddEntry /> */}
          <History />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
    // backgroundColor: '#fff',
    // marginLeft: 10,
    // marginRight: 10,
    // alignItems: 'stretch',
    // justifyContent: 'center'
  }
});
