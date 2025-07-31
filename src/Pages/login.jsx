import React, { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

const LoginModal = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [loginType, setLoginType] = useState("user");

  const handleLogin = async (e) => {
    e.preventDefault();

    localStorage.setItem("loginType", loginType);
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      {showToast && (
        <div className="fixed top-5 right-5 bg-[#008000] text-white px-5 py-3 rounded shadow-lg z-50 animate-slide-in text-xl">
          ✅ Login Successfully
        </div>
      )}

      <div className="bg-white w-[730px] h-[490px] flex rounded-lg overflow-hidden shadow-xl relative">
        <div className="w-1/2 p-6 flex flex-col justify-center">
          <h1 className="text-3xl text-black font-bold mb-3">
            Trip<span style={{ color: "#60B5FF" }}>Buddy</span>
          </h1>
          <p className="text-2xl text-gray-800 mb-6 font-semibold">
            Sign into your account
          </p>

          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Login As:
              </label>
              <select
                value={loginType}
                onChange={(e) => setLoginType(e.target.value)}
                className="w-full border border-gray-400 py-2 px-3 rounded-full focus:outline-none focus:ring-2 focus:ring-[#60B5FB] text-base"
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            <div className="relative mb-4">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg">
                <FaUser />
              </span>
              <input
                type="text"
                placeholder="Username"
                id="user"
                className="w-full py-2.5 pl-10 pr-4 rounded-full border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#60B5FB] text-base"
                required
              />
            </div>

            <div className="relative mb-4">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg">
                <FaLock />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                id="pass"
                minLength={8}
                className="w-full py-2.5 pl-10 pr-10 rounded-full border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#60B5FB] text-base"
                required
              />
              <span
                className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-[#60B5FB] text-white text-base font-medium py-2.5 rounded-lg hover:bg-[#3fa6fa] transition flex justify-center items-center"
            >
              Sign in
            </button>
          </form>

          <div className="text-sm text-center mt-4">
            Don’t have an account?{" "}
            <a href="/signup" className="text-[#60B5FF] hover:underline">
              Register
            </a>
          </div>
        </div>

        <div className="w-1/2 relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1541300613939-71366b37c92e?q=80&w=1205&auto=format&fit=crop&ixlib=rb-4.1.0')",
              clipPath: "polygon(15% 0, 100% 0%, 100% 100%, 0% 100%)",
            }}
          ></div>

          <button
            onClick={onClose}
            className="absolute top-3 right-3 bg-[#60B5FF] text-white rounded-full w-8 h-8 flex items-center justify-center text-lg z-10"
          >
            <IoIosCloseCircleOutline size={20} />
          </button>
        </div>
      </div>

      <style>{`
        .animate-slide-in {
          animation: slideIn 0.3s ease-out;
        }
        @keyframes slideIn {
          0% { transform: translateY(-10px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default LoginModal;
