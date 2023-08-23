import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { axiosInstance } from "../../Api/AxiosIntance";
import axios from "axios";
// import { axiosInstance } from "../../Api/AxiosIntance";


export const FetchBlogCategorieSlice=createAsyncThunk('fetchblogcatagory',async()=>{
    try{
        const res=await axios.get('https://restapinodejs.onrender.com/api/showallcategory');
        return res?.data
    } catch(error){
        console.log(error);
    }
})

const initialState={
    blog_categorie:[],
    status:'success'
}

//slice
export const BlogCategorieSlice=createSlice({
    name:'blogdatacatagory',
    initialState,
    reducer:{

    },
     extraReducers:{
        [FetchBlogCategorieSlice.pending]:(state)=>{
            state.status='loading....'
            state.blog_categorie=null
        },
        [FetchBlogCategorieSlice.fulfilled]:(state,{payload})=>{
            state.status='success'
            state.blog_categorie=payload
        },
        [FetchBlogCategorieSlice.rejected]:(state)=>{
            state.status='try'
        }
     }
})