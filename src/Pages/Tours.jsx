import React from "react";
import TopBanner from "../Components/TopBanner";

const Tours = () => {
  const destinationJson = [
    {
      id: 1,
      title: "Adventure Tour Go Way",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit volup laudan tium.",
      rating: 3.7,
      reviews: 3,
      duration: "3 Days – 2 Nights",
      groupSize: "2–18",
      location: "Main Street, Brooklyn, NY",
      price: 39999,
      image:
        "https://themegavias.com/wp/travivu/wp-content/uploads/2024/11/listing-10-600x500.jpg",
    },
    {
      id: 2,
      title: "Discovery Island Kayak Tour",
      description:
        "Explore the beauty of the island with professional guides and unique experiences.",
      rating: 4.3,
      reviews: 2,
      duration: "2 Days – 1 Night",
      groupSize: "1–12",
      location: "Island Beach, Miami, FL",
      price: 25999,
      image:
        "https://themegavias.com/wp/travivu/wp-content/uploads/2024/11/listing-9-600x500.jpg",
    },
    {
      id: 3,
      title: "Mountain Hiking Retreat",
      description:
        "Breathtaking mountain views and relaxing natural escapes await you.",
      rating: 4.7,
      reviews: 8,
      duration: "4 Days – 3 Nights",
      groupSize: "4–20",
      location: "Aspen Mountains, CO",
      price: 34999,
      image:
        "https://themegavias.com/wp/travivu/wp-content/uploads/2024/11/listing-8-600x500.jpg",
    },
    {
      id: 4,
      title: "Desert Safari Experience",
      description:
        "Ride through the golden dunes and enjoy traditional desert entertainment.",
      rating: 4.5,
      reviews: 12,
      duration: "1 Day Trip",
      groupSize: "5–25",
      location: "Dubai Desert, UAE",
      price: 17999,
      image:
        "https://themegavias.com/wp/travivu/wp-content/uploads/2024/11/listing-7-600x500.jpg",
    },
    {
      id: 5,
      title: "Countryside Cycling Tour",
      description:
        "Peaceful cycling routes through scenic villages and farmlands.",
      rating: 4.0,
      reviews: 6,
      duration: "2 Days – 1 Night",
      groupSize: "3–15",
      location: "Napa Valley, CA",
      price: 14999,
      image:
        "https://themegavias.com/wp/travivu/wp-content/uploads/2024/11/listing-6-600x500.jpg",
    },
    {
      id: 6,
      title: "Lake Fishing Getaway",
      description:
        "Unwind with a quiet fishing trip and enjoy lakeside cabins and campfires.",
      rating: 4.2,
      reviews: 5,
      duration: "3 Days – 2 Nights",
      groupSize: "2–10",
      location: "Lakewood, Michigan",
      price: 18999,
      image:
        "https://themegavias.com/wp/travivu/wp-content/uploads/2024/11/listing-5-600x500.jpg",
    },
  ];
  return (
    <>
      <TopBanner text="Tours" />
      <div className="max-w-7xl md:mx-auto my-10">
        <h1 className="text-3xl lg:text-4xl font-serif mb-3 font-semibold text-center">
          Top Destination
        </h1>
        <hr className="text-red-500 w-[200px] bg-[#60B5FF] mx-auto h-1 mb-10" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {destinationJson.map((destination) => (
            <div key={destination.id} className="px-3">
              <div className="w-[420px] bg-white rounded-2xl shadow-xl overflow-hidden scale-100 transition-all duration-300">
                <div className="relative">
                  <img
                    src={destination.image}
                    alt={destination.title}
                    className="object-cover w-full h-64 hover:scale-110 transition-all duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {destination.title}
                  </h3>
                  <p className="text-gray-500 text-base mb-4">
                    {destination.description}
                  </p>
                  <div className="border rounded-xl p-4 text-base text-gray-600 mb-5 space-y-3">
                    <p className="flex items-center gap-2">
                      <span className="text-orange-400 text-lg">★★★★☆</span>
                      {destination.rating} ({destination.reviews} Reviews)
                    </p>
                    <p className="flex items-center gap-3">
                      ⏱️ {destination.duration} 👥 {destination.groupSize}
                    </p>
                    <p className="flex items-center gap-2">
                      📍 {destination.location}
                    </p>
                    <div className="flex justify-between items-center pt-2">
                      <p className="text-2xl font-bold text-gray-900">
                        Rs.{destination.price}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <button className="px-5 py-3 bg-[#60B5FF] rounded-lg text-white text-base font-semibold">
                      Book now
                    </button>
                    <button className=/*"px-5 py-3 bg-[#121f4d]  rounded-lg text-white text-base font-semibold bg-bg-[#121f4d] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 ..."*/ "px-5 py-3 rounded-lg text-white text-base font-semibold bg-gradient-to-r from-[#121f4d] to-[#1a2a6c] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:from-indigo-5g00 hover:to-indigo-800">
                      Learn More
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

export default Tours;
