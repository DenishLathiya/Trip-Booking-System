import React from "react";
import TopBanner from "../Components/TopBanner";
import trip from "../assets/trip.gif";
import time from "../assets/fire-time.gif";
import price from "../assets/best-price.gif";

const About = () => {
  return (
    <div>
      <TopBanner text="About Us" />
      <div className="max-w-7xl mx-auto my-10">
        <div className="flex flex-col md:flex-row px-4 md:px-0 gap-4">
          <div className="flex-1">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="travel"
                className="rounded-lg"
              />
              <div className="absolute bottom-[45%] right-0 p-4 bg-[#60B5FF] text-white font-bold md:text-4xl rounded-lg">
                HOW WE ARE BEST <br /> FOR TRAVEL!
              </div>
            </div>
            <h1 className="md:text-4xl font-bold mt-6 mb-4 text-3xl ml-10">
              Discover the World with Us
            </h1>
            <p className="text-black ml-10">
              Welcome to TripBuddy — your trusted travel partner for
              unforgettable adventures around the globe. We are passionate about
              helping travelers explore the world with ease, confidence, and
              excitement. Whether you’re planning a weekend getaway, a cultural
              expedition, or a luxurious vacation, TripBuddy is here to make
              your journey seamless and memorable.
            </p>

            <h1 className="md:text-4xl font-bold mt-6 mb-4 text-3xl ml-10">
              🌍 Who We Are
            </h1>
            <p className="text-black ml-10">
              TripBuddy is a team of travel enthusiasts, planners, and explorers
              with one mission: to simplify the way people experience the world.
              With years of experience in the travel and tourism industry, we’ve
              curated a platform that brings together the best destinations,
              affordable packages, and real-time booking convenience — all in
              one place.
            </p>

            <h1 className="md:text-4xl font-bold mt-6 mb-4 text-3xl ml-10">
              🧭 What We Offer
            </h1>
            <p className="text-black ml-10">
              ✈️ Flight, hotel & tour package booking <br></br>
              🚐 Customizable itineraries for individuals, couples & groups
              <br />
              🛳️Adventure & luxury travel experiences <br />
              🗺️ 24/7 support and live updates <br />
              📱 User-friendly app and website for hassle-free planning
            </p>
            <h1 className="md:text-4xl font-bold mt-6 mb-4 text-3xl ml-10">
              🌟 Why Choose TripBuddy?
            </h1>
            <p className="text-black ml-10">
              ✅ Trusted by thousands of travelers
              <br />
              ✅ Real-time prices and availability <br />
              ✅ Handpicked experiences and local guides <br />
              ✅ Transparent pricing, no hidden fees <br />
              ✅ 24/7 dedicated support team
              <br />
            </p>
            <h1 className="md:text-4xl font-bold mt-6 mb-4 text-3xl ml-10">
              💬 Our Promise
            </h1>
            <p className="text-black ml-10">
              At TripBuddy, we believe that travel should be joyful — not
              stressful. From your first click to your final destination, we're
              with you every step of the way. Let us take care of the details —
              you just enjoy the journey.
            </p>
          </div>
          <div className="flex-1">
            <div className="bg-blue-100 hover:shadow-lg p-6 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row items-start mb-4 ">
                <img src={trip} alt="" className="w-20" />
                <div>
                  <h2 className="ml-2 text-2xl font-semibold mb-1">
                    50+ Destination
                  </h2>
                  <p className="text-gray-700 ml-2 lg:mr-28">
                    We offer the best travel experiences with personalized
                    services and unbeatable prices.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-blue-100 hover:shadow-lg p-6 my-4 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row items-start mb-4">
                <img src={price} alt="" className="w-20" />
                <div>
                  <h2 className="ml-2 text-2xl font-semibold mb-1">
                    Best Price
                  </h2>
                  <p className="text-gray-700 ml-2 lg:mr-28">
                    We offer the best travel experiences with personalized
                    services and unbeatable prices.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-blue-100 hover:shadow-lg p-6 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row items-start mb-4">
                <img src={time} alt="" className="w-20" />
                <div>
                  <h2 className="ml-2 text-2xl font-semibold mb-1">
                    Super Fast Booking
                  </h2>
                  <p className="text-gray-700 ml-2 lg:mr-28">
                    We offer the best travel experiences with personalized
                    services and unbeatable prices.
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
