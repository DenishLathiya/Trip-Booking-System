import React, { useRef, useState } from "react";
import { Rating } from "@mui/material";
import { FaCloudUploadAlt } from "react-icons/fa";
import bali from "../assets/bali.jpg";
import { postdata } from "../utils/api";
import { useNavigate } from "react-router-dom";

const AddTourForm = () => {
  const [rating, setRating] = useState(3);
  const [showToast, setShowToast] = useState(false);
  const Imges = [];
  const [productImgArr, setproductImgArr] = useState([]);
  const productImg = useRef();
  const navigate = useNavigate();
  const [fromFields, setFromFields] = useState({
    name: "",
    description: "",
    price: 0,
    daynight: "",
    address: "",
    person: 0,
    rating: 0,
    images: [],
  });

  const inputchange = (e) => {
    setFromFields(() => ({
      ...fromFields,
      [e.target.name]: e.target.value,
    }));
  };
  const addproductimage = () => {
    const val = productImg.current?.value?.trim();
    if (!val) return;

    // Add the new URL to array
    setproductImgArr((prevArray) => [...prevArray, val]);

    // Clear only if something was actually added
    productImg.current.value = "";
  };

  const addtour = (e) => {
    e.preventDefault();

    let images = [...productImgArr];
    if (productImg.current.value.trim() !== "") {
      images.push(productImg.current.value.trim());
    }

    const payload = {
      ...fromFields,
      images,
    };

    postdata(`/tour/create`, payload).then(() => {
      setShowToast(true);

      // Show toast for 2 seconds before navigating
      setTimeout(() => {
        setShowToast(false);
        navigate("/tour-list");
      }, 2000);

      // Reset form fields
      setFromFields({
        name: "",
        description: "",
        price: 0,
        daynight: "",
        address: "",
        person: 0,
        rating: 0,
        images: [],
      });
      setproductImgArr([]);
    });
  };

  return (
    <>
      {showToast && (
        <div className="fixed top-5 right-5 bg-[#008000] text-white px-5 py-3 rounded shadow-lg z-50 text-xl animate-bounce">
          ✅ Tour Added Successfully!
        </div>
      )}
      <form className="form" onSubmit={addtour}>
        <div className="w-full max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-10 border border-gray-200">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
            Upload Tour Package
          </h2>

          <div className="grid grid-cols-1 gap-6">
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-1">
                Title
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 lg:py-4 text-lg focus:outline-none focus:ring-2 focus:ring-[#60B5FF] focus:border-[#60B5FF] transition"
                placeholder="Enter Title"
                name="name"
                onChange={inputchange}
                required
              />
            </div>

            <div className="mt-6">
              <label className="block text-lg font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 lg:py-4 text-lg focus:outline-none focus:ring-2 focus:ring-[#60B5FF] focus:border-[#60B5FF] transition"
                placeholder="Enter description..."
                name="description"
                onChange={inputchange}
                required
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700 mb-1">
                Location
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 lg:py-4 text-lg focus:outline-none focus:ring-2 focus:ring-[#60B5FF] focus:border-[#60B5FF] transition"
                placeholder="Enter Location"
                onChange={inputchange}
                name="address"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Price */}
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  Price
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 lg:py-4 text-lg focus:outline-none focus:ring-2 focus:ring-[#60B5FF] focus:border-[#60B5FF] transition"
                  placeholder="Enter Price"
                  onChange={inputchange}
                  name="price"
                  required
                />
              </div>

              <div>
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  Day / Night
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 lg:py-4 text-lg focus:outline-none focus:ring-2 focus:ring-[#60B5FF] focus:border-[#60B5FF] transition"
                  placeholder="e.g. 5D/4N"
                  onChange={inputchange}
                  name="daynight"
                  required
                />
              </div>

              <div>
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  Person
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 lg:py-4 text-lg focus:outline-none focus:ring-2 focus:ring-[#60B5FF] focus:border-[#60B5FF] transition"
                  placeholder="Number of People"
                  onChange={inputchange}
                  name="person"
                  required
                />
              </div>

              <div>
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  Rating
                </label>
                <Rating
                  name="tour-rating"
                  value={rating}
                  precision={0.5}
                  onChange={(event, newValue) => {
                    setRating(newValue);
                    setFromFields(() => ({
                      ...fromFields,
                      rating: newValue,
                    }));
                  }}
                />
              </div>
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Tour Image URL
              </label>

              <div className="flex items-center bg-gray-50 border border-gray-300 rounded-lg px-2 py-3 lg:py-3">
                <input
                  type="text"
                  placeholder="Paste image URL"
                  className="flex-1 bg-transparent outline-none px-2 text-lg"
                  ref={productImg}
                  required
                />
                <button
                  type="button"
                  onClick={addproductimage}
                  className="bg-[#60B5FF] hover:bg-[#3498DB] text-white text-sm font-semibold w-[75px] px-4 py-3 rounded-md transition"
                >
                  ADD
                </button>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white shadow rounded-xl mt-6 border border-gray-200">
            {/* Product Images Section */}
            <div className="mb-6">
              <h5 className="text-lg font-semibold text-gray-800 mb-4">
                PRODUCT IMAGES
              </h5>
              <div className="flex flex-wrap gap-4" id="imgGrid">
                {productImgArr?.map((image, index) => {
                  return (
                    <div
                      key={index}
                      className="w-28 h-28 border rounded overflow-hidden"
                    >
                      <img
                        src={image}
                        alt="product"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Publish Button */}
            <button
              type="submit"
              className="w-full bg-[#60B5FF] hover:bg-[#3498DB] text-white font-semibold py-4 rounded-lg flex items-center justify-center gap-2 transition"
            >
              <FaCloudUploadAlt className="text-xl" />
              PUBLISH AND VIEW
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddTourForm;
