import React, { useState } from 'react';
import { useAuth } from '../../utils/Auth';

function Register() {
  const [name, setName] = useState('');
  const [regUsername, setRegUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registerMessage, setRegisterMessage] = useState('');
  const [usernameWarning, setUsernameWarning] = useState("");
  const [nameWarning, setNameWarning] = useState("");
  const [passwordWarning, setPasswordWarning] = useState("");
  const auth = useAuth();

  function clearWarnings() {
    setRegisterMessage("");
    setPasswordWarning("");
    setUsernameWarning("");
    setUsernameWarning("");
  }

  function clearForm() {
    setName("");
    setRegUsername("");
    setPassword("");
    setConfirmPassword("");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    clearWarnings();
    if (name && regUsername && password) {
      if (password === confirmPassword) {
        if (password.length > 7) {
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
              clearForm();
              auth.loggedInUser = results.name;
              auth.userId = results._id;
              window.location.href = "/";
            }
            else {
              throw new Error("");
            }
          }
          catch (err) {
            setRegisterMessage("Sorry, we are unable to register your account.");
          }
        }
        else {
          setPasswordWarning("The password must be have at least 8 characters.");
        }
      }
      else {
        setPasswordWarning("The passwords do not match.");
      }
    }
    else {
      if (name === "") {
        setNameWarning("Name is required.");
      }
      if (regUsername === "") {
        setUsernameWarning("Username is required.");
      }
      if (password === "" || confirmPassword === "") {
        setPasswordWarning("Password is required.");
      }
    }
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
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 text-slate-200"
              value={name}
              onChange={(e) => { setName(e.target.value); clearWarnings(); }}
            />
          </div>
          <div className="mt-4">
            <label htmlFor="regUsername" className="block">Username</label>
            <input
              type="text"
              placeholder="Username"
              id="regUsername"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 text-slate-200"
              value={regUsername}
              onChange={(e) => { setRegUsername(e.target.value); clearWarnings(); }}
            />
          </div>
          <div className="mt-4">
            <label htmlFor="password" className="block">Password</label>
            <input
              type="password"
              placeholder="Password"
              id="password"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 text-slate-200"
              value={password}
              onChange={(e) => { setPassword(e.target.value); clearWarnings(); }}
            />
          </div>
          <div className="mt-4">
            <label htmlFor="confirmPassword" className="block">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              id="confirmPassword"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 text-slate-200"
              value={confirmPassword}
              onChange={(e) => { setConfirmPassword(e.target.value); clearWarnings(); }}
            />
          </div>
          {registerMessage.length > 0 && (<div className='text-red-600'>{registerMessage}</div>)}
          {nameWarning.length > 0 && (<div className='text-red-600'>{nameWarning}</div>)}
          {usernameWarning.length > 0 && (<div className='text-red-600'>{usernameWarning}</div>)}
          {passwordWarning.length > 0 && (<div className='text-red-600'>{passwordWarning}</div>)}
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