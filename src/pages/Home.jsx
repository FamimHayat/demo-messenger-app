import React from 'react'
import ChatPage from './ChatPage'
import ChatList from './ChatList'
import UserList from './UserList'

const Home = () => {



  

  return (
    <div className="w-full h-dvh grid grid-cols-1 md:grid-cols-2 gap-3 bg-[#202020] overflow-hidden">
      
      <ChatList />
      <UserList/>
      <ChatPage />
      
    </div>
  );
}

export default Home