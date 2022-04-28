import React from 'react'
import { FaSearch } from 'react-icons/fa'
import {BsStar} from 'react-icons/bs'
const WatchList = () => {
  return (
    <div className='flex flex-col flex-1  items-center gap-5 md:pt-14 font-poppins-Regular w-4/5'>

        <h1 className='text-5xl font-bold text-silver-sand text-center text-d'>WatchList</h1>
        <h3 className='text-white text-center text-lg'>Track Tokens around the Ethereum Chain</h3>
        <div className='flex w-4/5 mx-auto items-center justify-center max-w-lg'>
                <input type='text' placeholder='Paste Your Eth Address Here' className='py-2 w-[70%] flex-1'/>
                <button className='flex  px-7 py-2 bg-d rounded-lg text-white gap-2'><FaSearch fontSize='1.25rem' color='white'/>Go</button>
            </div>
            <div className='flex w-11/12 overflow-x-scroll long-div bg-slate-900 text-white md:overflow-hidden long-div md:max-w-3xl justify-between gap-[2.5px]'>
<div className='flex-1 text-center py-3 border-t-2 border-t-slate-600'>Type</div>
<div className='flex-1 text-center py-3 border-t-2 border-t-slate-600'>Tokens</div>
<div className='flex-1 text-center py-3 border-t-2 border-t-slate-600'>Price USD</div>
<div className='flex-1 text-center py-3 border-t-2 border-t-slate-600'>Price USD/token</div>
<div className='flex-1 text-center py-3 border-t-2 border-t-slate-600'>Time</div>
<div className='flex-1 text-center py-3 border-t-2 border-t-slate-600'>Tx</div>
</div>
    </div>
  )
}

export default WatchList