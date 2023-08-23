import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { axiosInstance } from "../../Api/AxiosIntance";
import axios from "axios";


export const FetchServicesSlice=createAsyncThunk('fetchhomeservice',async()=>{
    try{
        const res=await axios.get('https://restapinodejs.onrender.com/api/service')
        return res
    } catch(error){
        console.log(error);
    }
})

const initialState={
    home_service:[],
    status:'success'
}

//slice
export const ServicesSlice=createSlice({
    name:'homeservice',
    initialState,
    reducer:{

    },
     extraReducers:{
        [FetchServicesSlice.pending]:(state)=>{
            state.status='loading....'
            state.home_service=null
        },
        [FetchServicesSlice.fulfilled]:(state,{payload})=>{
            state.status='success'
            state.home_service=payload
        },
        [FetchServicesSlice.rejected]:(state)=>{
            state.status='try'
        }
     }
})