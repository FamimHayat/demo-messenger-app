import React from "react";
import { FiSearch } from "react-icons/fi";

const ChatPage = () => {
  return (
    <section className="px-2 border-r-2 border-b-4 border-[#4f4e4e] md:border-none">
      <div className="flex flex-col gap-2">
        <div className="relative">
          <input
            type="text"
            placeholder="search username"
            className="text-[25px] text-white placeholder-gray-400 pl-2 py-2 pr-10 bg-[#3f3e3e] rounded-full border-4 border-[#202020] outline-none focus:outline-none focus:ring-2 focus:ring-[#b6b5b5] w-full"
          />
          <FiSearch
            className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2   text-white cursor-pointer rounded-full hover:bg-[#181818]"
            size={40}
          />
        </div>
      </div>
    </section>
  );
};

export default ChatPage;
