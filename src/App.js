import { useState } from "react";
import HomePage from "./Components/HomePage/HomePage";
import Header from "./Components/Ui/Header";
import SideBar from "./Components/Ui/SideBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashBoard from "./Components/DashBoard";
import Overlay from "./Components/Ui/Overlay";
function App() {
  const [navStatus, setnavStatus] = useState(false);

  const navHandler = () => {
    setnavStatus(!navStatus)
  }

  return (
    <div className="bg-Navy-Deep-Kaomaru  flex flex-col h-full relative">
      <Router>
        {navStatus && <Overlay remove = {navHandler}/> }
      <Header show = {navHandler}/>
      <div className="w-full flex-1 flex flex-row-reverse gap-10 px-6 sm:px-0">
      <div className="flex-1">
        <Routes>
      
      <Route element = {<DashBoard />}  path = "/"/>
     
      </Routes>
      </div>
      <SideBar navstatus = {navStatus}/>
      </div>
    
      </Router>
    </div>
  );
}

export default App;
