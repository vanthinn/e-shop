import React from "react";
import { useFormik } from "formik";
import { auth } from "../../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import * as Yup from "yup";
import background from "../../assets/images/rm309-adj-03.jpg";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Signup(props) {
  const navigate = useNavigate();
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
      confirmPassword: Yup.string()
        .required("Required")
        .oneOf([Yup.ref("password"), null], "Password must match"),
    }),

    onSubmit: (value) => {
      createUserWithEmailAndPassword(auth, value.email, value.password)
        .then((userCredential) => {
          const user = userCredential.user;
          toast.success("Sign up Successfully!!");
          navigate("/login");
        })
        .catch((error) => {
          const errorMessage = error.message;
          toast.error(errorMessage);
        });
    },
  });
  return (
    <div>
      <div className="h-[60px] bg-[#333] fixed top-0 left-0 right-0 z-[100]"></div>
      <div
        style={{ backgroundImage: `url(${background})` }}
        className="mt-[60px] min-h-[550px] py-12 flex"
      >
        <div className=" m-auto flex flex-col justify-content items-start border-[1px] px-12 py-8 min-w-[450px] rounded-xl bg-slate-50">
          <h1
            before=""
            className="text-3xl font-semibold uppercase text-slate-600 relative before:content-[attr(before)] before:bottom-0 before:absolute 
        before:h-[3px] before:w-full before:bg-blue-600 mb-6"
          >
            Sign up
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
              className="text-base py-2 px-4 border-[1px] rounded-[6px] w-full border-slate-400  "
            />
            {formik.errors.email && formik.touched.email && (
              <p className="error-message"> {formik.errors.email} </p>
            )}
            <label className="text-lg text-slate-600 mb-1 mt-5">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              className=" text-base py-2 px-4 border-[1px] rounded-[6px] w-full border-slate-400 "
            />
            {formik.errors.password && formik.touched.password && (
              <p className="error-message"> {formik.errors.password} </p>
            )}
            <label className="text-lg text-slate-600 mb-1 mt-5">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              className=" text-base py-2 px-4 border-[1px] rounded-[6px] w-full border-slate-400  "
            />
            {formik.errors.confirmPassword &&
              formik.touched.confirmPassword && (
                <p className="error-message">{formik.errors.confirmPassword}</p>
              )}
            <input
              type="submit"
              id="submit"
              value="Sign up"
              className="w-full mt-8 text-lg font-semibold text-white bg-blue-700/90 py-[10px] rounded-3xl my-4 cursor-pointer hover:opacity-90"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

Signup.propTypes = {};

export default Signup;
