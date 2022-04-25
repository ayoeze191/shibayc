import React from 'react'
import { FaSearch } from 'react-icons/fa'

const MultiChart = () => {
  return (
    <div className='flex flex-col flex-1 w-full text-d font-poppins-Regular'>
        <div className='flex flex-col flex-1  items-center gap-5 md:pt-14 w-4/5 md:w-1/2 mx-auto text-center'>
          <h1 className='text-5xl font-bold text-silver-sand flex flex-col text-center'>MultiChart</h1>
        <h3 className='text-white text-lg'>Keep Your coins in the same place</h3>
        <h3 className='text-white text-lg'>You can Generate Up to six charts and track real-timecurrency prices in addition to your price history</h3>
        <div className='flex items-center gap-4 w-fit flex-col sm:flex-row'>
                <input type='text' placeholder='Paste Your Eth Address Here' className='px-5 py-2 border-0 w-64 sm:w-96 text-black'/>
                <button className='flex text-lg items-center px-7 py-2 bg-d rounded-lg text-white gap-2'><FaSearch fontSize='1.25rem' color='white'/>Go</button>
            </div>
            </div>
    </div>
  )
}

export default MultiChart