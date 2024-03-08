import {createContext, useContext, useState, useEffect} from "react"
import Cookie from "js-cookie";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);


export default function AuthProvider (props) {
    const [loggedIn, setLoggedIn] = useState(false);
    const [loggedInUser, setLoggedInUser] = useState(null);
    
    function checkUser () {
        const cookie = Cookie.get("auth_cookie");
        setLoggedIn( cookie ? true : false );
    }

    async function logout(){
        const results = await fetch("/api/user/logout", {
          method: "POST",
          body: "",
          headers: { 'Content-Type': 'application/json' }
        });
        const result = await results.json();
        if( result?.status === "success" ){
          setLoggedIn();
          setLoggedInUser();
          window.location.href = "/";
        }
      }

    useEffect(()=>{
        checkUser();
    },[])

    return (
        <AuthContext.Provider value={{loggedIn, logout, loggedInUser, 
            setLoggedInUser}} {...props}>
        </AuthContext.Provider>
    )
}