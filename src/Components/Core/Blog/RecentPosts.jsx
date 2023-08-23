import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchBlogRecentSlice } from '../../../Reducer/Slice/BlogRecentSlice'
import { Link } from 'react-router-dom'
import { Discuss } from 'react-loader-spinner'
import moment from 'moment/moment'

const RecentPosts = () => {
    const { blog_recent } = useSelector((state) => state?.blogrecent)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(FetchBlogRecentSlice())
    }, [])
    console.log(blog_recent);
    return (
        <>
            <h3 className="sidebar-title">Recent Posts</h3>
            {/* End sidebar categories*/}

            {blog_recent !== null ? (
                <>
                    <div className="sidebar-item recent-posts">
                        {
                            blog_recent?.data?.map((item, index) => {
                                return (
                                    <>
                                        <div className="post-item clearfix">
                                            <img src={`https://restapinodejs.onrender.com/api/blog/image/${item._id}`} className="card-img-top" alt="..." />
                                            <h4><Link to={`/blogdetails/${item._id}`}>{item.title}</Link></h4>
                                            <time>{moment(item.createdAt).format(' Do MM, YYYY, h:mm:ss a')}</time>
                                        </div>

                                    </>
                                )
                            })
                        }
                    </div>
                </>
            ) : (
                <>
                    <div >
                        <Discuss
                            visible={true}
                            height="80"
                            width="80"
                            ariaLabel="comment-loading"
                            wrapperStyle={{}}
                            wrapperClass="comment-wrapper"
                            color="#fff"
                            backgroundColor="#F4442E"
                        />
                    </div>
                </>
            )}

        </>
    )
}

export default RecentPosts