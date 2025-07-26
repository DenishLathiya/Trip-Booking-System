// import React from "react";
// import {
//   FaClock,
//   FaUsers,
//   FaMapMarkerAlt,
//   FaTags
// } from "react-icons/fa";

// const TourDetails = () => {
//   return (
//     <div className="bg-white p-8 rounded-2xl shadow-md max-w-6xl mx-auto">
//       {/* Tour Name + Price */}
//       <div className="mb-4">
//         <h2 className="text-3xl font-bold text-gray-900">Hollywood City Adventure</h2>
//         <p className="text-lg text-gray-700 font-medium mt-1">
//           $141 <span className="text-sm text-gray-500">/person</span>
//         </p>
//       </div>

//       {/* Description */}
//       <p className="text-gray-600 mb-4">
//         Lorem ipsum available isn but the majority have suffered alteratin in some or form
//         injected simply free text used by copytyping refreshing. Neque porro est qui dolorem
//         ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
//       </p>

//       {/* Tour Info Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8 text-gray-700">
//         {/* Duration */}
//         <div className="flex items-center gap-3">
//           <FaClock className="text-[#60B5FF]" />
//           <span className="text-sm">
//             Duration: <span className="font-semibold">2 Days · 1 Night</span>
//           </span>
//         </div>

//         {/* Guests */}
//         <div className="flex items-center gap-3">
//           <FaUsers className="text-[#60B5FF]" />
//           <span className="text-sm">
//             Guests: <span className="font-semibold">15 people</span>
//           </span>
//         </div>

//         {/* Address */}
//         <div className="flex items-center gap-3">
//           <FaMapMarkerAlt className="text-[#60B5FF]" />
//           <span className="text-sm">
//             Address: <span className="font-semibold">6801 Hollywood Blvd, LA</span>
//           </span>
//         </div>

//         {/* Tour Type */}
//         <div className="flex items-center gap-3">
//           <FaTags className="text-[#60B5FF]" />
//           <span className="text-sm">
//             Tour Type: <span className="font-semibold">Daily Tour</span>
//           </span>
//         </div>
//       </div>

//       {/* Booking Button */}
//       <div>
//         <button className="bg-[#60B5FF] hover:bg-[#4aa3f5] text-white font-semibold py-2 px-6 rounded-full">
//           Book Now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TourDetails;

// import React from "react";
// import {
//   FaClock,
//   FaUsers,
//   FaMapMarkerAlt,
//   FaSuitcase
// } from "react-icons/fa";

// const TourCard = () => {
//   return (
//     <div className="bg-white p-8 rounded-2xl shadow-lg max-w-6xl mx-auto mt-10">
//       {/* Top Section */}
//       <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center mb-4">
//         <div>
//           <h2 className="text-3xl font-bold text-gray-900">National Parks Tour Small Group</h2>
//           <p className="text-gray-600 flex items-center mt-1">
//             <FaMapMarkerAlt className="text-[#60B5FF] mr-2" /> Main Street, Brooklyn, NY
//           </p>
//         </div>
//         <div className="flex gap-8 mt-4 md:mt-0">
//           <div className="flex items-center gap-2">
//             <FaClock className="text-[#60B5FF]" />
//             <p className="text-sm font-medium">3 Days - 2 Nights</p>
//           </div>
//           <div className="flex items-center gap-2">
//             <FaUsers className="text-[#60B5FF]" />
//             <p className="text-sm font-medium">2–18 People</p>
//           </div>
//           <div className="flex items-center gap-2">
//             <FaSuitcase className="text-[#60B5FF]" />
//             <p className="text-sm font-medium">Cruise Tour</p>
//           </div>
//         </div>
//       </div>

//       {/* Description */}
//       <p className="text-gray-700 mb-6 leading-relaxed">
//         Lorem ipsum available isn but the majority have suffered alteration in some or form injected simply free text used
//         by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto
//         beatae vitae dicta sunt explicabo quaed inventore veritatis.
//       </p>

//       {/* Price & Booking Section */}
//       <div className="bg-gray-100 rounded-xl p-6 flex flex-col sm:flex-row sm:justify-between sm:items-center">
//         <div className="mb-4 sm:mb-0">
//           <p className="text-2xl font-bold text-gray-800">
//             Price $339 <span className="text-sm text-gray-600">/ Person</span>
//           </p>
//         </div>
//         <button className="bg-[#60B5FF] hover:bg-[#4aa3f5] text-white py-3 px-8 rounded-full font-medium transition">
//           Book Now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TourCard;


import React from "react";
import {
  FaClock,
  FaUsers,
  FaMapMarkerAlt,
  FaTags
} from "react-icons/fa";
import { Link } from "react-router-dom";

const TourDetails = () => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-md max-w-6xl mx-auto">
      {/* Tour Name Only */}
      <div className="mb-4">
        <h2 className="text-3xl font-bold text-gray-900">Hollywood City Adventure</h2>
      </div>

      {/* Description */}
      <p className="text-gray-600 mb-4">
        Lorem ipsum available isn but the majority have suffered alteratin in some or form
        injected simply free text used by copytyping refreshing. Neque porro est qui dolorem
        ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      </p>

      {/* Tour Info Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8 text-gray-700">
        {/* Duration */}
        <div className="flex items-center gap-3">
          <FaClock className="text-[#60B5FF]" />
          <span className="text-sm">
            Duration: <span className="font-semibold">2 Days · 1 Night</span>
          </span>
        </div>

        {/* Guests */}
        <div className="flex items-center gap-3">
          <FaUsers className="text-[#60B5FF]" />
          <span className="text-sm">
            Guests: <span className="font-semibold">15 people</span>
          </span>
        </div>

        {/* Address */}
        <div className="flex items-center gap-3">
          <FaMapMarkerAlt className="text-[#60B5FF]" />
          <span className="text-sm">
            Address: <span className="font-semibold">6801 Hollywood Blvd, LA</span>
          </span>
        </div>

        {/* Tour Type */}
        <div className="flex items-center gap-3">
          <FaTags className="text-[#60B5FF]" />
          <span className="text-sm">
            Tour Type: <span className="font-semibold">Daily Tour</span>
          </span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-6">
        <p className="text-xl font-bold text-gray-900 mb-4 sm:mb-0">
           Rs 4500 <span className="text-sm text-gray-500">/person</span>
        </p>

         <Link to="/booking">
        <button className="bg-[#60B5FF] hover:bg-[#4aa3f5] text-white font-semibold py-2 px-6 rounded-full">
          Book Now
        </button>
        </Link>
      </div>
    </div>
  );
};

export default TourDetails;
