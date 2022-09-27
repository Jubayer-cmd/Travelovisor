import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Banner.css";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";

const Banner = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation, Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1565982369439-2072eee9168a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.freepik.com/free-photo/travel-concept-with-landmarks_23-2149153256.jpg?t=st=1663235160~exp=1663235760~hmac=721e609b8e1e6462a9bbee75767c4f6d26df13908290425a1f18d596a0df9815"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1473163928189-364b2c4e1135?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
