import React from 'react'
import Skeleton from 'react-loading-skeleton'

const CoursesSkeleton = () => {
    return (
        <>

            <div className="col-lg-3 col-md-6 mt-4 mt-md-0">
                <div >
                    <h3><Skeleton/></h3>
                    <Skeleton height={300} />
                    <h4><sup></sup><Skeleton/><span> </span></h4>
                    <ul>
                        <li><Skeleton/></li>
                        <li><Skeleton/></li>


                    </ul>
                    <div className="btn-wrap">
                    <Skeleton/>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CoursesSkeleton