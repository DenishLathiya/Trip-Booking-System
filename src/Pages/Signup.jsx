import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userData } from "../utils/api";

const SignupForm = () => {
  const [inputIndex, setInputIndex] = useState(null);
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    password: "",
    cpassword: "",
  });
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const focusInput = (index) => {
    setInputIndex(index);
  };
  const inputchange = (e) => {
    setFormData(() => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  };

  const adduser = (e) => {
    e.preventDefault();
    userData("/signup/create", formData);
    if (formData.password !== formData.cpassword) {
      alert("incorrect password");
    } else {
      alert("signup complted");
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-indigo-100 to-blue-200 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-200 rounded-full opacity-30 -z-10 blur-2xl -translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full opacity-20 -z-10 blur-2xl translate-x-1/4 translate-y-1/4"></div>
      <div className="max-w-lg w-full bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 border border-indigo-100">
        {/* Logo/Avatar */}
        {
          <div className="flex justify-center mb-6">
            <h1 className="text-2xl text-black font-bold">
              Global<span style={{ color: "#60B5FF" }}>Trip</span>
            </h1>
          </div>
        }
        <p
          className="text-xl text-center font-semibold text-black mb-2
            tracking-tight"
        >
          Create your account
        </p>
        <p className="text-center text-gray-500 mb-6 text-sm">
          Join GlobalTrip and start your adventure!
        </p>
        <div className="flex items-center mb-6">
          <div className="flex-grow border-t border-indigo-200"></div>
          <span className="mx-3 text-indigo-400 font-medium text-xs uppercase tracking-wider">
            Sign Up
          </span>
          <div className="flex-grow border-t border-indigo-200"></div>
        </div>
        <form onSubmit={adduser} className="space-y-5">
          {/* First Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              First Name
            </label>
            <input
              type="text"
              name="FirstName"
              className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 bg-indigo-50/50 transition"
              onFocus={() => focusInput(0)}
              onBlur={() => setInputIndex(null)}
              autoFocus
              onChange={inputchange}
              required
              autoComplete="given-name"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Last Name
            </label>
            <input
              type="text"
              name="LastName"
              className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 bg-indigo-50/50 transition"
              onFocus={() => focusInput(1)}
              onBlur={() => setInputIndex(null)}
              onChange={inputchange}
              required
              autoComplete="family-name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="Email"
              className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 bg-indigo-50/50 transition"
              onFocus={() => focusInput(2)}
              onBlur={() => setInputIndex(null)}
              onChange={inputchange}
              required
              autoComplete="email"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 bg-indigo-50/50 transition"
              onFocus={() => focusInput(3)}
              onBlur={() => setInputIndex(null)}
              onChange={inputchange}
              required
              autoComplete="new-password"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              name="cpassword"
              className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 bg-indigo-50/50 transition"
              onFocus={() => focusInput(4)}
              onBlur={() => setInputIndex(null)}
              onChange={inputchange}
              required
              autoComplete="new-password"
            />
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#60B5FF] text-white py-2.5 rounded-xl font-semibold shadow-md hover:bg-[#4daae8] hover:shadow-lg transition duration-300 text-lg tracking-wide"
          >
            Register
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <Link
            to="/"
            className="text-indigo-500 hover:underline font-medium transition-colors duration-200"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
