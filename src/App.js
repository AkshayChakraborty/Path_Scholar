import { Routes,Route, Navigate } from "react-router-dom";
import Header from "./Components/Common/Header";
import Footer from "./Components/Common/Footer";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import BlogDetails from "./Pages/BlogDetails";
import BlogComment from "./Components/Core/Blog/BlogComment";
import About from "./Pages/About";
import Courses from "./Pages/Courses";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import { check_token } from "./Reducer/Auth/AuthSlice";
import Contact from "./Pages/Contact";
import CategoryDetails from "./Pages/CategoryDetails";
import ApplyCourse from "./Pages/ApplyCourse";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import SearchData from "./Pages/SearchData";
import UserDashboard from "./Pages/UserDashboard";
// import CategoryDetails from "./Pages/CategoryDetails";

function App() {
  const dispatch=useDispatch();

  function PrivateRoute ({children}){
    const token=localStorage.getItem("token") || sessionStorage.getItem("token")
    return token !== null && token!== undefined ?(
      
      children
      
    ):(
      <Navigate to='/login' />
    )
  }

  //for Public Route
  const PublicRouteNames=[
    {
      path:'/login',
      component:<Login/>
    },
    {
      path:'/register',
      component:<Register/>
    },
    {
      path:'/',
      component:<Home/>
    },

    
  ];

  //for Private Route
  const PrivateRouteNames=[
    {
      path:'/',
      component:<Home/>
    },
    {
      path:'/blog',
      component:<Blog/>
    },
    
    {
      path:"/blogdetails/:id",
      component:<BlogDetails/>
    },
    {
      path:'/blogcomment/:id',
      component:<BlogComment/>
    },
    {
      path:'/about',
      component:<About/>
    },
    {
      path:'/courses',
      component:<Courses/>
    },
    {
      path:'/contact',
      component:<Contact/>
    },
    {
      path:'/category/post/:id',
      component:<CategoryDetails/>
    },
    {
      path:'/apply/:course/:id',
      component:<ApplyCourse/>
    },
    {
      path:'/search',
      component:<SearchData/>
    },
    {
      path:'/userdashboard',
      component:<UserDashboard/>
    }
  ]

  useEffect(()=>{
    dispatch(check_token())
  },[])
  return (
    <>
    
      <Header/>
      <ToastContainer />
      <Routes>
        
        {
          PublicRouteNames?.map((route,index)=>{
            return(
              <Route key={index +1} exact path={route.path} element={route?.component}/>
            )
          })
        }
        {/* {privet route} */}

        {
          PrivateRouteNames?.map((route,index)=>{
            return(
              <Route key={index+1} exact path={route.path} element={<PrivateRoute>{route?.component}</PrivateRoute>}/>
            )
          })
        }


      </Routes>
      <Footer/>
    
    </>
  );
}

export default App;
