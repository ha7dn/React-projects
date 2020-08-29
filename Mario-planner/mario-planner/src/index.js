import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, compose} from 'redux';
import RootReducer from './store/reducers/root-reducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';//middleware to do async operations 
import {reduxFirestore, getFirestore, createFirestoreInstance} from 'redux-firestore';
import { ReactReduxFirebaseProvider,getFirebase} from 'react-redux-firebase';
import fbConfig from './config/fbConfig';

import firebase from 'firebase/app';


const store = createStore(RootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reduxFirestore(firebase, fbConfig) // redux bindings for firestore
  )
);

const rrfConfig = {
  userProfile: 'users',
}
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,


}




ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
