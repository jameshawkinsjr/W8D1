import React from 'react';
import { Route } from 'react-router-dom';
import LoginFormContainer from '../components/session/login_form_container'
import SignupFormContainer from '../components/session/signup_form_container'
import { AuthRoute, ProtectedRoute } from '../util/route_utils'
import GreetingContainer from './greeting/greeting_container'

const App = () => (
    <div>
        <h1> Welcome to BenchBnB! </h1>
        <GreetingContainer />
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
    </div>
);

export default App;