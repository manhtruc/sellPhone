import React from 'react';
import {
    Switch,
    Route,
    Redirect,
    useLocation
} from "react-router-dom";
import Cart from '../components/cart/Cart';
import Details from '../components/details/Details';
import Main from '../components/main/Main';
// import {
//     TransitionGroup,
//     CSSTransition
// } from "react-transition-group";
import './router.css'

const Navigator = () => {

    // let location = useLocation();

    return (
        // <TransitionGroup>
        //     <CSSTransition
        //         key={location.key}
        //         classNames="fade"
        //         timeout={100}
        //     >
        <Switch>
            <Route exact path='/'>
                <Redirect to='/home' />
            </Route>
            <Route path="/home" component={Main} />

            <Route path="/:slug.:id.html" component={Details} />

            <Route path="/cart" component={Cart} />
            {/* <Route path='/*'>
                <Redirect to='/' />
            </Route> */}
        </Switch>
        //     </CSSTransition>
        // </TransitionGroup>
    );
};

export default Navigator;