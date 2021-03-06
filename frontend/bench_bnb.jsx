import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from "./util/session_api_util";
import configureStore from './store/store'
import Root from "./components/root"

document.addEventListener('DOMContentLoaded', () => {
  let store;
  // debugger
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
        },
      session: { 
        currentUser: window.currentUser.id }
      };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);

  window.APIUtil = APIUtil;
});