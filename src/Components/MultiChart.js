import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
const MultiChart = () => {
  const { t } = useTranslation()
  return (
    <div className='flex flex-col flex-1 text-d font-poppins-Regular items-center'>
        <div className='flex flex-col flex-1  items-center gap-5 md:pt-14 w-4/5 md:w-1/2 mx-auto text-center '>
          <h1 className='text-5xl font-bold text-silver-sand flex flex-col text-center'>{t('DashBoard.multichart_header')}</h1>
        <h3 className='text-white text-lg'>{t("DashBoard.multichart_title")}</h3>
        <h3 className='text-white text-lg'>{t("DashBoard.mutichart_subtitle")}</h3>
        <div className='flex items-center w-4/5 box-border mx-auto bg-orange-300'>
                <input type='text' placeholder='Paste Your Eth Address Here' className='px-2 py-2 text-black w-4/5 md:w-auto flex-1'/>
                <button className='flex gap-2 bg-d py-2 text-white px-2'><FaSearch fontSize='1.25rem' color='white'/>Go</button>
            </div>
            </div>
    </div>
  )
}
export default MultiChart