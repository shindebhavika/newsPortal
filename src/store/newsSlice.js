// src/store/newsSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchArticles } from '../utils/api';

export const getArticles = createAsyncThunk(
  'news/getArticles',
  async ({ category, page, query }) => {
    const data = await fetchArticles(category, page, query);
    if(data){
      return data
    }else{
      return  [];
    }
    
  }
);

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    articles: [],
    status: 'idle',
    error: null,
    category: '',
    page: 1,
  },
  reducers: {
    setCategory(state, action) {
      state.category = action.payload;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getArticles.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getArticles.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.articles = action.payload.articles;
      })
      .addCase(getArticles.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setCategory, setPage } = newsSlice.actions;
export default newsSlice.reducer;
