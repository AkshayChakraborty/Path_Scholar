import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { toast } from "react-toastify"

const initialState = {
    status: 'idle'
}
export const SubmitMessage = createAsyncThunk('Post/Contact', async (data) => {
    try {
        const response = await axios.post('https://restapinodejs.onrender.com/api/contact/create', data)
        return response?.data
    } catch (e) {
        return e.response?.data
    }
})
export const ContactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {},
    extraReducers: {
        [SubmitMessage.pending]: (state) => {
            state.state = 'submitting'
        },
        [SubmitMessage.fulfilled]: (state, { payload }) => {
            if (payload.success) {
                state.status = 'success'
                toast.success(payload.message)
            } else {
                state.status = 'failed'
                toast.error(payload.message)
            }
        },
        [SubmitMessage.rejected]: (state) => {
            state.status = 'failed'
        }
    }
})