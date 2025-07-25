import React, { useState } from "react";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setError("");
    console.log("Form Submitted:", formData);
    alert("Signup successful!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-indigo-100 to-blue-200 px-4 relative overflow-hidden">
      {/* Decorative background circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-200 rounded-full opacity-30 -z-10 blur-2xl -translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full opacity-20 -z-10 blur-2xl translate-x-1/4 translate-y-1/4"></div>
      <div className="max-w-lg w-full bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 border border-indigo-100">
        {/* Logo/Avatar */}
        {
          <div className="flex justify-center mb-6">
            <h1 className="text-2xl text-black font-bold">
              Trip<span style={{ color: "#60B5FF" }}>Buddy</span>
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
          Join TripBuddy and start your adventure!
        </p>
        <div className="flex items-center mb-6">
          <div className="flex-grow border-t border-indigo-200"></div>
          <span className="mx-3 text-indigo-400 font-medium text-xs uppercase tracking-wider">
            Sign Up
          </span>
          <div className="flex-grow border-t border-indigo-200"></div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* First Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 bg-indigo-50/50 transition"
              value={formData.firstName}
              onChange={handleChange}
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
              name="lastName"
              className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 bg-indigo-50/50 transition"
              value={formData.lastName}
              onChange={handleChange}
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
              name="email"
              className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 bg-indigo-50/50 transition"
              value={formData.email}
              onChange={handleChange}
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
              value={formData.password}
              onChange={handleChange}
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
              name="confirmPassword"
              className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 bg-indigo-50/50 transition"
              value={formData.confirmPassword}
              onChange={handleChange}
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
          <a
            href="/login"
            className="text-indigo-500 hover:underline font-medium transition-colors duration-200"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
