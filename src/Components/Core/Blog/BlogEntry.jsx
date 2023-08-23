import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchBlogSlice } from '../../../Reducer/Slice/BlogSlice'
import { Link } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import moment from 'moment/moment'
import ReactPaginate from 'react-paginate'

const BlogEntry = () => {
    const { blog_data } = useSelector((state) => state?.blogdata)
    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(2)

    useEffect(() => {
        dispatch(FetchBlogSlice())
    }, [])

    const handlePageClick = (selectedPage) => {
        setCurrentPage(selectedPage.selected + 1);
    }
   

    const indexOfLastPost = currentPage * postPerPage;
    const indexofFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = blog_data?.slice(indexofFirstPost, indexOfLastPost);

   

    console.log('b', blog_data);


    return (
        <>

            {blog_data !== null ? (

                <>
                 
                    {
                        currentPosts?.map((item, index) => {
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
                        })
                    }
                    <div className="blog-pagination">
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageCount={Math.ceil(blog_data?.length / postPerPage)}
                    previousLabel="< previous"
                    activeClassName={'active'}
                />
            </div>
                    
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
            {
                blog_data?.length === 0 && <p>No articles found!</p>
            }
            
            

        </>
    )
}

export default BlogEntry