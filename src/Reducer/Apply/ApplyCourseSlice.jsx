import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { toast } from "react-toastify"
 
const initialState = {
    apply_course:[],
    status: 'success'
}
export const FetchApply = createAsyncThunk('apply', async (data) => {
    try {
        const response = await axios.post(`https://restapinodejs.onrender.com/api/course/apply/${data.course}`, data)
        const responseData = {
            resp: response?.data,
            coursename: data.course_name
        }
        return responseData
    } catch (e) {
        return e.response.data
    }
})
export const ApplyCourseSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {},
    extraReducers: {
        [FetchApply.pending]: (state) => {
            state.apply_course=null
            state.state = 'loading'
        },
        [FetchApply.fulfilled]: (state, { payload }) => {
            state.status='success'
            state.apply_course=payload
            toast.success(`Apply for ${payload?.coursename} course is successful`)
        },
        [FetchApply.rejected]: (state) => {
            state.status = 'failed'
        }
    }
})