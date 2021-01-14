import React from 'react';
import {
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import FormLogin from '../components/formLogin/FormLogin';


const AuthNavigator = () => {
    return (
        <Switch>
            <Route exact path='/'>
                <Redirect to='/login' />
            </Route>
            <Route path='/login' component={FormLogin} />
            <Route path='/*'>
                <Redirect to='/' />
            </Route>
        </Switch>
    );
};

export default AuthNavigator;