import React from 'react'
import Logo from './../../Assets/shilogo.jpg'
import {GiHamburgerMenu} from "react-icons/gi"
import {ImEarth} from 'react-icons/im'
const Header = (props) => {
  return (
    <div className='px-5 flex pt-4 mb-8 -z-5 items-center'>
    <div className='flex gap-3 md:gap-7 items-center'>
    <div className='hamburger h-fit cursor-pointer' onClick={() => props.show()}>
          <GiHamburgerMenu color='silver' fontSize='1.9rem'/>  
    </div>
    <div className='w-12 h-12'><img src={Logo} className = 'w-full h-full' /></div>
    </div>
    <div className='flex-1 flex  justify-end gap-3 pr-3'>
        <div className='inline-flex menu-bar gap-0'>
            <div className='li relative w-fit px-5'>
    <button className='bg-silver py-2 px-4 rounded-md text-xs sm:text-sm text-white h-fit hover:h-fit'><ImEarth color='blue' fontSize='1.1rem'/></button>
    <div className='sub-menu mx-auto'>
        <ul>
            <li>English</li>
            <li>Chinese</li>
            <li>Korea</li>
        </ul>
    </div>
    </div>
    <div>
    <button className='bg-silver py-2 px-3 sm:py-2 sm:px-6 rounded-md text-xs sm:text-sm text-white h-fit'>Connect Wallet</button>
    </div>
    </div>
    </div>
</div>
  )
}

export default Header