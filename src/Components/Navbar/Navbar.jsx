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
//       <div className="bg-transparent/75 px-4 fixed w-full z-50 top-0 py-2">
//         <div className="max-w-7xl mx-auto py-2 px-5 flex bg-transparent justify-between items-center">
//           <Link to="/">
//             <h1 className="text-2xl text-white font-bold">
//               Trip<span className="text-blue-400">Buddy</span>
//             </h1>
//           </Link>
//           <div className="flex items-center gap-5">
//             <nav className="hidden md:flex gap-7">
//               <ul className="flex items-center font-semibold text-white text-xl gap-7">
//                 <Link to="/">
//                   <li>Home</li>
//                 </Link>
//                 <Link to="/about">
//                   <li>About Us</li>
//                 </Link>
//                 <Link to="/tours">
//                   <li>Tours</li>
//                 </Link>
//                 <Link to="/gallery">
//                   <li>Gallery</li>
//                 </Link>
//                 <Link to="/contact">
//                   <li>Contact</li>
//                 </Link>  
//               </ul>
//               <button className="bg-red-500 text-white px-4 py-1 rounded-md font-semibold">
//                 Book Now
//               </button>
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
import { Link } from "react-router-dom";
import { HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <header className="sticky top-0 z-50 w-full bg-black/70 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold text-white">
          Trip<span className="text-blue-400">Buddy</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 text-white font-medium text-lg">
            <li>
              <Link to="/" className="hover:text-blue-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-400 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/tours" className="hover:text-blue-400 transition">
                Tours
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-blue-400 transition">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-400 transition">
                Contact
              </Link>
            </li>
          </ul>
          <Link
            to="/book"
            className="ml-4 bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-md font-semibold transition"
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile Menu Icon */}
        <HiMenuAlt1
          onClick={toggleMenu}
          className="md:hidden text-white cursor-pointer"
          size={32}
        />
      </div>

      {/* Mobile Menu */}
      <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </header>
  );
};

export default Navbar;
