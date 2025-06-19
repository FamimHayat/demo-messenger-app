import React, { useState } from "react";
import { FaUserGroup } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { LuMessageCircleCode } from "react-icons/lu";
import { SlSettings } from "react-icons/sl";
import { Link } from "react-router";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <nav
      className="h-dvh w-full lg:w-fit border-r-2  pr-6"
      aria-label="Main Navigation"
    >
      <div
        className={`
          flex h-full px-3
          flex-col lg:flex-col
          lg:justify-start
          pt-5 lg:pt-0
        `}
      >
        {/* Top row: Brand logo and profile side-by-side on small screens */}
        <div className="flex items-center justify-between lg:flex-col lg:items-start">
          {/* Brand Logo */}
          <div className="py-3 text-4xl font-bold lg:w-[200px]">chat app</div>

          {/* Profile + toggle container */}
          <div className="flex items-center gap-3 lg:hidden">
            {/* Profile Section */}
            <div className="flex items-center gap-3">
              <img
                src="/profile-image.jpg"
                alt="users-image"
                className="w-15 h-15 rounded-full p-0.5 border border-gray-300"
              />
              <div className="flex flex-col gap-1">
                <h2 className="text-[19px] hidden md:block">user-name</h2>
                <Link
                  to="/userProfile"
                  className="flex  gap-2 items-center group"
                >
                  <p className=" text-stone-600 group-hover:underline group-hover:text-blue-900 cursor-pointer hidden md:block">
                    edit profile
                  </p>
                  <SlSettings className="flex md:hidden" />
                </Link>
              </div>
            </div>

            {/* Toggle button visible only below lg */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Collapse menu" : "Expand menu"}
              className="ml-4 flex items-center justify-center text-black text-3xl"
              type="button"
              style={{ userSelect: "none" }}
            >
              {menuOpen ? <HiChevronUp /> : <HiChevronDown />}
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <ul
          className={`
            flex flex-col gap-2 text-[28px] text-black mt-8 lg:mt-40 
            transition-all duration-300 overflow-hidden
            ${menuOpen ? "max-h-[500px]" : "max-h-0"}
            lg:max-h-full lg:flex-col lg:gap-4
          `}
        >
          <li className="flex justify-between items-center cursor-pointer border-2 border-white px-1 transition-all hover:underline hover:border-black">
            <Link to="/chatList" className="py-3">
              Chat List
            </Link>
            <LuMessageCircleCode className="text-[25px]" />
          </li>
          <li className="flex justify-between items-center cursor-pointer border-2 border-white px-1 transition-all hover:underline hover:border-black">
            <Link to="/groups" className="py-3">
              Groups
            </Link>
            <FaUserGroup className="text-[25px]" />
          </li>
          <li className="flex justify-between items-center cursor-pointer border-2 border-white px-1 transition-all hover:underline hover:border-black">
            <Link to="/friends" className="py-3">
              Friends
            </Link>
            <IoIosPeople className="text-[30px]" />
          </li>
        </ul>

        {/* Profile section below menu on lg and above */}
        <div className="hidden lg:flex mt-auto flex gap-2 mb-5 items-center">
          <img
            src="/profile-image.jpg"
            alt="users-image"
            className="w-15 h-15 rounded-full p-0.5 border border-gray-300"
          />
          <div className="flex flex-col gap-2">
            <h2 className="text-[19px]">user-name</h2>
            <Link to="/userProfile" className="flex gap-3 items-center group">
              <p className="text-stone-600 group-hover:underline group-hover:text-blue-900 cursor-pointer">
                edit profile
              </p>
              <SlSettings className="flex md:hidden" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
