import React, { useState } from "react";
import { LuPenLine } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, updateProfile } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify"
import { loggedUser } from "../reduxStore/slices/authSlices"

const MyProfile = () => {
  const auth = getAuth();
  const reduxData = useSelector((state) => state.userData.userInfo);
  const dispatch = useDispatch()
  const [editable, setEditable] = useState(false);
  const [userData, setUserData] = useState();


  const handleUpdate = () => {
     console.log(userData);
     
     updateProfile(auth.currentUser, {
       displayName: userData,
       photoURL: "https://example.com/jane-q-user/profile.jpg",
     })
     .then(() => {
       toast.success("profile update successfully..!")
        dispatch(loggedUser(auth.currentUser))
       setTimeout(() => {
         
        setEditable(false)
       }, 1000);
       })
       .catch((error) => {
         // An error occurred
         // ...
       });
  }

  return (
    <section className="h-dvh w-full flex justify-center items-center">
      <div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
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

            <div className="flex gap-2 items-center ">
              <p className="mt-5 mb-0 font-semibold text-4xl px-5  cursor-pointer ">
                {reduxData.displayName}
              </p>
              <button
                onClick={() => setEditable(true)}
                className="cursor-pointer mt-5 p-1  rounded-md hover:bg-blue-600  hover:text-white active:bg-black"
              >
                <LuPenLine className="text-2xl " />
              </button>
            </div>
            {editable && (
              <div>
                <div className="flex gap-3 items-center ">
                  <input
                    type="text"
                    placeholder="your name"
                    onChange={(e) => {
                      setUserData(e.target.value);
                    }}
                    className="mt-5 border-b custom-inset-shadow bg-gray-900 py-2 px-1 font-semibold tracking-wider text-xl"
                  />
                  <button
                    onClick={() => setEditable(false)}
                    className="text-2xl cursor-pointer mt-5 border px-2 bg-red-500 hover:bg-red-600  hover:text-white"
                  >
                    X
                  </button>
                </div>
                <button
                  onClick={handleUpdate}
                  className="p-2 mt-5 bg-green-500 rounded-md hover:bg-green-600 cursor-pointer"
                >
                  update
                </button>
              </div>
            )}
            <p className="block font-light  underline pt-8 text-2xl">
              my-profile
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProfile;
