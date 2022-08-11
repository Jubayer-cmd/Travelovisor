import React from "react";
import { useNavigate } from "react-router-dom";
const TourList = ({ tour }) => {
  const { _id, name, duration, price, image } = tour;
  const navigate = useNavigate();
  const navigateToPackage = (id) => {
    navigate(`/package/${id}`);
  };
  return (
    <div class="max-w-sm rounded  dark:bg-[#172131] dark:text-[#E2E8F0] overflow-hidden shadow-lg">
      <img
        class="w-full p-2 rounded-md transform transition duration-500 hover:scale-110"
        src={image}
        alt="Mountain"
      />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{name}</div>
        <p class="text-gray-700 text-base dark:text-[#E2E8F0]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <button
        onClick={() => navigateToPackage(_id)}
        className="btn ml-8 btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary"
      >
        Details
      </button>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #{duration}
        </span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #travel
        </span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-red-700 mr-2 mb-2">
          #Tk{price}
        </span>
      </div>
    </div>
  );
};

export default TourList;
