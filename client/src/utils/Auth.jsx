import {createContext, useContext, useState, useEffect} from "react"
import Cookie from "js-cookie";

const AuthContext = createContext({
  loggedIn: false,
  name: "",
  user_id: "",
  setLoggedIn: () => {},
  setName: () => {},
  setUser_id: () =>  {}
});

export const useAuth = () => useContext(AuthContext);


export const AuthProvider = function(props) {
    const [loggedIn, setLoggedIn] = useState(false);
    const [name, setName] = useState("");
    const [user_id, setUser_id] = useState("");
    
    function checkUser () {
        const cookie = Cookie.get("auth_cookie");
        setLoggedIn( (cookie && user_id) ? true : false );
    }

    async function logout() {
        const results = await fetch("/api/user/logout", {
          method: "POST",
          body: "",
          headers: { 'Content-Type': 'application/json' }
        });
        const result = await results.json();
        if( result.status === "success" ) {
          setLoggedIn(false);
          setName("");
          setUser_id("")
          window.location.href = "/";
        };
      };

    useEffect(()=>{
        checkUser();
    },[user_id]);
    
    return (
        <AuthContext.Provider value={{loggedIn, logout, setName, setUser_id,
          name, user_id}}>{props.children}
        </AuthContext.Provider>
    )
}