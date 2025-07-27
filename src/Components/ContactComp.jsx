// import React, { useState } from "react";
// import contactImg from "../assets/ContactImg.png";

// const Contact = () => {
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);

//     // Optional: Reset form after submission
//     e.target.reset();

//     // Optional: Hide message after a few seconds
//     setTimeout(() => setSubmitted(false), 4000);
//   };

//   return (
//     <div className="flex flex-col max-w-7xl mx-auto md:flex-row lg:h-screen items-center">
//       {/* image section */}
//       <div className="flex-1 bg-gray-100 flex justify-center items-center">
//         <img
//           src={contactImg}
//           alt="Contact Us"
//           className="w-full h-full max-w-md md:max-w-full object-cover"
//         />
//       </div>

//       {/* contact form section */}
//       <div className="flex-1 bg-white w-full flex flex-col justify-center px-8 py-12">
//         <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>

//         <form className="space-y-6" onSubmit={handleSubmit}>
//           <div>
//             <label
//               htmlFor="name"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               placeholder="Enter your name"
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-[#60B5FB] p-2"
//               required
//             />
//           </div>

//           <div>
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               placeholder="Enter your email"
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-[#60B5FB] p-2"
//               required
//             />
//           </div>

//           <div>
//             <label
//               htmlFor="message"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Message
//             </label>
//             <textarea
//               id="message"
//               name="message"
//               rows="5"
//               placeholder="Enter your message"
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-[#60B5FB] p-2"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-[#60B5FF] text-white py-2 px-4 rounded-md hover:bg-[#3498DB] focus:outline-none focus:ring-2"
//           >
//             Send Message
//           </button>
//         </form>

//         {/* success message */}
//         {submitted && (
//           <p className="mt-4 text-green-600 text-lg">
//             Thank you! We’ll get back to you shortly.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React, { useState } from "react";
import contactImg from "../assets/ContactImg.png";

const Contact = () => {
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowToast(true);
    e.target.reset();

    // Hide popup after 4 seconds
    setTimeout(() => setShowToast(false), 4000);
  };

  return (
    <div className="relative">
      {/* Toast popup */}
      {showToast && (
        <div className="fixed top-5 right-5 bg-[#008000] text-white px-6 py-3 rounded shadow-lg z-50 animate-slide-in">
          ✅ Thank you! We’ll get back to you shortly.
        </div>
      )}

      <div className="flex flex-col max-w-7xl mx-auto md:flex-row lg:h-screen items-center">
        {/* image section */}
        <div className="flex-1 bg-gray-100 flex justify-center items-center">
          <img
            src={contactImg}
            alt="Contact Us"
            className="w-full h-full max-w-md md:max-w-full object-cover"
          />
        </div>

        {/* contact form section */}
        <div className="flex-1 bg-white w-full flex flex-col justify-center px-8 py-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Get in Touch
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-[#60B5FB] p-2"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-[#60B5FB] p-2"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Enter your message"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-[#60B5FB] p-2"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#60B5FF] text-white py-2 px-4 rounded-md hover:bg-[#3498DB] focus:outline-none focus:ring-2"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Add simple animation */}
      <style>{`
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
        @keyframes slide-in {
          0% { opacity: 0; transform: translateY(-10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Contact;
