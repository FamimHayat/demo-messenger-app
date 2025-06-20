import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <div className=" flex gap-2 py-2 border-b-2 border-[#4f4e4e] group">
      <div className="w-full relative">
        <input
          type="text"
          placeholder="search username"
          className="text-[25px] text-white placeholder-gray-400 pl-2 py-2 pr-10 bg-[#3f3e3e] rounded-full border-4 border-[#202020] outline-none focus:outline-none focus:ring-2 focus:ring-[#b6b5b5] w-full"
        />
        <FiSearch
          className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2   text-white cursor-pointer rounded-full hover:bg-[#181818] active:bg-[#767676]"
          size={40}
        />
      </div>
      <div className="flex items-center w-fit justify-center  cursor-pointer rounded-full group active:bg-[#767676]">
        <h2 className="text-[25px] hidden sm:flex md:hidden lg:flex text-white px-3  group-hover:text-[#80c3dd]">
          add
        </h2>
        <FaPlus className="text-[30px] pr-3 text-white  group-hover:text-[#80c3dd]" />
      </div>
    </div>
  );
}

export default SearchBar