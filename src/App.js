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
function App() {
  const [navStatus, setnavStatus] = useState(false);

  const navHandler = () => {
    setnavStatus(!navStatus)
  }

  return (
    <div className="bg-Navy-blue flex flex-col h-full pb-5 ">
      <Router>
        {navStatus && <Overlay remove = {navHandler}/> }
      <Header show = {navHandler}/>
      <div className="w-full flex-1 flex flex-row-reverse gap-10 sm:px-0 justify-center">
      <div className="flex-1 flex justify-center">
        <Routes>
      
      <Route element = {<DashBoard />}  path = "/"/>
     <Route element = {<PortfolioTracker />} path = "/portfolio-tracker" />
     <Route element = {<Token />} path='/token' />
     <Route element = {<WatchList /> } path = '/watch-list' />
     <Route element = {<MultiChart /> } path = '/multichart' />

      </Routes>
      </div>
      <SideBar navstatus = {navStatus}/>
      </div>
    
      </Router>
    </div>
  );
}

export default App;
