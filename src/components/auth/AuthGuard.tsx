import React from 'react';
import {useAuth} from "./auth";
import {Navigate, useLocation} from "react-router-dom";

const AuthGuard = (props: {children: any}) => {
    const { pathname } = useLocation();
    const auth = useAuth();

    if(!auth.user){
        // state will be used in LoginComponent to get the redirect URL.
        return <Navigate to={'/login'} state={{path: pathname}}/>
    }

    return <>{props.children}</>
}

export default AuthGuard;