// import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Navigate, useNavigate, Link } from 'react-router-dom'
import { logout } from '../../Reducer/Auth/AuthSlice';

const Header = () => {
  const { Logouttoggle } = useSelector((state) => state?.Auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const name = localStorage.getItem("name")
  const email = localStorage.getItem("email")

  const logoutUser = (e) => {
    e.preventDefault()
    dispatch(logout())
    navigate("/login")
  }
  return (
    <>

      {/* ======= Header ======= */}
      <div className="container">
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">
          <h1 className="logo mr-auto"><a href="index.html"><span>Path</span>Scholar</a></h1>
          {/* Uncomment below if you prefer to use an image logo */}
          
          {/* <a href="index.html" class="logo mr-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
          <nav className="navbar navbar-expand-lg navbar-light">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
           
                <ul ><NavLink to="/" style={{fontFamily:'Arial, Helvetica, sans-serif', color:'black'}}>Home</NavLink></ul>
              <ul><NavLink to="/about" style={{fontFamily:'Arial, Helvetica, sans-serif', color:'black'}}>About</NavLink>
              </ul>
              <ul><NavLink to="/courses" style={{fontFamily:'Arial, Helvetica, sans-serif', color:'black'}}>Courses</NavLink></ul>
              <ul><NavLink to="/blog" style={{fontFamily:'Arial, Helvetica, sans-serif', color:'black'}}>Blog</NavLink></ul>
              <ul><NavLink to="/contact" style={{fontFamily:'Arial, Helvetica, sans-serif', color:'black'}}>Contact</NavLink></ul>
              {Logouttoggle ? (
                <>

                  {/* <li><NavLink >Hi...{name}</NavLink></li> */}
                  
                    <ul>
                    <div className="dropdown">
                      
                      <a className=" dropdown-toggle"
                        href="/"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                        </svg>
                      </a>

                      <div style={{ textAlign: "center", marginRight: "70px" }} className="dropdown-menu">
                        <li >
                          {name}
                        </li>
                        <NavLink className="dropdown-item" aria-labelledby="dropdownMenuButton" to={"/userdashboard"}>
                          <b>User Details</b>
                        </NavLink>
                        <NavLink   onClick={logoutUser} >Logout</NavLink>
                      </div>
                    </div>
                  
                    </ul>
                </>
              ) : (
                <>
                  <ul><NavLink to='/login'>Login</NavLink></ul>
                </>
              )}

          </div>
            </div>
          </nav>{/* .nav-menu */}
          <div className="header-social-links">
            <a href="#" className="twitter"><i className="icofont-twitter" /></a>
            <a href="#" className="facebook"><i className="icofont-facebook" /></a>
            <a href="#" className="instagram"><i className="icofont-instagram" /></a>
            <a href="#" className="linkedin"><i className="icofont-linkedin" /></a>
          </div>
        </div>
      </header>{/* End Header */}
      </div>

    </>
  )
}

export default Header