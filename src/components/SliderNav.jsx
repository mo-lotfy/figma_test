import React from "react";
import { Link } from "react-router-dom";
import { FaCarAlt } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
import { GrClose } from "react-icons/gr";

const SliderNav = ({ isNavOpen, setIsNavOpen, dir, setDir }) => {
  return (
    <aside
      id="sidebar"
      className={`${
        isNavOpen ? "flex flex-col" : "hidden xl:flex xl:flex-col"
      } h-full bg-white w-80 xl:w-64 z-50 space-y-6 pt-6 px-0 absolute inset-y-0 left-0 transform xl:relative xl:translate-x-0 transition duration-200 ease-in-out xl:justify-between overflow-y-auto`}
      data-dev-hint="sidebar; px-0 for frameless; px-2 for visually inset the navigation"
    >
      <div className="flex flex-col space-y-6" data-dev-hint="optional div for having an extra footer navigation">
        <Link to="/">
          <span className="text-gray flex items-center flex-row justify-between space-x-2 px-4" title="Motiv">
            <span className="text-gray flex items-center">
              <img src="./svgs/logo.svg" alt="logo" />
              <span className="text-2xl font-extrabold whitespace-nowrap truncate mx-1">Motiv</span>
            </span>
            <button
              className={`sm:flex xl:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray hover:text-gray focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`}
              type="button"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setIsNavOpen(false)}
            >
              <GrClose size={25} />
            </button>
          </span>
        </Link>

        <nav data-dev-hint="main navigation space-y-2">
          <Link to="/">
            <span className="flex items-center p-4 text-base font-normal text-gray-900 rounded-lg">
              <MdOutlineDashboard size={20} className="text-gray-500" />
              <span className="flex-1 mx-2 whitespace-nowrap">Dashboard</span>
            </span>
          </Link>
          <Link to="/cars">
            <span className="flex items-center p-4 text-base font-normal text-gray-900 rounded-lg">
              <FaCarAlt size={20} className="text-gray-500" />
              <span className="flex-1 mx-2 whitespace-nowrap">Cars</span>
            </span>
          </Link>
        </nav>
      </div>
      <nav data-dev-hint="second-main-navigation or footer navigation">
        <span
          onClick={() => setDir(dir === "rtl" ? "ltr" : "rtl")}
          className="flex items-center p-4 text-base font-normal text-gray-900 rounded-lg cursor-pointer"
        >
          <FiSettings size={20} className="text-gray-500" />
          <span className="flex-1 mx-2 whitespace-nowrap">Toggle RTL</span>
        </span>
        <Link to="/">
          <span className="flex items-center p-4 text-base font-normal text-gray-900 rounded-lg">
            <BiLogOut size={20} className="text-gray-500" />
            <span className="flex-1 mx-2 whitespace-nowrap">Log out</span>
          </span>
        </Link>
      </nav>
    </aside>
  );
};

export default SliderNav;
