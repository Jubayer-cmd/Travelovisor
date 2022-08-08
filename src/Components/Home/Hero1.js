import React from "react";

const Hero1 = () => {
  return (
    <div>
      <h1 className="text-4xl text-center font-bold text-violet-700 mt-20 dark:text-sky-500">
        Why Pick us?
      </h1>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="w-80 sm:w-96 md:ml-40 rounded-lg shadow-2xl"
            alt=""
          />
          <div className="md:m-20">
            <h1 className="text-2xl sm:text-5xl font-bold">
              Exceptional vacation Care, on Your Terms
            </h1>
            <p className="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero1;
