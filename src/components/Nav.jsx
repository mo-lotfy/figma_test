import React from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

const Nav = ({ setIsNavOpen, setSearch, isNavOpen }) => {
  return (
    <nav className="bg-light-800 pt-2">
      <div className="mx-auto max-w-7xl px-2 sm:px-2 lg:pl-8">
        <div className="relative flex h-16 items-center justify-between mr-3">
          <div className="flex flex-1 items-center justify-start sm:items-start sm:justify-start ml-4">
            <div className="sm:ml-4 sm:block">
              <form className="flex-1">
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only ">
                  Search
                </label>
                <div className="relative flex">
                  <div className="flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 "
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    onChange={(e) => setSearch(e.target.value)}
                    className="block p-4 pl-6 w-full text-sm text-gray-900  bg-gray-50  rounded-lg  border-0 focus:ring-blue-500"
                    placeholder="Search or type"
                    required
                  />
                </div>
              </form>
            </div>
          </div>

          <div className="flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* <button
              type="button"
              className="rounded-full bg-light-800 p-1 text-gray-400 hover:text-gray focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="sr-only">View notifications</span>
            </button> */}
            <button type="button" class="inline-flex relative items-center p-3 text-sm font-medium text-center text-gray-400 ">
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                />
              </svg>
              <span class="sr-only">Notifications</span>
              <div class="inline-flex absolute top-3 right-3 justify-center items-center w-2 h-2 text-xs font-bold text-white bg-red-500 rounded-full border-1 "></div>
            </button>

            <div className="relative mx-2">
              <div>
                <button
                  type="button"
                  className="flex rounded-full bg-light-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span className="sr-only">Open user menu</span>

                  <img className="h-8 w-8 rounded-full" src="./svgs/user.svg" alt="" />
                </button>
              </div>
            </div>
            <div className="flex items-center xl:hidden">
              <button
                type="button"
                className="mr-2 inline-flex items-center justify-center rounded-md px-2 text-gray-400 hover:bg-gray hover:text-gray focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={() => setIsNavOpen(!isNavOpen)}
              >
                <HiOutlineMenuAlt1 size={25} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
