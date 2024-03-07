import React, { useState } from 'react';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
            <label htmlFor="email" className="block">Email</label>
            <input 
              type="email" 
              placeholder="Email" 
              id="email"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <label htmlFor="password" className="block">Password</label>
            <input 
              type="password" 
              placeholder="Password" 
              id="password"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
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