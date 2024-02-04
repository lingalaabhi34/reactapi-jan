import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clicked_post_api } from "../actions/postactions";
import { postRequest } from "../actions/postactions";
import axios from "axios";
import { Link,NavLink, useNavigate } from "react-router-dom";
import { Navigate} from "react-router-dom";
const Home = () => {
  const { loading, data, error, } = useSelector((state) => state);
  const dispatch = useDispatch();
//   const [postid, setpostid] = useState(""); // Fix 1: Use array destructuring
const navigate=useNavigate()
  useEffect(() => {
    dispatch(postRequest());
  }, []);

  return (
    <div className="home-body">
      <h1 className="navbar" style={{background:"#f05a22"}}>TravelMedia.in</h1> 
      <div className="headerpart">
      <h1 className="">Social Media For Travellers</h1>
      <div className="navbar-content">
          
        {/* <NavLink to="/Display"></NavLink> */}
        <NavLink to="/">Home</NavLink>
     < NavLink to="/display">Display</NavLink>
        </div>
      
      </div>

      {/* <h1 className="home-bodyh1">Social Media For Travellers</h1> */}
      
      <input type="text" placeholder="   Search here......" id="search-input" className="inputtag" />
      <button onClick={()=>navigate(-1)}>Back</button>
        <button onClick={()=>navigate(1)}>Next</button>
      {data.length > 0 && (
        <div className="box-container">
          {data.map((post) => (
            <div key={post.id}  className="box">
               <Link to="/display" onClick={() => dispatch(clicked_post_api(post))}  className="linktag">
              <img src={`https://picsum.photos/200?random=${post.id}`} alt={post.id} />
              <h1 className="h1list" >{post.title}</h1>
              <p className="list">{post.body}</p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
