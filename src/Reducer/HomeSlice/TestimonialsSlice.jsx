import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { axiosInstance } from "../../Api/AxiosIntance";
import axios from "axios";


export const FetchTestimonialsSlice=createAsyncThunk('fetchhometestimonials',async()=>{
    try{
        const res=await axios.get('https://restapinodejs.onrender.com/api/testimonial')
        return res
    } catch(error){
        console.log(error);
    }
})

const initialState={
    home_testimonials:[],
    status:'success'
}

//slice
export const TestimonialsSlice=createSlice({
    name:'hometestimonials',
    initialState,
    reducer:{

    },
     extraReducers:{
        [FetchTestimonialsSlice.pending]:(state)=>{
            state.status='loading....'
            state.home_testimonials=null
        },
        [FetchTestimonialsSlice.fulfilled]:(state,{payload})=>{
            state.status='success'
            state.home_testimonials=payload
        },
        [FetchTestimonialsSlice.rejected]:(state)=>{
            state.status='try'
        }
     }
})