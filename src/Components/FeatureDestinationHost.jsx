import React, { useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import "../Components/Css/reactSlick.css";
import TopBanner from "./TopBanner";
import { deleteData, fetchDataFromApi } from "../utils/api";

const FeatureDestinationHost = () => {
  const [tour, settour] = useState([]);
  useEffect(() => {
    fetchDataFromApi(`/tour`).then((res) => {
      settour(res);
    });
  });

  const Deletetour = (_id) => {
    deleteData(`/tour/${_id}`).then(() => {
      fetchDataFromApi(`/tour`).then((res) => {
        settour(res);
      });
    });
  };

  return (
    <>
      <TopBanner text="Tours" />
      <div className="max-w-7xl md:mx-auto my-10">
        <h1 className="text-3xl lg:text-4xl font-serif mb-3 font-semibold text-center">
          Top Destination
        </h1>
        <hr className="text-red-500 w-[200px] bg-[#60B5FF] mx-auto h-1 mb-10" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {tour.map((item, index) => (
            <div key={item._id} className="px-3">
              <div className="w-[420px] bg-white rounded-2xl shadow-xl overflow-hidden scale-100 transition-all duration-300">
                <div className="relative">
                  <img
                    src={item?.images?.[0]}
                    alt={item.name}
                    className="object-cover w-full h-64 hover:scale-110 transition-all duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {item.name.substr(0, 25) + ".."}
                  </h3>
                  <p className="text-gray-500 text-base mb-4">
                    {item.description.substr(0, 100) + ".."}
                  </p>
                  <div className="border rounded-xl p-4 text-base text-gray-600 mb-5 space-y-3">
                    <p className="flex items-center gap-2">
<<<<<<< HEAD
<<<<<<< HEAD
                     <Rating name="half-rating" defaultValue={destination?.rating} precision={0.5} readOnly/>
=======
                     <Rating name="half-rating" defaultValue={item?.rating} precision={0.5} readOnly/>
>>>>>>> origin/VasuKakadiya
=======
                      <Rating
                        name="half-rating"
                        defaultValue={item?.rating}
                        precision={0.5}
                        readOnly
                      />
>>>>>>> origin/denish
                    </p>
                    <p className="flex items-center gap-3">
                      👥Person {item.person}
                    </p>
                    <p className="flex items-center gap-2">📍 {item.address}</p>
                    <div className="flex justify-between items-center pt-2">
                      <p className="text-2xl font-bold text-gray-900">
                        Rs.{item.price}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <Link to={`/edit-tour/${item._id}`}>
                      <button className="px-5 py-3 bg-[#47bf4d] rounded-lg text-white text-base font-semibold bg-gradient-to-r from-bg-[#60B5FF] to-bg-[#60B5FF] transition delay-110 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                        Edit
                      </button>
                    </Link>
                    <button
                      className="px-5 py-3 rounded-lg text-white text-base font-semibold bg-gradient-to-r bg-[#f23866]  transition delay-110 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:from-indigo-5g00 hover:to-indigo-800"
                      onClick={() => Deletetour(item._id)}
                    >
                      Delete
                    </button>
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

export default FeatureDestinationHost;
