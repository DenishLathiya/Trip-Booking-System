// //
// import React, { useState } from "react";

// const LoginModal = () => {
//   const [showPassword, setShowPassword] = useState(false);

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white w-[850px] h-[500px] flex shadow-lg rounded-lg overflow-hidden">
//         {/* Left Side - Form Section */}
//         <div className="w-1/2 p-10">
//           <div className="text-2xl font-bold text-[#0c1a2d]">
//             Trip<span className="text-[#60B5FF]">Buddy</span>
//           </div>
//           <h1 className="text-2xl font-bold text-gray-800 mt-4">
//             Sign into your account
//           </h1>

//           <form className="mt-6">
//             <div className="relative mb-5">
//               <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
//                 👤
//               </span>
//               <input
//                 type="text"
//                 placeholder="Username"
//                 required
//                 className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full text-base"
//               />
//             </div>

//             <div className="relative mb-5">
//               <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
//                 🔒
//               </span>
//               <input
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Password"
//                 required
//                 className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-full text-base"
//               />
//               <span
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
//               >
//                 👁️
//               </span>
//             </div>

//             <div className="text-sm mb-4">
//               <a href="#" className="text-blue-700 hover:underline">
//                 Forgot Password?
//               </a>
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-[#0c1a2d] text-white py-3 rounded-lg text-lg hover:opacity-90"
//             >
//               Sign in
//             </button>
//           </form>

//           <div className="text-sm text-center mt-5">
//             Don’t have an account?{" "}
//             <a href="#" className="text-blue-700 hover:underline">
//               Register
//             </a>
//           </div>
//         </div>

//         {/* Right Side - Image Section */}
//         <div
//           className="w-1/2 bg-cover bg-center relative"
//           style={{
//             backgroundImage:
//               "url('https://images.unsplash.com/photo-1581091870622-c6f9a0c13703?fit=crop&w=800&q=80')",
//           }}
//         >
//           <button
//             className="absolute top-4 right-4 bg-[#0c1a2d] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold"
//             onClick={() => alert("Close modal")}
//           >
//             &times;
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginModal;

// LoginModal.jsx
// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { IoIosCloseCircleOutline } from "react-icons/io";
// const LoginModal = ({ onClose }) => {
//   const [showPassword, setShowPassword] = useState(false);

//   return (
//     <div className="fixed inset-0 bg-slate-300 bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white w-[750px] h-[430px] flex rounded-lg overflow-hidden shadow-xl relative">
//         {/* Left - Login Form */}
//         <div className="w-1/2 p-10 flex flex-col justify-center">
//           <h1 className="text-2xl text-black font-bold mb-3">
//             Trip<span style={{ color: "#60B5FF" }}>Buddy</span>
//           </h1>
//           <p className="text-xl text-gray-800 mb-6 font-semibold">
//             Sign into your account
//           </p>

//           <form>
//             <div className="relative mb-5">
//               <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg">
//                 👤
//               </span>
//               <input
//                 type="text"
//                 placeholder="Username"
//                 className="w-full py-3 pl-10 pr-4 rounded-full border border-gray-500 focus:outline-[#60B5FB] text-base"
//                 required
//               />
//             </div>

//             <div className="relative mb-5">
//               <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg">
//                 🔒
//               </span>
//               <input
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Password"
//                 className="w-full py-3 pl-10 pr-10 rounded-full border border-gray-500 focus:outline-[#60B5FB] text-base"
//                 required
//               />
//               <span
//                 className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600"
//                 onClick={() => setShowPassword(!showPassword)}
//               >
//                 👁️
//               </span>
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-[#60B5FB] text-white text-lg font-medium py-3 rounded-lg hover:bg-[#3fa6fa] transition"
//             >
//               Sign in
//             </button>
//           </form>

//           <div className="text-sm text-center mt-6">
//             Don’t have an account?{" "}
//             <a href="/Signup" className="text-[#60B5FF] hover:underline">
//               Register
//             </a>
//           </div>
//         </div>

//         {/* Right - Image */}
//         <div className="w-1/2 relative overflow-hidden">
//           <div
//             className="absolute inset-0 bg-cover bg-center"
//             style={{
//               backgroundImage:
//                 "url('https://images.unsplash.com/photo-1541300613939-71366b37c92e?q=80&w=1205&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
//               clipPath: "polygon(15% 0, 100% 0%, 100% 100%, 0% 100%)",
//             }}
//           ></div>
//           <Link to="/">
//             <button
//               className="absolute top-4 right-4 bg-[#60B5FF] text-white rounded-full w-8 h-8 flex items-center justify-center text-xl z-10"
//               onClick={onClose}
//             >
//               <IoIosCloseCircleOutline />
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginModal;

import React, { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const LoginModal = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-[900px] h-[600px] flex rounded-lg overflow-hidden shadow-xl relative">
        {/* Left: Login Form */}
        <div className="w-1/2 p-6 flex flex-col justify-center">
        <h1 className="text-4xl text-black font-bold mb-3">
  Trip<span style={{ color: "#60B5FF" }}>Buddy</span>
</h1>
<p className="text-2xl text-gray-800 mb-6 font-semibold">
  Sign into your account
</p>

          <form>
            {/* Username Field */}
            <div className="relative mb-4">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg"><FaUser/></span>
              <input
                type="text"
                placeholder="Username"
                className="w-full py-2.5 pl-10 pr-4 rounded-full border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#60B5FB] text-base"
                required
              />
            </div>

            {/* Password Field */}
            <div className="relative mb-4">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg"><FaLock/></span>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full py-2.5 pl-10 pr-10 rounded-full border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#60B5FB] text-base"
                required
              />
              <span
                className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash/> : <FaEye />}
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-[#60B5FB] text-white text-base font-medium py-2.5 rounded-lg hover:bg-[#3fa6fa] transition"
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

        {/* Right: Image Section */}
        <div className="w-1/2 relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1541300613939-71366b37c92e?q=80&w=1205&auto=format&fit=crop&ixlib=rb-4.1.0')",
              clipPath: "polygon(15% 0, 100% 0%, 100% 100%, 0% 100%)",
            }}
          ></div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 bg-[#60B5FF] text-white rounded-full w-7 h-7 flex items-center justify-center text-lg z-10"
          >
            <IoIosCloseCircleOutline size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
