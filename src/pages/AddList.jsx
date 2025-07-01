import React, { useEffect, useState } from "react";

import Users from "../components/Users";
import { getDatabase, ref, onValue } from "firebase/database";
import { useSelector } from "react-redux"

const AddList = ({ handleClose }) => {
  const db = getDatabase();

  const [userList, setUserList] = useState([]);
 
  const reduxData = useSelector((state) => state.userData.userInfo);


    console.log(reduxData);
  

  useEffect(() => {
    onValue(ref(db, "usersList/"), (snapshot) => {
      let arr = [];
      snapshot.forEach((items) => {
        console.log(items.key);
        
        
        if (items.key !== reduxData.uid) {
          arr.push({ ...items.val(), id: items.key });
        }
      });
      setUserList(arr);
    });
  }, []);

  return (
    <section className="absolute top-[0%] left-0 bg-[#000000bb] w-full h-dvh">
      <div className="absolute top-[10%] left-[40%] w-[400px] cursor-pointer h-150 px-1 border-4 rounded-2xl md:rounded-l-2xl bg-[#202020] border-[#4f4e4e]">
        <div
          onClick={handleClose}
          className="bg-red-500 w-full py-2 my-2 cursor-pointer active:bg-red-700"
        >
          <button className="w-full mx-auto text-white text-2xl cursor-pointer">
            back
          </button>
        </div>
        <div className="p-3">
          <div>
            {userList.map((items) => (
              <Users key={items.id} data={items} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddList;
