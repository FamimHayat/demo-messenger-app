
import React from 'react'

const MyMassage = ({ message }) => {
  return (
    <div className="p-1 pr-2 pl-5 rounded-tl-3xl bg-[#3b71e5] ml-auto max-w-xs">
      <p className="text-white text-[16px]">{message}</p>
    </div>
  );
};

export default MyMassage