import React from "react";
import {useSelector } from "react-redux";
import { postRequest } from "../actions/postactions";
import { Link,NavLink } from "react-router-dom";
import Userdeatails from "./Userdetails";
import { useNavigate } from "react-router-dom";
const Display=()=>{ 
    const selectedpost = useSelector((state)=>state.selectedpost)
    const navigate = useNavigate()
    console.log(selectedpost);
    return(
    <div>
{
     selectedpost &&  (
<div>
<h1 className="navbar" style={{background:"#f05a22"}}>TravelMedia.in</h1>
<button onClick={()=>navigate(-1)}>Back</button>
        <button onClick={()=>navigate(1)}>Next</button> 
<h1 className="home-bodyh1">Post Number ID:{selectedpost.id}</h1>
        <div className="display-content">
       
            <div className="displaycontentimg">
        <img src={`https://picsum.photos/200?random=${selectedpost.id}`} alt={selectedpost.id} /></div>

        <div>
            <div className="navbar-content">
            
            < NavLink to="/display">Display</NavLink>
            <NavLink to="/userdetails">User Info</NavLink>
            < NavLink to="/">Home</NavLink>
                </div>
              <h1>{selectedpost.title}</h1>
              <p>{selectedpost.body}{selectedpost.body}{selectedpost.body}{selectedpost.body}{selectedpost.body}</p>
              </div>
              </div>

              <h1>More Posts</h1>
                <div  className="box-container">
                <div className="boxing">
                <img src={`https://picsum.photos/200?random=${parseInt(Math.random()*15)}`} alt={selectedpost.id} className="picdisplaylist" />
              <h1 className="h1list">{selectedpost.title}</h1>
              <p>{selectedpost.body}</p>
              </div>
              <div className="box">
                <img src={`https://picsum.photos/200?random=${parseInt(Math.random()*15)}`} alt={selectedpost.id} className="picdisplaylist"/>
              <h1 className="h1list">{selectedpost.title}</h1>
              <p>{selectedpost.body}</p>
              </div>
              <div className="box">
                <img src={`https://picsum.photos/200?random=${parseInt(Math.random()*15)}`} alt={selectedpost.id} className="picdisplaylist"/>
              <h1 className="h1list">{selectedpost.title}</h1>
              <p>{selectedpost.body}</p>
              </div>
              </div>
                   

              </div>
     )
}
    </div>
    )
}
export default Display