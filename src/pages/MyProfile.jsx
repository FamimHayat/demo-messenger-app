import React from "react";
import { useSelector } from "react-redux";

const MyProfile = () => {
  const reduxData = useSelector((state) => state.userData.userInfo);

  return (
    <section className="h-dvh w-full flex justify-center items-center">
      <div className="flex justify-center">
        <div
          className="
          bg-[#000000d2] 
          
          py-6 
          px-5
          border-4 
          shadow-[0_6px_10px_rgba(207,212,222,1)]
          border-[#000000d2] 
          rounded-lg
          text-center
          text-white
          font-poppins
          transition-transform
          hover:-translate-y-2.5
          "
        >
          <div className="card-client">
            <div
              className="
              overflow-hidden 
              object-cover 
              w-40 
              h-40 
              border-4 
              border-[#000000d2] 
              rounded-full 
              flex 
              justify-center 
              items-center 
              mx-auto
              cursor-pointer
              "
            >
              <div>
                <img src="/profile-image.jpg" alt="" />
              </div>
            </div>

            <p className="mt-5 mb-0 font-semibold text-4xl px-5  cursor-pointer">
              {reduxData.displayName}
              <span className="block font-light text-base pt-8">
                CEO of WritBook
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProfile;
