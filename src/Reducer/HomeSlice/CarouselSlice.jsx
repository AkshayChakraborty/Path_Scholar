import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { axiosInstance } from "../../Api/AxiosIntance";
import axios from "axios";


export const FetchCarouselSlice=createAsyncThunk('fetchhomecarousel',async()=>{
    try{
        const res=await axios.get('https://restapinodejs.onrender.com/api/banner')
        return res
    } catch(error){
        console.log(error);
    }
})

const initialState={
    home_carousel:[],
    status:'success'
}

//slice
export const CarouselSlice=createSlice({
    name:'homecarousel',
    initialState,
    reducer:{

    },
     extraReducers:{
        [FetchCarouselSlice.pending]:(state)=>{
            state.status='loading....'
            state.home_carousel=null
        },
        [FetchCarouselSlice.fulfilled]:(state,{payload})=>{
            state.status='success'
            state.home_carousel=payload
        },
        [FetchCarouselSlice.rejected]:(state)=>{
            state.status='try'
        }
     }
})