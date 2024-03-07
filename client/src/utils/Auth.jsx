import {createContext, useContext, useState, useEffect} from "react"

const AuthContext = createContext();

export default function AuthProvider (props) {
    const [loggedIn, setLoggedIn] = useState(false);
    const [loggedInUser, setLoggedInUser] = useState();

    return (
        <AuthContext.Provider  value={{loggedIn, setLoggedIn, loggedInUser, setLoggedInUser}}>
            {props.children}
        </AuthContext.Provider>
    )
}