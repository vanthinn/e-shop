import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const mainNav = [
  {
    display: "HOME",
    path: "/home",
  },
  {
    display: "PRODUCTS",
    path: "/products",
  },
  {
    display: "CONTACT",
    path: "/contact",
  },
];

function Header(props) {
  const [navState, setNavState] = useState(false);
  const { pathname } = useLocation();

  const activeNav = mainNav.findIndex((e) => e.path === pathname);

  // if (pathname !== "/home") {
  //   setNavState(true);
  // }

  const onNavScroll = () => {
    if (window.scrollY > 100 && pathname === "/home") {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);

    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 flex justify-between items-center h-[60px] w-[100%] z-50 text-white px-8
       transition-color duration-500 ${
         navState ? "bg-[#333] animate-navbar" : "bg-transparent"
       }`}
    >
      <div className="flex items-center text-base">
        <div>
          <img
            className=" h-[30px] pr-8 cursor-pointer"
            src="https://d-themes.com/react/molla/demo-5/images/logo.png"
            alt=""
          />
        </div>

        {mainNav.map((item, index) => (
          <div
            key={index}
            className={`mx-6 hover:text-blue-500 transition-all duration-300 ease-in-out  ${
              index === activeNav
                ? "text-blue-500 border-b-2 border-blue-500 "
                : ""
            }`}
          >
            <Link to={item.path}>
              <span className="">{item.display}</span>
            </Link>
          </div>
        ))}
      </div>

      <div className="flex items-center mr-[50px] ">
        <div className="relative mx-4">
          <input
            type="text"
            className=" text-white text-base bg-transparent border-b-[2px] outline-none placeholder:text-slate-50 placeholder:pl-2 placeholder:text-[15px]"
            placeholder="Search product..."
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 absolute right-0 top-0 cursor-pointer"
          >
            <path
              fillRule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8 mx-4 cursor-pointer"
        >
          <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
        </svg>
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-8 h-8 mx-4 cursor-pointer"
          >
            <path
              fill-rule="evenodd"
              d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
              clip-rule="evenodd"
            />
          </svg>

          <span className="absolute bottom-[-6px] right-2 text-slate-50 text-sm leading-5 h-[20px] w-[20px] bg-red-500 rounded-full ">
            0
          </span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8 mx-4"
        >
          <path
            fillRule="evenodd"
            d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}

Header.propTypes = {};

export default Header;
