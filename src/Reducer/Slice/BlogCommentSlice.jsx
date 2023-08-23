import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
// import AxiosInstance from "../Axios/AxiosInstance"
import { toast } from "react-toastify"

const initialState = {
    comments: [],
    commentStatus: 'idle',
    commentSubmitStatus:'idle'
}

export const PostComment = createAsyncThunk('Comment/Post', async (data) => {
    try {
        //console.log(data.blog);
        const response = await axios.post(`https://restapinodejs.onrender.com/api/blog/${data.blog}/comment/create`, data)
        //console.log(response?.data);
        return response?.data
    } catch (e) {
        console.log(e.response?.data);
        return e.response?.data
    }
})

export const GetComments = createAsyncThunk('Comments', async (postId) => {
    try {
        const response = await axios.get(`https://restapinodejs.onrender.com/api/comment/${postId}`)
        return response?.data
    } catch (e) {
        return e.response.data
    }
})
export const CommentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {},
    extraReducers: {
        [PostComment.pending]: (state) => {
            state.commentSubmitStatus = 'loading'
        },
        [PostComment.fulfilled]: (state, { payload }) => {
            // if (payload.success) {
                toast.success(payload.message)
                state.commentSubmitStatus = 'success'
            // } else {
            //     toast.error(payload.msg)
            //     state.commentSubmitStatus = 'failed'
            // }
        },
        [PostComment.rejected]: (state) => {
            state.commentSubmitStatus = 'failed'
        },
        [GetComments.pending]: (state) => {
            state.commentStatus = 'loading'
            state.comments = null
        },
        [GetComments.fulfilled]: (state, { payload }) => {
            if (payload.status === 'success') {
                state.commentStatus = 'success'
                state.comments = payload?.post.comment.comments
            }
        },
        [GetComments.rejected]: (state) => {
            state.commentStatus = 'failed'
        }
    }
})