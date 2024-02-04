import React from "react";
import { Link,NavLink } from "react-router-dom";
const Navbar=()=>{
    return (
        <div className="navbar-content">
                 {/* <h1 className="navbar">TravelMedia.in</h1> */}
        {/* <NavLink to="/Display"></NavLink> */}
        <NavLink to="/">Home</NavLink>
     < NavLink to="/display">Display</NavLink>
     <NavLink to="/userdetails">Userdeatails</NavLink>
        </div>
    )
}
export default Navbar