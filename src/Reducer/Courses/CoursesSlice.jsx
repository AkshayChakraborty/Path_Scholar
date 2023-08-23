import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { axiosInstance } from "../../Api/AxiosIntance";
import axios from "axios";


export const FetchCoursesSlice=createAsyncThunk('fetchcourse',async()=>{
    try{
        const res=await axios.get('https://restapinodejs.onrender.com/api/course')
        return res
    } catch(error){
        console.log(error);
    }
})

const initialState={
    course_item:[],
    status:'success'
}

//slice
export const CoursesSlice=createSlice({
    name:'course',
    initialState,
    reducer:{

    },
     extraReducers:{
        [FetchCoursesSlice.pending]:(state)=>{
            state.status='loading....'
            state.course_item=null
        },
        [FetchCoursesSlice.fulfilled]:(state,{payload})=>{
            state.status='success'
            state.course_item=payload
        },
        [FetchCoursesSlice.rejected]:(state)=>{
            state.status='try'
        }
     }
})