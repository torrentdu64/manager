import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {

  componentWillMount() {

    const config = {
    apiKey: "AIzaSyBGltpKYhHXsRNFTHM_I8Zl1ON34oYS3ZI",
    authDomain: "auth-4ce11.firebaseapp.com",
    databaseURL: "https://auth-4ce11.firebaseio.com",
    projectId: "auth-4ce11",
    storageBucket: "auth-4ce11.appspot.com",
    messagingSenderId: "803019534852"
  };
  firebase.initializeApp(config);
  }

  render(){
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
      );
  }
}


export default App;
