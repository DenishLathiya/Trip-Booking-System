import React from "react";
import login from "../assets/login.svg";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-white flex flex-col md:flex-row items-center gap-10 p-10 rounded-2xl max-w-4xl w-full">
        <div className="w-full md:w-1/2">
          <img src={login} alt="Login illustration" className="w-full" />
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-semibold mb-6">
            log In to Your Account
          </h2>

          <form className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="abc@gmail.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="********"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

              <div className="text-sm text-gray-600">
                Don't have an account?
                <a
                  href="/Signup"
                  className="text-blue-600 hover:underline font-medium ml-1"
                >
                  Sign Up
                </a>
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-[#60B5FF] hover:bg-[#3498DB] text-white py-2 rounded-lg font-semibold transition duration-200"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
