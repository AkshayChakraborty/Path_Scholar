import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { axiosInstance } from "../../Api/AxiosIntance";
import axios from "axios";


export const FetchBlogRecentSlice=createAsyncThunk('fetchrecent',async()=>{
    try{
        const res=await axios.get('https://restapinodejs.onrender.com/api/letest-post')
        return res?.data
    } catch(error){
        console.log(error);
    }
})

const initialState={
    blog_recent:[],
    status:'success'
}

//slice
export const BlogRecentSlice=createSlice({
    name:'blogdata',
    initialState,
    reducer:{

    },
     extraReducers:{
        [FetchBlogRecentSlice.pending]:(state)=>{
            state.status='loading....'
            state.blog_recent=null
        },
        [FetchBlogRecentSlice.fulfilled]:(state,{payload})=>{
            state.status='success'
            state.blog_recent=payload
        },
        [FetchBlogRecentSlice.rejected]:(state)=>{
            state.status='try'
        }
     }
})