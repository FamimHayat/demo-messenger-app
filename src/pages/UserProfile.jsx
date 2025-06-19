import React from 'react';

const UserProfile = () => {
    return (
        <section className='lg:h-dvh w-full flex justify-center items-center'>
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
              w-70 
              h-70 
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
                           <div><img src="/profile-image.jpg" alt="" /></div>
                        </div>

                        <p className="mt-5 mb-0 font-semibold text-lg cursor-pointer" >
                            Jhon Doe
                            <span className="block font-light text-base">CEO of WritBook</span>
                        </p>


                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserProfile;

