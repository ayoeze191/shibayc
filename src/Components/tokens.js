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
        <div className='flex justify-center sm:justify-end gap-2 mx-auto items-center w-4/5 sm:max-w-3xl'>
<button className='bg-silver-sand px-4 text-center py-1 rounded-lg w-fit bg-d'><BsStar  fontSize='1.25rem' color='white'/></button>

<button className='flex bg-silver-sand px-4 gap-2  py-1 items-center rounded-lg w-fit bg-d'><MdOutlineSwapHoriz color='white'/> SWAP</button>
<button className='flex bg-silver-sand px-4 gap-2  py-1 items-center rounded-lg w-fit bg-d'> <GiPadlock  fontSize='1.95rem' color='white'/> RUG CHECKER</button>
</div> 
   
   {/* <div className=' flex flex-col w-4/5 sm:w-fit items-center gap-4 sm:flex-row sm:max-w-3xl  justify-between bg-red-400 mx-auto'>
<div className=' flex text-white bg-slate-900  md:flex long-div w-full overflow-scroll sm:overflow-x-hidden'>
<h1 className=' h-full py-4 px-4 border-t-2 border-t-slate-600 flex-1'>Type</h1>
<h1 className=' py-4 px-4 border-t-slate-600  border-t-2 flex-1 '>Tokens</h1>
<h1 className=' py-4 px-4 border-t-slate-600  border-t-2 flex-1'>Price USD</h1>
<h1 className=' py-4 px-4 border-t-slate-600  border-t-2 flex-[1.5] text-center '>Price USD/Token</h1>
<h1 className=' py-4 px-4 border-t-slate-600  border-t-2 flex-1'>Time</h1>
<h1 className=' py-4 px-4 border-t-slate-600  border-t-2 flex-1'>Tx</h1>
</div>
</div> */}
{/* <div className=' flex w-11/12 overflow-x-scroll long-div bg-slate-900 text-white md:overflow-hidden text-xs hover:gap-[0.15rem] md:max-w-3xl '>
<h1 className='py-4 px-4 border-t-2 border-t-slate-600 flex-1'>Type</h1>
<h1 className=' py-4 px-4 border-t-slate-600  border-t-2 flex-1 '>Tokens</h1>
<h1 className=' py-4 px-4 border-t-slate-600  border-t-2 flex-1'>Price USD</h1>
<h1 className=' py-4 px-4 border-t-slate-600  border-t-2 flex-[1.5] text-center '>Price USD/Token</h1>
<h1 className=' py-4 px-4 border-t-slate-600  border-t-2 flex-1'>Time</h1>
<h1 className=' py-4 px-4 border-t-slate-600  border-t-2 flex-1'>Tx</h1>
</div> */}
<div className='flex w-11/12 overflow-x-scroll long-div bg-slate-900 text-white md:overflow-hidden long-div md:max-w-3xl justify-between gap-[2.5px]'>
<div className='flex-1 text-center py-3 border-t-2 border-t-slate-600'>Type</div>
<div className='flex-1 text-center py-3 border-t-2 border-t-slate-600'>Tokens</div>
<div className='flex-1 text-center py-3 border-t-2 border-t-slate-600'>Price USD</div>
<div className='flex-1 text-center py-3 border-t-2 border-t-slate-600'>Price USD/token</div>
<div className='flex-1 text-center py-3 border-t-2 border-t-slate-600'>Time</div>
<div className='flex-1 text-center py-3 border-t-2 border-t-slate-600'>Tx</div>
</div>
        </div>

    </div>
  )
}

{/*

<div className='flex w-full gap-3 text-sm justify-end'>
<button className='bg-silver-sand px-4 text-center py-1 rounded-lg w-fit bg-d'><BsStar  fontSize='1.25rem' color='white'/></button>

<button className='flex bg-silver-sand px-4 gap-2  py-1 items-center rounded-lg w-fit bg-d'><MdOutlineSwapHoriz color='white'/> SWAP</button>
<button className='flex bg-silver-sand px-4 gap-2  py-1 items-center rounded-lg w-fit bg-d'> <GiPadlock  fontSize='1.95rem' color='white'/> RUG CHECKER</button>
}
*/}

export default Token

