import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
// import { FetchCategoryDetails } from '../Reducer/Slice/CatDetailsSlice';
import { ThreeCircles } from 'react-loader-spinner';
import { FetchCategoryDetails } from '../Reducer/Slice/CatDetailsSlice';
import Search from '../Components/Core/Blog/Search';
import Categorie from '../Components/Core/Blog/Categorie';
import RecentPosts from '../Components/Core/Blog/RecentPosts';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import moment from 'moment/moment';

const CategoryDetails = () => {
    const { categoryDetails_data,status } = useSelector((state) => state?.catdetailsData);
    const dispatch = useDispatch();
    const { id } = useParams()

    useEffect(() => {
        dispatch(FetchCategoryDetails(id))
    }, [id])

    console.log("cat", categoryDetails_data);

    return (
        <>
          


            <main id="main">
                <section id="breadcrumbs" class="breadcrumbs">
                    <div class="container">

                        <div class="d-flex justify-content-between align-items-center pt-3">
                            <h2>Category Details</h2>
                            <ol>
                            <li><Link to="/">Home</Link></li>
                                <li>Category</li>
                            </ol>
                        </div>
                    </div>
                </section>


                <section id="blog" className="blog">
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-8 entries">

                            {categoryDetails_data !== null && categoryDetails_data !== '' && categoryDetails_data !== undefined && status === 'success' ? (

                                <>
                                   
                                        {categoryDetails_data?.map((item, index) => {
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
                                    <div>
                        <article className="entry" data-aos="fade-up">
                            <div className="entry-img">
                                <Skeleton height={300} />
                                {/* <img src="http://via.placeholder.com/640x360" alt className="img-fluid" /> */}
                            </div>
                            <h2 className="entry-title">
                                
                                <a href="blog-single.html"><Skeleton /></a>
                            </h2>
                            <div className="entry-meta">
                                <ul>
                                    <li className="d-flex align-items-center"> <a href="blog-single.html"><Skeleton circle={true} height={50} width={50} /></a></li>
                                    <li className="d-flex align-items-center"> <a href="blog-single.html"><time dateTime="2020-01-01"><Skeleton /></time></a></li>
                                    <li className="d-flex align-items-center"> <a href="blog-single.html"><Skeleton /></a></li>
                                </ul>
                            </div>
                            <div className="entry-content">
                                <p>
                                    <Skeleton />
                                </p>
                                {/* <div className="read-more">
                                    <a href="blog-single.html"><Skeleton /></a>
                                </div> */}
                            </div>
                        </article>{/* End blog entry */}
                    </div>
                                </>
                            )}

                            </div>

                             {/* <!-- ======= sidebar ======= --> */}

                             <div className="col-lg-4">
                                        <div className="sidebar" data-aos="fade-left">

                                            {/* <!-- ======= search section ======= --> */}
                                            <Search />



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

export default CategoryDetails