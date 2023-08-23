import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchServicesSlice } from '../../../Reducer/HomeSlice/ServicesSlice'
import { LineWave } from 'react-loader-spinner'

const Servces = () => {
  const { home_service } = useSelector((state) => state?.homeservice)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(FetchServicesSlice())
  }, [])
  console.log('ser', home_service);
  return (
    <>

      {/* ======= Services Section ======= */}
      <section id="services" className="services section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Services</h2>
            <p>Laborum repudiandae omnis voluptatum consequatur mollitia ea est voluptas ut</p>
          </div>
          <div className="row">

            {home_service !== null ? (
              <>
                {
                  home_service?.data?.data?.map((item) => {
                    return (
                      <>

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay={100}>
                          <div className="icon-box iconbox-yellow">
                            <div className="icon">
                              <svg width={100} height={100} viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                                <path stroke="none" strokeWidth={0} fill="#f5f5f5" d="M300,503.46388370962813C374.79870501325706,506.71871716319447,464.8034551963731,527.1746412648533,510.4981551193396,467.86667711651364C555.9287308511215,408.9015244558933,512.6030010748507,327.5744911775523,490.211057578863,256.5855673507754C471.097692560561,195.9906835881958,447.69079081568157,138.11976852964426,395.19560036434837,102.3242989838813C329.3053358748298,57.3949838291264,248.02791733380457,8.279543830951368,175.87071277845988,42.242879143198664C103.41431057327972,76.34704239035025,93.79494320519305,170.9812938413882,81.28167332365135,250.07896920659033C70.17666984294237,320.27484674793965,64.84698225790005,396.69656628748305,111.28512138212992,450.4950937839243C156.20124167950087,502.5303643271138,231.32542653798444,500.4755392045468,300,503.46388370962813" />
                              </svg>
                              <i className="bx bx-layer" />
                            </div>
                            <h4><a href>{item?.name}</a></h4>
                            <p>{item?.details.slice(0, 75)}</p>
                          </div>
                        </div>

                      </>
                    )
                  })
                }
              </>
            ) : (
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
      </section>{/* End Services Section */}


    </>
  )
}

export default Servces