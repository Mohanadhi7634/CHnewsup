import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const NavBar = () => {
   const navigate = useNavigate();

  const addNews = () => {
     navigate("/admin")
   };
  return (
    <div>
            <nav class="navbar navbar-expand-lg container-fluid fixed-top ">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-brand" >
    <h3  href="#">CAM News</h3>
    </div>
    

    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav  mb-2 mb-lg-0 ">
        <li class="nav-item">
          <NavLink to='/'  className="nav-link" >Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink onClick={  window.scrollTo({top:0, behaviour:'smooth' })}  to='/politics' className="nav-link" >அரசியல்</NavLink>
        </li>
        <li class="nav-item">
          <NavLink onClick={  window.scrollTo({top:0, behaviour:'smooth' })} to='/crime' className="nav-link" >குற்றம்</NavLink>
        </li>
        <li class="nav-item">
          <NavLink onClick={  window.scrollTo({top:0, behaviour:'smooth' })} to='/tech' className="nav-link" >டெக்னாலஜி</NavLink>
        </li>
        <li class="nav-item">
          <NavLink onClick={  window.scrollTo({top:0, behaviour:'smooth' })} to='/sports'className="nav-link" >விளையாட்டு</NavLink>
        </li>
        <li class="nav-item">
          <NavLink onClick={  window.scrollTo({top:0, behaviour:'smooth' })} to='/cinema'className="nav-link" >சினிமா</NavLink>
        </li>
        <li class="nav-item">
          <NavLink onClick={  window.scrollTo({top:0, behaviour:'smooth' })} to='/health'className="nav-link" >ஆரோக்கியம்</NavLink>
        </li>
      </ul>
      <button onClick={addNews}>Add News</button>
   </div>   
     
  </div>
  
  
</nav>



    </div>
  )
}
