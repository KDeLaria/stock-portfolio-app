import React, { useState } from 'react';

function Register() {
  const [name, setName] = useState('');
  const [regUsername, setRegUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registerMessage, setRegisterMessage] = useState('');
  const [usernameWarning, setUsername] = useState("");
  const [nameWarning, setNameWarning] = useState("");
  const [passwordWarning, setPasswordWarning] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would typically handle the registration logic,
    // for example, sending a request to your backend server
    if (name && regUsername && password && confirmPassword) {
      if (password === confirmPassword) {
        try {
          const query = await fetch("/api/user", {
            method: "POST",
            body: JSON.stringify({
              name: name, username: regUsername,
              password: password
            }),
            headers: {
              'Content-Type': 'application/json'
            }
          });
          const results = await query.json();

          if (results?.status !== "error") {
            window.location.href = "/";
          }
          else {
            throw new Error("");
          }
        }
        catch (err) {
          setRegisterMessage("Sorry, we are unable to register your account.")
        }
      }
      else {
        setPasswordWarning("The passwords do not match.")
      }
    }
    else {
      if (name === "") {
        setNameWarning("Name is required.");
      }
      if (name === "") {
        setNameWarning("Name is required.");
      }
    }
    // Make sure to add validation for the inputs, for example, check if passwords match

  };

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <h3 className="text-2xl font-bold text-center">Create an account</h3>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <label htmlFor="name" className="block">Name</label>
            <input
              type="text"
              placeholder="Name"
              id="name"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <label htmlFor="regUsername" className="block">Username</label>
            <input
              type="text"
              placeholder="Username"
              id="regUsername"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              value={regUsername}
              onChange={(e) => setRegUsername(e.target.value)}
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
          <div className="mt-4">
            <label htmlFor="confirmPassword" className="block">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              id="confirmPassword"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          {passwordWarning.length > 0 && (<div>{passwordWarning}</div>)}
          <div className="flex items-center justify-between mt-4">
            <button
              type="submit"
              className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;