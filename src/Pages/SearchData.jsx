import React from 'react'
import { useSearch } from '../Contex/Search';
import { Link } from 'react-router-dom';
import moment from 'moment/moment';
import Search from '../Components/Core/Blog/Search';
import Categorie from '../Components/Core/Blog/Categorie';
import RecentPosts from '../Components/Core/Blog/RecentPosts';
import { useState } from 'react';

const SearchData = () => {
  const [values, setValues] = useSearch()
  const [limit,setLimit]=useState(3);
  const loadMore=()=>{
    setLimit(limit+3)
}
  console.log(values);
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
                <li>Search</li>
              </ol>
            </div>
          </div>
        </section>

        <section id="blog" className="blog">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 entries">

                {values !== null ? (
                  <>
                    {values?.results?.slice(0,limit)?.map((item) => {
                      return (
                        <>
                          <div>
                            <article className="entry" data-aos="fade-up">
                              <div className="entry-img">
                                <img src={`https://restapinodejs.onrender.com/api/blog/image/${item._id}`} alt className="card-img-top" />
                              </div>
                              <h2 className="entry-title">{item?.title} </h2>
                              <div className="entry-meta">
                                <ul>
                                  <li className="d-flex align-items-center"><i className="icofont-user" /> <a href="blog-single.html">John Doe</a></li>
                                  <li className="d-flex align-items-center"><i className="icofont-wall-clock" /> <a href="blog-single.html"><time>{moment(item.createdAt).format(' Do MM, YYYY, h:mm:ss a')}</time></a></li>
                                  <li className="d-flex align-items-center"><i className="icofont-comment" /> <a href="blog-single.html">{item?.comment_count}</a></li>
                                </ul>
                              </div>
                              <div className="entry-content">
                                <p dangerouslySetInnerHTML={{
                                  __html: item?.postText.slice(0, 350)
                                }}>

                                </p>

                                <div src={`https://restapinodejs.onrender.com/api/comment/${item?._id}`} />
                                <div className="read-more">
                                  <Link to={`/blogdetails/${item._id}`}>Read More</Link>
                                </div>
                              </div>
                            </article>
                          </div>
                        </>
                      )
                    })}
                  </>
                ) : (
                  <>
                    <h1>loading....</h1>
                  </>
                )}
                <div className='text-center' style={{ width: "100%", display: 'flex', justifyContent: "center", paddingTop: '50px' }}>
                {values?.results?.length > limit ? (
                  <button className='btn btn-lg btn-success' onClick={loadMore}>Load More</button>
                ) : null}
              </div>


              </div>

               {/* <!-- ======= sidebar ======= --> */}

               <div className="col-lg-4">
                <div className="sidebar" data-aos="fade-left">
                  


                  {/* <!-- ======= Categories section ======= --> */}

                  <Categorie />



                  {/* <!-- ======= Recent Posts section ======= --> */}

                  <RecentPosts />





                </div>{/* End sidebar */}
              </div>{/* End blog sidebar */}
              
            </div>
          </div>
        </section>


      </main>

    </>
  )
}

export default SearchData