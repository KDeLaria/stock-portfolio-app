import { useState } from "react";
import MainHome from "./components/mainHome";
import "./App.css";
import "./output.css"
import AuthProvider from "./utils/Auth";;

function App() {
  return (
    <AuthProvider>
      <div className="bg-gray-100 text-black">
        <MainHome />
      </div>
    </AuthProvider>
  );
}

export default App;