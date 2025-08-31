import React, { useEffect, useState } from "react";
import Detailhero from "../Components/detailhero";
import { FaClock, FaUsers, FaMapMarkerAlt, FaTags } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { fetchDataFromApi } from "../utils/api";

const TourDetails = () => {
  const { id } = useParams();
  const [tour, settour] = useState();
  useEffect(() => {
    fetchDataFromApi(`/tour/${id}`).then((res) => {
      settour(res);
    });
  });
  return (
    <>
      <Detailhero images={tour?.images} />

      <div className="bg-white p-8 rounded-2xl shadow-md max-w-6xl mx-auto mt-5 mb-5">
        <div className="mb-4">
          <h2 className="text-3xl font-bold text-gray-900">{tour?.name}</h2>
        </div>

        <p className="text-gray-600 mb-4">{tour?.description}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8 text-gray-700">
          <div className="flex items-center gap-3">
            <FaClock className="text-[#60B5FF]" />
            <span className="text-sm">
              Duration: <span className="font-semibold">{tour?.daynight}</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <FaUsers className="text-[#60B5FF]" />
            <span className="text-sm">
              Guests: <span className="font-semibold">{tour?.person}</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-[#60B5FF]" />
            <span className="text-sm">
              Location: <span className="font-semibold">{tour?.address}</span>
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-6">
          <p className="text-xl font-bold text-gray-900 mb-4 sm:mb-0">
            Rs {tour?.price}{" "}
            <span className="text-sm text-gray-500">/person</span>
          </p>

          <Link to="/booking">
            <button className="bg-[#60B5FF] hover:bg-[#4aa3f5] text-white font-semibold py-2 px-6 rounded-full">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default TourDetails;
