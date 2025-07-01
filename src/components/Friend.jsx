import React from "react";

const Friend = () => {
  return (
    <div className="py-2 px-1  flex gap-3 lg:gap-5 cursor-pointer group hover:bg-[#343434] ">
      <div className=" h-18 w-23">
        <img
          src="/user-image.jpg"
          alt="user's-image"
          className="h-18 w-18 rounded-full p-1 border-3 border-white "
        />
      </div>
      <div className="flex w-full justify-between">
        <div className="flex flex-col justify-between">
          <h2 className="text-[22px] text-white">elias bhuiyan</h2>
          <p className="text-md text-[#c4c4c4]"> sir hw hoise..?</p>
        </div>
        <div>
          <h3 className="text-[22px] text-[#efefef]">time</h3>
        </div>
      </div>
    </div>
  );
};

export default Friend;
