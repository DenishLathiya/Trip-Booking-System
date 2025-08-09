import React from "react";
import TopBanner from "../Components/TopBanner";
import { Link } from "react-router-dom";
import { useState } from "react";
import Rating from "@mui/material/Rating";
import { useEffect } from "react";
import { fetchDataFromApi } from "../utils/api";

const Booking = () => {
  const [bookdata, setbookdata] = useState([]);
  useEffect(() => {
    fetchDataFromApi(`/Book`).then((res) => {
      setbookdata(res);
    });
  }, []);

  return (
    <>
      <TopBanner text="Booking" />
      <div className="max-w-7xl md:mx-auto my-10">
        <h1 className="text-3xl lg:text-4xl font-serif mb-3 font-semibold text-center">
          Your Booking
        </h1>
        <hr className="text-red-500 w-[200px] bg-[#60B5FF] mx-auto h-1 mb-10" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {bookdata
            //.filter((item) => item.tourId && item.tourId.images?.[0])
            .map((item, index) => (
              <div key={item.id} className="px-3">
                <div className="w-[420px] h-[700px] bg-white rounded-2xl shadow-xl overflow-hidden scale-100 transition-all duration-300 flex flex-col">
                  {/* Image */}
                  <div className="relative">
                    <img
                      src={item.tourId?.images?.[0]}
                      alt={item.tourId?.name}
                      className="object-cover w-full h-64 hover:scale-110 transition-all duration-300"
                    />
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2 line-clamp-1">
                      {item.tourId?.name}
                    </h3>
                    <p className="text-gray-500 text-base mb-4 line-clamp-3">
                      {item.tourId?.description}
                    </p>

                    <div className="border rounded-xl p-4 text-base text-gray-600 mb-5 space-y-3">
                      <p className="flex items-center gap-2">
                        <Rating
                          name="half-rating"
                          defaultValue={item.tourId?.rating}
                          precision={0.5}
                          readOnly
                        />
                      </p>
                      <p className="flex items-center gap-3">
                        👥Person {item.tourId?.person}
                      </p>
                      <p className="flex items-center gap-2">
                        📍 {item.tourId?.address}
                      </p>
                      <div className="flex justify-between items-center pt-2">
                        <p className="text-2xl font-bold text-gray-900">
                          Rs.{item.tourId?.price}
                        </p>
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-5 mt-auto">
                      <Link to={`/details/${item.tourId?._id}`}>
                        <button className="px-5 py-3 rounded-lg text-white text-base font-semibold bg-gradient-to-r from-[#121f4d] to-[#1a2a6c] transition delay-110 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
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

export default Booking;
