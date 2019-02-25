import React from 'react';
import { Route } from 'react-router-dom';
import LoginFormContainer from '../components/session/login_form_container'
import SignupFormContainer from '../components/session/signup_form_container'

const App = () => (
    <div>
        <h1> Bench BnB </h1>
        <Route path="/login" component={LoginFormContainer} />
        <Route path="/signup" component={SignupFormContainer} />
    </div>
);

export default App;