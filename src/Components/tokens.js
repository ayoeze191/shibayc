import React from 'react'
import { FaSearch } from 'react-icons/fa'
import goat from "./../Assets/goat.png"
import {GiPadlock} from 'react-icons/gi'
import Logo from './../Assets/logo.png'

import {BsStar} from 'react-icons/bs'
import { MdOutlineSwapHoriz } from 'react-icons/md';
const Token = () => {
  return (
    <div className='flex-1 w-full flex  justify-center h-full font-poppins-Regular'>
        <div  className='w-full flex flex-col gap-6 items-center mt-10'>
            <div className='flex flex-col sm:flex-row items-center gap-4 w-full sm:w-fit'>
                <input type='text' placeholder='Paste Your Eth Address Here' className='px-5 py-2 border-0 flex-1 w-4/5 sm:w-96'/>
                <button className='flex text-lg items-center px-7 py-2 bg-silver rounded-lg text-white gap-2 bg-d'><FaSearch fontSize='1.25rem' color='white'/>Go</button>
            </div>
            <div className='flex justify-between w-4/5 text-white text-xs flex-col sm:flex-row gap-5 sm:gap-0 bg-Navy-Torea-Bay items-center py-4 rounded-lg px-3'>
                <div className='flex flex-col sm:flex-row items-center gap-5 sm:gap-2'><div><img src={Logo} className = "w-[4rem]" /></div>
                <p>
                Cashlno
                  <h2>Cashlno</h2>
                </p>
                </div>

                <div className='flex w-full justify-between   px-2 flex-[0.5] '>
                  <p>
                    <p>HOLDERS</p>
                    <p>0</p>
                  </p>
                  <p>
                    <p>Price</p>
                    <p>$0</p>
                  </p>
                  <p>
                    <p>CIRC.SUPPLY</p>
                    <p>$0</p>
                  </p>
                  <p>
                    <p>MarketCAP</p>
                    <p>$0</p>
                  </p>
                  <p>
                    <p>Liquidity</p>
                    <p>$</p>
                  </p>
                </div>
            </div>

            <div className='flex w-4/5 sm:justify-end gap-4 text-white justify-center flex-col sm:flex-row items-center'>
              <button className='bg-silver-sand px-4 text-center py-1 rounded-lg w-fit'><BsStar  fontSize='1.25rem' color='white'/></button>
              
              <button className='flex bg-silver-sand px-4 gap-2  py-1 items-center rounded-lg w-fit'><MdOutlineSwapHoriz fontSize='1.95rem' color='white'/> SWAP</button>
              <button className='flex bg-silver-sand px-4 gap-2  py-1 items-center rounded-lg w-fit'> <GiPadlock  fontSize='1.95rem' color='white'/> RUG CHECKER</button>
              
            </div>
            <div className=' grid grid-cols-3 text-white bg-slate-900  md:flex px-[0.15rem] gap-[0.15rem] long-div w-4/5'>
              <h1 className=' h-full py-4 px-4 border-t-2 border-t-slate-600 flex-1'>Type</h1>
              <h1 className=' py-4 px-4 border-t-slate-600  border-t-2 flex-1 '>Tokens</h1>
              <h1 className=' py-4 px-4 border-t-slate-600  border-t-2 flex-1'>Price USD</h1>
              <h1 className=' py-4 px-4 border-t-slate-600  border-t-2 flex-[1.5] text-center '>Price USD/Token</h1>
              <h1 className=' py-4 px-4 border-t-slate-600  border-t-2 flex-1'>Time</h1>
              <h1 className=' py-4 px-4 border-t-slate-600  border-t-2 flex-1'>Tx</h1>
          
            </div>
        </div>

    </div>
  )
}

export default Token