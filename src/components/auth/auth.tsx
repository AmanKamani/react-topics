import React, {useState, createContext, useContext} from 'react';
import UserType from "../../services/models/User";

const AuthContext = createContext<any>(null);

export const AuthProvider = (props: {children: any}) => {
    const [user, setUser] = useState<UserType | null>(null);

    const logout = () => {
        setUser(null);
    }

    const login = (user: UserType) => {
        setUser(user);
    }

    return <AuthContext.Provider value={{user, login, logout}}>
        {props.children}
    </AuthContext.Provider>;
}

export const useAuth = () => {
    return useContext(AuthContext);
}