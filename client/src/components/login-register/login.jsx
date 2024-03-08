import { useState } from 'react';

function LoginPage() {
  const [loginUsername, setloginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loginUsername && loginPassword) {
      Auth.login(loginUsername, loginPassword);
      try {
        const query = await fetch("/api/user", {
          method: "POST",
          body: JSON.stringify({
            username: loginUsername,
            password: loginPassword
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const result = await query.json();
        if (result?.status === "error") {
          setLoginMessage("Invalid username or password.");
        } else {
          window.location.href = "/";
        }
      }
      catch (err) {
        console.log(err.message);
      }
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md px-8 py-6 mt-3 text-left bg-white shadow-lg">
        <h3 className="text-2xl font-bold text-center">Login to your account</h3>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <label htmlFor="loginUsername" className="block">Username</label>
            <input
              type="text"
              placeholder="Username"
              id="loginUsername"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              value={loginUsername}
              onChange={(e) => setloginUsername(e.target.value)}
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