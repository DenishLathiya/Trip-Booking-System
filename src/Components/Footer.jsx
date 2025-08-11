import React, { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const [loginType, setLoginType] = useState(null);

  useEffect(() => {
    const storedType = localStorage.getItem("loginType");
    setLoginType(storedType);
  }, []);

  return (
    <footer className="bg-[#121f4d] text-white py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h1 className="font-bold text-4xl mb-4">
              <span className="text-[#60B5FF]">Global</span>Trip
            </h1>
            <p className="text-sm">
              We're dedicated to making your travel dreams come true with
              expertly curated tours and unforgettable experiences.
            </p>
          </div>

          <div className="flex flex-col lg:items-center">
            <h3 className="text-lg mb-4 font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {loginType === "user" && (
                <>
                  <li>
                    <a href="/" className="hover:text-[#60B5FF]">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="hover:text-[#60B5FF]">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="/tours" className="hover:text-[#60B5FF]">
                      Tours
                    </a>
                  </li>
                  <li>
                    <a href="/booking" className="hover:text-[#60B5FF]">
                      Bookings
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="hover:text-[#60B5FF]">
                      Contact Us
                    </a>
                  </li>
                </>
              )}

              {loginType === "admin" && (
                <>
                  <li>
                    <a href="/add-tour" className="hover:text-[#60B5FF]">
                      Add Tour
                    </a>
                  </li>
                  <li>
                    <a href="/tour-list" className="hover:text-[#60B5FF]">
                      Tour List
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm font-semibold">
              <li>Address: 242 AR Mall Surat</li>
              <li>
                <a href="tel:+917567236791">Phone: +91 7567236791</a>
              </li>
              <li>
                <a href="mailto:info@tourbuddy.com">
                  Email: info@globaltrip.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook className="hover:text-[#60B5FF]" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram className="hover:text-[#60B5FF]" />
              </a>
              <a href="https://x.com/" target="_blank" rel="noreferrer">
                <FaTwitter className="hover:text-[#60B5FF]" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm font-semibold">
          <p>
            &copy; {new Date().getFullYear()} GlobalTrip All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
