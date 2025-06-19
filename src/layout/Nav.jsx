
import React from 'react'
import { FaMessage, FaUserGroup } from 'react-icons/fa6'
import { IoIosPeople } from 'react-icons/io'
import { LuMessageCircleCode } from 'react-icons/lu'
import { SlSettings } from 'react-icons/sl'
import { Link } from 'react-router'

const Nav = () => {
    return (
        <nav className='h-dvh w-fit border-r-2 pr-6' aria-label="Main Navigation">
            <div className='flex flex-col h-full px-3'>
                <div className='py-3 w-full lg:w-[200px] text-4xl  font-bold'>brand logo</div>
                <ul className='flex flex-col gap-2 mt-52 text-[28px] text-black'>
                    <li className='flex justify-between items-center cursor-pointer border-2 border-white px-1 transiton-all hover:underline  hover:border-black'><Link to="/chatList" className="py-3">Chat List</Link> <LuMessageCircleCode className='text-[25px]' /> </li>
                    <li className='flex justify-between items-center cursor-pointer border-2 border-white px-1 transiton-all hover:underline  hover:border-black'><Link to="/groups" className="py-3">Groups</Link> <FaUserGroup className='text-[25px]' /></li>
                    <li className='flex justify-between items-center cursor-pointer border-2 border-white px-1 transiton-all hover:underline  hover:border-black'><Link to="/friends" className="py-3">Friends</Link> <IoIosPeople className='text-[30px]' /></li>
                </ul>
                <div className='mt-auto flex gap-2 mb-5'>
                    <img src="/profile-image.jpg" alt="users-image" className='w-15 rounded-full p-0.5 border-1' />
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-[19px]'>user-name</h2>
                        <Link to="/userProfile" className='flex gap-3 items-center group'>
                            <p className='text-stone-600 group-hover:underline group-hover:text-blue-900 cursor-pointer'>edit profile</p>
                            <SlSettings />
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav