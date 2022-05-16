import React, {useRef} from 'react';
import {useAuth} from "./auth";
import {useLocation, useNavigate} from "react-router-dom";

const LoginComponent = () => {
    const userRef = useRef<any>(null);
    const navigate = useNavigate();
    const location = useLocation();
    const auth = useAuth();

    // @ts-ignore
    const redirectPath = location.state?.path || '/';
    console.log(redirectPath)

    const onHandleLogin = () => {
        const username = userRef.current?.value;
        auth.login({username: username});
        // replacing
        navigate(redirectPath, { replace: true});
    }

    return (<>
        <label>Username: </label>
        <input type="text" ref={userRef} required /> <br />
        <button onClick={onHandleLogin}>Login</button>
    </>);
}

export default LoginComponent;