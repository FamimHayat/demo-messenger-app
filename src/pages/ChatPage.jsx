import React from "react";
import { FaPlus } from "react-icons/fa6"
import { FiSearch } from "react-icons/fi";
import Users from "../components/Users"
import { SlSettings } from "react-icons/sl"
import { Link } from "react-router"
import MyMassage from "../components/MyMassage"
import FriendMassage from "../components/FriendMassage"

const ChatPage = () => {
  return (
    <>
      <section className="px-2 border-4 rounded-t-2xl md:rounded-l-2xl bg-[#202020] border-[#4f4e4e]">
        <div className="flex flex-col p-2 pb-0">
          <div className="w-full flex gap-3 items-center border-b-2 pb-2 border-[#4f4e4e]">
            <img
              src="/profile-image.jpg"
              alt="my-image"
              className="w-15 rounded-full"
            />
            <div>
              <h2 className="text-2xl text-white underline">user-name</h2>
            </div>
            <Link to="/myProfile" className="">
              <SlSettings className="flex p-3 text-[45px] text-white hover:text-[#80c3dd]" />
            </Link>
          </div>
          <div className="overflow-y-auto text-white h-[calc(100dvh-170px)] flex flex-col gap-1  ">
            <FriendMassage className/>
            <MyMassage/>
          </div>
          <div>
           
          </div>
        </div>
      </section>
    </>
  );
};

export default ChatPage;
