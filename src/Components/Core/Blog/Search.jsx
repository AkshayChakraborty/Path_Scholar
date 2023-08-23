import React, { useState } from 'react'
import { useSearch } from '../../../Contex/Search';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Search = () => {
  const [values, setValues] = useSearch();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    // e.preventDefault();
    setLoading(false);
    try {
      const { data } = await axios.get(`https://restapinodejs.onrender.com/api/search/${values.keyword}`);
      setValues({ ...values, results: data });
      navigate("/search");
    } catch (error) {
      console.log(error);
      setLoading(true);
    }
  }

  return (
    <div>
      <div className="sidebar-item search-form">
        <form >
          <input
            className="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={values.keyword}
            onChange={(e) => setValues({ ...values, keyword: e.target.value })}
          />
          {/* <button type="submit"><i className="icofont-search"></i></button> */}
          {loading ? (
            <>
              <div className="text-center">
                <div className="text-center text-lg-start ">
                  <button
                    onClick={handleSubmit}
                    type="button"
                    className="btn btn-primary btn-lg"

                  >
                    <i className="icofont-search"></i>
                  </button>

                </div>
              </div>
            </>
          ) : (
            <>
              <div className="text-center">
                <div className="text-center text-lg-start ">
                  <button
                    class="btn btn-primary btn-lg"
                    type="button"
                    disabled
                    style={{
                      paddingLeft: "2.5rem",
                      paddingRight: "2.5rem",
                    }}
                  >
                    <span
                      class="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Loading...
                  </button>

                </div>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  )
}

export default Search