import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function ContactForm(props) {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .required("Required")
        .min(2, "Must be 2 characters or more"),
      email: Yup.string()
        .required("Required")
        .email("Please enter a valid email address"),
      phone: Yup.string()
        .required("Required")
        .matches(/^[0-9\-\+]{9,15}$/, "Must be a valid phone number"),
      message: Yup.string().required("Required"),
    }),

    onSubmit: (value) => {
      console.log(value);
    },
  });
  return (
    <div className="app-container lg:px-36 pt-32">
      <h1 className="text-4xl font-semibold ">Get In Touch</h1>
      <h4 className="mt-4 text-lg text-blue-700">
        We collaborate with ambitious brands and people. We’d love to build
        something great together.
      </h4>
      <p className="lg:px-44 mt-2 font-thin">
        Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu
        pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu,
        fermentum et, dapibus sed, urna.
      </p>
      <form
        className="mt-4 lg:px-44 flex flex-col justify-center gap-4 "
        onSubmit={formik.handleSubmit}
      >
        <div className="grid md:grid-cols-3 md:justify-between sm:gap-4 md:gap-8">
          <div className="flex flex-col items-start w-full ">
            <label className="mb-1 text-base text-gray-500 font-thin">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              className={`border-[1px] w-full p-3 ${
                formik.errors.name && formik.touched.name
                  ? "border-red-500"
                  : ""
              }`}
            ></input>
            {formik.errors.name && formik.touched.name && (
              <p className="error-message"> {formik.errors.name} </p>
            )}
          </div>
          <div className="flex flex-col items-start w-full ">
            <label className="mb-1 text-base text-gray-500 font-thin">
              Email *
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              className={`border-[1px] w-[100%] p-3 ${
                formik.errors.email && formik.touched.email
                  ? "border-red-500"
                  : ""
              }`}
            ></input>
            {formik.errors.email && formik.touched.email && (
              <p className="error-message"> {formik.errors.email} </p>
            )}
          </div>
          <div className="flex flex-col items-start w-full ">
            <label className="mb-1 text-base text-gray-500 font-thin">
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              className={`border-[1px] w-[100%] p-3 ${
                formik.errors.phone && formik.touched.phone
                  ? "border-red-500"
                  : ""
              }`}
            ></input>
            {formik.errors.phone && formik.touched.phone && (
              <p className="error-message"> {formik.errors.phone} </p>
            )}
          </div>
        </div>
        <div className="flex flex-col items-start ">
          <label className="mb-1 text-base text-gray-500 font-thin">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formik.values.subject}
            onChange={formik.handleChange}
            className="border-[1px] w-[100%] p-3"
          ></input>
        </div>

        <div className="flex flex-col items-start">
          <label className="mb-1 text-base text-gray-500 font-thin">
            Message
          </label>
          <textarea
            rows="8"
            type="text"
            id="message"
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            className={`border-[1px] w-[100%] p-3 ${
              formik.errors.message && formik.touched.message
                ? "border-red-500"
                : ""
            }`}
          ></textarea>
          {formik.errors.message && formik.touched.message && (
            <p className="error-message"> {formik.errors.message} </p>
          )}
        </div>

        <button
          type="type"
          className="w-[100%] border-[1px] border-blue-600 text-blue-600  text-base py-[10px] font-semibold rounded-md
                  hover:text-white hover:bg-blue-600 transitions-theme"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

ContactForm.propTypes = {};

export default ContactForm;
