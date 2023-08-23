import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { axiosInstance } from "../../Api/AxiosIntance";
import axios from "axios";


export const FetchBlogDetails=createAsyncThunk('fetchdetails',async(id)=>{
    try{
        const res=await axios.get(`https://restapinodejs.onrender.com/api/blogdetails/${id}`)
        return res?.data?.data
    } catch(error){
        console.log(error);
    }
})



const initialState={
    blog_details:[],
    status:'success'
}

//slice
export const BlogDetailsSlice=createSlice({
    name:'blogdata',
    initialState,
    reducer:{

    },
     extraReducers:{
        [FetchBlogDetails.pending]:(state)=>{
            state.status='loading....'
            state.blog_details=null
        },
        [FetchBlogDetails.fulfilled]:(state,{payload})=>{
            state.status='success'
            state.blog_details=payload
        },
        [FetchBlogDetails.rejected]:(state)=>{
            state.status='try'
        }
     }
})