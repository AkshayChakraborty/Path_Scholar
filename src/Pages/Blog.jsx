import React from 'react'
import BlogEntry from '../Components/Core/Blog/BlogEntry'
import Categorie from '../Components/Core/Blog/Categorie'
import RecentPosts from '../Components/Core/Blog/RecentPosts'
import Search from '../Components/Core/Blog/Search'
import { Link } from 'react-router-dom'

const Blog = () => {
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
        </section>


        {/* ======= Blog Section ======= */}
        <section id="blog" className="blog">
          <div className="container">
            <div className="row">

              {/* <!-- ======= blog entry ======= --> */}
              <div className="col-lg-8 entries">

                <BlogEntry />
                {/* End blog entry */}


              </div>{/* End blog entries list */}


              {/* <!-- ======= sidebar ======= --> */}

              <div className="col-lg-4">
                <div className="sidebar" data-aos="fade-left">

                  {/* <!-- ======= search section ======= --> */}
                  <h3 className="sidebar-title">Search</h3>
                  <Search />



                  {/* <!-- ======= Categories section ======= --> */}

                  <Categorie />



                  {/* <!-- ======= Recent Posts section ======= --> */}

                  <RecentPosts />





                </div>{/* End sidebar */}
              </div>{/* End blog sidebar */}
            </div>
          </div>
        </section>{/* End Blog Section */}




      </main>

    </>
  )
}

export default Blog