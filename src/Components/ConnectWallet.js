import React from 'react'

import metamask from "./../Assets/metamask.png";

import conibaseWallet from "./../Assets/conibaseWallet.svg"
import fortmatic from "./../Assets/fortmatic.png"
import iconClose from "./../Assets/iconClose.svg"
import walletConnect from "./../Assets/walletConnect.svg"
const ConnectWallet = (props) => {
  return (
    <div className='fixed bg-white shadow-lg text-black font-poppins-Regular w-4/6 max-w-lg py-5 px-5 rounded-2xl transition-all z-10 h-[80vh]'  style={{
      transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
      opacity: props.show ? '1' : '0'
  }}>
        <div className='flex flex-col gap-6 w-full'>
            <div className='flex w-full justify-between  '><h3>Connect a Wallet</h3><div><img src={iconClose} /> </div></div>
            <div className='w-full'>By connecting a wallet, you agree to Uniswap Labs’ <a className='text-mypurple' href="#"><span className='text-mypurple font-bold hover:underline'>Terms of Service</span></a> and acknowledge that you have read and understand the Uniswap <a className='text-mypurple font-bold hover:underline cursor-pointer'>Protocol Disclaimer.</a></div>
            <div className='flex w-full justify-between bg-slate-300 border border-slate-400 py-2 rounded-md px-3 items-center hover:border-d cursor-pointer'><h3>Install Metamask</h3> <div className='w-8'><img src={metamask} className = 'w-full'/></div> </div>
            <div className='flex w-full justify-between bg-slate-300 border border-slate-400 py-2 rounded-md px-3 items-center hover:border-d cursor-pointer'><h3>WalletConnect</h3> <div><img src={walletConnect} /></div></div>
            <div className='flex w-full justify-between bg-slate-300 border border-slate-400 py-3 rounded-md px-3 items-center hover:border-d cursor-pointer'><h3>Coinbase Wallet</h3> <div><img src={conibaseWallet} /></div></div>
            <div className='flex w-full justify-between bg-slate-300 border border-slate-400 py-2 rounded-md px-3 items-center hover:border-d cursor-pointer'><h3>Fortmatic</h3> <div className='w-8'><img src={fortmatic} className = 'w-full' /></div></div>
            <div className=''><h3 >How this app uses APIs</h3></div>
        </div>

        <div>
        <div className='flex w-full justify-between  '><h3>Connect a Wallet</h3><div><img src={iconClose} /> </div></div>
            <div className='w-full'>By connecting a wallet, you agree to Uniswap Labs’ <a className='text-mypurple' href="#"><span className='text-mypurple font-bold hover:underline'>Terms of Service</span></a> and acknowledge that you have read and understand the Uniswap <a className='text-mypurple font-bold hover:underline cursor-pointer'>Protocol Disclaimer.</a></div>
            <div className='flex w-full justify-between bg-slate-300 border border-slate-400 py-2 rounded-md px-3 items-center hover:border-d cursor-pointer'><h3>Install Metamask</h3> <div className='w-8'><img src={metamask} className = 'w-full'/></div> </div>
            <div className='flex w-full justify-between bg-slate-300 border border-slate-400 py-2 rounded-md px-3 items-center hover:border-d cursor-pointer'><h3>WalletConnect</h3> <div><img src={walletConnect} /></div></div>
            <div className='flex w-full justify-between bg-slate-300 border border-slate-400 py-3 rounded-md px-3 items-center hover:border-d cursor-pointer'><h3>Coinbase Wallet</h3> <div><img src={conibaseWallet} /></div></div>
            <div className='flex w-full justify-between bg-slate-300 border border-slate-400 py-2 rounded-md px-3 items-center hover:border-d cursor-pointer'><h3>Fortmatic</h3> <div className='w-8'><img src={fortmatic} className = 'w-full' /></div></div>
            <div className=''><h3 >How this app uses APIs</h3></div>
        </div>
    </div>
  )
}


export default ConnectWallet