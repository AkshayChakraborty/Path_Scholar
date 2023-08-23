import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchTestimonialsSlice } from '../../../Reducer/HomeSlice/TestimonialsSlice'
import { Audio, LineWave } from 'react-loader-spinner'

const Testimonials = () => {
  const {home_testimonials}=useSelector((state)=>state?.hometestimonials)
  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(FetchTestimonialsSlice())
  },[])
  console.log('testi', home_testimonials);
  return (
    <>
  {/* ======= Testimonials Section ======= */}
<section id="testimonials" className="testimonials section-bg">
  <div className="container">
    <div className="section-title">
      <h2>Testimonials</h2>
      <p>Laborum repudiandae omnis voluptatum consequatur mollitia ea est voluptas ut</p>
    </div>
    <div className="row">
      
    {home_testimonials !== null ?(
      <>
      {home_testimonials?.data?.testimonials?.map((item)=>{
        return(
          <>
          
          <div className="col-lg-6 mt-4" data-aos="fade-up" data-aos-delay="100">
        <div className="testimonial-item  mt-lg-0">
          <img src={`https://restapinodejs.onrender.com/api/testimonials/photo/${item._id}`} className="testimonial-img" alt />
          <h3>{item.name}</h3>
          <h4>{item.position}</h4>
          <p>
            <i className="bx bxs-quote-alt-left quote-icon-left" />
            {item.talk}
            <i className="bx bxs-quote-alt-right quote-icon-right" />
          </p>
        </div>
      </div>

          </>
        )
      })
      }
      </>
    ):(
      <>
      <div style={{ width: "100%", display: "flex", justifyContent: "center", padding: "150px" }}>
                  <LineWave
                    height="100"
                    width="100"
                    color="#4fa94d"
                    ariaLabel="line-wave"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    firstLineColor=""
                    middleLineColor=""
                    lastLineColor=""
                  />
                </div>
      </>
    )}
      
      
      
      
      
    </div>
  </div>
</section>{/* End Testimonials Section */}

    </>
  )
}

export default Testimonials