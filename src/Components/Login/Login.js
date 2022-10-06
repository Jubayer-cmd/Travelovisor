import { default as React, useEffect, useRef } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import useToken from "./../Hooks/useToken";
import Loading from "./Loading";

const Login = () => {
  let ErrorOccur;

  const emailRef = useRef("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gloading] = useSignInWithGoogle(auth);
  const [sendPasswordResetEmail, updating] = useSendPasswordResetEmail(auth);

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const [token] = useToken(user || gUser);
  console.log(token);

  useEffect(() => {
    if (user || gUser) {
      navigate(from, { replace: true });
    }
  }, [user, gUser, from, navigate]);

  if (gloading || updating || loading) {
    return <Loading></Loading>;
  }
  if (error) {
    ErrorOccur = <p className="text-danger">Error: {error?.message}</p>;
  }

  const handlesignin = async (event) => {
    await signInWithGoogle();
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    await signInWithEmailAndPassword(email, password);
    toast("login sucesss");
    navigate(from, { replace: true });
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Email sent!");
    } else {
      toast("please enter your Email address!");
    }
  };
  return (
    <div className="dark:bg-[#0B1222] h-screen dark:text-white ">
      <div className="pb-10">{""}</div>
      <div className="border w-full md:w-3/5 mx-auto shadow-lg  dark:bg-[#172131]">
        <h1 className="text-center p-2 bg-violet-500 text-white text-2xl font-bold">
          Sign In
        </h1>
        <div className=" md:flex justify-evenly items-start">
          <div>
            <img
              className="w-full md:max-w-md mb-5"
              src="https://i.ibb.co/bdBKb3F/access-control-system-abstract-concept-335657-3180-removebg-preview.png"
              alt=""
            />
          </div>
          <div>
            <form onSubmit={handleLogin}>
              <input
                ref={emailRef}
                name="email"
                type="email"
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
              {/* {loading && <Loading></Loading>}
              {updating && <Loading></Loading>} */}
              {ErrorOccur}
              <input
                className="btn bg-gradient-to-r from-secondary to-primary w-full max-w-sm mt-5 text-white"
                type="submit"
                value="submit"
              />
            </form>
            <p>
              New to Travelovisor?{" "}
              <Link className="text-primary" to="/signin">
                Signup
              </Link>
            </p>
            <p
              onClick={() => resetPassword()}
              className="link-primary underline"
            >
              Forget Password?
            </p>
            <div className="divider">OR</div>
            <button
              onClick={handlesignin}
              className="btn btn-outline px-24 mb-5 dark:bg-violet-500 dark:text-white"
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

export default Login;
