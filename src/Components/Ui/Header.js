import React from 'react'
import Logo from './../../Assets/shilogo.jpg'
import england from './../../Assets/england.jpg'
import southKorea from "./../../Assets/southKorea.png"
import china from "./../../Assets/china.webp"
import {GiHamburgerMenu} from "react-icons/gi"
import {ImEarth} from 'react-icons/im'
import i18next from 'i18next'
const languages = [
  {
    code: 'en',
    name: 'English',
    country_code: 'gb',
    image: england
  },
  {
    code: 'ch',
    name: 'Chinese',
    country_code: 'ch',
    image: china
  },
  {
    code: 'ks',
    name: 'Korea',
    country_code: 'ks',
    image: southKorea
  },
  {
    code: 'tu',
    name: 'Turkish',
    country_code: 'tu'
  },
]


const Header = (props) => {
  return (
    <div className='px-5 flex py-2  mb-8 -z-5 items-center bg-Navy-blue font-poppins-Regular' >
    <div className='flex gap-3 md:gap-7 items-center'>
    <div className='hamburger h-fit cursor-pointer' onClick={() => props.show()}>
          <GiHamburgerMenu color='blueviolet' fontSize='1.9rem'/>  
    </div>
    <div className='w-12 h-12'><img src={Logo} className = 'w-full h-full' /></div>
    </div>
    <div className='flex-1 flex  justify-end gap-3 pr-3'>
        <div className='inline-flex menu-bar gap-0'>
            <div className='li relative w-fit px-5'>
    <button className=' bg-color--luminous-vivid-amber py-2 px-4 rounded-md text-xs sm:text-sm text-white h-fit hover:h-fit'><ImEarth color='blue' fontSize='1.1rem'/></button>
    <div className='sub-menu mx-auto z-50'>
        <ul className='px-2'>
            {languages.map(({code, name, country_code, image}) => 
            <li key={country_code} onClick = {() => i18next.changeLanguage(code)} className = 'flex gap-2  items-center'><div className="w-5"><img src={image} className = 'w-20'/></div>{name}</li>)}
        </ul>
    </div>
    </div>
    <div>
    <button className='bg-color--luminous-vivid-amber py-2 px-3 sm:py-2 sm:px-6 rounded-lg text-xs sm:text-sm text-white h-fit' onClick={() => props.showConnect()}>Connect Wallet</button>
    </div>
    </div>
    </div>
</div>
  )
}

export default Header