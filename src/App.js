import { useState } from "react";
import HomePage from "./Components/HomePage/HomePage";
import Header from "./Components/Ui/Header";
import SideBar from "./Components/Ui/SideBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashBoard from "./Components/DashBoard";
import Overlay from "./Components/Ui/Overlay";
import PortfolioTracker from "./Components/PortfolioTracker";
import Token from "./Components/tokens";
import WatchList from "./Components/WatchList";
import MultiChart from "./Components/MultiChart";
import BuyCrpto from "./Components/BuyCrypto";
import {useTranslation} from "react-i18next";
import ConnectWallet from "./Components/ConnectWallet";




function App() {

  const { t } = useTranslation()
  const [navStatus, setnavStatus] = useState(false);
  const [ConnectStatus, setConnectStatus] = useState(false)
  const [Overlaystatus, setOverlayStatus] = useState(false)

  const navHandler = () => {
    setnavStatus(!navStatus)
    setOverlayStatus(!Overlaystatus)
  }
  const ConnectHandler = () => {
    setConnectStatus(!ConnectStatus)
    setOverlayStatus(!Overlaystatus)
  }
  const OverlayHandler = () => {
      setOverlayStatus(false)
      setConnectStatus(false)
      setnavStatus(false)
  }



  return (
    <div className=" bg-mypurple flex flex-col pb-5 relative h-full min-h-screen 2xl:max-w-7xl mx-auto justify-center">
      
      {/* <div>
        {t('DashBoard.Portfolio_Tracker_Text')}
      </div> */}
      <Router>
        {navStatus && <Overlay remove = {OverlayHandler} showSmallOnly = {true}/>}
        {ConnectStatus && <Overlay remove = {OverlayHandler}/> }
        
      <Header show = {navHandler}  showConnect = {ConnectHandler}/>
      <div className="w-full flex-1 flex flex-row-reverse gap-10 sm:px-0 justify-center relative">
      <div className="flex-1 flex justify-center">
        <Routes>
      
      <Route element = {<DashBoard />}  path = "/"/>
     <Route element = {<PortfolioTracker />} path = "/portfolio-tracker" />
     <Route element = {<Token />} path='/token' />
     <Route element = {<WatchList /> } path = '/watch-list' />
     <Route element = {<MultiChart /> } path = '/multichart' />
     <Route element = {<BuyCrpto /> } path = '/BuyCrpto' />


      </Routes>
      </div>
      <SideBar navstatus = {navStatus} show = {navHandler}/>
      <ConnectWallet show = {ConnectStatus} handler = {OverlayHandler}/>
      </div>
      </Router>
    </div>
  );
}

export default App;
