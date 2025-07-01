import React from "react";

const Users = () => {
  return (
    <div className="py-2 px-3  flex gap-3 lg:gap-5  group hover:bg-[#343434] overflow">
      <div className="py-1">
        <div className=" w-15 h-15">
          <div className="h-full border-2 rounded-full border-transparent outline-2 outline-white"></div>
        </div>
      </div>
      <div className="flex items-center w-full justify-between">
        <div className="flex flex-col justify-between">
          <h2 className="text-[22px] text-white">username</h2>
        </div>
        <div className="my-auto p-2">
          <button className="text-white cursor-pointer bg-green-600 rounded-lg transition-all  px-5 py-2 hover:underline hover:scale-110 hover:bg-green-700 ">
            add <span className="pl-2">+</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Users;
