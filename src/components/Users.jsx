import React from "react";

const Users = ({ data }) => {


  return (
    <div className="py-2 w-[280px] flex gap-3 lg:gap-5 cursor-pointer group hover:bg-[#343434]">
      <div className="w-fit">
        <div className="h-18 w-23">
          <img
            src="/user-image.jpg"
            alt="user's-image"
            className="h-18 w-18 rounded-full p-1 border-3 border-white"
          />
        </div>
      </div>
      <div className="flex w-full justify-between">
        <div className="flex flex-col justify-center">
          <h2 className="text-[22px] text-white">{data.username}</h2>
        </div>
      </div>
    </div>
  );
};


export default Users;
