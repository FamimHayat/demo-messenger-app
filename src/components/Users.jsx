import React, { useEffect, useState } from "react";
import { getDatabase, push, ref, set, onValue } from "firebase/database";
import { useSelector } from "react-redux";

const Users = ({ data }) => {
  const db = getDatabase();
  const reduxData = useSelector((state) => state.userData.userInfo);
  const [friendList, setFriendList] = useState([]);

  const handleSubmit = () => {
    set(push(ref(db, "friendList/")), {
      //creator data
      creatorUsername: reduxData.displayName,
      creatorEmail: reduxData.email,
      creatorProfile_picture: reduxData.photoURL,
      creatorId: reduxData.uid,
      //participant data
      participantUsername: data.username,
      participantEmail: data.email,
      participantProfile_picture: data.profile_picture,
      participantId: data.id,
    });
  };

  useEffect(() => {
    onValue(ref(db, "friendList/"), (snapshot) => {
      let arr = [];
      snapshot.forEach((items) => {
        arr.push(items.val().creatorId + items.val().participantId);
      });
      setFriendList(arr);
    });
  }, []);

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
          {friendList.includes(reduxData.uid + data.id) ||
          friendList.includes(data.id + reduxData.uid) ? (
            <p className="text-lg font-semibold text-green-500 border-2 p-2">friends </p>
          ) : (
            <button
              onClick={handleSubmit}
              className="bg-green-500 px-5 py-2 text-xl text-white transition-all rounded-lg hover:bg-green-600 cursor-pointer"
            >
              add
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Users;
