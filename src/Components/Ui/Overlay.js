import React from 'react'

const Overlay = (props) => {
  return (
    <div className='bg-black opacity-70 h-full w-full absolute  sm:hidden z-10' onClick={() => props.remove()}
    ></div>
  )
}

export default Overlay