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




function App() {

  const { t } = useTranslation()
  const [navStatus, setnavStatus] = useState(false);

  const navHandler = () => {
    setnavStatus(!navStatus)
  }

  return (
    <div className=" bg-mypurple flex flex-col pb-5 relative min-h-screen 2xl:max-w-7xl mx-auto overflow-hidden">
      <div>
        {t('DashBoard.Portfolio_Tracker_Text')}
      </div>
      <Router>
        {navStatus && <Overlay remove = {navHandler}/> }
      <Header show = {navHandler}/>
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
      <SideBar navstatus = {navStatus}/>
      </div>
    
      </Router>
    </div>
  );
}

export default App;
