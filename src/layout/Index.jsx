import React from 'react'
import Nav from './Nav'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <div className='flex flex-col lg:flex-row'>
    <Nav/>
    <Outlet/>
    </div>
  )
}

export default Layout