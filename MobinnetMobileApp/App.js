import React, { Component } from 'react'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './src/reducers';
import AppStack from './src/helpers/navigators';
import { Root } from "native-base";

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Root>
        <Provider store={store}>
          <AppStack />
        </Provider>
      </Root>
    );
  }
}
