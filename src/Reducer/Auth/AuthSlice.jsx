import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { toast } from "react-toastify"


const initialState={
    loading: false,
  user: {}, // for user object
  redirectTo: null,
  Logouttoggle: false,
  userName: false,
  redirectReg: null
}

export const registerUser=createAsyncThunk('register', async(user)=>{
  try{
    const res=await axios.post(`https://restfullapinodejs1.onrender.com/api/register`,user)
    return res?.data
  } catch(error){
    console.log(error);
  }
})

export const loginRequest=createAsyncThunk('login', async(user)=>{
  try {
    const ress=await axios.post(`https://restfullapinodejs1.onrender.com/api/login`, user)
    return ress?.data
  } catch(error){
    console.log(error);
  }
})

//slice

export const AuthSlice=createSlice({
  name:'user',
  initialState,
  reducers:{


    check_token: (state, { payload }) => {
      let token = localStorage.getItem("token");
      if (token !== null && token !== undefined) {
        state.Logouttoggle = true;
      }
    },

    logout:(state)=>{
      localStorage.removeItem("name")
      localStorage.removeItem("email")
      localStorage.removeItem("mobile")
      localStorage.removeItem("token")
      state.Logouttoggle=false
    },

    RegLog:(state)=>{
      localStorage.removeItem("name")
      localStorage.removeItem("email")
      localStorage.removeItem("mobile")
      state.Logouttoggle=false
    },

    redirectToo:(state,{payload})=>{
      state.redirectTo=payload
    },

    redirectTo_Register:(state,[payload])=>{
      state.redirectReg=payload
    }

  },

  extraReducers: {
    [registerUser.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [registerUser.fulfilled]: (state, { payload }) => {

      if (payload?.success === true) {
        localStorage.setItem("name", payload.data.name)
        localStorage.setItem("email", payload.data.email)
        localStorage.setItem("mobile",payload.data.mobile)
        state.redirectReg = "/login"
        
        //toast(payload?.token)
        toast(`hi ${payload?.data?.name} Register successfully`)
      }

    },
    [registerUser.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },

    //login
    [loginRequest.pending]: (state, action) => {
      state.loading = true;
    },
    [loginRequest.fulfilled]: (state, { payload }) => {
      if (payload?.status == 200) {
        localStorage.setItem("token", payload?.token);
        localStorage.setItem("name", payload?.user.name);
        localStorage.setItem("email", payload?.user.email)
        localStorage.setItem("mobile",payload?.user.mobile)
        state.Logouttoggle = true
        state.redirectTo = "/"
        toast(payload?.message)
      }

    },
    [loginRequest.rejected]: (state, action) => {
      state.loading = false;

    },
  },


})

export const {check_token, redirectToo, logout, redirectTo_Register,RegLog}=AuthSlice.actions