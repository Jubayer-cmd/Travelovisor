import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useToken from "./../Hooks/useToken";
import Loading from "./Loading";
const Signup = () => {
  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth);
  // , { sendEmailVerification: true }
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [updateProfile] = useUpdateProfile(auth);

  const navigate = useNavigate();

  const [token] = useToken(user);

  if (token) {
    navigate("/");
  }
  const handlesignin = async (event) => {
    await signInWithGoogle();
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    navigate("/");
  };
  return (
    <div className="dark:bg-[#0B1222] h-screen dark:text-white ">
      <div className="pb-10">{""}</div>
      <div className="border w-full md:w-3/5 mx-auto shadow-lg dark:bg-[#172131] ">
        <h1 className="text-center p-2 bg-violet-500 text-white text-2xl font-bold">
          Sign up
        </h1>
        <div className=" md:flex justify-evenly items-start">
          <div>
            <img
              className="w-full md:max-w-xl mb-5"
              src="https://i.ibb.co/c273Bdj/tablet-login-concept-illustration-114360-7883-removebg-preview.png"
              alt=""
            />
          </div>
          <div>
            <form onSubmit={handleRegister}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered dark:text-black w-full max-w-sm mt-5"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your E-mail"
                className="input input-bordered dark:text-black w-full max-w-sm mt-5"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                className="input input-bordered dark:text-black w-full max-w-sm mt-5"
                required
              />
              {loading && <Loading></Loading>}
              <input
                className="btn bg-gradient-to-r from-secondary to-primary w-full max-w-sm mt-5 text-white"
                type="submit"
                value="submit"
              />
            </form>
            <p>
              Already have an account?{" "}
              <Link className="text-primary" to="/login">
                Login
              </Link>
            </p>
            <div className="divider dark:text-white">OR</div>
            <button
              onClick={handlesignin}
              className="btn btn-outline px-24 mb-5  dark:bg-violet-500 dark:text-white"
            >
              <i className="fa-brands fa-lg fa-google text-green-500 mr-2"></i>{" "}
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
