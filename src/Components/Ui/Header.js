import React from 'react'
import Logo from './../../Assets/shilogo.jpg'
import {GiHamburgerMenu} from "react-icons/gi"
import {ImEarth} from 'react-icons/im'
const Header = (props) => {
  return (
    <div className='px-5 flex pt-4 mb-8 -z-5'>
    <div className='flex gap-3 md:gap-7 items-center'>
    <div className='hamburger h-fit cursor-pointer' onClick={() => props.show()}>
          <GiHamburgerMenu color='silver' fontSize='1.9rem'/>  
    </div>
    <div className='w-12 h-12'><img src={Logo} className = 'w-full h-full' /></div>
    </div>
    <div className='flex-1 flex  justify-end gap-3 pr-3'>
        <div className='inline-flex menu-bar gap-3'>
            <div className='li relative'>
    <button className='bg-silver py-2 px-8 rounded-md text-xs sm:text-sm text-white h-fit hover:h-fit'><ImEarth color='blue' fontSize='1.5rem'/></button>
    <div className='sub-menu'>
        <ul>
            <li>English</li>
            <li>Chinese</li>
            <li>Korea</li>
        </ul>
    </div>
    </div>
    <div>
    <button className='bg-silver py-2 px-6 rounded-md text-xs sm:text-sm text-white h-fit'>Connect Wallet</button>
    </div>
    </div>
    </div>
</div>
  )
}

export default Header