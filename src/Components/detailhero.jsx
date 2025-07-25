import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  "https://themegavias.com/wp/travivu/wp-content/uploads/2024/11/listing-5.jpg",
  "https://themegavias.com/wp/travivu/wp-content/uploads/2024/11/listing-3.jpg",
  "https://themegavias.com/wp/travivu/wp-content/uploads/2024/11/listing-2.jpg",
];

const Detailhero = () => {
  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-[90vh] bg-cover bg-center"
              style={{ backgroundImage: `url(${img})` }}
            >
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev text-white absolute left-3 top-1/2 -translate-y-1/2 z-10 text-xl">
          <FaChevronLeft />
        </div>
        <div className="swiper-button-next text-white absolute right-3 top-1/2 -translate-y-1/2 z-10 text-xl">
          <FaChevronRight />
        </div>
      </Swiper>
    </div>
  );
};

export default Detailhero;
