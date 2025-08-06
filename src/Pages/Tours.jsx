// import React, { useEffect, useState } from "react";
// import TopBanner from "../Components/TopBanner";
// import { Link } from "react-router-dom";
// import { Bookingdata, fetchDataFromApi } from "../utils/api";
// import Rating from "@mui/material/Rating";

// const Tours = () => {
//   const [tour, settour] = useState([]);
//   useEffect(() => {
//     fetchDataFromApi(`/tour`).then((res) => {
//       settour(res);
//     });
//   });

//   const [showToast, setShowToast] = useState(false);

//   const handleBooking = async (tourId) => {
//     try {
//       const res = await Bookingdata("/Book/add", { tourId });
//       //alert("Booking successful!");
//       {
//         showToast && (
//           <div className="fixed top-5 right-5 bg-[#008000] text-white px-5 py-3 rounded shadow-lg z-50 animate-slide-in text-xl">
//             ✅ Login Successfully
//           </div>
//         );
//       }
//       console.log("Booking saved:", res);
//       setShowToast(true);
//       setTimeout(() => {
//         setShowToast(false);
//         onClose();
//       }, 2000);
//     } catch (err) {
//       setError("Login Failed");
//     }
//     // } catch (err) {
//     //   console.error("Booking error:", err);
//     //   alert("Failed to book this tour.");
//     // }
//   };

//   return (
//     <>
//       <TopBanner text="Tours" />
//       <div className="max-w-7xl md:mx-auto my-10">
//         <h1 className="text-3xl lg:text-4xl font-serif mb-3 font-semibold text-center">
//           Top Destination
//         </h1>
//         <hr className="text-red-500 w-[200px] bg-[#60B5FF] mx-auto h-1 mb-10" />
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
//           {tour.map((item, index) => (
//             <div key={item.id} className="px-3">
//               <div className="w-[420px] h-[min-650px] bg-white rounded-2xl shadow-xl overflow-hidden scale-100 transition-all duration-300">
//                 <div className="relative">
//                   <img
//                     src={item?.images?.[0]}
//                     alt={item.name}
//                     className="object-cover w-full h-64 hover:scale-110 transition-all duration-300"
//                   />
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-2xl font-bold text-gray-800 mb-2">
//                     {item.name}
//                   </h3>
//                   <p className="text-gray-500 text-base mb-4">
//                     {item.description.substr(0, 90) + ".."}
//                   </p>
//                   <div className="border rounded-xl p-4 text-base text-gray-600 mb-5 space-y-3">
//                     <p className="flex items-center gap-2">
//                       <Rating
//                         name="half-rating"
//                         defaultValue={item?.rating}
//                         precision={0.5}
//                         readOnly
//                       />
//                     </p>
//                     <p className="flex items-center gap-3">
//                       👥 Person {item.person}
//                     </p>
//                     <p className="flex items-center gap-2">📍 {item.address}</p>
//                     <div className="flex justify-between items-center pt-2">
//                       <p className="text-2xl font-bold text-gray-900">
//                         Rs.{item.price}
//                       </p>
//                     </div>
//                   </div>
//                   <div className="flex gap-5">
//                     <button
//                       onClick={() => handleBooking(item._id)}
//                       className="px-5 py-3 bg-[#60B5FF] rounded-lg text-white text-base font-semibold bg-gradient-to-r from-bg-[#60B5FF] to-bg-[#60B5FF] transition delay-110 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
//                     >
//                       Book now
//                     </button>
//                     <Link to={`/details/${item._id}`}>
//                       <button className=/*"px-5 py-3 bg-[#121f4d]  rounded-lg text-white text-base font-semibold bg-bg-[#121f4d] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 ..."*/ "px-5 py-3 rounded-lg text-white text-base font-semibold bg-gradient-to-r from-[#121f4d] to-[#1a2a6c] transition delay-110 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:from-indigo-5g00 hover:to-indigo-800">
//                         Learn More
//                       </button>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Tours;

import React, { useEffect, useState } from "react";
import TopBanner from "../Components/TopBanner";
import { Link } from "react-router-dom";
import { Bookingdata, fetchDataFromApi } from "../utils/api";
import Rating from "@mui/material/Rating";

const Tours = () => {
  const [tour, settour] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchDataFromApi(`/tour`).then((res) => {
      settour(res);
    });
  }, []); 

  const handleBooking = async (tourId) => {
    try {
      const res = await Bookingdata("/Book/add", { tourId });
      console.log("Booking saved:", res);
      setShowToast(true);

      setTimeout(() => {
        setShowToast(false);
      }, 2000);
    } catch (err) {
      setError("Booking Failed");
    }
  };

  return (
    <>
      {showToast && (
        <div className="fixed top-5 right-5 bg-green-600 text-white px-5 py-3 rounded shadow-lg z-50 text-xl animate-bounce">
          ✅ Booking Successful!
        </div>
      )}

      {error && (
        <div className="fixed top-5 right-5 bg-red-600 text-white px-5 py-3 rounded shadow-lg z-50 text-xl animate-bounce">
          {error}
        </div>
      )}

      <TopBanner text="Tours" />
      <div className="max-w-7xl md:mx-auto my-10">
        <h1 className="text-3xl lg:text-4xl font-serif mb-3 font-semibold text-center">
          Top Destination
        </h1>
        <hr className="text-red-500 w-[200px] bg-[#60B5FF] mx-auto h-1 mb-10" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {tour.map((item) => (
            <div key={item._id} className="px-3">
              <div className="w-[420px] bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300">
                <div className="relative">
                  <img
                    src={item?.images?.[0]}
                    alt={item.name}
                    className="object-cover w-full h-64 hover:scale-110 transition-all duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-500 text-base mb-4">
                    {item.description?.substring(0, 90) + ".."}
                  </p>
                  <div className="border rounded-xl p-4 text-base text-gray-600 mb-5 space-y-3">
                    <p className="flex items-center gap-2">
                      <Rating
                        name="half-rating"
                        defaultValue={item?.rating}
                        precision={0.5}
                        readOnly
                      />
                    </p>
                    <p className="flex items-center gap-3">
                      👥 Person {item.person}
                    </p>
                    <p className="flex items-center gap-2">📍 {item.address}</p>
                    <div className="flex justify-between items-center pt-2">
                      <p className="text-2xl font-bold text-gray-900">
                        Rs.{item.price}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <button
                      onClick={() => handleBooking(item._id)}
                      className="px-5 py-3 bg-[#60B5FF] rounded-lg text-white text-base font-semibold transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
                    >
                      Book now
                    </button>
                    <Link to={`/details/${item._id}`}>
                      <button className="px-5 py-3 rounded-lg text-white text-base font-semibold bg-gradient-to-r from-[#121f4d] to-[#1a2a6c] transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Tours;
