import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase/config";
import toast from "react-hot-toast";
import { RemoveActiveUser } from "../../app/AuthSlice";
import { ClearAll } from "../../app/CartSlice";
import productApi from "../../api/productApi";
import ItemSearch from "../ItemSearch";
import { FaBars } from "react-icons/fa";
import NavMobile from "../NavMobile";

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
const routepath = [
  {
    id: 1,
    path: "/home",
  },
  {
    id: 2,
    path: "/products",
  },
  {
    id: 3,
    path: "/contact",
  },
  {
    id: 4,
    path: "/products/search",
  },
  {
    id: 5,
    path: "/cart",
  },
  {
    id: 6,
    path: "/login",
  },
  {
    id: 7,
    path: "/signup",
  },
  {
    id: 8,
    path: "/checkout",
  },
  {
    id: 9,
    path: "/products/idproduct",
  },
];

function Header(props) {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.auth.username);
  const islogin = useSelector((state) => state.auth.isLogin);
  const [navState, setNavState] = useState(false);
  const [displayName, setdisplayName] = useState("");
  const [valuesSearch, setValuesSearch] = useState("");
  const [listproduct, setListProduct] = useState([]);
  const [ismoble, setismoble] = useState(false);
  const { pathname } = useLocation();
  const activeNav = mainNav.findIndex((e) => e.path === pathname);
  let checknotfound = routepath.find((item) => item.path === pathname);
  if (routepath[8].path == pathname.slice(0, pathname.lastIndexOf("/"))) {
    checknotfound = routepath[8];
  }
  if (routepath[3].path == pathname.slice(0, pathname.lastIndexOf("/"))) {
    checknotfound = routepath[3];
  }
  const navigate = useNavigate();
  const totalQuantityItems = useSelector((state) =>
    state.cart.cartItems.reduce((total, cartItem) => {
      return total + cartItem.cartQuantity;
    }, 0)
  );
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
  }, [pathname]);

  function handleLogout() {
    signOut(auth)
      .then(() => {
        dispatch(RemoveActiveUser());
        dispatch(ClearAll());
        toast.success("Log out successfully!");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log(uid);
        setdisplayName(username);
      } else {
        setdisplayName("");
      }
    });
  }, [username]);

  function handleSearch() {
    if (valuesSearch == "") {
      navigate(`/products`);
    } else {
      navigate(`/products/search/${valuesSearch}`);
    }
    setValuesSearch("");
  }

  useEffect(() => {
    try {
      const fetchAPI = async () => {
        const response = await productApi.getAll();
        if (valuesSearch) {
          const tmp = response.filter(
            (product) => product.title.indexOf(`${valuesSearch}`) >= 0
          );
          setListProduct(tmp);
        }
      };
      fetchAPI();
    } catch (e) {
      console.log(e);
    }
  }, [valuesSearch]);

  function handleChange(e) {
    setValuesSearch(e.target.value);
  }

  function hanldeClickSetstate() {
    setValuesSearch("");
  }

  function handleclosenav() {
    setismoble(false);
  }

  return (
    <>
      <NavMobile onClosenav={handleclosenav} ismoble={ismoble} />
      <div
        className={` app-container w-full px-7  fixed top-0 left-0 right-0 flex items-center h-[60px] z-[200] text-white 
       transition-color duration-500 ${
         navState ? "bg-[#333] animate-navbar" : "bg-transparent"
       }
       ${checknotfound ? "" : "hidden"}`}
      >
        <div className="flex gap-4 lg:ml-10 ">
          <FaBars
            className="text-white sm:text-3xl md:text-4xl sm:block lg:hidden cursor-pointer"
            onClick={() => setismoble(true)}
          />
          <img
            className="h-[80%] sm:w-[65%]  lg:w-[75%] lg:pr-8 cursor-pointer object-contain "
            src="https://d-themes.com/react/molla/demo-5/images/logo.png"
            alt=""
            onClick={() => {
              navigate("/");
              window.scrollTo(0, 0);
            }}
          />
        </div>
        <div className="w-[90%] flex sm:justify-end lg:justify-between lg:items-center ">
          <div className="sm:hidden md:hidden lg:flex lg:items-center lg:text-base">
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

          <div className="flex items-center lg:mr-[28px] ">
            <div className="sm:hidden lg:block relative mx-4 w-[400px]">
              <input
                type="text"
                className=" text-white w-full text-base bg-transparent border-b-[2px] outline-none placeholder:text-slate-50 placeholder:pl-2 placeholder:text-[15px]"
                placeholder="Search product..."
                value={valuesSearch}
                onChange={(e) => handleChange(e)}
                onKeyPress={(e) => {
                  e.key === "Enter" && handleSearch();
                }}
              />
              {valuesSearch && (
                <div className="flex absolute top-[120%] flex-col w-full bg-white text-slate-700 rounded overflow-hidden shadow-2xl ">
                  {listproduct.map((product, index) => {
                    if (index < 3) {
                      return (
                        <ItemSearch
                          key={index}
                          id={product.id}
                          image={product.image}
                          title={product.title}
                          price={product.price}
                          onClickSetstate={hanldeClickSetstate}
                        />
                      );
                    }
                  })}
                  <h2
                    className="text-left px-2 py-3 text-base cursor-pointer hover:bg-slate-300/20 "
                    onClick={() => handleSearch()}
                  >
                    View result of "{valuesSearch}"
                  </h2>
                </div>
              )}
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
            <div
              className="relative"
              onClick={() =>
                islogin ? navigate("/cart") : toast.error("Login required")
              }
            >
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
                {totalQuantityItems}
              </span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="sm:hidden lg:block w-8 h-8 ml-4 mr-2 cursor-pointer"
              onClick={() => !islogin && navigate("/login")}
            >
              <path
                fillRule="evenodd"
                d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                clipRule="evenodd"
              />
            </svg>
            {islogin && (
              <div className="sm:hidden lg:block flex items-center relative group">
                <span>{displayName}</span>
                <span
                  className="absolute bottom-[-80%] w-[92px] transitions-theme opacity-0 rounded-sm bg-white text-slate-700 group-hover:bottom-[-100%] group-hover:opacity-100 "
                  onClick={() => handleLogout()}
                >
                  log out
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

Header.propTypes = {};

export default Header;
