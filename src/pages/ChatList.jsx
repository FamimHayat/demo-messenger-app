import React from "react";

import SearchBar from "../components/SearchBar"
import Users from "../components/Users"

const ChatList = () => {
  return (
    <section className="px-3  border-r-2 border-b-4 border-[#4f4e4e] md:border-none ">
      <div className=" flex flex-col gap-2">
        <SearchBar />
      </div>
      <div className="overflow-y-auto chatList-custom-height flex flex-col gap-1  ">
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
      </div>
    </section>
  );
};

export default ChatList;
