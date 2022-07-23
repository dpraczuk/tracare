import React, { useState } from "react";


interface IUserCtx {
    token: string | null;
    isLoggedIn: boolean;
    login: (token: string | null) => void;
    logout: () => void;
}

const AuthContext = React.createContext<IUserCtx>({
    token: '',
    isLoggedIn: false,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    login: (token) => Promise,
    logout: () => Promise,
});


export const AuthContextProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [token, setToken] = useState<string | null>(null);

    const userIsLoggedIn = !!token;


    const loginHandler = (token :string | null)=> {
        setToken(token)
    }

    const logoutHandler = ()  => {
        setToken(null)
    }

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    }


    return (
        <AuthContext.Provider value={contextValue}> {children} </AuthContext.Provider>
    )
}

export default AuthContext