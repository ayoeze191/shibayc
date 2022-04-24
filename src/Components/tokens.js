import React from 'react'
import { FaSearch } from 'react-icons/fa'
import goat from "./../Assets/goat.png"
import {GiPadlock} from 'react-icons/gi'
import {BsStar} from 'react-icons/bs'
import { MdOutlineSwapHoriz } from 'react-icons/md';
const Token = () => {
  return (
    <div className='flex-1 w-full flex  justify-center h-full'>
        <div  className='w-full flex flex-col gap-6 items-center mt-10'>
            <div className='flex flex-col sm:flex-row items-center gap-4 w-full sm:w-fit'>
                <input type='text' placeholder='Paste Your Eth Address Here' className='px-5 py-2 border-0 flex-1 w-4/5 sm:w-96'/>
                <button className='flex text-lg items-center px-7 py-2 bg-silver rounded-lg text-white gap-2'><FaSearch fontSize='1.25rem' color='white'/>Go</button>
            </div>
            <div className='flex justify-between w-4/5 text-white text-xs flex-col sm:flex-row gap-5 sm:gap-0 bg-Navy-Torea-Bay items-center py-4 rounded-lg px-3'>
                <div className='flex flex-col sm:flex-row items-center gap-5 sm:gap-2'><div><img src={goat} className = "w-[4rem]" /></div>
                <p>
                  SHIBAYC
                  <h2>SBAYC</h2>
                </p>
                </div>

                <div className='flex w-full justify-between   px-2 flex-[0.5]  bg-black'>
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

        </div>

    </div>
  )
}

export default Token