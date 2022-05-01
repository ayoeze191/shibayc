import React, { useState } from 'react'

import metamask from "./../Assets/metamask.png";

import conibaseWallet from "./../Assets/conibaseWallet.svg"
import fortmatic from "./../Assets/fortmatic.png"
import iconClose from "./../Assets/iconClose.svg"
import walletConnect from "./../Assets/walletConnect.svg"
import { BsArrowRight, BsArrowUpRight, BsArrowLeft } from "react-icons/bs"
import {AiOutlineClose, AiOutlineExclamationCircle} from "react-icons/ai"
const ConnectWallet = (props) => {
  const [showOrder, setshowOrder] = useState(false)
  const OrderHandler = () => {
    setshowOrder(!showOrder)
  }
  return (
    <div className='fixed bg-white shadow-lg text-black font-poppins-Regular h-[75vh] overflow-y-scroll w-[90%] max-w-md py-5 px-5 rounded-2xl transition-all z-10'  style={{
      transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
      opacity: props.show ? '1' : '0'
  }}>
       {!showOrder&& <div className='flex flex-col gap-6 w-full'>
            <div className='flex w-full justify-between  '><h3>Connect a Wallet</h3><div><AiOutlineClose fontSize={20} /> </div></div>
            <div className='w-full'>By connecting a wallet, you agree to Uniswap Labs’ <a className='text-mypurple' href="#"><span className='text-mypurple font-bold hover:underline'>Terms of Service</span></a> and acknowledge that you have read and understand the Uniswap <a className='text-mypurple font-bold hover:underline cursor-pointer'>Protocol Disclaimer.</a></div>
            <div className='flex w-full justify-between bg-[#edeef2] border border-slate-400 py-2 rounded-md px-3 items-center hover:border-d cursor-pointer'><h3>Install Metamask</h3> <div className='w-8'><img src={metamask} className = 'w-full'/></div> </div>
            <div className='flex w-full justify-between bg-[#edeef2] border border-slate-400 py-2 rounded-md px-3 items-center hover:border-d cursor-pointer'><h3>WalletConnect</h3> <div><img src={walletConnect} /></div></div>
            <div className='flex w-full justify-between bg-[#edeef2] border border-slate-400 py-3 rounded-md px-3 items-center hover:border-d cursor-pointer'><h3>Coinbase Wallet</h3> <div><img src={conibaseWallet} /></div></div>
            <div className='flex w-full justify-between bg-[#edeef2] border border-slate-400 py-2 rounded-md px-3 items-center hover:border-d cursor-pointer'><h3>Fortmatic</h3> <div className='w-8'><img src={fortmatic} className = 'w-full' /></div></div>
            <div className='flex justify-between w-full hover:bg-slate-200 hover:text-black cursor-pointer py-2 rounded-md px-3 items-center font-bold' onClick={() => OrderHandler()}><h3 >How this app uses APIs</h3><div><BsArrowRight color='black'/></div></div>
        </div>
}

        {showOrder&&<div className='flex flex-col gap-6 w-full'>
          <div className='flex justify-between px-3'><div className='w-[35%]'><BsArrowLeft onClick={() => OrderHandler()} className = 'cursor-pointer'/></div><h3 className='flex-1 text-left'>Legal & Privacy</h3></div>
        <div className='bg-d-light flex w-full justify-between py-2 px-3 items-center cursor-pointer rounded-3xl modalDiv'>
         <div className='flex gap-2 items-center'> <div><AiOutlineExclamationCircle color='#ffcc00'/></div> <h3 className='text-d'>Uniswap Labs Terms of service</h3></div> <div><BsArrowUpRight color='#ffcc00'/></div>
        </div>
        <div className='bg-d-light flex w-full justify-between py-2 px-3 items-center cursor-pointer rounded-3xl modalDiv'>
         <div className='flex gap-2 items-center'> <div><AiOutlineExclamationCircle color='#ffcc00'/></div> <h3 className='text-d'>Protocol Disclaimer</h3></div> <div><BsArrowUpRight color='#ffcc00'/></div>
        </div>
        <h3>This app uses the following third-party APIS:</h3>
        <div className='flex flex-col w-full px-3 items-center cursor-pointer py-3 bg-[#edeef2] rounded-3xl'>
          <p className='flex w-full items-center gap-2'><div className=''><AiOutlineExclamationCircle /></div> <h3>Auto Router</h3></p>
          <p>The app fetches the optimal trade route from a Uniswap Labs server</p>
        </div>

        <div className='flex flex-col w-full px-3 items-center cursor-pointer py-3 bg-[#edeef2] rounded-3xl'>
          <p className='flex w-full items-center gap-2'><div><AiOutlineExclamationCircle color='#ffcc00'/></div> <h3>Infura</h3></p>
          <p>The app fetches on-chain data and constructs contract calls with an infura API</p>
        </div>

        <div className='flex flex-col w-full px-3 items-center cursor-pointer py-3 bg-[#edeef2] rounded-3xl'>
          <p className='flex w-full items-center gap-2'><div><AiOutlineExclamationCircle color='#ffcc00'/></div> <h3>TRM Labs</h3></p>
          <p>The app securely collects your wallet address and shares it with TRM Labs Inc. fro risk and compliance reasons. <span className='text-mypurple hover:underline'>Learn More</span></p>
        </div>

        <div className='flex flex-col w-full px-3 items-center cursor-pointer py-3 bg-[#edeef2] rounded-3xl'>
          <p className='flex w-full items-center gap-2'><div><AiOutlineExclamationCircle color='#ffcc00'/></div> <h3>Google Analytics</h3></p>
          <p>The app logs anonymized usage statistics in order to improve over time</p>
        </div>
        <div className='flex flex-col w-full px-3 items-center cursor-pointer py-3 bg-[#edeef2] rounded-3xl'>
          <p className='flex w-full items-center gap-2'><div><AiOutlineExclamationCircle color='#ffcc00'/></div> <h3>The Graph</h3></p>
          <p>The app fetches blockchain data from The Graph's hosted service.</p>
        </div>

        <p className='text-mypurple hover:underline'>Learn more</p>
    
        </div>
        
}
    </div>
  )
}


export default ConnectWallet