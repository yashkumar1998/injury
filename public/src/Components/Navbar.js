import React from 'react'
import { nav } from 'react-bootstrap';
import './Navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div >    
        <nav class="navbar navbar-expand-lg " id="main">
    <div class="container-fluid">
      
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-white" id="">
          
         
         
          
          {/* <li class="nav-item ">
            <a class="nav-link " href="#" > Dropdown
            </a>
             */}
          {/* </li> */}
          <li class="nav-item text-white" >
           <Link class="nav-link active" to="/">Home</Link>
          </li>
          <li class="nav-item text-white" >
            <Link class="nav-link active" to="/login">Login</Link>
          </li>
          <li class="nav-item text-white" >
            <Link  class="nav-link active" to="/register">Register</Link>
          </li>
          <li class="nav-item text-white" >
            <Link class="nav-link active" to="/injuries">Injuries_List</Link>
          </li>
          <li class="nav-item text-white" >
            <Link class="nav-link active" to="/injuriesForm">Injuries_Form</Link>
          </li>
         
        </ul>
        <form class="d-flex" role="search">
          
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
    </div>
  )
}

export default Navbar;