import React, { useEffect, useState } from 'react'
import { FaPlus } from 'react-icons/fa6';

import { getDatabase, onValue, ref } from 'firebase/database';
import { useSelector } from 'react-redux';



const AddList = () => {
  const db = getDatabase()
  const [userList, setUserList] = useState([])
  const userInfo = useSelector(state=> state.userData.userInfo)

  


  return (
    <section className="px-2 border-4 rounded-t-2xl md:rounded-l-2xl bg-[#202020] border-[#4f4e4e]">
      <div className='p-3'>
        
        

      </div>
    </section>
  );
}

export default AddList