import React from 'react'
import ChatPage from './ChatPage'
import ChatList from './ChatList'

const Home = () => {
  return (
    <div className='w-full h-dvh grid grid-cols-2'>
      <ChatPage />
      <ChatList/>
    </div>
  )
}

export default Home