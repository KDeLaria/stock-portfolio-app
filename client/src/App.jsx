import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainHome from "./pages/mainHome";
import LoginRegister from "./pages/login-register";
import "./App.css";
import "./output.css"
import { AuthProvider } from "./utils/Auth";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <Portfolio />
  );
}

export default App;