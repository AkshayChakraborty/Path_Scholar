import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const FetchCategoryDetails=createAsyncThunk('fetchcategorydetails', async(id)=>{
    try{
        const result5=await axios.get(`https://restapinodejs.onrender.com/api/category/post/${id}`);
        return result5?.data?.data
    }catch(error){
        console.log(error);
    }
})

const initialState={
    categoryDetails_data:[],
    status:"success"
}


export const CatDetailsSlice=createSlice({
    name:"details",
    initialState,
    reducer:{

    },

    extraReducers:{
        [FetchCategoryDetails.pending]:(state)=>{
            state.status='loading......'
            state.categoryDetails_data=null
        },
        [FetchCategoryDetails.fulfilled]:(state,{payload})=>{
            state.status='success'
            state.categoryDetails_data=payload
        },
        [FetchCategoryDetails.rejected]:(state)=>{
            state.status='Try again'
        }
    }
})