import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchBlogCategorieSlice } from '../../../Reducer/Slice/BlogCategorieSlice'
import { LineWave } from 'react-loader-spinner'
import { Link } from 'react-router-dom'

const Categorie = () => {
  const { blog_categorie } = useSelector((state) => state?.blogcategorie)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(FetchBlogCategorieSlice())
    console.log('c', blog_categorie);
  }, [])
  return (
    <>

      <h3 className="sidebar-title">Categories</h3>
      <div className="sidebar-item categories">
        <ul>


          {
            blog_categorie !== null ? (
              <>
                {
                  blog_categorie?.data?.map((item, key) => {
                    return (
                      <>
                        <li key={key + 1}><Link to={`/category/post/${item._id}`}>{item?.category} <span>{item?.category?.length}</span></Link></li>
                      </>
                    )
                  })
                }
              </>
            ) : (
              <>
                <div style={{ width: "100%", display: "flex", justifyContent: "center", }}>
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
            )
          }

        </ul>

      </div>


    </>
  )
}

export default Categorie