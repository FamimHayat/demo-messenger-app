import React from 'react'
import ChatPage from './ChatPage'
import ChatList from './ChatList'

const Home = () => {
  return (
    <div className="w-full h-dvh grid grid-cols-1 md:grid-cols-3 gap-3 bg-[#202020]">
      
      <ChatList />
        <ChatPage />
      
    </div>
  );
}

export default Home