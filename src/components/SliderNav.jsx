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
        isNavOpen ? "flex flex-col" : "hidden md:flex md:flex-col"
      } bg-white w-full md:w-64 z-50 space-y-6 pt-6 px-0 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out md:justify-between overflow-y-auto`}
      data-dev-hint="sidebar; px-0 for frameless; px-2 for visually inset the navigation"
    >
      <div className="flex flex-col space-y-6" data-dev-hint="optional div for having an extra footer navigation">
        <a href="/#" className="text-gray flex items-center flex-row justify-between space-x-2 px-4" title="Motiv.">
          <span className="text-gray flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>
            <span className="text-2xl font-extrabold whitespace-nowrap truncate">Motiv.</span>
          </span>
          {/* <div className="absolute inset-y-0 left-0 flex items-center md:hidden"> */}
          <button
            className={`visible md:invisible inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray hover:text-gray focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`}
            type="button"
            aria-controls="mobile-menu"
            aria-expanded="false"
            onClick={() => setIsNavOpen(false)}
          >
            <GrClose size={25} />
          </button>
          {/* </div> */}
        </a>
        <nav data-dev-hint="main navigation space-y-2">
          <Link to="/">
            <span className="flex items-center p-4 text-base font-normal text-gray-900 rounded-lg dark:text-gray hover:bg-gray-100 dark:hover:bg-gray">
              <MdOutlineDashboard size={20} className="text-gray-500" />
              <span className="flex-1 mx-2 whitespace-nowrap">Dashboard</span>
            </span>
          </Link>
          <Link to="/cars">
            <span className="flex items-center p-4 text-base font-normal text-gray-900 rounded-lg dark:text-gray hover:bg-gray-100 dark:hover:bg-gray">
              <FaCarAlt size={20} className="text-gray-500" />
              <span className="flex-1 mx-2 whitespace-nowrap">Cars</span>
            </span>
          </Link>
        </nav>
      </div>
      <nav data-dev-hint="second-main-navigation or footer navigation">
        <span
          onClick={() => setDir(dir === "rtl" ? "ltr" : "rtl")}
          className="flex items-center p-4 text-base font-normal text-gray-900 rounded-lg dark:text-gray hover:bg-gray-100 dark:hover:bg-gray"
        >
          <FiSettings size={20} className="text-gray-500" />
          <span className="flex-1 mx-2 whitespace-nowrap">Toggle RTL</span>
        </span>
        <Link to="/">
          <span className="flex items-center p-4 text-base font-normal text-gray-900 rounded-lg dark:text-gray hover:bg-gray-100 dark:hover:bg-gray">
            <BiLogOut size={20} className="text-gray-500" />
            <span className="flex-1 mx-2 whitespace-nowrap">Log out</span>
          </span>
        </Link>
      </nav>
    </aside>
  );
};

export default SliderNav;
