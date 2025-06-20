import React from "react";

const FriendMassage = ({ message }) => {
  return (
    <div className="p-1 pr-5 rounded-tr-4xl  bg-[#3b3a3a] max-w-xs">
      <p className="text-white text-[16px]">{message}</p>
    </div>
  );
};

export default FriendMassage;
