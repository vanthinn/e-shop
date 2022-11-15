import React from "react";
import logo from "../../assets/images/Logo-2.png";
import { Link, useLocation } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const mainNav = [
  {
    display: "Trang chủ",
    path: "/home",
  },
  {
    display: "Sản phẩm",
    path: "/catalog",
  },
  {
    display: "Phụ kiện",
    path: "/accessories",
  },
  {
    display: "Liên hệ",
    path: "/contact",
  },
];

const iconHeader = [
  <SearchIcon size="large" />,
  <ShoppingCartIcon className="text-2xl" />,
  <AccountCircleIcon className="text-2xl" />,
];

function Header(props) {
  const { pathname } = useLocation();
  const activeNav = mainNav.findIndex((e) => e.path === pathname);
  console.log(activeNav);
  return (
    <div className="fixed flex justify-between items-center shink h-[50px] w-[100%] z-50 text-white">
      <div className="flex text-xl">
        {mainNav.map((item, index) => (
          <div
            key={index}
            className={`mx-8 ${index === activeNav ? "text-blue-500" : ""}`}
          >
            <Link to={item.path}>
              <span>{item.display}</span>
            </Link>
          </div>
        ))}
      </div>

      {/* <div className="ml-[-160px] h-[65%] ">
        <Link to="/home">
          <img className="h-[100%] " src={logo} alt="" />
        </Link>
      </div> */}

      <div className="flex mr-[50px]">
        {iconHeader.map((icon, index) => (
          <div className="px-4 cursor-pointer" key={index}>
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
}

Header.propTypes = {};

export default Header;
