import React from "react";

const FriendMassage = ({ message }) => {
  return (
    <div className="p-1 pl-2 pr-5 rounded-tr-3xl  bg-[#3b3a3a] max-w-xs">
      <p className="text-white text-[16px]">{message}</p>
    </div>
  );
};

export default FriendMassage;
