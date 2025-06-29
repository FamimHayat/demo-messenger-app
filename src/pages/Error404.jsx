import React from 'react'
import { FaArrowLeft } from 'react-icons/fa6'
import { Link } from 'react-router'

const Error404 = () => {
  return (
    <section className="h-dvh">
      <Link to="/" className="p-10">
        <FaArrowLeft className="text-[60px] absolute rounded-full hover:bg-gray-500   hover:text-white" />
      </Link>
      <div className="h-full flex justify-center items-center">
        <h1 className="text-[45px] text-black font-semibold ">
          <span className="inline-block underline">404</span> not found
        </h1>
      </div>
    </section>
  );
}

export default Error404