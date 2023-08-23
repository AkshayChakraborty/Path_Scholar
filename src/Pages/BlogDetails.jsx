import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Categorie from '../Components/Core/Blog/Categorie'
import RecentPosts from '../Components/Core/Blog/RecentPosts'
import { FetchBlogDetails } from '../Reducer/Slice/BlogDetailsSlice'
import { Link, useParams } from 'react-router-dom'
import Search from '../Components/Core/Blog/Search'
import { RotatingTriangles } from 'react-loader-spinner'
import moment from 'moment/moment'
import BlogComment from '../Components/Core/Blog/BlogComment'


const BlogDetails = () => {
  const { blog_details } = useSelector((state) => state?.blogdetails)
  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    dispatch(FetchBlogDetails(id))
  }, [id])
  console.log('d', blog_details);
  return (
    <>

      <main id="main">
        {/* ======= Breadcrumbs ======= */}
        <section id="breadcrumbs" className="breadcrumbs">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <h2>Blog</h2>
              <ol>
              <li><Link to="/">Home</Link></li>
                <li>Blog</li>
              </ol>
            </div>
          </div>
        </section>{/* End Breadcrumbs */}
        {/* ======= Blog Section ======= */}
        <section id="blog" className="blog">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 entries">
                {blog_details !== null ? (
                  <>
                    <article className="entry entry-single" data-aos="fade-up">
                      <div className="entry-img">
                        <img src={`https://restapinodejs.onrender.com/api/blog/image/${blog_details?._id}`} className="card-img-top" alt="..." />
                      </div>
                      <h2 className="entry-title">
                        <a href="blog-single.html">{blog_details?.title}</a>
                      </h2>
                      <div className="entry-meta">
                        <ul>
                          <li className="d-flex align-items-center"><i className="icofont-user" /> <a href="blog-single.html">John Doe</a></li>
                          <li className="d-flex align-items-center"><i className="icofont-wall-clock" /> <a href="blog-single.html"><time>{moment(blog_details.createdAt).format(' Do MM, YYYY, h:mm:ss a')}</time></a></li>
                          <li className="d-flex align-items-center"><i className="icofont-comment" /> <a href="blog-single.html">12 Comments</a></li>
                        </ul>
                      </div>
                      <div className="entry-content">
                        <p dangerouslySetInnerHTML={{
                          __html: blog_details?.postText
                        }}>

                        </p>

                        
                        
                      </div>
                      <div className="entry-footer clearfix">
                        <div className="float-left">
                          <i className="icofont-folder" />
                          <ul className="cats">
                            <li><a href="#">Business</a></li>
                          </ul>
                          <i className="icofont-tags" />
                          <ul className="tags">
                            <li><a href="#">Creative</a></li>
                            <li><a href="#">Tips</a></li>
                            <li><a href="#">Marketing</a></li>
                          </ul>
                        </div>
                        <div className="float-right share">
                          <a href title="Share on Twitter"><i className="icofont-twitter" /></a>
                          <a href title="Share on Facebook"><i className="icofont-facebook" /></a>
                          <a href title="Share on Instagram"><i className="icofont-instagram" /></a>
                        </div>
                      </div>
                    </article>{/* End blog entry */}

                        <BlogComment/>
                    
                    {/* End blog comments */}
                  </>
                ) : (
                  <>
                  <div style={{ width: "100%", display: "flex", justifyContent: "center", padding: "150px" }}>
                  <RotatingTriangles
                      visible={true}
                      height="80"
                      width="80"
                      ariaLabel="rotating-triangels-loading"
                      wrapperStyle={{}}
                      wrapperClass="rotating-triangels-wrapper"
                    />
                  </div>
                    
                  </>
                )}
              </div>
              {/* End blog entries list */}

              {/* <!-- ======= sidebar ======= --> */}

              <div className="col-lg-4">
                <div className="sidebar" data-aos="fade-left">

                  {/* <!-- ======= search section ======= --> */}
                  <Search />
                  {/* End sidebar search formn*/}


                  {/* <!-- ======= Categories section ======= --> */}

                  <Categorie />
                  {/* End sidebar categories*/}


                  {/* <!-- ======= Recent Posts section ======= --> */}

                  <RecentPosts />

                  {/* End sidebar recent posts*/}



                </div>{/* End sidebar */}
              </div>{/* End blog sidebar */}
              {/* End blog sidebar */}

            </div>
          </div>
        </section>{/* End Blog Section */}
      </main>{/* End #main */}


    </>
  )
}

export default BlogDetails