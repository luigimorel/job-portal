import React from "react";

import Navbar from "./navbar";

export const Hero = () => {
  // Function to toggle header menu in mobile view.
  function toggleMenu(flag: any) {
    let value = document.getElementById("menu");
    if (flag) {
      value?.classList.remove("hidden");
    } else {
      value?.classList.add("hidden");
    }
  }

  return (
    <div>
      <Navbar />
      <div className=" ">
        <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
          <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 dark:text-gray-50 font-black leading-7 md:leading-10">
              The Freedom to Work {"  "}
              <span className="text-indigo-700 dark:text-indigo-200">
                Anywhere {"  "}
              </span>
              You Want
            </h1>
            <p className="mt-5 sm:mt-10 text-white lg:w-10/12  font-normal text-center text-sm sm:text-lg">
              Find a remote job in a startup based in Africa
            </p>
          </div>
          <div className="flex bg-purple-200 justify-center items-center  py-5 px-4">
            <form action="" className=" flex flex-row">
              <div className="relative text-gray-600 focus-within:text-gray-400 mr-4">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <button
                    type="submit"
                    className="p-1 focus:outline-none focus:shadow-outline"
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      className="w-6 h-6"
                    >
                      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </span>
                <input
                  type="search"
                  name="q"
                  className="py-5 text-base text-white border dark:bg-gray-100 dark:text-gray-800  pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
                  placeholder="Job title"
                />
              </div>

              {/*
				<!-- Start of city or location  -->
				<!-- <div className="relative text-gray-600 focus-within:text-gray-400 mr-4">
					<span className="absolute inset-y-0 left-0 flex items-center pl-2">
						<button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
							<svg
								fill="none"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								viewBox="0 0 24 24"
								className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg
							>
						</button>
					</span>
					<input
						type="search"
						name="q"
						className="py-5 text-base border text-white  pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
						placeholder="Location or remote"
						autoComplete
					/>
				</div> --> */}

              <button
                id="dropdownDividerButton"
                data-dropdown-toggle="dropdownDivider"
                className="text-white relative mr-4 bg-purple-600 focus:outline-none font-medium border text-sm px-4 py-2.5 text-center inline-flex items-center "
                type="button"
              >
                Country
                <svg
                  className="ml-2 w-4 h-4"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                id="dropdownDivider"
                className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  className="py-1 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDividerButton"
                >
                  <li>
                    <a
                      href="https://"
                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://"
                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://"
                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Earnings
                    </a>
                  </li>
                </ul>
                <div className="py-1">
                  <a
                    href="https://"
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Separated link
                  </a>
                </div>
              </div>

              <button className=" bg-purple-700 border text-white py-5 px-5">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
