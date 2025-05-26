import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    if (email && password) {
      setTimeout(() => {
        navigate("/setting");
      }, 1500);
    } else {
      alert("Enter email and password.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <div>
        <h1 className="text-4xl mb-5 font-bold mb-2">
          Signin to your <br /> PopX account
        </h1>
        <p className="mb-1 text-xl text-gray-600">
          Default model text going to use,
        </p>
        <p className="mb-4 text-xl text-gray-500">Richard McClintock,</p>
        <div className="flex flex-col gap-3 mt-5">
          <div className="border border-gray-500 rounded-md py-3 mt-2 relative px-6">
            <label className="text-violet-700 absolute top-[-1rem] left-5 bg-gray-100 px-1">
              Email Address
            </label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address"
              className="w-full focus:outline-none focus:ring-0"
            />
          </div>
          <div className="border border-gray-500 rounded-md py-3 mt-2 relative px-6">
            <label className="text-violet-700 absolute top-[-1rem] left-5 bg-gray-100 px-1">
              Password
            </label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full focus:outline-none focus:ring-0"
            />
          </div>
          <button
            onClick={handleLogin}
            className="text-xl mt-2 text-white font-semibold bg-gray-300 active:bg-gray-400 rounded-md px-4 py-3 text-center"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
