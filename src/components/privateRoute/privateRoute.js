import React , {userContext} from 'react';
import{Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({children, ...rest}) => {

 const user = JSON.parse(localStorage.getItem('user')) || {} ;

    return(
        <Route
        {...rest}
        render={({location}) => 
            user.email ? (
                children
            ) : (
                <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location}
                }}
                />
                ) 
            }
        />
    );
}

export default PrivateRoute;