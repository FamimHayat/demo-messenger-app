import React from "react";

const Users = ({ data }) => {



  const handleSubmit = () => {
    
    
  }


  return (
    <div className="py-2  w-[300px] md:w-[350px] flex gap-3 lg:gap-5 cursor-pointer  ">
      <div className="w-fit">
        <div className="h-18 w-18">
          <img
            src="/user-image.jpg"
            alt="user's-image"
            className="h-18 w-18 rounded-full p-1 border-3 border-white"
          />
        </div>
      </div>
      <div className="flex w-full justify-between ">
        <div className="flex flex-col w-[150px]  justify-center overflow-hidden">
          <h2 className="text-[22px] text-white ">{data.username}</h2>
        </div>
        <div className="my-auto">
          <button onClick={handleSubmit} className="bg-green-500 px-5 py-2 text-xl text-white transition-all rounded-lg hover:bg-green-600 cursor-pointer">
            add
          </button>
        </div>
      </div>
    </div>
  );
};


export default Users;
