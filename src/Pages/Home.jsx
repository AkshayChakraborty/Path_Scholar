import React from 'react'
import Carousel from '../Components/Core/Home/Carousel'
import AboutUs from '../Components/Core/Home/AboutUs'
import Servces from '../Components/Core/Home/Servces'
import Testimonials from '../Components/Core/Home/Testimonials'
import Clients from '../Components/Core/Home/Clients'

const Home = () => {
  return (
    <>

    {/* Carousel Section */}
    <Carousel/>

    <main id="main">

    {/* About Us Section */}
    <AboutUs/>

    {/* Services Section */}
    <Servces/>

    {/* Testimonials Section */}
    <Testimonials/>

    {/* Clients Section */}
    <Clients/>
    

    </main>
    
    </>
  )
}

export default Home