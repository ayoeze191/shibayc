import React from 'react'
import { BsFillHouseFill, BsCalendar3Fill } from "react-icons/bs";
// import IoSwapVerticalOutline from
import { MdOutlineSwapHoriz } from 'react-icons/md';
import {BiRecycle, BiListUl} from 'react-icons/bi'
import GiTrumpet from "react-icons/gi"

import { FaUserFriends } from 'react-icons/fa';
import { BsFillMegaphoneFill, BsStars, BsFillGridFill } from 'react-icons/bs'
import { IconContext } from 'react-icons';

// import friends from "./../../Assets/friends.png"
import download from "./../../Assets/download.png"
import { NavLink } from 'react-router-dom';

const SideBar = (props) => {
  return (
    <div className={props.navstatus?' font-poppins-Regular md:top-0 md:h-[fit] h-[90vh] top-[10vh] px-3 lg:px-0 text-white md:w-[15rem] overflow-hidden transit fixed z-50 md:relative translate-x-0 left-0 shadow-2xl':'px-3 lg:px-0 text-white md:w-[3.9rem] overflow-hidden transit fixed md:relative -translate-x-[1200px] md:translate-x-0 h-screen shadow-2xl'}>
        <div className='w-full flex flex-col h-full justify-between py-5'>
        <div className='flex gap-4 w-full hover:bg-Navy-Torea-Bay cursor-pointer rounded-lg  px-4 items-center '>
            <div>
        <BsFillHouseFill color='silver' fontSize='1.9rem'/>
        </div>
        <p><a href = 'https://cashino.finance/'> Homepage</a></p>
        </div>
        
        <NavLink to='/'>
        <div className='flex gap-4 hover:bg-Navy-Torea-Bay cursor-pointer rounded-md px-4 items-center'>
            <div>
            <FaUserFriends color='silver' fontSize='1.9rem'/>

            </div>
            <p>Dashboard</p>
        </div>
        </NavLink>
        
        <NavLink to = '/portfolio-tracker'>
        <div className='flex gap-4 w-full hover:bg-Navy-Torea-Bay cursor-pointer rounded-md px-4 items-center'>
        <div className='w-[1.9rem] h-[1.9rem]'>
            {/* <img src={friends} className = 'w-full h-full'/> */}
            
            <BsCalendar3Fill color='silver' fontSize='1.9rem'/>
        </div>
        <p>Portfolio Tracker</p>
        </div>
        </NavLink>
        <div className='flex  gap-4 hover:bg-Navy-Torea-Bay cursor-pointer rounded-md  px-4 items-center'>
        <div className='w-[1.9rem] h-[1.9rem]'>
        <MdOutlineSwapHoriz color='silver' fontSize='1.9rem'/>
        </div>
        <p>Swap</p>
        </div>
        <NavLink to='/token'><div className='flex gap-4 hover:bg-Navy-Torea-Bay cursor-pointer rounded-md px-4 items-center'>
        <div className='w-[1.9rem] h-[1.9rem]'>
        <BsFillMegaphoneFill color='silver' fontSize='1.9rem'/>
        </div>
        <p   >Rug Checker</p>
        </div>
        </NavLink>

        <NavLink to='/watch-list'>
        <div className='flex gap-4 hover:bg-Navy-Torea-Bay cursor-pointer rounded-md px-4 items-center'>
        <div className='w-[1.9rem] h-[1.9rem]'>
        <BsStars color='silver' fontSize='1.9rem'/>
        </div>
        <p>Watchlist</p>
        </div>
        </NavLink>


        <NavLink to='/multichart'>
        <div className='flex gap-4 hover:bg-Navy-Torea-Bay cursor-pointer rounded-md  px-4 items-center'>
        <div className='w-[1.9rem] h-[1.9rem]'>
        <BsFillGridFill color='silver' fontSize='1.9rem'/>
        </div>
        <p   >MultiChart</p>
        </div>
        </NavLink>

        <div className='flex gap-4 hover:bg-Navy-Torea-Bay cursor-pointer rounded-md px-4 items-center'>
        <div className='w-[1.9rem] h-[1.9rem]'>
        <BiRecycle color='silver' fontSize='1.9rem'/>
        </div>
        <p   >Buy Crpto</p>
        </div>

        <div className='flex gap-4 hover:bg-Navy-Torea-Bay cursor-pointer rounded-md px-4 items-center'>
        <div className='w-[1.9rem] h-[1.9rem] bg-silver rounded-sm'>
        <BiListUl color='white' fontSize='1.9rem'/>
        </div>
        <p   >New Contract</p>
        </div>
        </div>
    </div>
  )
}

export default SideBar