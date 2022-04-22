import React from 'react'
import HeroImage from './../../../Assets/heroImage.png'

const Hero = () => {
  return (
    <div className='container px-3 lg:px-0 flex flex-col md:flex-row sm:items-center overflow-hidden'>
        <div className='flex flex-col gap-8 md:gap-4'>
            <h1 className="text-3xl font-bold text-silver sm:text-4xl md:text-6xl">Welcome To The Shiba Inu Yacht Club</h1>
            <p className='text-white'>The SHIBAYC Ecosystem is a layer 2 solution in the ethereum domain and aims to integrate PFP NFT culture with blockchain P2E Gaming.</p>
            <div className='w-full'>
                <p className='text-white'>Token contract :</p>
                <a className='text-white'>0x96062F59C0AFCDc4467A7B63cf68DD6ac28FCFc8</a>
            </div>
            <div className='flex flex-wrap gap-3 pb-12 w-full justify-center sm:justify-start'>
                <button className = "py-3 px-7 border-white border rounded-lg bg-white">
                    DEXTOOLS
                </button>
                <button className = "py-3 px-7  border-white  border rounded-lg hover:text-silver hover:border-silver text-white ">
                    UNISWAP
                </button>
                <button className = "py-3 px-7  border-white  border rounded-lg bg-white">
                    AUDITREPORT
                </button>
                <button className = "py-3 px-7  border-white border rounded-lg hover:text-silver hover:border-silver text-white">
                    WHITEPAPER
                </button>
            </div>
        </div>
        <div className='relative xl:-ml-28'>
            <img src={HeroImage} className = "w-full h-full"/>
        </div>
    </div>
  )
}

export default Hero