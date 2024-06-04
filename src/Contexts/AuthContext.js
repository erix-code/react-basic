import React, {useState} from "react";

const AuthContext = React.createContext();
function AuthProvider({children}) {
    const [user: {}, setUser] = useState({id: 1});
    React.useEffect(()=>{
        console.log("Current User", user);
    }, [user, setUser]);

    return (
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvider};