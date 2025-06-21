import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// sign-up page authentication
// sign-up page authentication
// sign-up page authentication

const SignUp = () => {
  const auth = getAuth();

  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleSignUp = () => {
    console.log(userData);
    createUserWithEmailAndPassword(auth, userData.email, userData.password)
      .then((userCredential) => {
        // const user = userCredential.user;
        console.log(userCredential);
        
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        console.log(error);
        
      });
  };

  return (
    <div className="min-h-screen w-full bg-[#202020] flex items-center justify-center p-4">
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
        <h2 className="text-center text-lg text-gray-600">
          Already have an account?{" "}
          <span className="underline text-[#0b0b0b] p-1 cursor-pointer transition-all hover:bg-black hover:text-white">
            Sign in
          </span>
        </h2>
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
