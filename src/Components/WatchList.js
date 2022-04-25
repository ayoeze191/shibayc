import React from 'react'
import { FaSearch } from 'react-icons/fa'
import {BsStar} from 'react-icons/bs'
const WatchList = () => {
  return (
    <div className='flex flex-col flex-1  items-center gap-5 md:pt-14'>
        <h1 className='text-5xl font-bold text-silver-sand text-center '>WatchList</h1>
        <h3 className='text-white text-center text-lg'>Track Tokens around the Ethereum Chain</h3>
        <div className='flex items-center gap-4 w-fit flex-col sm:flex-row'>
                <input type='text' placeholder='Paste Your Eth Address Here' className='px-5 py-2 border-0 w-64 sm:w-96'/>
                <button className='flex text-lg items-center px-7 py-2 bg-silver rounded-lg text-white gap-2'><FaSearch fontSize='1.25rem' color='white'/>Go</button>
            </div>
            <div className='text-white bg-slate-900  md:flex px-[0.15rem] gap-[0.15rem] long-div grid grid-cols-3'>
              <h1 className=' h-full py-4 px-4 border-t-2 border-t-slate-600'><BsStar color='silver'/></h1>
              <h1 className=' py-4 px-4 border-t-slate-600  border-t-2 '>Name</h1>
              <h1 className=' py-4 px-4 border-t-slate-600  border-t-2 '>Price</h1>
              <h1 className=' py-4 px-4 border-t-slate-600  border-t-2 '>24%</h1>
              <h1 className=' py-4 px-4 border-t-slate-600  border-t-2 '>7d%</h1>
              <h1 className=' py-4 px-4 border-t-slate-600  border-t-2 '>30d%</h1>
              <h1 className=' py-4 px-4 border-t-2 border-t-slate-600'>MarketCAP</h1>
              <h1 className=' py-4 px-4 border-t-2 border-t-slate-600'>Circulating</h1>
              <h1 className=' py-4 px-4 border-t-2 border-t-slate-600'>Volume(24h)</h1>
            </div>
    </div>
  )
}

export default WatchList