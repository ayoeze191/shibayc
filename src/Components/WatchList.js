import React from 'react'
import { FaSearch } from 'react-icons/fa'
import {BsStar} from 'react-icons/bs'
import { useTranslation } from 'react-i18next'
const WatchList = () => {
  const { t } = useTranslation()
  return (
    <div className='flex flex-col flex-1  items-center gap-5 md:pt-14 font-poppins-Regular w-full'>
        
        <h1 className='text-5xl font-bold text-silver-sand text-center w-4/5 text-d'>{t('DashBoard.watchlist_header')}</h1>
        <h3 className='text-white text-center text-base md:text-lg w-4/5'>{t('DashBoard.watchlist_title')}</h3>
        <div className='flex w-11/12 mx-auto items-center justify-center max-w-lg gap-2'>
                <input type='text' placeholder='Paste Your Eth Address Here rounded-md' className='flex-[0.8] py-2 pl-2 rounded-lg'/>
                <button className='flex bg-d flex-[0.2]  rounded-right justify-center  items-center text-white py-2 rounded-lg'><FaSearch fontSize='1.25rem' color='white'/>Go</button>
            </div>

          <div className='w-11/12 max-w-4xl flex bg-[#101722] long-div text-white overflow-x-scroll text-[12px] mx-auto gap-1'>
            <div className='text-center border-t-2 flex-1 px-2 py-4'><BsStar color='#ffcc00' /></div>
            <div className='px-2 flex-1 text-center border-t-2 border-slate-300 flex justify-center items-center py-4'>Name</div>
            <div className='px-2 flex-1 text-center border-t-2 border-slate-300 flex justify-center items-center py-4'>Price</div>
            <div className='px-2 flex-1 text-center border-t-2 border-slate-300 flex justify-center items-center py-4'>24h%</div>
            <div className='px-2 flex-1 text-center border-t-2 border-slate-300 flex justify-center items-center py-4'>7d%</div>
            <div className='px-2 flex-1 text-center border-t-2 border-slate-300 flex justify-center items-center py-4'>30d%</div>
            <div className=' px-2 flex-1 text-center border-t-2 border-slate-300 flex justify-center items-center py-4'>Market Cap</div>
            {/* <div className=' px-2 flex-1 text-center border-t-2 border-slate-300 flex justify-center items-center'>Circulating Supply</div> */}
            {/* <div className='flex-1 text-center border-t-2 border-slate-300 flex justify-center items-center'>Volume(24h)</div> */}
          </div>
    </div>
  )
}
 
export default WatchList


{/* <div className='flex bg-[#101722] long-div w-11/12 text-white overflow-hidden text-[12px] mx-auto'>
            <div className='flex-1 text-center border-t-2 border-slate-300 flex justify-center items-center'><BsStar color='#ffcc00'/></div>
      <div className='px-2 flex-1 text-center border-t-2 border-slate-300 flex justify-center items-center'>Name</div>
      <div className=' px-2 flex-1 text-center border-t-2 border-slate-300 flex justify-center items-center'>Price</div>
      <div className=' px-2 flex-1 text-center border-t-2 border-slate-300 flex justify-center items-center'>24h%</div>
      <div className=' px-2 flex-1 text-center border-t-2 border-slate-300 flex justify-center items-center'>7d%</div>
      <div  className='px-2 flex-1 text-center border-t-2 border-slate-300 flex justify-center items-center'>30d%</div>
      <div className=' px-2 flex-1 text-center border-t-2 border-slate-300 flex justify-center items-center'>Market Cap</div>
      <div className=' px-2 flex-1 text-center border-t-2 border-slate-300 flex justify-center items-center'>Circulating Supply</div>
      <div className='flex-1 text-center border-t-2 border-slate-300 flex justify-center items-center'>Volume(24h)</div>
    </div> */}
