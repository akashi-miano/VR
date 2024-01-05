import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import logoImg from "../assets/logo.svg";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
  return (
    <nav className="bg-black text-white px-8 py-4 relative">
      <div className="container mx-auto max-w-[1200px] flex items-center justify-between">
        <img src={logoImg} alt="" className="logo hover:cursor-pointer" />
        <ul className="items-center gap-4 hidden md:flex">
          <li>
            <a href="" className="link hvr-underline-from-center">
              Home
            </a>
          </li>
          <li>
            <a href="" className="link hvr-underline-from-center">
              Company
            </a>
          </li>
          <li>
            <a href="" className="link hvr-underline-from-center">
              Features
            </a>
          </li>
          <li>
            <a href="" className="btn--primary">
              Sign Up
            </a>
          </li>
        </ul>
        <div className="mobile-toggle block md:hidden" onClick={handleNav}>
          {nav ? (
            <MdClose
              fontSize={30}
              className="cursor-pointer fixed top-[18px] z-30"
            />
          ) : (
            <FaBars
              fontSize={20}
              className="cursor-pointer relative top-[3px] z-30"
            />
          )}
        </div>
      </div>
      <div
        className={
          nav
            ? "fixed top-0 left-0 right-0 bottom-0 h-full bg-black z-10 ease-in-out duration-500 flex items-center justify-center"
            : "fixed left-[-100%]"
        }
      >
        <ul className="flex flex-col justify-center items-center gap-8">
          <li>
            <a href="" className="link font-bold text-3xl">
              Home
            </a>
          </li>
          <li>
            <a href="" className="link font-bold text-3xl">
              Company
            </a>
          </li>
          <li>
            <a href="" className="link font-bold text-3xl">
              Features
            </a>
          </li>
          <li>
            <a href="" className="btn--primary">
              Sign Up
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
