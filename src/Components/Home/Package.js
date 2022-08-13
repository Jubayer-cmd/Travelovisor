import { format } from "date-fns";
import { default as React, useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useParams } from "react-router-dom";
const Package = () => {
  const [date, setDate] = useState(new Date());
  const { id } = useParams();
  const [pack, setPack] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/travel/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPack(data));
  }, [id]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 dark:bg-[#0B1222]  text-base gap-4">
      <div className="md:col-span-2 dark:text-[#DCE2EA] p-5">
        <h1 className="text-4xl">
          Package:
          <span className="text-purple-600 text-3xl font-bold ">
            {pack.name}
          </span>
        </h1>
        <p className="mt-2 text-xl">🚀 Place: {pack.travel}</p>
        <div class="divider"></div>
        <div className="grid grid-cols-3 m-auto">
          <div className="flex justify-center">
            <img
              className="w-10 h-10 mr-3"
              src="https://img.icons8.com/external-inipagistudio-mixed-inipagistudio/344/external-duration-location-and-navigation-inipagistudio-mixed-inipagistudio.png"
              alt=""
            />
            <div>
              <p className="font-bold">Duration</p>
              <p>{pack.duration}</p>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              className="w-10 h-10 mr-3"
              src="https://cdn-icons-png.flaticon.com/512/854/854894.png"
              alt=""
            />
            <div>
              <p className="font-bold">Tour Type</p>
              <p>{pack.type}</p>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              className="w-10 h-10 mr-3"
              src="https://cdn-icons-png.flaticon.com/512/1256/1256650.png"
              alt=""
            />
            <div>
              <p className="font-bold">Members</p>
              <p>{pack.person}</p>
            </div>
          </div>
        </div>
        <div>
          <img
            className="p-2 bg-white border rounded w-full md:max-w-lg mx-auto my-10"
            src={pack.image}
            alt=""
          />
        </div>
        <div class="overflow-x-auto dark:text-black">
          <h1 className="text-2xl font-bold text-violet-600 uppercase my-3">
            Food Menu:
          </h1>
          <table class="table table-zebra w-full">
            <tbody>
              <tr>
                <th>Breakfast</th>
                <td>{pack.breakfast}</td>
              </tr>

              <tr>
                <th>Lunch</th>
                <td>{pack.lunch}</td>
              </tr>
              <tr>
                <th>Snacks</th>
                <td>{pack.snacks}</td>
              </tr>
              <tr>
                <th>Dinner</th>
                <td>{pack.dinner}</td>
              </tr>
            </tbody>
          </table>
          <h1 className="text-2xl font-bold text-violet-600 my-3">
            INCLUDED/EXCLUDE
          </h1>
        </div>
        <div className="flex items-start justify-evenly">
          <div>
            <h1>✔️Include</h1>
            <li>{pack?.include?.[0]}</li>
            <li>{pack?.include?.[1]}</li>
            <li>{pack?.include?.[2]}</li>
            <li>{pack?.include?.[3]}</li>
            <li>{pack?.include?.[4]}</li>
          </div>
          <div>
            <h1 className="text-lg font-semibold ">❌Exclude</h1>
            <li>No Medicines</li>
            <li>No Personal cost</li>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold uppercase  text-violet-600 my-3">
            Tour Details
          </h1>
          <h2 className="text-xl font-bold text-left my-1 text-sky-500 underline">
            Day-1
          </h2>
          <p>{pack.day1}</p>
          <h2 className="text-xl font-bold text-left my-1 text-sky-500  underline">
            Day-2
          </h2>
          <p>{pack.day2}</p>
          {pack.day3 ? (
            <div>
              <h2 className="text-xl font-bold text-left my-1 text-sky-500  underline">
                Day-3
              </h2>
              <p>{pack.day3}</p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div>
          <h1 className="text-2xl font-bold uppercase text-red-400 my-3">
            Notes
          </h1>
          <p className="text-md">
            Note: We use local and seasonal items as such it is expected there
            would be variation or changes in the menu someday depending on
            availability.
          </p>
        </div>
      </div>
      <div>
        <div className="w-full sm:w-4/5  sticky top-24 border shadow-lg p-3 bg-white mx-auto mt-16">
          <h1
            className="text-center bg-violet-600 p-2
          my-2 text-white font-bold"
          >
            Want to purchase?
          </h1>
          <div className="pr-20">
            <DayPicker mode="single" selected={date} onSelect={setDate} />
            <p className="pl-5">
              You picked{" "}
              <span className="text-red-400">{format(date, "PP")}</span>
            </p>
          </div>
          <div className="ml-5">
            <button className="btn btn-primary px-32 my-2  uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Package;
