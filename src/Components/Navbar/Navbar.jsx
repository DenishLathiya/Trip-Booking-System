// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { HiMenuAlt1 } from "react-icons/hi";
// import ResponsiveMenu from "./ResponsiveMenu";

// const Navbar = () => {
//   const [showMenu, setShowMenu] = useState(false);
//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };
//   return (
//     <header className="sticky mx-auto top-0 transition-all py-6 bg-transparent z-10">
//       <div className="bg-[#121f4d]/85 px-4 fixed w-full z-50 top-0 py-2">
//         <div className="max-w-7xl mx-auto py-2 px-5 flex bg-transparent justify-between items-center">
//           <Link to="/">
//             <h1 className="text-2xl text-white font-bold">
//               Trip<span style={{ color: "#60B5FF " }}>Buddy</span>
//             </h1>
//           </Link>

//           <div className="flex items-center gap-5">
//             <nav className="hidden md:flex gap-7">
//               <ul className="flex items-center font-semibold text-white text-xl gap-7">
//                 <Link to="/">
//                   <li className="border-b-2 border-transparent hover:text-[#60B5FF] hover:border-[#60B5FF] transition-colors duration-300">
//                     Home
//                   </li>
//                 </Link>

//                 <Link to="/about">
//                   <li className="border-b-2 border-transparent hover:text-[#60B5FF] hover:border-[#60B5FF] transition-colors duration-300">
//                     About Us
//                   </li>
//                 </Link>

//                 <Link to="/tours">
//                   <li className="border-b-2 border-transparent hover:text-[#60B5FF] hover:border-[#60B5FF] transition-colors duration-300">
//                     Tours
//                   </li>
//                 </Link>

//                 <Link to="/booking">
//                   <li className="border-b-2 border-transparent hover:text-[#60B5FF] hover:border-[#60B5FF] transition-colors duration-300">
//                     Bookings
//                   </li>
//                 </Link>

//                 <Link to="/gallery">
//                   <li className="border-b-2 border-transparent hover:text-[#60B5FF] hover:border-[#60B5FF] transition-colors duration-300">
//                     Gallery
//                   </li>
//                 </Link>

//                 <Link to="/contact">
//                   <li className="border-b-2 border-transparent hover:text-[#60B5FF] hover:border-[#60B5FF] transition-colors duration-300">
//                     Contact
//                   </li>
//                 </Link>
//               </ul>
//               <Link to="/login">
//                 <button className="bg-[#4e9de3] hover:bg-[#60B5FB] text-white px-6 py-2 rounded-md font-semibold  transition delay-110 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
//                   Login{" "}
//                 </button>
//               </Link>
//             </nav>
//             <HiMenuAlt1
//               onClick={toggleMenu}
//               className="cursor-pointer md:hidden text-white"
//               size={30}
//             />
//           </div>
//         </div>
//         <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
//       </div>
//     </header>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation(); // get current path

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Tours", path: "/tours" },
    { name: "Bookings", path: "/booking" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky mx-auto top-0 transition-all py-6 bg-transparent z-10">
      <div className="bg-[#121f4d]/85 px-4 fixed w-full z-50 top-0 py-2">
        <div className="max-w-7xl mx-auto py-2 px-5 flex bg-transparent justify-between items-center">
          <Link to="/">
            <h1 className="text-2xl text-white font-bold">
              Trip<span style={{ color: "#60B5FF" }}>Buddy</span>
            </h1>
          </Link>

          <div className="flex items-center gap-5">
            <nav className="hidden md:flex gap-7 ">
              <ul className="flex items-center font-semibold text-white text-xl gap-7 ">
                {navLinks.map((link) => (
                  <Link to={link.path} key={link.name}>
                    <li
                      className={`border-b-2 transition-colors duration-300 ${
                        location.pathname === link.path
                          ? "text-[#60B5FF]  border-[#60B5FF]"
                          : "border-transparent hover:text-[#60B5FF] hover:border-[#60B5FF]"
                      }`}
                    >
                      {link.name}
                    </li>
                  </Link>
                ))}
              </ul>
              <Link to="/login">
                <button className="bg-[#4e9de3] hover:bg-[#60B5FB] text-white px-6 py-2 rounded-md font-semibold transition delay-110 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                  Login
                </button>
              </Link>
            </nav>
            <HiMenuAlt1
              onClick={toggleMenu}
              className="cursor-pointer md:hidden text-white"
              size={30}
            />
          </div>
        </div>
        <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
      </div>
    </header>
  );
};

export default Navbar;
