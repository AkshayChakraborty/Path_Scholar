import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchCoursesSlice } from '../Reducer/Courses/CoursesSlice'
import { Link } from 'react-router-dom'
import CoursesSkeleton from './Coursesskeleton'
import { useState } from 'react'

const Courses = () => {
  const { course_item } = useSelector((state) => state?.course)
  const dispatch = useDispatch()
  const [limit,setLimit]=useState(4);

  useEffect(() => {
    dispatch(FetchCoursesSlice())
  }, [])

  
  const loadMore=()=>{
    setLimit(limit+6)
}
  console.log(course_item);
  return (
    <>

      <main id="main">
        {/* ======= Breadcrumbs ======= */}
        <section id="breadcrumbs" className="breadcrumbs">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <h2>Courses</h2>
              <ol>
              <li><Link to="/">Home</Link></li>
                <li>Courses</li>
              </ol>
            </div>
          </div>
        </section>{/* End Breadcrumbs */}
        {/* ======= Pricing Section ======= */}
        <section id="pricing" className="pricing">
          <div className="container" data-aos="fade-up">
            <div className="row" >

              {course_item !== null ? (
                <>
                  {
                    course_item?.data?.Courses?.slice(0,limit)?.map((item) => {
                      return (
                        <>
                          <div className="col-lg-3 col-md-6 mt-4 mt-md-0">
                            <div className="box featured">
                              <h3>{item.name}</h3>
                              <div style={{width:'250px', height:'auto'}}>
                              <img src={`https://restapinodejs.onrender.com/api/course/photo/${item._id}`} style={{ width: "80%", height:'210px', objectFit:'cover', display:'flex',boxShadow:" 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)" }} className="img-fluid" alt />
                              </div>
                              
                              <h4><sup>₹</sup>{item.fees}<span> </span></h4>
                              <ul>
                                <li>{item.requirement}</li>
                                <li>{item.duration}</li>


                              </ul>
                              <div className="btn-wrap">
                                <Link to={`/apply/${item.name}/${item._id}`} className="btn-buy">Apply Course </Link>
                              </div>
                            </div>
                          </div>
                        </>
                      )
                    })
                  }
                </>
              ) : (
                <>
                <CoursesSkeleton/>
                <CoursesSkeleton/>
                <CoursesSkeleton/>
                <CoursesSkeleton/>
                </>
              )}


                    <div className='text-center' style={{width:"100%", display:'flex', justifyContent:"center",paddingTop:'50px'}}>
                    {course_item?.data?.Courses?.length > limit ? (
                                        <button className='btn btn-lg btn-success' onClick={loadMore}>Load More</button>
                                    ) : null}
                    </div>

            </div>
          </div>
        </section>{/* End Pricing Section */}
        {/* ======= Frequently Asked Questions Section ======= */}
        <section id="faq" className="faq section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Frequently Asked Questions</h2>
            </div>
            <div className="faq-list">
              <ul>
                <li data-aos="fade-up">
                  <i className="bx bx-help-circle icon-help" /> <a data-toggle="collapse" className="collapse" href="#faq-list-1">Non consectetur a erat nam at lectus urna duis? <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                  <div id="faq-list-1" className="collapse show" data-parent=".faq-list">
                    <p>
                      Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                    </p>
                  </div>
                </li>
                <li data-aos="fade-up" data-aos-delay={100}>
                  <i className="bx bx-help-circle icon-help" /> <a data-toggle="collapse" href="#faq-list-2" className="collapsed">Feugiat scelerisque varius morbi enim nunc? <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                  <div id="faq-list-2" className="collapse" data-parent=".faq-list">
                    <p>
                      Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                    </p>
                  </div>
                </li>
                <li data-aos="fade-up" data-aos-delay={200}>
                  <i className="bx bx-help-circle icon-help" /> <a data-toggle="collapse" href="#faq-list-3" className="collapsed">Dolor sit amet consectetur adipiscing elit? <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                  <div id="faq-list-3" className="collapse" data-parent=".faq-list">
                    <p>
                      Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                    </p>
                  </div>
                </li>
                <li data-aos="fade-up" data-aos-delay={300}>
                  <i className="bx bx-help-circle icon-help" /> <a data-toggle="collapse" href="#faq-list-4" className="collapsed">Tempus quam pellentesque nec nam aliquam sem et tortor consequat? <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                  <div id="faq-list-4" className="collapse" data-parent=".faq-list">
                    <p>
                      Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in.
                    </p>
                  </div>
                </li>
                <li data-aos="fade-up" data-aos-delay={400}>
                  <i className="bx bx-help-circle icon-help" /> <a data-toggle="collapse" href="#faq-list-5" className="collapsed">Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor? <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                  <div id="faq-list-5" className="collapse" data-parent=".faq-list">
                    <p>
                      Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>{/* End Frequently Asked Questions Section */}
      </main>{/* End #main */}


    </>
  )
}

export default Courses