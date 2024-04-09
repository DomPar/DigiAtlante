import React, { createContext, useState } from 'react'

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    const loginAsAdmin = () => {
        setIsLoggedIn(true);
        setIsAdmin(true);
    };

    const logout = () => {
        setIsLoggedIn(false);
        setIsAdmin(false);
        localStorage.clear()
    }

    return (
    <AuthContext.Provider value={{ isLoggedIn, isAdmin, loginAsAdmin, logout}}>
        {children}
    </AuthContext.Provider>
  )
}

export {AuthContext, AuthProvider}