import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchTeamSlice } from '../Reducer/About/TeamSlice'
import { Link } from 'react-router-dom'

const About = () => {
    const {about_team}=useSelector((state)=> state?.aboutteam)
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(FetchTeamSlice())
    },[])
    console.log('team', about_team);
  return (
    <>
    
    <main id="main">
  {/* ======= Breadcrumbs ======= */}
  <section id="breadcrumbs" className="breadcrumbs">
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
        <h2>About</h2>
        <ol>
        <li><Link to="/">Home</Link></li>
          <li>About</li>
        </ol>
      </div>
    </div>
  </section>{/* End Breadcrumbs */}
  {/* ======= About Us Section ======= */}
  <section id="about-us" className="about-us">
    <div className="container" data-aos="fade-up">
      <div className="row content">
        <div className="col-lg-6" data-aos="fade-right">
          <h2>Eum ipsam laborum deleniti velitena</h2>
          <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assum perenda sruen jonee trave</h3>
        </div>
        <div className="col-lg-6 pt-4 pt-lg-0" data-aos="fade-left">
          <p>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
          <ul>
            <li><i className="ri-check-double-line" /> Ullamco laboris nisi ut aliquip ex ea commodo consequa</li>
            <li><i className="ri-check-double-line" /> Duis aute irure dolor in reprehenderit in voluptate velit</li>
            <li><i className="ri-check-double-line" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in</li>
          </ul>
          <p className="font-italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.
          </p>
        </div>
      </div>
    </div>
  </section>{/* End About Us Section */}



  {/* ======= Our Team Section ======= */}
  <section id="team" className="team section-bg">
    <div className="container">
      <div className="section-title" data-aos="fade-up">
        <h2>Our <strong>Team</strong></h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>
      <div className="row">
        
    {about_team !== null ?(
        <>
        {
            about_team?.data?.TeamMember?.map((item)=>{
                return(
                    <>
                    <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
          <div className="member" data-aos="fade-up" data-aos-delay={100}>
            <div className="member-img">
              <img src={`https://restapinodejs.onrender.com/api/team/photo/${item._id}`} className="img-fluid" alt />
              <div className="social">
                <a href><i className="icofont-twitter" /></a>
                <a href><i className="icofont-facebook" /></a>
                <a href><i className="icofont-instagram" /></a>
                <a href><i className="icofont-linkedin" /></a>
              </div>
            </div>
            <div className="member-info">
              <h4>{item.name}</h4>
              <span>{item.possession}</span>
            </div>
          </div>
        </div>
                    </>
                )
            })
        }
        </>
    ):(
        <></>
    )}
        
        
       
      </div>
    </div>
  </section>{/* End Our Team Section */}
</main>{/* End #main */}


    </>
  )
}

export default About