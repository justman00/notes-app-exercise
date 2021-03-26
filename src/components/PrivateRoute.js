import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({ isAuthenticated, ...props }) => {
    if(!isAuthenticated) {
       return <Redirect to = "/login"/>;
    }

    return <Route {...props}/>
}

export default PrivateRoute;