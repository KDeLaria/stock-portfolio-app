import React from 'react';
import Login from '../components/login-register/login';
import Register from '../components/login-register/register';




const LoginRegister = () => {
  const loggedIn = false; // Replace with actual login check

  return (
    <div className="flex justify-center items-center bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Login />
          <Register />
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;

