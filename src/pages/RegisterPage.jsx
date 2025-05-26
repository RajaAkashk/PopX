import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [isAgency, setIsAgency] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fullName || !phoneNumber || !email || !password || !isAgency) {
      alert("Please fill in all required fields.");
      return;
    }

    navigate("/setting");
  };

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10 flex flex-col justify-between">
      <div>
        <h1 className="text-4xl mb-10 font-bold">
          Create your <br /> PopX account
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-5 relative">
            {/* Full Name */}
            <div className="border border-gray-500 rounded-md py-3 relative px-6">
              <label className="text-violet-700 absolute top-[-1.2rem] left-5 bg-gray-100 px-1">
                Full Name <span className="text-red-500 text-xl">*</span>
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your name"
                className="w-full focus:outline-none focus:ring-0"
              />
            </div>

            {/* Phone Number */}
            <div className="border border-gray-500 rounded-md py-3 relative px-6">
              <label className="text-violet-700 absolute top-[-1.2rem] left-5 bg-gray-100 px-1">
                Phone number <span className="text-red-500 text-xl">*</span>
              </label>
              <input
                type="number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter phone number"
                className="w-full focus:outline-none focus:ring-0"
              />
            </div>

            {/* Email */}
            <div className="border border-gray-500 rounded-md py-3 relative px-6">
              <label className="text-violet-700 absolute top-[-1.2rem] left-5 bg-gray-100 px-1">
                Email address <span className="text-red-500 text-xl">*</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
                className="w-full focus:outline-none focus:ring-0"
              />
            </div>

            {/* Password */}
            <div className="border border-gray-500 rounded-md py-3 relative px-6">
              <label className="text-violet-700 absolute top-[-1.2rem] left-5 bg-gray-100 px-1">
                Password <span className="text-red-500 text-xl">*</span>
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full focus:outline-none focus:ring-0"
              />
            </div>

            {/* Company Name */}
            <div className="border border-gray-500 rounded-md py-3 relative px-6">
              <label className="text-violet-700 absolute top-[-1.2rem] left-5 bg-gray-100 px-1">
                Company Name
              </label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Enter company name"
                className="w-full focus:outline-none focus:ring-0"
              />
            </div>

            {/* Agency Question */}
            <div>
              <label className="block mb-2 font-semibold">
                Are you an Agency? <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 text-lg">
                  <input
                    type="radio"
                    value="yes"
                    name="agency"
                    checked={isAgency === "yes"}
                    onChange={(e) => setIsAgency(e.target.value)}
                    className="w-5 h-5 text-violet-600 accent-purple-600"
                  />
                  Yes
                </label>
                <label className="flex items-center gap-2 text-lg">
                  <input
                    type="radio"
                    value="no"
                    name="agency"
                    checked={isAgency === "no"}
                    onChange={(e) => setIsAgency(e.target.value)}
                    className="w-5 h-5 text-violet-600 accent-purple-600"
                  />
                  No
                </label>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-xl text-white font-semibold bg-violet-700 active:bg-violet-800 rounded-xl w-[90%] max-w-sm px-4 py-4 text-center shadow-md"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
