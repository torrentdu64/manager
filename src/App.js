import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {

  componentWillMount() {

    const config = {
      apiKey:'AIzaSyAVypQZvNpx_81SUneZqHnbtgtdQy7Z-U0',
      authDomain:'manager-cc11c.firebaseapp.com',
      databaseURL:'https://manager-cc11c.firebaseio.com',
      projectId:'manager-cc11c',
      storageBucket:'manager-cc11c.appspot.com',
      messagingSenderId:'217705470606'
    };
      firebase.initializeApp(config);
  }

  render(){
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
      );
  }
}


export default App;
