import React from 'react'

const Overlay = (props) => {
  return (
    <div className={props.showSmallOnly?`bg-black opacity-70 h-full w-full absolute  lg:hidden z-10`:`bg-black opacity-70 h-full w-full absolute z-10`} onClick={() => props.remove()}
    ></div>
  )
}

export default Overlay