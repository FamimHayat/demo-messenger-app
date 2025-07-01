import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import { Link, Navigate, useNavigate } from "react-router";
import { useSelector } from "react-redux"


const SignUp = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const reduxData = useSelector((state) => state.userData.userInfo);
 

  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  
  const handleSignUp = () => {
    console.log(userData);
    createUserWithEmailAndPassword(auth, userData.email, userData.password)
    .then((userCredential) => {
      updateProfile(auth.currentUser, {
        displayName: userData.fullName,
        photoURL: "/profile-image.jpg",
      })
      .then(() => {
        sendEmailVerification(auth.currentUser).then(() => {
          // Email verification sent!
          // ...
          toast.success(" registration successful..!!!");
      
         
          setTimeout(() => {
            navigate("/signIn");
          }, 1500);
        });
      })
      .catch((error) => {});
    })
    .catch((error) => {
      if (error.code === "auth/missing-email") {
        toast.error("enter your email account..!");
      }
      
      if (error.code === "auth/invalid-email") {
        toast.error("enter a valid email account..!");
      }
      
      if (error.code === "auth/weak-password") {
        toast.error("make a strong password ..!");
      }
      
      if (error.code === "auth/missing-password") {
        toast.error("make a password..!");
      }
      if (error.code === "auth/invalid-email") {
        toast.error("make a password..!");
      }
      
      console.log(error);
    });
  };

  if (reduxData) {
    return <Navigate to="/" />;
  }


  return (
    <div className="min-h-screen w-full bg-[#202020] flex items-center justify-center p-4">
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
      <form
        className="bg-white w-full max-w-md px-8 py-12 rounded-2xl shadow-xl flex flex-col gap-6"
        onSubmit={(e) => e.preventDefault()}
        autoComplete="off"
      >
        <h1 className="text-center text-3xl text-[#0b0b0b] font-bold">
          Create account
        </h1>

        <div className="relative mb-8 group">
          <input
            type="text"
            name="username"
            id="username"
            required
            onChange={(e) => {
              setUserData((prev) => ({ ...prev, fullName: e.target.value }));
            }}
            className="w-full text-lg px-1 pt-4 pb-1 border-b-2 border-gray-300 focus:outline-none focus:border-[#0b0b0b] peer"
          />
          <label
            htmlFor="username"
            className="absolute left-1 top-1/2 transform -translate-y-1/2 text-lg text-gray-400 transition-all peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#0b0b0b] peer-valid:top-0 peer-valid:text-sm peer-valid:text-[#0b0b0b] bg-white px-1"
          >
            Username
          </label>
          <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-[#0b0b0b] group-hover:w-full transition-all duration-300 ease-in-out transform -translate-x-1/2"></span>
        </div>

        <div className="relative mb-8 group">
          <input
            type="text"
            name="email"
            id="email"
            required
            onChange={(e) => {
              setUserData((prev) => ({ ...prev, email: e.target.value }));
            }}
            className="w-full text-lg px-1 pt-4 pb-1 border-b-2 border-gray-300 focus:outline-none focus:border-[#0b0b0b] peer"
          />
          <label
            htmlFor="email"
            className="absolute left-1 top-1/2 transform -translate-y-1/2 text-lg text-gray-400 transition-all peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#0b0b0b] peer-valid:top-0 peer-valid:text-sm peer-valid:text-[#0b0b0b] bg-white px-1"
          >
            Email
          </label>
          <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-[#0b0b0b] group-hover:w-full transition-all duration-300 ease-in-out transform -translate-x-1/2"></span>
        </div>

        <div className="relative mb-8 group">
          <input
            type="password"
            name="password"
            id="password"
            required
            onChange={(e) => {
              setUserData((prev) => ({ ...prev, password: e.target.value }));
            }}
            className="w-full text-lg px-1 pt-4 pb-1 border-b-2 border-gray-300 focus:outline-none focus:border-[#0b0b0b] peer"
          />
          <label
            htmlFor="password"
            className="absolute left-1 top-1/2 transform -translate-y-1/2 text-lg text-gray-400 transition-all peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#0b0b0b] peer-valid:top-0 peer-valid:text-sm peer-valid:text-[#0b0b0b] bg-white px-1"
          >
            Password
          </label>
          <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-[#0b0b0b] group-hover:w-full transition-all duration-300 ease-in-out transform -translate-x-1/2"></span>
        </div>
        <Link to="/SignIn">
          <p className="text-center ">
            already have an account{" "}
            <span className="text-2xl underline hover:text-blue-600 pl-2">
              Sign-In
            </span>
          </p>
        </Link>
        <button
          type="submit"
          className="bg-[#201f1f] text-white py-3 rounded-full text-lg flex  justify-center items-center gap-3 cursor-pointer hover:bg-[#3a3c66] transition"
        >
          Sign up with Google <FcGoogle className="text-[30px]" />
        </button>

        <button
          type="submit"
          className="bg-[#292727] text-white py-3 rounded-full text-lg cursor-pointer hover:bg-[#0b0b0b] transition active:bg-[#f3f2f2]"
          onClick={handleSignUp}
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
