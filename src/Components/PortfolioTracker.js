import React from 'react'
import HeroImage from "./../Assets/heroImage.png"
import logo from './../Assets/shilogo.jpg'
const PortfolioTracker = () => {
  return (
    <div className="flex-1 w-full flex justify-center h-full ">
        <div className='text-white h-fit bg-Navy-Torea-Bay w-fit py-10 sm:px-10 flex flex-col gap-2 px-4 box-border '>
            <div className='w-40 h-40 mx-auto'><img src={logo} className = 'w-full h-full '/></div>
            <h1 className=' text-3xl sm:text-5xl font-bold text-silver-sand flex flex-col text-center'>Let ShibaYC help<span>you</span> </h1>
            <h3 className='text-center flex justify-center flex-col text-xl'>The most successful portfolio management<span> tool on the Ethereum Chain</span></h3>
            <div className='flex w-full px-4'><button className='flex-1 bg-silver-sand py-4'>Connect your Wallet </button></div>
            <div className='flex items-center gap-3 px-4'><hr className='flex-1 border-2'/>OR<hr className='flex-1 border-2'/></div>

            <div className='flex pr-4 bg-silver rounded-lg border-silver-sand border-4'><input type='text' placeholder='paste your wallet address' className='flex-1 py-4 rounded-l-lg text-black text-lg px-2'/><button className='px-2 text-center'>Go</button></div>
        </div>
    </div>
  )
}

export default PortfolioTracker