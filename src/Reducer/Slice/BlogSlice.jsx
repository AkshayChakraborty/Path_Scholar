import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { axiosInstance } from "../../Api/AxiosIntance";
import axios from "axios";


export const FetchBlogSlice=createAsyncThunk('fetchblog',async()=>{
    try{
        const res=await axios.get('https://restapinodejs.onrender.com/api/allBlog')
        return res?.data?.data
    } catch(error){
        console.log(error);
    }
})

const initialState={
    blog_data:[],
    status:'success'
}

//slice
export const BlogSlice=createSlice({
    name:'blogdata',
    initialState,
    reducer:{

    },
     extraReducers:{
        [FetchBlogSlice.pending]:(state)=>{
            state.status='loading....'
            state.blog_data=null
        },
        [FetchBlogSlice.fulfilled]:(state,{payload})=>{
            state.status='success'
            state.blog_data=payload
        },
        [FetchBlogSlice.rejected]:(state)=>{
            state.status='try'
        }
     }
})