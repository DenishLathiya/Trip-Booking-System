import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import LoginModal from "../../Pages/login";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setShowMenu(!showMenu);
  const [loginType, setLoginType] = useState(null);

  useEffect(() => {
    const storedType = localStorage.getItem("loginType");
    setLoginType(storedType);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    localStorage.setItem("loginType", loginType);

    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
      onClose();

      if (loginType === "admin") {
        alert("Redirecting to admin dashboard...");
      } else {
        alert("Redirecting to user dashboard...");
      }
    }, 2000);
  };

  const getLinkClass = (path) =>
    `pb-2 border-b-2 transition-colors duration-300 ${
      location.pathname === path
        ? "text-[#60B5FF] border-[#60B5FF]"
        : "border-transparent hover:text-[#60B5FF] hover:border-[#60B5FF]"
    }`;

  return (
    <header className="sticky mx-auto top-0 transition-all py-6 bg-transparent z-10">
      <div className="bg-[#121f4d]/95 px-4 fixed w-full z-50 top-0 py-2">
        <div className="max-w-7xl mx-auto py-2 px-5 flex bg-transparent justify-between items-center">
          <Link to="/">
            <h1 className="text-2xl text-white font-bold ">
              Global
              <span style={{ color: "#60B5FF" }}>Trip</span>
            </h1>
          </Link>

          <div className="flex items-center gap-5">
            <nav className="hidden md:flex gap-7 ">
              <ul className="flex items-center font-bold text-white text-xl gap-10 cursor-pointer">
                {loginType === "user" && (
                  <>
                    <li className={getLinkClass("/")}>
                      <Link to="/">Home</Link>
                    </li>

                    <li className={getLinkClass("/about")}>
                      <Link to="/about">About Us</Link>
                    </li>

                    <li className={getLinkClass("/tours")}>
                      <Link to="/tours">Tours</Link>
                    </li>

                    <li className={getLinkClass("/booking")}>
                      <Link to="/booking">Bookings</Link>
                    </li>

                    <li className={getLinkClass("/contact")}>
                      <Link to="/contact">Contact Us</Link>
                    </li>
                  </>
                )}

                {loginType === "admin" && (
                  <>
                    <li className={getLinkClass("/")}>
                      <Link to="/">Home</Link>
                    </li>

                    <li className={getLinkClass("/tour-list")}>
                      <Link to="/tour-list">Tour List</Link>
                    </li>

                    <li className={getLinkClass("/add-tour")}>
                      <Link to="/add-tour">Add Tour</Link>
                    </li>
                  </>
                )}
              </ul>

              {!loginType && (
                <button
                  onClick={() => setShowLoginModal(true)}
                  className="bg-[#4e9de3] hover:bg-[#60B5FB] text-center text-white px-6 py-2 rounded-md font-semibold transition delay-110 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
                >
                  Login
                </button>
              )}

              {loginType && (
                <button
                  onClick={() => {
                    const isConfirmed = window.confirm(
                      "Are you sure you want to logout?"
                    );
                    if (isConfirmed) {
                      localStorage.removeItem("loginType");
                      setLoginType(null);
                      navigate("/"); // ✅ Go to Home page
                    }
                  }}
                  className="bg-red-600 hover:bg-red-500 text-center text-white px-6 py-2 rounded-md font-semibold transition delay-110 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
                >
                  Logout
                </button>
              )}
            </nav>

            <HiMenuAlt1
              onClick={toggleMenu}
              className="cursor-pointer md:hidden text-white"
              size={30}
            />
          </div>
        </div>

        <ResponsiveMenu
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          loginType={loginType}
          setLoginType={setLoginType}
          setShowLoginModal={setShowLoginModal}
        />

        {showLoginModal && (
          <LoginModal
            onClose={() => {
              setShowLoginModal(false);
              const type = localStorage.getItem("loginType");
              setLoginType(type);
            }}
          />
        )}
      </div>
    </header>
  );
};

export default Navbar;
