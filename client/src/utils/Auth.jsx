import {createContext, useContext, useState, useEffect} from "react"

const AuthContext = createContext();

export default function AuthProvider (props) {
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <AuthContext.Provider  value={{loggedIn, setLoggedIn}}>
            {props.children}
        </AuthContext.Provider>
    )
}