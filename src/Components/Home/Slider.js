import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../Banner/Banner.css";
// import required modules
const Slider = () => {
  return (
    <div>
      <h1 className="text-4xl text-center my-5 font-bold text-violet-700 mt-20 dark:text-sky-500">
        Hot Travel Place!!
      </h1>
      <>
        <Swiper
          effect="coverflow"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          coverflowEffect={{
            rotate: 40,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          slidesPerView={3}
          spaceBetween={70}
          centeredSlides
          modules={[Autoplay, EffectCoverflow, Pagination]}
          // Responsive breakpoints
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              rotate: 0,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 1,
              rotate: 0,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 3,
              spaceBetween: 70,
            },
          }}
        >
          <SwiperSlide className="swiper2">
            <div className="card w-full bg-base-100 shadow-xl dark:bg-gray-800 dark:border-gray-700">
              <figure>
                <img
                  className="hero1"
                  src="https://images.unsplash.com/photo-1645985926275-d2184d7c2d5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Shoes!
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Fashion</div>
                  <div className="badge badge-outline">Products</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper2">
            <div className="card w-full bg-base-100 shadow-xl dark:bg-gray-800 dark:border-gray-700">
              <figure>
                <img
                  className="hero1"
                  src="https://images.unsplash.com/photo-1585993573411-b6eaed50db98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Shoes!
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Fashion</div>
                  <div className="badge badge-outline">Products</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper2">
            <div className="card w-full bg-base-100 shadow-xl dark:bg-gray-800 dark:border-gray-700 ">
              <figure>
                <img
                  className="hero1"
                  src="https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Shoes!
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Fashion</div>
                  <div className="badge badge-outline">Products</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper2">
            <div className="card w-full bg-base-100 shadow-xl dark:bg-gray-800 dark:border-gray-700">
              <figure>
                <img
                  className="hero1"
                  src="https://images.unsplash.com/photo-1660084538570-e1e5250dbe96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Shoes!
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Fashion</div>
                  <div className="badge badge-outline">Products</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper2">
            <div className="card w-full bg-base-100 shadow-xl dark:bg-gray-800 dark:border-gray-700">
              <figure>
                <img
                  className="hero1"
                  src="https://placeimg.com/400/225/arch"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Shoes!
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Fashion</div>
                  <div className="badge badge-outline">Products</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper2">
            <div className="card w-full bg-base-100 shadow-xl dark:bg-gray-800 dark:border-gray-700">
              <figure>
                <img
                  className="hero1"
                  src="https://placeimg.com/400/225/arch"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Shoes!
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Fashion</div>
                  <div className="badge badge-outline">Products</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default Slider;
