import React from "react";
import NEXT2 from "../assets/next.svg";
import back from "../assets/back.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import "../Components/Css/reactSlick.css";
import LoginModal from "../Pages/login";
import { useEffect, useState } from "react";
import { Bookingdata, fetchDataFromApi } from "../utils/api";

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <img src={NEXT2} alt="prevArrow" {...props} />
);
const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <img src={back} alt="prevArrow" {...props} />
);

const FeatureDestination = () => {
  const [loginType, setLoginType] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const storedType = localStorage.getItem("loginType");
    setLoginType(storedType);
  }, []);

  // Handler for Book and Details buttons
  const handleButtonClick = (target) => {
    if (!loginType) {
      window.location.href = "/";
      alert("please Login to continue");
    } else {
      window.location.href = target;
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SlickArrowLeft />,
    prevArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [tour, settour] = useState([]);
  useEffect(() => {
    fetchDataFromApi(`/tour`).then((res) => {
      settour(res);
    });
  });

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
        <div className="fixed top-5 right-5 bg-[#008000] text-white px-5 py-3 rounded shadow-lg z-50 text-xl animate-bounce">
          ✅ Booking Successful!
        </div>
      )}

      {error && (
        <div className="fixed top-5 right-5 bg-red-600 text-white px-5 py-3 rounded shadow-lg z-50 text-xl animate-bounce">
          {error}
        </div>
      )}
      <section className="w-full py-12 md:py-24 lg:pt-32 px-6 md:px-0">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-3 font-serif">
            Featured Destinations
          </h2>
          <hr className="w-[200px] bg-[#60B5FF] mx-auto h-1 mb-10" />
          <div className="slider-container">
            <Slider {...settings}>
              {tour.map((item, index) => (
                <div key={item.id} className="px-3">
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden scale-100 transition-all duration-300 h-[700px] flex flex-col">
                    {/* Image */}
                    <div className="relative">
                      <img
                        src={item?.images?.[0]}
                        alt={item.name}
                        className="object-cover w-full h-64 hover:scale-110 transition-all duration-300"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">
                        {item.name.substr(0, 25) + ".."}
                      </h3>
                      <p className="text-gray-500 text-base mb-2 flex-grow">
                        {item.description.substr(0, 100) + ".."}
                      </p>

                      {/* Info Section */}
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
                          👥Person {item.person}
                        </p>
                        <p className="flex items-center gap-2">
                          📍 {item.address}
                        </p>
                        <div className="flex justify-between items-center pt-2">
                          <p className="text-2xl font-bold text-gray-900">
                            Rs.{item.price}
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-5 mt-auto">
                        <button
                          className="px-5 py-3 bg-[#60B5FF] rounded-lg text-white text-base font-semibold transition delay-110 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
                          onClick={() => handleBooking(item._id)}
                        >
                          Book now
                        </button>

                        <Link to={`/details/${item._id}`}>
                          <button className="px-5 py-3 rounded-lg text-white text-base font-semibold bg-gradient-to-r from-[#121f4d] to-[#1a2a6c] transition delay-110 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                            Details
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureDestination;
