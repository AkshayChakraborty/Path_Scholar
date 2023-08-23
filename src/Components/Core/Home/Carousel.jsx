import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchCarouselSlice } from '../../../Reducer/HomeSlice/CarouselSlice'

const Carousel = () => {
  const{home_carousel}= useSelector((state)=>state?.homecarousel)
  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(FetchCarouselSlice())
  },[])
  console.log(home_carousel);
  return (
    <>
    
 {/* ======= Hero Section ======= */}
 <section id="hero">
  <div id="heroCarousel" className="carousel slide carousel-fade" data-ride="carousel">
              <div className="carousel-inner" role="listbox">
    
      {/* Slide 1 */}

      { home_carousel !== null ?(
        <>
        {
          home_carousel?.data?.bannerdata?.map((item,index)=>{
            return(
              <>
              
              <div className={`carousel-item ${index==0?'active': ''}`} style={{backgroundImage: `url(https://restapinodejs.onrender.com/api/banner/photo/${item?._id})`}}>
        <div className="carousel-container">
          <div className="carousel-content animate__animated animate__fadeInUp">
            <h2>Welcome to <span>{item?.title}</span></h2>
            <p>{item?.description}</p>
            <div className="text-center"><a href className="btn-get-started">Read More</a></div>
          </div>
        </div>
      </div>
      
      
              </>
            )
          })
        }
        </>
      ):(
        <>
        <h1>loading...</h1>
        </>
      )}
      
      
      {/* Slide 3 */}
      </div>
      <a className="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon icofont-simple-left" aria-hidden="true" />
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
      <span className="carousel-control-next-icon icofont-simple-right" aria-hidden="true" />
      <span className="sr-only">Next</span>
    </a>
    <ol className="carousel-indicators" id="hero-carousel-indicators" />
  </div>
</section>{/* End Hero */}
    
    

    
    </>
  )
}

export default Carousel