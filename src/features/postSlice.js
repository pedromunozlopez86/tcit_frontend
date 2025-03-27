import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get(`${API_URL}/posts`);
  return response.data;
});

export const addPost = createAsyncThunk("posts/addPost", async (post) => {
  const response = await axios.post(`${API_URL}/posts`, post);
  return response.data;
});

export const deletePost = createAsyncThunk("posts/deletePost", async (id) => {
  await axios.delete(`${API_URL}/posts/${id}`);
  return id;
});

const postsSlice = createSlice({
  name: "posts",
  initialState: { posts: [], status: "idle" },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.posts.push(action.payload);
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.posts = state.posts.filter((post) => post.id !== action.payload);
      });
  },
});

export default postsSlice.reducer;

