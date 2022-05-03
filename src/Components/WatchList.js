import React from 'react'
import { FaSearch } from 'react-icons/fa'
import {BsStar} from 'react-icons/bs'
import { useTranslation } from 'react-i18next'
const WatchList = () => {
  const { t } = useTranslation()
  return (
    <div className='flex flex-col flex-1  items-center gap-5 md:pt-14 font-poppins-Regular w-full relative'>
        
        <div className='w-11/12 max-w-4xl relative flex flex-col gap-4 h-full '>
        <h1 className='w-full max-w-lg text-center text-d text-4xl font-bold font-poppins-Regular mx-auto'>{t('DashBoard.watchlist_header')}</h1>
        <h3 className='text-white text-center mx-auto'>{t('DashBoard.watchlist_title')}</h3>
        <div className='w-full mx-auto  flex gap-2 max-w-lg'>
                <input type='text' placeholder='Paste Your Eth Address Here rounded-md' className='flex-1 h-full rounded-lg px-2 py-2'/>
                <button className='flex bg-d flex-[0.2]  rounded-right justify-center  items-center text-white py-2 rounded-lg'><FaSearch fontSize='1.25rem' color='white'/>Go</button>
            </div>


            <div class="table bg-[#101722] text-white sm:overflow-hidden gap-1">
    <div className='px-2 py-3 flex-1 text-center border-t-2 border-slate-300'>Name</div>
    <div className='px-2 py-3 flex-1 text-center border-t-2 border-slate-300'>Price</div>
    <div className='px-2 py-3 flex-1 text-center border-t-2 border-slate-300'>24h%</div>
    <div className='px-2 py-3 flex-1 text-center border-t-2 border-slate-300'>7d%</div>
    <div className='px-2 py-3 flex-1 text-center border-t-2 border-slate-300'>30d%</div>
    <div className='px-2 py-3 flex-1 text-center border-t-2 border-slate-300'>Market Cap</div>
    {/* <div className=''>Circulating Supply</div>
    <div className=''>Volume(24h)</div> */}
      </div>  
          
          </div>
    </div>
  )
}
 
export default WatchList


