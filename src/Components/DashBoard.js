import React from 'react'
import { BsFillHouseFill, BsCalendar3Fill } from "react-icons/bs";

// import IoSwapVerticalOutline from
import { MdOutlineSwapHoriz } from 'react-icons/md';
import {BiRecycle, BiListUl} from 'react-icons/bi'
import GiTrumpet from "react-icons/gi"

import { FaUserFriends } from 'react-icons/fa';
import { BsFillMegaphoneFill, BsStars, BsFillGridFill } from 'react-icons/bs'
import { IconContext } from 'react-icons';
const DashBoard = () => {
  return (
    <div className="w-full  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-items-between items-between gap-12 box-border px-4">
        <div className="bg-Navy-Torea-Bay shadow-sm py-4 px-5 text-white flex flex-col">
            <div className='mb-4 text-2xl font-bold flex justify-between'>
                <h1>Portfolio Tracker</h1> <div><BsCalendar3Fill color='silver' fontSize='1.9rem'/></div>
            </div>
            <p className='mb-6'>
                Portfolio Tracker lets you track your ETH wallets by entering your wallet address for free
            </p>
            <div className='flex px-8 '>
                <button className='bg-silver flex-1 py-4'>Track Wallet</button>
            </div>  
        </div>
        <div className="bg-Navy-Torea-Bay shadow-sm py-4 px-5 text-white">
            <div className='mb-4 text-2xl font-bold flex justify-between'>
                <h1>Rug Checker</h1> <div><BsFillMegaphoneFill color='silver' fontSize='1.9rem'/></div>
            </div>
            <p className='mb-6'>
            Rug Checker gives you information about a contract and the chances of it being a scam.
            </p>
            <div className='flex px-8 '>
                <button className='bg-silver flex-1 py-4'>Analyze contract</button>
            </div>
        </div>
        <div className="bg-Navy-Torea-Bay shadow-sm py-4 px-5 text-white">
            <div className='mb-4 text-2xl font-bold flex justify-between'>
                <h1>Swap</h1><div> <MdOutlineSwapHoriz color='silver' fontSize='1.9rem'/></div>
            </div>
            <p className='mb-6'>
            Trade any token on Ethereum Chain in seconds, just by connecting your wallet.
            </p>
            <div className='flex px-8 '>
                <button className='bg-silver flex-1 py-4'>Track Tokens</button>
            </div>
        </div>
        <div className="bg-Navy-Torea-Bay shadow-sm py-4 px-5 text-white">
            <div className='mb-4 text-2xl font-bold flex justify-between'>
                <h1>Watchlist</h1><div> <BsStars color='silver' fontSize='1.9rem'/></div>
            </div>
            <p className='mb-6'>
            Keep tracking any coin on Ethereum Chain and receive important performance information.
            </p>
            <div className='flex px-8 '>
                <button className='bg-silver flex-1 py-4'>Swap Tokens</button>
            </div>
        </div>
        <div className="bg-Navy-Torea-Bay shadow-sm py-4 px-5 text-white">
            <div className='mb-4 text-2xl font-bold flex justify-between'>
                <h1>MultiChart</h1><div> <BsFillGridFill color='silver' fontSize='1.9rem'/></div>
            </div>
            <p className='mb-6'>
            Track price charts from different projects at the same time with our Multichart tool.
            </p>
            <div className='flex px-8 '>
                <button className='bg-silver flex-1 py-4'>Check Now</button>
            </div>
        </div>
        <div className="bg-Navy-Torea-Bay shadow-sm py-4 px-5 text-white ">
            <div className='mb-4 text-2xl font-bold flex justify-between'>
                <h1>New Contract</h1><div> <BiRecycle color='silver' fontSize='1.9rem'/></div>
            </div>
            <p className='mb-6'>
            Live feed of newly deployed contracts on ethereum network.
            </p>
            <div className='flex px-8 '>
                <button className='bg-silver flex-1 py-4'>More Info</button>
            </div>
        </div>
        
    </div>
  )
}

export default DashBoard
