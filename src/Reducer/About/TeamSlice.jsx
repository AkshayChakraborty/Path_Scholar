import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { axiosInstance } from "../../Api/AxiosIntance";
import axios from "axios";


export const FetchTeamSlice=createAsyncThunk('fetchaboutteam',async()=>{
    try{
        const res=await axios.get('https://restapinodejs.onrender.com/api/team')
        return res
    } catch(error){
        console.log(error);
    }
})

const initialState={
    about_team:[],
    status:'success'
}

//slice
export const TeamSlice=createSlice({
    name:'aboutteam',
    initialState,
    reducer:{

    },
     extraReducers:{
        [FetchTeamSlice.pending]:(state)=>{
            state.status='loading....'
            state.about_team=null
        },
        [FetchTeamSlice.fulfilled]:(state,{payload})=>{
            state.status='success'
            state.about_team=payload
        },
        [FetchTeamSlice.rejected]:(state)=>{
            state.status='try'
        }
     }
})