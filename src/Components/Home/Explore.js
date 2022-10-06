import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
// import "./Explore.css";
// import required modules
import { Autoplay, Navigation } from "swiper";
const Explore = () => {
  return (
    <div>
      <h1 className="text-4xl text-center font-bold text-violet-700 my-20 dark:text-sky-500">
        Explore Bangladesh
      </h1>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          autoplay={true}
          navigation={true}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
          breakpoints={{
            370: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 4,
            },
          }}
        >
          <SwiperSlide>
            <div className="card w-96 dark:bg-slate-800 m-5 shadow-xl">
              <div className="avatar">
                <div className="w-52 mt-3 m-auto rounded-full ring ring-orange-500 ring-offset-base-100 ring-offset-2">
                  <img
                    src="https://blog.flyticket.com.bd/wp-content/uploads/2020/05/image001-1024x682.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-green-400">Sundarbans</h2>
                <p>
                  <i class="fas fa-location"></i> Khulna
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card dark:bg-slate-800 w-96 m-5 shadow-xl">
              <div className="avatar">
                <div className="w-52 mt-3 m-auto rounded-full ring ring-pink-500 ring-offset-base-100 ring-offset-2">
                  <img
                    src="https://blog.flyticket.com.bd/wp-content/uploads/2020/05/image003.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-green-400">
                  Chittagong Hill Tracks
                </h2>
                <p>
                  <i class="fas fa-location"></i> Chittagong
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card dark:bg-slate-800 w-96 m-5 shadow-xl">
              <div className="avatar">
                <div className="w-52 mt-3 m-auto rounded-full ring ring-purple-500 ring-offset-base-100 ring-offset-2">
                  <img
                    src="https://blog.flyticket.com.bd/wp-content/uploads/2020/05/image005-1024x684.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-green-400">Srimagal</h2>
                <p>
                  <i class="fas fa-location"></i> Sylhet
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card dark:bg-slate-800 w-96 m-5 shadow-xl">
              <div className="avatar">
                <div className="w-52 mt-3 m-auto rounded-full ring ring-sky-500 ring-offset-base-100 ring-offset-2">
                  <img
                    src="https://blog.flyticket.com.bd/wp-content/uploads/2020/05/image007.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-green-400">Rangamati</h2>
                <p>
                  <i class="fas fa-location"></i> Chittagong
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card dark:bg-slate-800 w-96 m-5 shadow-xl">
              <div className="avatar">
                <div className="w-52 mt-3 m-auto rounded-full ring ring-green-500 ring-offset-base-100 ring-offset-2">
                  <img
                    src="https://blog.flyticket.com.bd/wp-content/uploads/2020/05/image009.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-green-400">Paharpur</h2>
                <p>
                  <i class="fas fa-location"></i> Rangpur
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card dark:bg-slate-800 w-96 m-5 shadow-xl">
              <div className="avatar">
                <div className="w-52 mt-3 m-auto rounded-full ring ring-violet-500 ring-offset-base-100 ring-offset-2">
                  <img
                    src="https://blog.flyticket.com.bd/wp-content/uploads/2020/05/image011-1024x686.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-green-400">Lalbag Fort</h2>
                <p>
                  <i class="fas fa-location"></i> Dhaka
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card dark:bg-slate-800 w-96 m-5 shadow-xl">
              <div className="avatar">
                <div className="w-52 mt-3 m-auto rounded-full ring ring-black ring-offset-base-100 ring-offset-2">
                  <img
                    src="https://blog.flyticket.com.bd/wp-content/uploads/2020/05/image015-1024x687.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-green-400">Ahsan Manzil</h2>
                <p>
                  <i class="fas fa-location"></i> Dhaka
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card dark:bg-slate-800 w-96 m-5 shadow-xl">
              <div className="avatar">
                <div className="w-52 mt-3 m-auto rounded-full ring ring-yellow-500 ring-offset-base-100 ring-offset-2">
                  <img
                    src="https://blog.flyticket.com.bd/wp-content/uploads/2020/05/image052.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-green-400">St. Martin Island</h2>
                <p>
                  <i class="fas fa-location"></i> Chittagong
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Explore;
