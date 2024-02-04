import React from "react";
import Home from "./redux/Components/Home";
import Navbar from "./redux/Components/Navbar";
import Display from "./redux/Components/Display";
import { Routes,Route } from "react-router-dom";
import Userdeatails from "./redux/Components/Userdetails";
// import postreducers from "./redux/reducers/postreducers";
const App=()=>{
  return(
    <div>
    {/* <Navbar/> */}
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/display" element={<Display/>}/>
      <Route path="/userdetails" element={<Userdeatails/>}/>
    </Routes>
    </div>
  )
}
export default App