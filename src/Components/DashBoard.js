import React from 'react'
import { BsFillHouseFill, BsCalendar3Fill } from "react-icons/bs";

// import IoSwapVerticalOutline from
import { MdOutlineSwapHoriz } from 'react-icons/md';
import {BiRecycle, BiListUl} from 'react-icons/bi'
import GiTrumpet from "react-icons/gi"
import {useTranslation} from "react-i18next";

import { FaUserFriends } from 'react-icons/fa';
import { BsFillMegaphoneFill, BsStars, BsFillGridFill } from 'react-icons/bs'
import { IconContext } from 'react-icons';
const DashBoard = () => {
    const { t } = useTranslation()
    // console.log(t(''))
    // console.log(t('look.deep', { ns: 'DashBoard' }))
  return (
    <div className="w-full  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-items-between items-between gap-12 box-border px-4 font-poppins-Regular">
        <div className=" py-4 px-5 text-white flex flex-col shadow-sm shadow-d">
            <div className='mb-4 text-2xl font-bold flex justify-between'>
                <h1>{t('DashBoard.Portfolio_Tracker_Header')}</h1> <div><BsCalendar3Fill color='#ffcc00' fontSize='1.9rem'/></div>
            </div>
            <p className='mb-6'>
            {t('DashBoard.Portfolio_Tracker_Text')}
            </p>
            <div className='flex px-8 '>
                <button className='bg-color--luminous-vivid-amber flex-1 py-4'> {t('DashBoard.Portfolio_Tracker_Button')}</button>
            </div>  
        </div>
        <div className="bg-Navy-Torea-Bay  py-4 px-5 text-white shadow-sm shadow-d">
            <div className='mb-4 text-2xl font-bold flex justify-between'>
                <h1>{t('DashBoard.Rug_Checker_Header')}</h1> <div><BsFillMegaphoneFill color='#ffcc00' fontSize='1.9rem'/></div>
            </div>
            <p className='mb-6'>
            {t('DashBoard.Rug_Checker_Text')}
            </p>
            <div className='flex px-8 '>
                <button className='bg-color--luminous-vivid-amber flex-1 py-4'>{t('DashBoard.Rug_Checker_Button')}</button>
            </div>
        </div>
        <div className="bg-Navy-Torea-Bay  py-4 px-5 text-white shadow-sm shadow-d">
            <div className='mb-4 text-2xl font-bold flex justify-between'>
                <h1>{t('DashBoard.Swap_Header')}</h1><div> <MdOutlineSwapHoriz color='#ffcc00' fontSize='1.9rem'/></div>
            </div>
            <p className='mb-6'>
            {t('DashBoard.Swap_Text')}
            </p>
            <div className='flex px-8 '>
                <button className='bg-color--luminous-vivid-amber flex-1 py-4'>{t('DashBoard.Swap_Button')}</button>
            </div>
        </div>
        <div className="bg-Navy-Torea-Bay  py-4 px-5 text-white shadow-sm shadow-d">
            <div className='mb-4 text-2xl font-bold flex justify-between'>
                <h1>{t('DashBoard.Watch_list_Header')}</h1><div> <BsStars color='#ffcc00' fontSize='1.9rem'/></div>
            </div>
            <p className='mb-6'>
            {t('DashBoard.Watch_list_Text')}
            </p>
            <div className='flex px-8 '>
                <button className='bg-color--luminous-vivid-amber flex-1 py-4'>{t('DashBoard.Watch_list_Button')}</button>
            </div>
        </div>
        <div className="bg-Navy-Torea-Bay  py-4 px-5 text-white shadow-md shadow-d">
            <div className='mb-4 text-2xl font-bold flex justify-between'>
                <h1>{t('DashBoard.Multi_Chart_Header')}</h1><div> <BsFillGridFill color='#ffcc00' fontSize='1.9rem'/></div>
            </div>
            <p className='mb-6'>
            {t('DashBoard.Multi_Chart_Text')}
            </p>
            <div className='flex px-8 '>
                <button className='bg-color--luminous-vivid-amber flex-1 py-4'> {t('DashBoard.Multi_Chart_Button')}</button>
            </div>
        </div>
        <div className="bg-Navy-Torea-Bay  py-4 px-5 text-white shadow-sm shadow-d">
            <div className='mb-4 text-2xl font-bold flex justify-between'>
                <h1>{t('DashBoard.New_contract_Header')}</h1><div> <BiRecycle color='#ffcc00' fontSize='1.9rem'/></div>
            </div>
            <p className='mb-6'>
            {t('DashBoard.New_contract_Text')}
            </p>
            <div className='flex px-8 '>
                <button className='bg-color--luminous-vivid-amber flex-1 py-4'>{t('DashBoard.New_contract_Button')}</button>
            </div>
        </div>
        
    </div>
  )
}

export default DashBoard
