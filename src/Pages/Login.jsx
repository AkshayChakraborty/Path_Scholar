import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { RegLog, loginRequest } from '../Reducer/Auth/AuthSlice';
import { toast } from 'react-toastify';

const initialValue={
  email:'',
  password:''
}
const Login = () => {
  const [user,setUser]=useState(initialValue)
  const [error,setError]=useState({})
  const [loading, setLoading] = useState(false);
  const {redirectTo}=useSelector((state)=> state?.Auth)
  const dispatch=useDispatch()
  const navigate=useNavigate()

   //form validation
   const validation = () => {
    let error = {}
    if (!user.email) {
        error.email = "Email is Required"
    } else if (
        !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(user.email)
    ) {
        error.email = "Enter a valid Email"
    }
    if (!user.password) {
        error.password = "Password is Required"
    }
    return error
}
//onchange validation
let name, value
const postUserData = (e) => {
    name = e.target.name
    value = e.target.value
    setUser({ ...user, [name]: value })
    if (name === "email") {
        if (value.length === 0) {
            setError({ ...error, email: "Email is required" })
            setUser({ ...user, email: "" })
        } else {
            setError({ ...error, email: "" })
            setUser({ ...user, email: value })
        }
    }
    if (name === "password") {
        if (value.length === 0) {
            setError({ ...error, password: "@password is Required" })
            setUser({ ...user, password: "" })
        } else {
            setError({ ...error, password: "" })
            setUser({ ...user, password: value })
        }
    }
}

    const SubmitInfo=async(e)=>{
      e.preventDefault()
      setLoading(true);
      let ErrorList=validation()
      setError(ErrorList)
      let data={
        "email":user.email,
        "password":user.password
      }
      dispatch(loginRequest(data))
      
    }

    const redirectUser=()=>{
      // setLoading(true);
      let token=localStorage.getItem("token")
      let isInLoginPage=window.location.pathname.toLowerCase()==='/login'
      if(token!== null && token!== undefined && token!==""){
        isInLoginPage && navigate('/')
      } 
    }
 
    useEffect(()=>{
      
      redirectUser()
    },[redirectTo])

    const log =()=>{
      dispatch(RegLog())
    }


    return (
        <>

            <main id="main">
                {/* ======= Breadcrumbs ======= */}
                <section id="breadcrumbs" className="breadcrumbs">
                    <div className="container">
                        <div className="d-flex justify-content-between align-items-center">
                            <h2>Login</h2>
                            <ol>
                            <li><Link to="/">Home</Link></li>
                                <li>Login</li>
                            </ol>
                        </div>
                    </div>
                </section>
                
                {/* Section: Design Block */}
<section className="background-radial-gradient overflow-hidden">
  <style dangerouslySetInnerHTML={{__html: "\n    .background-radial-gradient {\n      background-color: hsl(218, 41%, 15%);\n      background-image: radial-gradient(650px circle at 0% 0%,\n          hsl(218, 41%, 35%) 15%,\n          hsl(218, 41%, 30%) 35%,\n          hsl(218, 41%, 20%) 75%,\n          hsl(218, 41%, 19%) 80%,\n          transparent 100%),\n        radial-gradient(1250px circle at 100% 100%,\n          hsl(218, 41%, 45%) 15%,\n          hsl(218, 41%, 30%) 35%,\n          hsl(218, 41%, 20%) 75%,\n          hsl(218, 41%, 19%) 80%,\n          transparent 100%);\n    }\n\n    #radius-shape-1 {\n      height: 220px;\n      width: 220px;\n      top: -60px;\n      left: -130px;\n      background: radial-gradient(#44006b, #ad1fff);\n      overflow: hidden;\n    }\n\n    #radius-shape-2 {\n      border-radius: 38% 62% 63% 37% / 70% 33% 67% 30%;\n      bottom: -60px;\n      right: -110px;\n      width: 300px;\n      height: 300px;\n      background: radial-gradient(#44006b, #ad1fff);\n      overflow: hidden;\n    }\n\n    .bg-glass {\n      background-color: hsla(0, 0%, 100%, 0.9) !important;\n      backdrop-filter: saturate(200%) blur(25px);\n    }\n  " }} />
  <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
    <div className="row gx-lg-5 align-items-center mb-5">
      <div className="col-lg-6 mb-5 mb-lg-0" style={{zIndex: 10}}>
        <h1 className="my-5 display-5 fw-bold ls-tight" style={{color: 'hsl(218, 81%, 95%)'}}>
          Login : <br />
          <span style={{color: 'hsl(218, 81%, 75%)'}}>for your future</span>
        </h1>
        <p className="mb-4 opacity-70" style={{color: 'hsl(218, 81%, 85%)'}}>
        Fill the following form to lohin into your account and get access to apply for any course and post comment.
        </p>
      </div>
      <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
        <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong" />
        <div id="radius-shape-2" className="position-absolute shadow-5-strong" />
        <div className="card bg-glass">
          <div className="card-body px-4 py-5 px-md-5">
            <form>
            
              {/* Email input */}
              <div className="form-outline mb-4">
                <input type="email" id="form3Example3" className="form-control" name="email"  value={user.email}
                                            onChange={e => postUserData(e)} placeholder='Email address'/>
                <span style={{ color: "red" }}> {error.email} </span>
              </div>
              {/* Password input */}
              <div className="form-outline mb-4">
                <input type="password" id="form3Example4" className="form-control" name="password"  value={user.password}
                                            onChange={e => postUserData(e)} placeholder='Password' />
               <span style={{ color: "red" }}> {error.password} </span>
              </div>            
             
              {/* Submit button */}
              {/* <button type="submit" onClick={SubmitInfo} className="btn btn-primary btn-block mb-4" >
                Sign in
              </button> */}
              {/* Register buttons */}
              {loading ? <><div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    class="btn btn-primary btn-lg"
                    type="button"
                    disabled
                    style={{
                      paddingLeft: "2.5rem",
                      paddingRight: "2.5rem",
                    }}
                  >
                    <span
                      class="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Loading...
                  </button>
                  {/* <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to={"/register"} className="link-danger">Register</Link></p> */}
                </div></> : <><div className="text-center text-lg-start mt-4 pt-2">
                  <button onClick={SubmitInfo} type="button" className="btn btn-primary btn-lg" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>Login</button>
                  {/* <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to={"/register"} className="link-danger">Register</Link></p> */}
                </div></>}
              
            </form>
            Yet not registered?<Link onClick={log} to="/register"> click here</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Section: Design Block */}






            </main>

        </>
    )
}

export default Login