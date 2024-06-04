import React, {useState} from "react";

const AuthContext = React.createContext();
function AuthProvider({children}) {
    const [user: {}, setUser] = useState({id: 1});

    return (
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvider};