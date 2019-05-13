import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import reducer from './reducers';
import AppNavigator from './navigation/AppNavigator';

const store = createStore(
  reducer /* preloadedState, */,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logger)
);
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <AppNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  }
});
