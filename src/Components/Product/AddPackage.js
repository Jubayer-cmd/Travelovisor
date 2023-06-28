import React from "react";
import { toast } from "react-toastify";

const AddPackage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const image = event.target.image.value;
    const name = event.target.name.value;
    const price = event.target.price.value;
    const type = event.target.type.value;
    const duration = event.target.duration.value;
    const travel = event.target.travel.value;
    const person = event.target.person.value;
    const breakfast = event.target.breakfast.value;
    const lunch = event.target.lunch.value;
    const snacks = event.target.snacks.value;
    const dinner = event.target.dinner.value;
    const include = event.target.include.value;
    const day1 = event.target.day1.value;
    const day2 = event.target.day2.value;
    const day3 = event.target.day3.value;

    const tourData = {
      image: image,
      name: name,
      price: price,
      type: type,
      duration: duration,
      travel: travel,
      person: person,
      breakfast: breakfast,
      lunch: lunch,
      snacks: snacks,
      dinner: dinner,
      include: include,
      day1: day1,
      day2: day2,
      day3: day3,
    };
    console.log(tourData);
    fetch(`https://travelovidor.onrender.com/travel`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(tourData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Package added successfully!");
        } else {
          toast.error("Fail to add Package!");
        }
      });
  };
  return (
    <div>
      <h1 className="text-center text-2xl font-bold my-2 ">Add New Packages</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 mx-20 my-5">
          <div>
            <label className="label">Image</label>
            <input
              className="input input-bordered dark:text-black w-full max-w-sm"
              type="text"
              name="image"
              placeholder={"Enter a Package image URL"}
              required
            />
          </div>
          <div>
            <label className="label">Name</label>
            <input
              className="input input-bordered dark:text-black w-full max-w-sm"
              type="text"
              name="name"
              placeholder={"Enter a Package name"}
              required
            />
          </div>
          <div>
            <label className="label">Price</label>
            <input
              className="input input-bordered dark:text-black w-full max-w-sm"
              type="number"
              name="price"
              placeholder={"Enter Package price"}
              required
            />
          </div>
          <div>
            <label className="label">Type</label>
            <input
              className="input input-bordered dark:text-black w-full max-w-sm"
              type="text"
              name="type"
              placeholder={"Enter Package type"}
              required
            />
          </div>
          <div>
            <label className="label">Duration</label>
            <input
              className="input input-bordered dark:text-black w-full max-w-sm"
              type="text"
              name="duration"
              placeholder={"Enter Package total duration"}
              required
            />
          </div>
          <div>
            <label className="label">Travel place</label>
            <input
              className="input input-bordered dark:text-black w-full max-w-sm"
              type="text"
              name="travel"
              placeholder={"Enter travel place"}
              required
            />
          </div>
          <div>
            <label className="label">Person</label>
            <input
              className="input input-bordered dark:text-black w-full max-w-sm"
              type="number"
              name="person"
              placeholder={"Enter total person"}
              required
            />
          </div>
          <div>
            <label className="label">Breakfast</label>
            <input
              className="input input-bordered dark:text-black w-full max-w-sm"
              type="text"
              name="breakfast"
              placeholder={"Enter breakfast Details"}
            />
          </div>
          <div>
            <label className="label">Lunch</label>
            <input
              className="input input-bordered dark:text-black w-full max-w-sm"
              type="text"
              name="lunch"
              placeholder={"Enter Package Lunch Details"}
            />
          </div>
          <div>
            <label className="label">Snacks</label>
            <input
              className="input input-bordered dark:text-black w-full max-w-sm"
              type="text"
              name="snacks"
              placeholder={"Enter Package Snacks Details"}
            />
          </div>
          <div>
            <label className="label">Dinner</label>
            <input
              className="input input-bordered dark:text-black w-full max-w-sm"
              type="text"
              name="dinner"
              placeholder={"Enter Package Dinner Details"}
            />
          </div>
          <div>
            <label className="label">Include</label>
            <input
              className="input input-bordered dark:text-black w-full max-w-sm"
              type="text"
              name="include"
              placeholder={"Enter Package include"}
            />
          </div>
          <div>
            <label className="label">Day1</label>
            <input
              className="input input-bordered dark:text-black w-full max-w-sm"
              type="text"
              name="day1"
              placeholder={"Enter details of day1"}
            />
          </div>
          <div>
            <label className="label">Day2</label>
            <input
              className="input input-bordered dark:text-black w-full max-w-sm"
              type="text"
              name="day2"
              placeholder={"Enter details of day2"}
            />
          </div>
          <div>
            <label className="label">Day3</label>
            <input
              className="input input-bordered dark:text-black w-full max-w-sm"
              type="text"
              name="day3"
              placeholder={"Enter details of day3"}
            />
          </div>
          <input
            className="border-0 bg-primary text-white w-full max-w-sm rounded p-1 mt-5"
            type="submit"
            value="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default AddPackage;
