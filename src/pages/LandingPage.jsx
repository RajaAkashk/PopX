import React from "react";
import { NavLink } from "react-router-dom";

function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-end px-6 py-10">
      <div>
        <h1 className="text-4xl font-bold mb-2">Welcome to PopX</h1>
        <p className="mb-1 text-xl text-gray-600">
          Default model text going to use,
        </p>
        <p className="mb-4 text-xl text-gray-600">Richard McClintock,</p>
        <div className="flex flex-col gap-3">
          <NavLink
            to="/register"
            className="text-xl text-white font-semibold bg-violet-700 active:bg-violet-800 rounded-md px-4 py-3 text-center"
          >
            Create Account
          </NavLink>
          <NavLink
            to="/login"
            className="text-xl text-black font-semibold bg-violet-200 active:bg-violet-300 rounded-md px-4 py-3 text-center"
          >
            Already Registered? Login
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
