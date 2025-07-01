import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import AddList from "../pages/AddList";

const SearchBar = () => {
  const [addButton, setAddButton] = useState(false);

  const handleToggle = () => setAddButton((prev) => !prev);
  const handleCloseAddList = () => setAddButton(false);

  return (
    <div className="flex gap-2 py-2 border-b-2 border-[#4f4e4e] group">
      <div className="w-full relative">
        <input
          type="text"
          placeholder="search username"
          className="text-[20px] text-white custom-inset-shadow py-2 placeholder:text-2xl placeholder-stone-400 pl-3  bg-[#3f3e3e] rounded-full border-4 border-[#202020] outline-none focus:outline-none focus:ring-2 focus:ring-[#b6b5b5] w-full"
        />
        <FiSearch
          className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 text-white cursor-pointer rounded-full hover:bg-[#181818] active:bg-[#767676]"
          size={40}
        />
      </div>
      <div
        onClick={handleToggle}
        className="flex items-center border-2 border-white rounded-2xl  w-fit justify-center group"
      >
        <button className="text-[25px] hidden  sm:flex md:hidden cursor-pointer lg:flex text-white px-3 group-hover:text-[#80c3dd] group-active:text-white">
          add
        </button>
        <FaPlus className="text-[30px] pr-3 text-white group-hover:text-[#80c3dd] group-active:text-white" />
      </div>

      {addButton && <AddList handleClose={handleCloseAddList} />}
    </div>
  );
};

export default SearchBar;
