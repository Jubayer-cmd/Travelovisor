import React, { useEffect, useState } from "react";
import TourList from "./TourList";

const Tour = () => {
  const [travel, setTravel] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/travel")
      .then((res) => res.json())
      .then((data) => setTravel(data));
  }, [travel]);
  return (
    <div>
      <h1 className="text-4xl text-center font-bold text-violet-700 my-20 dark:text-sky-500">
        Top Travel package
      </h1>
      <div className="grid place-items-center m-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4">
        {travel.slice(-6).map((tour) => (
          <TourList key={tour._id} tour={tour}></TourList>
        ))}
      </div>
    </div>
  );
};

export default Tour;
