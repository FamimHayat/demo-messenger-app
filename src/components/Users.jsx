import React from "react";

const Users = () => {
  return (
    <div className="py-2 px-1  flex gap-3 lg:gap-5 cursor-pointer group hover:bg-[#343434] ">
      <div className=" h-18 w-23">
       
      </div>
      <div className="flex w-full justify-between">
        <div className="flex flex-col justify-between">
          <h2 className="text-[22px] text-white">username</h2>
          
        </div>
        <div>
           <button>add <span className="pl-2">+</span></button>
        </div>
      </div>
    </div>
  );
};

export default Users;
