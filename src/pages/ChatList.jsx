import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { useSelector } from "react-redux";
import SearchBar from "../components/SearchBar";
import Friend from "../components/Friend";

const ChatList = () => {
  const db = getDatabase();
  const reduxData = useSelector((state) => state.userData.userInfo);
  const [friendList, setFriendList] = useState([]);

  useEffect(() => {
    onValue(ref(db, "friendList/"), (snapshot) => {
      let arr = [];
      snapshot.forEach((items) => {
        arr.push({ ...items.val(), id: items.key });
      });
      setFriendList(arr);
    });
  }, []);

  return (
    <section className="px-3 border-r-2 border-b-4 border-[#4f4e4e] md:border-none">
      <div className="flex flex-col gap-2">
        <SearchBar />
      </div>
      <div className="overflow-y-auto chatList-custom-height flex flex-col gap-1">
        {friendList.map((item) =>
          item.creatorId == reduxData.uid ? (
            <Friend key={item.id} name={item.participantUsername} />
          ) : (
            <Friend key={item.id} name={item.creatorUsername} />
          )
        )}
      </div>
    </section>
  );
};

export default ChatList;
