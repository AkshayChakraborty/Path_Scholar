import React from 'react'
import img1 from './details.jpg'
import { Link } from 'react-router-dom'

const UserDashboard = () => {
    const name = localStorage.getItem("name")
    const email=localStorage.getItem("email")
    
    const phone=localStorage.getItem("mobile")
  return (
    <>
    
    <main id="main">
        {/* ======= Breadcrumbs ======= */}
  <section id="breadcrumbs" className="breadcrumbs">
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
        <h2>Details</h2>
        <ol>
          <li><Link to="/">Home</Link></li>
          <li>Details</li>
        </ol>
      </div>
    </div>
  </section>{/* End Breadcrumbs */}
  <div style={{ paddingTop: '180px',paddingBottom:'150px', background: `url(${img1})` }} >
                {/* <div className="row">  */}
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="card-wrap">
                    <div className="card mb-3" style={{ maxWidth: '640px' }}>
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                {/* <img style={{ width: '100%' }} src="assets/img/testimonials/testimonials-2.jpg" alt="..." /> */}

                            </div>
                            <div className="col-md-12 card-bg">
                                <div style={{ textAlign: 'left' }} className="card-body ">
                                    <h2 className="card-title">Name : {name.toUpperCase()}</h2>
                                    <hr />
                                    <p className="card-text">Email : {email}</p>
                                    <p className="card-text">Phone : {phone}</p>
                                    

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </main>
    
    </>
  )
}

export default UserDashboard