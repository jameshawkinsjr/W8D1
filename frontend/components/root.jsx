import React from 'react';
import App from './App'
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

const Root = ( { store } ) => (
    <Provider store={store}>
        <HashRouter>
            <div>
                React?
            <App />
                </div>
        </ HashRouter>
    </Provider>
)