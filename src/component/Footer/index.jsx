import React from "react";

function Footer(props) {
  return (
    <div className="mx-48 mt-4">
      <div className="grid grid-cols-2 gap-4 mb-3">
        <div className="flex flex-col justify-start items-start">
          <img
            src="https://d-themes.com/react/molla/demo-5/images/logo-footer.png"
            alt=""
            className="h-[35px] mb-5 "
          />
          <p className="text-left text-[14px] font-thin text-slate-500">
            Praesent dapibus, neque id cursus ucibus, tortor neque egestas
            augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam
            dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.
          </p>
          <h1 className="mt-4 text-base font-thin">
            Got Question? Call us 24/7
          </h1>
          <span className="mt-2 text-xl  text-lime-600">0368004546</span>
        </div>

        <div className="grid grid-cols-3 gap-8">
          <div className="flex flex-col ">
            <h1 className="text-slate-900 text-lg font-semibold mb-4 ">
              Information
            </h1>
            <a href="/" className="text-slate-400 mb-2">
              About Us
            </a>
            <a href="/" className="text-slate-400 mb-2">
              Contact
            </a>
            <a href="/" className="text-slate-400 mb-2">
              Login
            </a>
          </div>

          <div className="flex flex-col ">
            <h1 className="text-slate-900 text-lg font-semibold mb-4 ">
              Customer Service
            </h1>
            <a href="/" className="text-slate-400 mb-2">
              Terms And Conditions
            </a>
            <a href="/" className="text-slate-400 mb-2">
              Privacy Policy
            </a>
            <a href="/" className="text-slate-400 mb-2">
              Returns
            </a>
            <a href="/" className="text-slate-400 mb-2">
              Shipping
            </a>
          </div>

          <div className="flex flex-col ">
            <h1 className="text-slate-900 text-lg font-semibold mb-4 ">
              My Account
            </h1>
            <a href="/" className="text-slate-400 mb-2">
              Sign In
            </a>
            <a href="/" className="text-slate-400 mb-2">
              View Cart
            </a>
            <a href="/" className="text-slate-400 mb-2">
              My Wishlist
            </a>
          </div>
        </div>
      </div>

      <div className="border-t-2 ">
        <p className=" py-3 text-slate-500 font-thin">
          Copyright © 2022 Molla Store. All Rights Reserved
        </p>
      </div>
    </div>
  );
}

Footer.propTypes = {};

export default Footer;
