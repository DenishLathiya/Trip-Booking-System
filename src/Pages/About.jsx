import React from "react";
import TopBanner from "../Components/TopBanner";
import trip from "../assets/trip.gif";
import time from "../assets/fire-time.gif";
import price from "../assets/best-price.gif";

const About = () => {
  return (
    <div
      style={{
        fontFamily:
          "'Inter', 'Segoe UI', 'Helvetica Neue', Arial, 'sans-serif'",
        //background: "linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%)",
        minHeight: "100vh",
      }}
    >
      {/* Top Banner */}
      <TopBanner text="About Us" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto my-12 px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Section */}
          <div className="md:col-span-2 space-y-8">
            {/* Image + Tagline */}
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="travel"
                className="rounded-2xl shadow-lg w-full object-cover"
                style={{ border: "2px solid #60B5FF" }}
              />
              <div
                className="absolute bottom-[20%] right-4 bg-[#60B5FF] text-white font-extrabold text-xl md:text-3xl lg:text-4xl px-8 py-4 rounded-2xl shadow-xl tracking-wide"
                style={{ letterSpacing: "1px" }}
              >
                HOW WE ARE BEST <br /> FOR TOUR!
              </div>
            </div>

            {/* About Section */}
            <section className="text-gray-800">
              {/* Who We Are */}
              <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition mb-8 border border-blue-100">
                <h2
                  className="text-2xl font-bold text-[#60B5FF] mb-4 tracking-tight"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Who We Are
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  At <strong>GlobalTrip</strong>, we believe that travel is more
                  than just reaching a destination—it’s about creating
                  unforgettable experiences. Our Tour Booking System is designed
                  to make travel planning simple, transparent, and enjoyable for
                  both travelers and tour operators.
                </p>
              </div>

              {/* Our Mission */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition mb-8 border border-blue-100">
                <h2
                  className="text-2xl font-bold text-[#60B5FF] mb-4 tracking-tight"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Our Mission
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Our mission is to{" "}
                  <strong>
                    connect explorers with trusted travel providers
                  </strong>{" "}
                  worldwide, offering a seamless booking experience with just a
                  few clicks. Whether it’s a weekend getaway, an adventurous
                  trek, or a luxury vacation, we ensure that your journey begins
                  smoothly.
                </p>
              </div>

              {/* What We Offer */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition mb-8 border border-blue-100">
                <h2
                  className="text-2xl font-bold text-[#60B5FF] mb-4 tracking-tight"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  What We Offer
                </h2>
                <ul className="space-y-3 text-gray-700 text-lg">
                  {[
                    "Easy Booking – Browse, compare, and book tours hassle-free.",
                    "Verified Packages – Handpicked and curated tours from reliable agencies.",
                    "Secure Payments – Safe and flexible payment options.",
                    "24/7 Support – Always here to assist you, wherever you are.",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="relative pl-7 before:content-['✔'] before:absolute before:left-0 before:text-[#60B5FF] font-medium"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition mb-8 border border-blue-100">
                <h2
                  className="text-2xl font-bold text-[#60B5FF] mb-4 tracking-tight"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Why Choose Us?
                </h2>
                <ul className="space-y-3 text-gray-700 text-lg">
                  {[
                    "User-Friendly Platform – Designed with travelers in mind.",
                    "Global Reach – Discover trips and tours across multiple destinations.",
                    "Affordable Pricing – Transparent and competitive rates.",
                    "Customer Trust – Thousands of satisfied travelers.",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="relative pl-7 before:content-['✔'] before:absolute before:left-0 before:text-[#60B5FF] font-medium"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Our Vision */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition border border-blue-100">
                <h2
                  className="text-2xl font-bold text-[#60B5FF] mb-4 tracking-tight"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Our Vision
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  We aim to be the <strong>go-to global platform</strong> for
                  travel bookings, helping people explore the world effortlessly
                  while empowering travel agencies to grow digitally.
                </p>
              </div>
            </section>
          </div>

          {/* Sidebar Section */}
          <div className="space-y-8">
            {/* Feature Card 1 */}
            <div className="bg-blue-50 hover:shadow-xl p-6 rounded-2xl shadow-md transition border border-blue-100">
              <div className="flex items-start gap-4">
                <img
                  src={trip}
                  alt="destinations"
                  className="w-16 h-16 rounded-lg shadow"
                />
                <div>
                  <h2
                    className="text-xl font-bold mb-2 text-[#2563eb] tracking-tight"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    50+ Destinations
                  </h2>
                  <p className="text-gray-700 leading-snug text-base">
                    Discover the best travel experiences with personalized
                    services and unforgettable memories.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature Card 2 */}
            <div className="bg-blue-50 hover:shadow-xl p-6 rounded-2xl shadow-md transition border border-blue-100">
              <div className="flex items-start gap-4">
                <img
                  src={price}
                  alt="best price"
                  className="w-16 h-16 rounded-lg shadow"
                />
                <div>
                  <h2
                    className="text-xl font-bold mb-2 text-[#2563eb] tracking-tight"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Best Price
                  </h2>
                  <p className="text-gray-700 leading-snug text-base">
                    Transparent pricing with no hidden charges—value-packed
                    tours you can trust.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature Card 3 */}
            <div className="bg-blue-50 hover:shadow-xl p-6 rounded-2xl shadow-md transition border border-blue-100">
              <div className="flex items-start gap-4">
                <img
                  src={time}
                  alt="fast booking"
                  className="w-16 h-16 rounded-lg shadow"
                />
                <div>
                  <h2
                    className="text-xl font-bold mb-2 text-[#2563eb] tracking-tight"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Super Fast Booking
                  </h2>
                  <p className="text-gray-700 leading-snug text-base">
                    Book your tours in just a few clicks—quick, secure, and
                    stress-free.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
