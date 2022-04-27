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
        <div  className=' flex flex-col gap-6 items-center mt-10 w-11/12 lg:max-w-2xl'>
            <div className='flex w-full gap-3 '>
                <input type='text' placeholder='Paste Your Eth Address Here' className='flex-1 pl-2'/>
                <button className='bg-d px-3 rounded-lg flex py-2 items-center gap-1 flex-[0.2] justify-center'><FaSearch  color='white'/>Go</button>
            </div>
            <div className=' overflow-scroll flex justify-between w-full text-white text-xs flex-col sm:flex-row gap-5 sm:gap-0 items-center py-4 rounded-lg px-3 bg-slate-900 '>
                <div className='flex flex-row items-center gap-5 sm:gap-2'><div><img src={Logo} className = "w-[4rem]" /></div>
                <p>
                Cashlno
                  <h2>Cashlno</h2>
                </p>
                </div>

                <div className='flex w-full justify-between px-2 flex-[0.5]  mx-auto text-xs gap-2 '>
                  <p className='h-full text-center'>
                    <p className=''>HOLDERS</p>
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

            <div className='flex w-full gap-3 text-sm justify-end'>
              <button className='bg-silver-sand px-4 text-center py-1 rounded-lg w-fit bg-d'><BsStar  fontSize='1.25rem' color='white'/></button>
              
              <button className='flex bg-silver-sand px-4 gap-2  py-1 items-center rounded-lg w-fit bg-d'><MdOutlineSwapHoriz color='white'/> SWAP</button>
              <button className='flex bg-silver-sand px-4 gap-2  py-1 items-center rounded-lg w-fit bg-d'> <GiPadlock  fontSize='1.95rem' color='white'/> RUG CHECKER</button>
              
            </div>
            <div className=' flex text-white bg-slate-900  md:flex long-div w-full overflow-scroll sm:overflow-x-hidden'>
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