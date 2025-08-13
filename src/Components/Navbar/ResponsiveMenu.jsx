import { X } from "lucide-react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ResponsiveMenu = ({
  showMenu,
  setShowMenu,
  loginType,
  setLoginType,
  setShowLoginModal,
}) => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    const isConfirmed = window.confirm("Are you sure you want to logout?");
    if (isConfirmed) {
      localStorage.removeItem("loginType");
      setLoginType(null);
      setShowMenu(false);
      navigate("/");
    }
  };

  const renderLinks = () => {
    if (loginType === "user") {
      return (
        <>
          <Link to="/">
            <li onClick={() => setShowMenu(false)}>Home</li>
          </Link>
          <Link to="/about">
            <li onClick={() => setShowMenu(false)}>About Us</li>
          </Link>
          <Link to="/tours">
            <li onClick={() => setShowMenu(false)}>Tours</li>
          </Link>
          <Link to="/booking">
            <li onClick={() => setShowMenu(false)}>Bookings</li>
          </Link>
          <Link to="/contact">
            <li onClick={() => setShowMenu(false)}>Contact Us</li>
          </Link>
        </>
      );
    } else if (loginType === "admin") {
      return (
        <>
          <Link to="/">
            <li onClick={() => setShowMenu(false)}>Home</li>
          </Link>
          <Link to="/tour-list">
            <li onClick={() => setShowMenu(false)}>Tour List</li>
          </Link>
          <Link to="/add-tour">
            <li onClick={() => setShowMenu(false)}>Add Tour</li>
          </Link>
        </>
      );
    } else {
      // Links for visitors (not logged in)
      return (
        <>
          <Link to="/">
            <li onClick={() => setShowMenu(false)}>Home</li>
          </Link>
          <Link to="/about">
            <li onClick={() => setShowMenu(false)}>About Us</li>
          </Link>
          <Link to="/tours">
            <li onClick={() => setShowMenu(false)}>Tours</li>
          </Link>
          <Link to="/contact">
            <li onClick={() => setShowMenu(false)}>Contact Us</li>
          </Link>
        </>
      );
    }
  };

  return (
    <div
      className={`${
        showMenu ? "right-0" : "-right-[100%]"
      } fixed bottom-0 top-0 flex h-screen w-[75%] flex-col justify-between bg-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
    >
      {/* Close Button */}
      <button
        className="border border-black rounded-lg absolute top-4 right-9"
        onClick={() => setShowMenu(false)}
      >
        <X />
      </button>

      {/* Menu Links */}
      <nav className="mt-12">
        <ul className="space-y-4 text-xl text-black flex flex-col">
          {renderLinks()}

          {/* Login/Logout Button */}
          {!loginType && (
            <button
              onClick={() => {
                setShowLoginModal(true);
                setShowMenu(false);
              }}
              className="bg-[#4e9de3] hover:bg-[#60B5FB] text-white px-6 py-2 rounded-md font-semibold transition hover:-translate-y-1 hover:scale-105"
            >
              Login
            </button>
          )}

          {loginType && (
            <button
              onClick={logoutHandler}
              className="bg-red-600 hover:bg-red-500 text-white px-6 py-2 rounded-md font-semibold transition hover:-translate-y-1 hover:scale-105"
            >
              Logout
            </button>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default ResponsiveMenu;
