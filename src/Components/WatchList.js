import React from 'react'

const WatchList = () => {
  return (
    <div>
        <h1>WatchList</h1>
        <h3>Tract Tokens around the Ethereum Chain</h3>
        <div className='flex items-center gap-4 w-fit'>
                <input type='text' placeholder='Paste Your Eth Address Here' className='px-5 py-2 border-0 w-64 sm:w-96'/>
                <button className='flex text-lg items-center px-7 py-2 bg-silver rounded-lg text-white gap-2'><FaSearch fontSize='1.25rem' color='white'/>Go</button>
            </div>
    </div>
  )
}

export default WatchList