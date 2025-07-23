import React from "react";
import login from "../assets/login.svg";

const Login = () => {
  return (
   <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-indigo-100 to-blue-200 px-4 relative overflow-hidden">
  <div className="absolute top-0 left-0 w-72 h-72 bg-[#60B5FF] rounded-full opacity-30 -z-10 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#60B5FF] rounded-full opacity-20 -z-10 blur-3xl translate-x-1/3 translate-y-1/3"></div>
  
  <div className="bg-white flex flex-col md:flex-row items-center gap-10 p-10 rounded-2xl max-w-4xl w-full shadow-[0_10px_30px_rgba(96,181,255,0.25)]">
        <div className="w-full md:w-1/2">
          <img src={login} alt="Login illustration" className="w-full" />
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-extrabold text-center text-[#60B5FF] mb-2 tracking-tight">
            log In to Your Account
          </h2>
             <div className="flex items-center mb-6 mt-6">
          <div className="flex-grow border-t border-indigo-200"></div>
          <span className="mx-3 text-indigo-400 font-medium text-xs uppercase tracking-wider">
            Sign Up
          </span>
          <div className="flex-grow border-t border-indigo-200"></div>
        </div>

          <form className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="abc@gmail.com"
                 className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 bg-indigo-50/50 transition"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="********"
                className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 bg-indigo-50/50 transition"
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
                log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
