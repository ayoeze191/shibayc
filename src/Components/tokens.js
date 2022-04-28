import React from 'react'
import { FaSearch } from 'react-icons/fa'
import goat from "./../Assets/goat.png"
import {GiPadlock} from 'react-icons/gi'
import Logo from './../Assets/logo.png'
import upFork from "./../Assets/upFork.png"

import {BsStar} from 'react-icons/bs'
import { MdOutlineSwapHoriz } from 'react-icons/md';
const Token = () => {
  return (
    <div className='font-poppins-Regular md:flex-1 w-11/12 relative  h-full md:mr-5 flex flex-col items-center'>
        <div className='w-4/5 flex gap-2 justify-center max-w-lg mb-10'>
        <div className='flex-1'><input type='text' className='py-2 rounded-lg w-full px-2'/></div>
        <div><input type='submit' className='bg-d py-2 px-2 text-white rounded-lg '/></div>
        </div>

        <div className='w-4/5 text-white flex flex-col md:flex-row justify-between max-w-4xl bg-slate-900 py-3 rounded-lg px-3'>
        <div className='flex gap-2 w-full items-center justify-center md:justify-start md:w-fit '><div><img src={Logo} className = "w-[4rem]" /></div><p>
Cashlno
  <h2>Cashlno</h2>
</p></div>

        <div className='flex gap-2 md:gap-4 flex-wrap items-center justify-center'>
          <div>
            <p>HOLDERS</p>
            <p>0</p>
          </div>
          <div>
            <p>Price</p>
            <p>0$</p>
          </div>
          <div>
            <p>CIRC. SUPPLY</p>
            <p>0</p>
          </div>
          <div>
            <p>MarketCAP</p>
            <p>$0</p>
          </div>
          <div>
            <p>Liquidity</p>
            <p>0</p>
          </div>
        </div>
        </div>
        <div className='flex justify-center sm:justify-end gap-2 mx-auto items-center w-4/5 sm:max-w-3xl text-xs sm:text-base mt-4 mb-4'>
<button className='bg-silver-sand px-4 text-center py-1 rounded-lg w-fit bg-d'><BsStar  fontSize='1.25rem' color='white'/></button>

<button className='flex bg-silver-sand px-4 gap-2  py-1 items-center rounded-lg w-fit bg-d'><MdOutlineSwapHoriz color='white'/> SWAP</button>
<button className='flex bg-silver-sand px-4 gap-2  py-1 items-center rounded-lg w-fit bg-d'> <GiPadlock  fontSize='1.95rem' color='white'/> RUG CHECKER</button>
</div>
    <div className='flex gap-1 bg-[#101722] long-div w-4/5 border-t-2 border-slate-300 text-white overflow-x-scroll sm:overflow-hidden'>
      <div className='px-2 py-4 flex-1 text-center'>Type</div>
      <div className='px-2 py-4 flex-1 text-center'>Token</div>
      <div className='px-2 py-4 flex-1 text-center'>Price USD</div>
      <div className='px-2 py-4 flex-1 text-center'>Price USD/Token</div>
      <div  className='px-2 py-4 flex-1 text-center'>Time</div>
      <div className='px-2 py-4 flex-1 text-center'>Tx</div>
    </div>

    </div>
  )
}



export default Token



{/* <div className='font-poppins-Regular md:flex-1 w-11/12 relative  h-full md:mr-5 flex flex-col items-center'>
        <div  className='flex flex-col gap-5 w-full items-center '>
            <div className='flex w-full justify-center sm:max-w-lg md:max-w-2xl'>
                <input type='text' placeholder='Paste Your Eth Address Here' className='pl-2 flex-[0.7] py-2'/>
                <button className='px-5 flex py-2 bg-d justify-between items-center gap-1 flex-[0.1]'><FaSearch  color='white'/>Go</button>
            </div>
          
        <div className='text-white flex w-full flex-col justify-between gap-4 md:flex-row bg-slate-900  sm:max-w-3xl items-center'>
          <div className='flex gap-2 w-full items-center justify-center md:justify-start md:w-fit'><div><img src={Logo} className = "w-[4rem]" /></div><p>
Cashlno
  <h2>Cashlno</h2>
</p></div>

<div className=' flex flex-col w-full md:w-fit items-center gap-4 md:flex-row md:max-w-3xl  justify-between'>
  <div className='flex gap-2 '>
<p className='h-full text-center'>
    <p className=''>HOLDERS</p>
  </p>
  <p className='h-full text-center'>
    <p>Price</p>
    <p>$0</p>
  </p>
  <p className='h-full text-center'>
    <p>CIRC.SUPPLY</p>
    <p>$0</p>
  </p>
  </div>
  <div className='flex gap-2'>
  <p className='h-full text-center'>
    <p>MarketCAP</p>
    <p>$0</p>
  </p>
  <p>
    <p>Liquidity</p>
    <p>$</p>
  </p>
  </div>
</div>
<div className="w-11">
  <img src={upFork}  className = "w-full"/>
</div>
        </div>
        <div className='flex justify-center sm:justify-end gap-2 mx-auto items-center w-4/5 sm:max-w-3xl text-xs sm:text-base'>
<button className='bg-silver-sand px-4 text-center py-1 rounded-lg w-fit bg-d'><BsStar  fontSize='1.25rem' color='white'/></button>

<button className='flex bg-silver-sand px-4 gap-2  py-1 items-center rounded-lg w-fit bg-d'><MdOutlineSwapHoriz color='white'/> SWAP</button>
<button className='flex bg-silver-sand px-4 gap-2  py-1 items-center rounded-lg w-fit bg-d'> <GiPadlock  fontSize='1.95rem' color='white'/> RUG CHECKER</button>
</div>  */}
   