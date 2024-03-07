import React, { useState } from 'react';

function LoginPage() {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    //  login logic,
    console.log(email, password);
  };

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md px-8 py-6 mt-3 text-left bg-white shadow-lg">
        <h3 className="text-2xl font-bold text-center">Login to your account</h3>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <label htmlFor="loginEmail" className="block">Email</label>
            <input 
              type="email" 
              placeholder="Email" 
              id="loginEmail"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              value={loginEmail} 
              onChange={(e) => setLoginEmail(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <label htmlFor="loginPassword" className="block">Password</label>
            <input 
              type="password" 
              placeholder="Password" 
              id="loginPassword"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              value={loginPassword} 
              onChange={(e) => setLoginPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between mt-4">
            <button 
              type="submit" 
              className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;