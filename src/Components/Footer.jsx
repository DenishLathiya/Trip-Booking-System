import React from "react";
import footer from "../assets/footer-pattern.jpg";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#121f4d] text-white py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h1 className="font-bold text-4xl mb-4">
              <span className="text-[#60B5FF]">Trip</span>Buddy
            </h1>
            <p className="text-sm">
              We're dedicated to making your travel dreams come true with
              expertly curated tours and unforgettable experiences.
            </p>
          </div>
          <div className="flex flex-col lg:items-center">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-[#60B5FF]">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#60B5FF]">
                  Destinations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#60B5FF]">
                  Tours
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#60B5FF]">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#60B5FF]">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>Address: 242 AR Mall Surat</li>
              <a href="tel:+917567236791">
                <li>Phone: +91 7567236791</li>
              </a>
              <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">
                <li>Email: info@tourbuddy.com</li>
              </a>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4 ">
              <a href="https://www.facebook.com/">
                <FaFacebook className="hover:text-[#60B5FF]" />
              </a>
              <a href="https://www.instagram.com/">
                <FaInstagram className="hover:text-[#60B5FF]" />
              </a>
              <a href="https://x.com/">
                <FaTwitter className="hover:text-[#60B5FF]" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center justify-end text-sm">
          <p>
            &copy; {new Date().getFullYear()} Trip Buddy all right reserved.
          </p>
        </div>
      </div>
    </footer>
  );
  s;
};

export default Footer;
