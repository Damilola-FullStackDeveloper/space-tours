import { Link, NavLink } from "react-router-dom";

import { TfiMenu } from "react-icons/tfi";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const[isActive, setIsActive] = useState(false);
  const[index] = useState([1,2,3,4])


  return (
    <nav
      className="flex justify-between items-center
     fixed top-0 w-screen py-3 px-5 md:px-0"
    >
      <img
        className="h-10"
        src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1710170669/space-tour/Group_2_zyec8i.png"
        alt=""
      />
      <div className="text-white bg-[rgb(255, 255, 255, 4%)] p-8 hidden md:flex gap-5">
      <NavLink className="flex items-center gap-2" to={"/"}>
              <b className="barlow-condensed-medium md:hidden">00</b> <p>Home</p>
            </NavLink>
            <NavLink className="flex items-center gap-2" to={"/destination"}>
              <b className="barlow-condensed-medium md:hidden">01</b> <p>Destination</p>
            </NavLink>
            <NavLink className="flex items-center gap-2" to={"crew"}>
              <b className="barlow-condensed-medium md:hidden">02</b> <p>Crew</p>
            </NavLink>
            <NavLink className="flex items-center gap-2" to={"Technology"}>
              <b className="barlow-condensed-medium md:hidden">03</b> <p>Technology</p>
            </NavLink> 
      </div>
      <div className="md: hidden">
        <span className="text-white" onClick={() => setShow((prev) => !prev)}>
          {show ? (
            <IoCloseSharp className="text-3xl right-5 top-5 fixed z-30" />
          ) : (
            <TfiMenu className="text-3xl " />
          )}
        </span>
        {show && (
          <div className="bg-slate-400 uppercase gap-7 flex flex-col barlow-condensed-regular items-start right-0 text-base  pl-5 pr-20 top-0 pt-20 h-screen absolute ">
            <Link className="flex items-center gap-2" to={"/"}>
              <b className="barlow-condensed-medium">00</b> <p>Home</p>
            </Link>
            <Link className="flex items-center gap-2" to={"/destination"}>
              <b className="barlow-condensed-medium">01</b> <p>Destination</p>
            </Link>
            <Link className="flex items-center gap-2" to={"crew"}>
              <b className="barlow-condensed-medium">02</b> <p>Crew</p>
            </Link>
            <Link className="flex items-center gap-2" to={"Technology"}>
              <b className="barlow-condensed-medium">03</b> <p>Technology</p>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
