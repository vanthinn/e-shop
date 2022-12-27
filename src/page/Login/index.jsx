import React, { useState } from "react";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";
import background from "../../assets/images/rm309-adj-03.jpg";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../firebase/config";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { SetActiveUser } from "../../app/AuthSlice";
import Loading from "../../component/Loading";

function Login(props) {
  const [isloading, setisloading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Required")
        .email("Please enter a valid email address"),
      password: Yup.string().required("Required"),
    }),

    onSubmit: (value) => {
      setisloading(true);
      signInWithEmailAndPassword(auth, value.email, value.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          const usename = user.email.split("@")[0];
          const action = {
            email: user.email,
            username: usename,
            userid: user.uid,
          };
          setisloading(false);
          dispatch(SetActiveUser(action));
          toast.success("Log in Successfully!!");
          navigate("/");
        })
        .catch((error) => {
          toast.error("Log in Fall!!");
          setisloading(false);
        });
    },
  });

  function handleLoginWithGoogle() {
    setisloading(true);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user.displayName);
        console.log(user);
        toast.success("Log in Successfully!!");
        const action = {
          email: user.email,
          username: user.displayName,
          userid: user.uid,
        };
        setisloading(false);
        dispatch(SetActiveUser(action));
        navigate("/");
      })
      .catch((error) => {
        toast.error("Log in Fall!!");
        setisloading(false);
      });
  }

  function handleLoginWithFacebook() {
    const provider = new FacebookAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        const user = result.user;
        toast.success("Log in Successfully!!");
        // const action = {
        //   email: user.email,
        //   username: user.displayName,
        //   userid: user.uid,
        // };
        // dispatch(SetActiveUser(action));
        // navigate("/");
      })
      .catch((error) => {
        toast.error("Log in Fall!!");
        setisloading(false);
      });
  }
  return (
    <div>
      {isloading && <Loading />}
      <div className="h-[60px] bg-[#333] fixed top-0 left-0 right-0 z-[100]"></div>

      <div
        style={{ backgroundImage: `url(${background})` }}
        className=" mt-[60px] min-h-[550px] py-12 flex"
      >
        <div className=" m-auto flex flex-col justify-content items-start border-[1px] sm:px-4 sm:min-w-[350px]  md:px-12 py-8 md:min-w-[450px] rounded-xl bg-slate-50">
          <h1
            before=""
            className="text-3xl font-semibold uppercase text-slate-600 relative before:content-[attr(before)] before:bottom-0 before:absolute 
            before:h-[3px] before:w-full before:bg-blue-600 mb-6"
          >
            Login
          </h1>
          <form
            action=""
            className="flex flex-col items-start w-full"
            onSubmit={formik.handleSubmit}
          >
            <label className="text-lg text-slate-600 mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              className="text-base py-2 px-4 border-[1px] rounded-[6px] w-full border-slate-400 mb-5 "
            />
            {formik.errors.email && formik.touched.email && (
              <p className="error-message"> {formik.errors.email} </p>
            )}
            <label className="text-lg text-slate-600 mb-1">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              className=" text-base py-2 px-4 border-[1px] rounded-[6px] w-full border-slate-400 mb-2 "
            />
            {formik.errors.password && formik.touched.password && (
              <p className="error-message"> {formik.errors.password} </p>
            )}
            <div className="flex items-center">
              <input type="checkbox" id="checkbox" />
              <label className="ml-1" for="checkbox">
                Remember me
              </label>
            </div>
            <input
              type="submit"
              id="submit"
              value="Login"
              className="w-full text-lg font-semibold text-white bg-blue-700/90 py-[10px] rounded-3xl my-4 cursor-pointer hover:opacity-90"
            />
          </form>
          <span className="font-semibold text-slate-500">
            Don't have an account? &nbsp;
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => navigate("/signup")}
            >
              Sign up
            </span>
          </span>
          <div className="w-full mt-8">
            <h1 className="text-center text-lg font-semibold text-slate-500/70">
              Login with social meida
            </h1>
            <div className="flex gap-5 justify-center items-center mt-4">
              <FaFacebookF
                className="text-white h-[40px] w-[40px] p-2.5 rounded-[50%] bg-slate-600/70 hover:bg-blue-600 cursor-pointer"
                onClick={() => handleLoginWithFacebook()}
              />
              <FaGoogle
                className="text-white h-[40px] w-[40px] p-2.5 rounded-[50%] bg-slate-600/70 hover:bg-blue-600 cursor-pointer"
                onClick={() => handleLoginWithGoogle()}
              />
              <FaTwitter className="text-white h-[40px] w-[40px] p-2.5 rounded-[50%] bg-slate-600/70 hover:bg-blue-600 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {};

export default Login;
