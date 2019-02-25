import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from "./util/session_api_util";

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);

  window.APIUtil = APIUtil;
});