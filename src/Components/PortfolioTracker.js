import React from "react";
import HeroImage from "./../Assets/heroImage.png";
import logo from "./../Assets/logo.png";
import { useTranslation } from 'react-i18next'
const PortfolioTracker = () => {
  const { t } = useTranslation()
  return (
    <div className="flex-1 w-full flex justify-center h-full font-poppins-Regular items-center sm:items-start">
      <div className="text-white h-fit bg-Navy-Torea-Bay w-4/5 sm:w-fit py-10 sm:px-10 flex flex-col gap-2 px-4 box-border bg-mypurple shadow-2xl">
        <div className="w-40 h-40 mx-auto">
          <img src={logo} className="w-full h-full " />
        </div>
        <h1 className=" text-3xl sm:text-5xl font-bold text-silver-sand flex flex-col text-center text-d">
        {t('DashBoard.porfolio-tracker_header')}{" "}
        </h1>
        <h3 className="text-center flex justify-center flex-col text-xl">
          The most successful portfolio management
          <span> tool on the Ethereum Chain</span>
        </h3>
        <div className="flex w-full px-4">
          <button className="flex-1 bg-d py-4 font-bold">
            Connect your Wallet{" "}
          </button>
        </div>
        <div className="flex items-center gap-3 px-4">
          <hr className="flex-1 border-2" />
          OR
          <hr className="flex-1 border-2" />
        </div>

        <div className="flex rounded-l-2xl w-11/12 border-silver border-4 flex-row sm:w-full mx-auto rounded-lg bg-d py-1 pl-1">
          <input
            type="text"
            placeholder="paste your wallet address"
            className="  py-4 rounded-l-lg text-black text-lg px-2 w-[85%] sm:w-[100%] border-2"
          />
          <button 
          className="px-4 text-center bg-d font-outfit-ExtraBold flex-1 rounded-sm"
          >
            Go
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioTracker;
