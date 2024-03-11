import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainHome from "./pages/mainHome";
import LoginRegister from "./pages/login-register";
import Search from "./pages/search"
import "./App.css";
import "./output.css"
import { AuthProvider } from "./utils/Auth";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <AuthProvider>
     <Router>
        <div className="bg-gray-100 text-black">
          <Routes>
            <Route path="/" element={<MainHome />} />
            <Route path="/login" element={<LoginRegister />} />
            <Route path="/search" element={<Search />} />
            <Route path="/*" element={<MainHome />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;