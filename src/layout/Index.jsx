import React from 'react'
import Nav from './Nav'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <div className='flex gap-5'>
    <Nav/>
    <Outlet/>
    </div>
  )
}

export default Layout