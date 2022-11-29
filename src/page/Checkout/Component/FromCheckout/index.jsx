import React from "react";

function FromCheckout(props) {
  const {
    firstname,
    lastname,
    email,
    phone,
    company,
    country,
    address,
    note,
    onChangeInput,
    error,
    touched,
  } = props;
  return (
    <div className="flex flex-col justify-start items-start w-full">
      <h1 className="text-xl font-semibold mb-2">Billing Detail</h1>
      <div className="flex w-full gap-7 ">
        <div className="flex flex-col gap-1 items-start w-full mb-4">
          <label className="text-lg text-slate-500 font-thin" htmlFor="">
            First Name *
          </label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={firstname}
            onChange={onChangeInput}
            className="w-full text-base px-4 py-3 border-[1px] border-slate-500/50 rounded focus:border-blue-500 outline-none"
          />
          {error.firstname && touched.firstname && (
            <p className="error-message"> {error.firstname} </p>
          )}
        </div>
        <div className="flex flex-col gap-1 items-start w-full mb-4">
          <label className="text-lg text-slate-500 font-thin" htmlFor="">
            Last Name *
          </label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={lastname}
            onChange={onChangeInput}
            className="w-full text-base px-4 py-3 border-[1px] border-slate-500/50 rounded focus:border-blue-500 outline-none"
          />
          {error.lastname && touched.lastname && (
            <p className="error-message"> {error.lastname} </p>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-1 items-start w-full mb-4">
        <label className="text-lg text-slate-500 font-thin" htmlFor="">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={onChangeInput}
          className="w-full text-base px-4 py-3 border-[1px] border-slate-500/50 rounded focus:border-blue-500 outline-none"
        />
        {error.email && touched.email && (
          <p className="error-message"> {error.email} </p>
        )}
      </div>
      <div className="flex flex-col gap-1 items-start w-full mb-4">
        <label className="text-lg text-slate-500 font-thin" htmlFor="">
          Phone Number *
        </label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={phone}
          onChange={onChangeInput}
          className="w-full text-base px-4 py-3 border-[1px] border-slate-500/50 rounded focus:border-blue-500 outline-none"
        />
        {error.phone && touched.phone && (
          <p className="error-message"> {error.phone} </p>
        )}
      </div>
      <div className="flex flex-col gap-1 items-start w-full mb-4">
        <label className="text-lg text-slate-500 font-thin" htmlFor="">
          Company Name
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={company}
          onChange={onChangeInput}
          className="w-full text-base px-4 py-3 border-[1px] border-slate-500/50 rounded focus:border-blue-500 outline-none"
        />
      </div>
      <div className="flex flex-col gap-1 items-start w-full mb-4">
        <label className="text-lg text-slate-500 font-thin" htmlFor="">
          Country *
        </label>
        <input
          type="text"
          id="country"
          name="country"
          value={country}
          onChange={onChangeInput}
          className="w-full text-base px-4 py-3 border-[1px] border-slate-500/50 rounded focus:border-blue-500 outline-none"
        />
        {error.country && touched.country && (
          <p className="error-message"> {error.country} </p>
        )}
      </div>
      <div className="flex flex-col gap-1 items-start w-full mb-4">
        <label className="text-lg text-slate-500 font-thin" htmlFor="">
          Address *
        </label>
        <input
          type="text"
          id="address"
          name="address"
          value={address}
          onChange={onChangeInput}
          className="w-full text-base px-4 py-3 border-[1px] border-slate-500/50 rounded focus:border-blue-500 outline-none"
        />
        {error.address && touched.address && (
          <p className="error-message"> {error.address} </p>
        )}
      </div>
      <div className="flex flex-col gap-1 items-start w-full mb-4">
        <label className="text-lg text-slate-500 font-thin" htmlFor="">
          Note
        </label>
        <textarea
          rows="5"
          id="note"
          name="note"
          value={note}
          onChange={onChangeInput}
          className="w-full text-base px-4 py-3 border-[1px] border-slate-500/50 rounded focus:border-blue-500 outline-none"
        />
      </div>
    </div>
  );
}

FromCheckout.propTypes = {};

export default FromCheckout;
