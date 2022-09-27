import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "./../../firebase.init";

const Profile = () => {
  const { user } = useAuthState(auth);
  const email = user.email;
  const [data, setData] = useState({});
  useEffect(() => {
    const url = `https://quiet-fortress-52901.herokuapp.com/profile/${email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [email]);
  console.log(data);
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const image = event.target.image.value;
    const location = event.target.location.value;
    const phone = event.target.phone.value;
    const about = event.target.about.value;
    const profile = {
      name: name,
      location: location,
      phone: phone,
      about: about,
      image: image,
    };
    console.log(profile);
    fetch(`https://quiet-fortress-52901.herokuapp.com/profile/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(profile),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Profile update successfully!");
        } else {
          toast.error("Fail to update profile!");
        }
      });
  };
  return (
    <div>
      <h1 className="text-center text-2xl font-bold my-2 ">Your Profile</h1>
      <div className="mx-10">
        <form onSubmit={handleSubmit}>
          <div className="grid place-items-center">
            <img
              className="w-32 rounded-full my-2"
              src={
                data.image ||
                user.photoURL ||
                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
              }
              alt=""
            />
            <p>Update your Profile picture</p>
            <input
              type="text"
              name="image"
              className="input input-bordered dark:text-black w-full mt-2 max-w-sm"
              placeholder="Image URL link"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-3">
            <div>
              <label className="label"> Your name</label>
              <input
                className="input input-bordered dark:text-black w-full max-w-sm"
                type="text"
                name="name"
                placeholder={user.displayName || data.name}
              />
            </div>

            <div>
              <label className="label"> Your Email</label>
              <input
                className="input input-bordered dark:text-black w-full max-w-sm"
                type="email"
                name="email"
                placeholder={user.email}
                readOnly
              />
            </div>

            <div>
              <label className="label"> Your Location</label>
              <input
                className="input input-bordered dark:text-black w-full max-w-sm"
                type="text"
                name="location"
                placeholder={data.location}
                required
              />
            </div>

            <div>
              <label className="label"> Your Phone number</label>
              <input
                className="input input-bordered dark:text-black w-full max-w-sm"
                type="text"
                name="phone"
                placeholder={data.phone}
                required
              />
            </div>
            <div>
              <label className="label">About Yourself</label>
              <input
                className="input input-bordered dark:text-black w-full max-w-sm"
                type="text"
                name="about"
                placeholder={data.about}
                required
              />
            </div>
          </div>
          <input
            className="border-0 bg-primary text-white rounded p-2 my-2"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Profile;
